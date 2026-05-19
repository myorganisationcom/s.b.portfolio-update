/**
 * AI Analysis Service — OpenRouter backend
 * Uses OpenAI-compatible API at https://openrouter.ai/api/v1
 * No extra npm package needed — plain fetch
 */

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_MODEL   = process.env.OPENROUTER_MODEL || 'deepseek/deepseek-v4-flash:free';
const OPENROUTER_URL     = 'https://openrouter.ai/api/v1/chat/completions';

// Fallback chain — tried in order if previous is rate-limited
const MODEL_CHAIN = [
  OPENROUTER_MODEL,
  'google/gemma-4-31b-it:free',
  'nvidia/nemotron-3-super-120b-a12b:free',
  'qwen/qwen3-next-80b-a3b-instruct:free',
  'liquid/lfm-2.5-1.2b-instruct:free',
];

// ─── Stage 3 question map ─────────────────────────────────────────────────────
const DIAG_QUESTIONS = [
  { id: 'q1', text: 'Business performance review', options: ['Revenue has been inconsistent', 'Growth has become stagnant', 'Business is growing slower than expected', 'Growth is strong but operations feel chaotic'] },
  { id: 'q2', text: 'New business acquisition', options: ['Referrals and word of mouth', 'Social media marketing', 'Repeat customers', 'No predictable acquisition channel'] },
  { id: 'q3', text: 'Founder involvement in operations', options: ['I handle almost everything personally', 'I manage most critical decisions', 'Some operations are delegated', 'The team manages most operations independently'] },
  { id: 'q4', text: 'Sales process effectiveness', options: ['Leads rarely convert consistently', 'Sales conversations lack structure', 'Conversion rates are unpredictable', 'Sales performance is stable'] },
  { id: 'q5', text: 'Operational systems maturity', options: ['Most processes depend on manual management', 'We use spreadsheets and WhatsApp heavily', 'We have systems but they are disconnected', 'Systems are structured and scalable'] },
  { id: 'q6', text: 'Brand positioning clarity', options: ['We struggle to differentiate from competitors', 'We know our value internally but messaging is weak', 'Branding exists but conversion is inconsistent', 'Our positioning is strong and clearly understood'] },
  { id: 'q7', text: 'Primary 12-month goal', options: ['Increase revenue and client acquisition', 'Build scalable systems and operations', 'Gain strategic clarity and direction', 'Build a stronger market presence and brand authority'] },
];

function buildDiagText(diagnosisData) {
  const d = typeof diagnosisData === 'string' ? JSON.parse(diagnosisData) : (diagnosisData || {});
  const lines = DIAG_QUESTIONS.map(q => {
    const ans = d[q.id] !== undefined ? q.options[d[q.id]] : 'Not answered';
    return `${q.text}: ${ans}`;
  });
  if (d.rating_confidence !== undefined) lines.push(`Confidence in Strategy: ${d.rating_confidence}/10`);
  if (d.rating_stress     !== undefined) lines.push(`Stress Level: ${d.rating_stress}/10`);
  if (d.rating_scaling    !== undefined) lines.push(`Scaling Readiness: ${d.rating_scaling}/10`);
  return lines.join('\n');
}

function buildAuditText(auditData) {
  const a = typeof auditData === 'string' ? JSON.parse(auditData) : (auditData || {});
  return [
    `Business Type: ${a.businessType || 'N/A'}`,
    `Industry: ${a.industry || 'N/A'}`,
    `Description: ${a.description || 'N/A'}`,
    `Stage: ${a.stage || 'N/A'}`,
    `Operating Since: ${a.operatingSince || 'N/A'}`,
    `Team Size: ${a.teamSize || 'N/A'}`,
    `Current Revenue: ${a.currentRevenue || 'N/A'}`,
    `Target Revenue (12mo): ${a.targetRevenue || 'N/A'}`,
    `Growth Goals: ${(a.growthGoals || []).join(', ') || 'N/A'}`,
    `Challenges: ${(a.challenges || []).join(', ') || 'N/A'}`,
    `Customer Sources: ${(a.customerSources || []).join(', ') || 'N/A'}`,
    `CRM/Systems: ${a.crmUsage || 'N/A'}`,
    `Sales Process: ${a.salesProcess || 'N/A'}`,
    `Founder Dependency: ${a.founderDependency || 'N/A'}`,
    `Operational Bottleneck: ${a.operationalBottleneck || 'N/A'}`,
    `Why Not Growing: ${a.whyNotGrowing || 'N/A'}`,
  ].join('\n');
}

// ─── Lead Scoring Formula ─────────────────────────────────────────────────────
export function computeAuditScore(auditData, diagnosisData) {
  const a = typeof auditData     === 'string' ? JSON.parse(auditData)     : (auditData     || {});
  const d = typeof diagnosisData === 'string' ? JSON.parse(diagnosisData) : (diagnosisData || {});

  let score = 30;

  // Revenue tier (20 pts)
  const revMap = { 'Pre-Revenue': 0, 'Below ₹1 Lakh': 4, '₹1L – ₹5L': 8, '₹5L – ₹20L': 13, '₹20L – ₹50L': 17, '₹50L+': 20 };
  score += revMap[a.currentRevenue] ?? 5;

  // Business stage (15 pts)
  const stageMap = { 'Idea Stage': 2, 'Early Startup': 5, 'Revenue Generating': 9, 'Growing Business': 12, 'Scaling Business': 15, 'Established Company': 15 };
  score += stageMap[a.stage] ?? 5;

  // Team size (10 pts)
  const teamMap = { 'Solo Founder': 1, '2 – 5 Employees': 3, '6 – 20 Employees': 6, '21 – 50 Employees': 8, '50+ Employees': 10 };
  score += teamMap[a.teamSize] ?? 3;

  // Founder dependency inverse (15 pts)
  const depMap = { 'Business depends fully on me': 0, 'Team handles some operations': 5, 'Mostly delegated': 10, 'Runs independently': 15 };
  score += depMap[a.founderDependency] ?? 3;

  // Systems maturity (15 pts)
  const sysMap = { 'No structured systems': 0, 'Basic spreadsheets only': 4, 'Partially implemented': 9, 'Fully implemented': 15 };
  score += sysMap[a.crmUsage] ?? 4;

  // Growth goals count (10 pts)
  score += Math.min(10, (a.growthGoals || []).length * 2);

  // Confidence rating from Stage 3 (15 pts)
  score += Math.round((Number(d.rating_confidence || 5) / 10) * 15);

  // Bottleneck
  const goalBottleneckMap = {
    'Increase revenue and client acquisition':           'Lead Generation & Revenue Growth',
    'Build scalable systems and operations':             'Operational Systems & Scaling',
    'Gain strategic clarity and direction':              'Strategic Clarity & Direction',
    'Build a stronger market presence and brand authority': 'Brand Authority & Trust',
  };
  const q7Ans    = d.q7 !== undefined ? DIAG_QUESTIONS[6].options[d.q7] : null;
  const bottleneck = (a.challenges?.[0]) || goalBottleneckMap[q7Ans] || 'Lead Generation & Revenue Growth';
  const quality    = score >= 70 ? 'Hot' : score >= 50 ? 'Warm' : 'Nurture';

  return {
    leadScore:   Math.max(5, Math.min(95, score)),
    leadQuality: quality,
    bottleneck,
  };
}

// ─── Rule-based fallback (detailed version) ───────────────────────────────────
function ruleBasedAnalysis(auditData, diagnosisData) {
  const { leadScore, leadQuality, bottleneck } = computeAuditScore(auditData, diagnosisData);
  const a = typeof auditData === 'string' ? JSON.parse(auditData) : (auditData || {});
  const d = typeof diagnosisData === 'string' ? JSON.parse(diagnosisData) : (diagnosisData || {});
  const s = leadScore;
  const org = a.organisation || 'the business';

  // Generate richer content
  const challenges = (a.challenges || []).join(', ') || 'operational challenges';
  const goals = (a.growthGoals || []).join(', ') || 'business growth';

  return {
    executiveSummary: `Based on the comprehensive 3-stage business audit, ${org} is currently at the ${a.stage || 'growth'} stage with ${a.teamSize || 'a founding team'}, generating ${a.currentRevenue || 'early-stage'} in monthly revenue. The business demonstrates ${s >= 70 ? 'strong fundamentals with key optimization opportunities' : s >= 50 ? 'moderate growth potential with significant structural gaps that need addressing' : 'critical vulnerabilities that require immediate intervention before scaling efforts can be effective'}. The primary bottleneck identified is ${bottleneck}, which is directly constraining the path toward the target of ${a.targetRevenue || 'higher'} monthly revenue. A systematic approach addressing ${challenges} will be critical for sustainable growth over the next 12 months.`,

    auditScore: s,

    categoryScores: {
      revenue:    Math.max(10, Math.min(100, s + 5)),
      clients:    Math.max(10, Math.min(100, s - 5)),
      operations: Math.max(10, Math.min(100, s - 10)),
      sales:      Math.max(10, Math.min(100, s)),
      brand:      Math.max(10, Math.min(100, s - 8)),
    },

    bottleneck,

    keyFindings: [
      `${org} is in the ${a.stage || 'growth'} phase with ${a.teamSize || 'limited resources'}, creating both opportunity and constraint for rapid scaling. The current team structure ${a.teamSize === 'Solo Founder' ? 'creates a single point of failure that limits growth capacity' : 'provides a foundation but requires strategic role allocation to optimize output'}.`,
      `Customer acquisition is primarily through ${(a.customerSources || ['referrals'])[0] || 'referrals'}, indicating a ${(a.customerSources || []).length <= 2 ? 'dangerously narrow channel dependency that creates revenue vulnerability' : 'multi-channel approach that needs optimization for cost-efficiency'}. Diversifying acquisition channels is critical to reduce risk and achieve predictable lead flow.`,
      `The operational systems are rated as "${a.crmUsage || 'basic'}", which ${a.crmUsage === 'No structured systems' || a.crmUsage === 'Basic spreadsheets only' ? 'severely limits scalability and creates data silos that prevent informed decision-making' : 'provides a foundation but lacks the integration needed for seamless scaling'}. The sales process is "${a.salesProcess || 'unstructured'}", directly impacting conversion rates and revenue predictability.`,
      `Founder dependency level is "${a.founderDependency || 'high'}" which ${a.founderDependency === 'Business depends fully on me' ? 'represents the single biggest risk to business continuity and growth' : 'requires systematic delegation planning to free up strategic bandwidth'}. Without addressing this, the business cannot scale beyond the founder\'s personal capacity.`,
      `The gap between current revenue (${a.currentRevenue || 'early stage'}) and target revenue (${a.targetRevenue || 'growth targets'}) requires a ${s >= 70 ? '2-3x improvement which is achievable with focused execution' : s >= 50 ? '3-5x improvement requiring significant structural changes' : 'fundamental transformation in business model and operations'}. The identified challenges of ${challenges} must be addressed systematically.`,
      `${a.whyNotGrowing ? `The founder\'s own assessment of growth barriers ("${a.whyNotGrowing.substring(0, 120)}") aligns with the audit findings and suggests self-awareness that can be leveraged for faster implementation of recommended changes.` : 'The business shows characteristics typical of companies at this stage, where tactical execution often overshadows strategic planning, leading to growth plateaus.'}`,
    ],

    recommendations: {
      immediate: [
        `Conduct a detailed customer profitability analysis to identify the top 20% of clients generating 80% of revenue. Focus all acquisition efforts on this profitable segment for immediate revenue impact.`,
        `Set up a basic CRM system (HubSpot Free or Zoho CRM) within this week. Begin tracking every lead, conversation, and conversion to build data-driven decision-making capability.`,
        `Document your current sales process as a step-by-step playbook. Identify the exact stage where most leads drop off and implement a targeted intervention for that specific bottleneck.`,
      ],
      day30: [
        `Build a structured lead generation system with at least 2 predictable channels. If currently relying on referrals, add one digital channel (Google Ads for high-intent keywords or LinkedIn outreach for B2B services) with clear tracking and budget allocation.`,
        `Create Standard Operating Procedures (SOPs) for your top 3 revenue-generating processes. Document every step so any team member can execute them with 90% accuracy without founder supervision.`,
        `Implement weekly business scorecards tracking 5 key metrics: new leads generated, sales conversations completed, conversion rate, revenue collected, and customer satisfaction score.`,
        `Review pricing strategy using value-based pricing principles. Most businesses at the ${a.stage || 'growth'} stage are undercharging by 20-40%. Conduct competitive analysis and implement strategic price adjustments.`,
      ],
      day90: [
        `Hire or assign a dedicated person for the founder's most time-consuming operational task. The goal is to free up 10+ hours per week of founder time for strategic activities that directly drive revenue.`,
        `Launch a consistent content marketing or outreach campaign with weekly cadence. Build authority in your niche through thought leadership that positions ${org} as the go-to expert in ${a.industry || 'your industry'}.`,
        `Implement automated follow-up sequences for leads at every stage of the sales funnel. Set up email and WhatsApp automation to ensure no lead falls through the cracks.`,
        `Conduct quarterly business reviews with team members covering financial performance, operational efficiency, customer feedback, and strategic priorities for the next quarter.`,
      ],
      year1: [
        `Build a management layer that allows the business to operate profitably without daily founder involvement. Target: founder should be able to take a 2-week vacation without revenue declining.`,
        `Develop a predictable, scalable lead generation engine producing minimum 50 qualified leads per month through a combination of organic content, paid acquisition, and referral systems.`,
        `Achieve target monthly revenue of ${a.targetRevenue || 'your growth goals'} through systematic execution of growth strategies, team development, and operational excellence.`,
        `Create a comprehensive brand positioning strategy that clearly differentiates ${org} from competitors and commands premium pricing in the ${a.industry || 'target'} market.`,
        `Implement integrated business systems (CRM + Project Management + Finance) that provide real-time visibility into all critical business metrics for data-driven growth decisions.`,
      ],
    },

    conclusion: `${org} has the foundational elements needed for significant growth over the next 12 months. The audit reveals that the primary constraint is ${bottleneck}, and addressing this through the phased roadmap outlined above can unlock the path from ${a.currentRevenue || 'current revenue'} to ${a.targetRevenue || 'target revenue'} monthly. The key success factor will be the founder's willingness to systematize operations, delegate effectively, and shift from a tactical operator role to a strategic leadership position. With disciplined execution of these recommendations, the business is positioned to achieve sustainable, scalable growth that is not dependent on any single individual or channel.`,

    source: 'rule-based',
  };
}

// ─── OpenRouter API Call (with model fallback chain) ─────────────────────────
async function callOpenRouter(prompt) {
  let lastError;

  for (const model of MODEL_CHAIN) {
    try {
      const response = await fetch(OPENROUTER_URL, {
        method:  'POST',
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type':  'application/json',
          'HTTP-Referer':  'https://sarvanu.com',
          'X-Title':       'Sarvanu Business Audit',
        },
        body: JSON.stringify({
          model,
          messages: [
            {
              role:    'system',
              content: 'You are a senior business consultant at Sarvanu, a premium Indian business growth advisory firm. You create detailed, insightful audit reports that make business owners feel confident about working with Sarvanu. Always respond with valid JSON only. No markdown, no extra text, no code fences.',
            },
            { role: 'user', content: prompt },
          ],
          temperature: 0.5,
          max_tokens:  4000,
        }),
      });

      if (response.status === 429 || response.status === 503) {
        const err = await response.text();
        console.warn(`[AI] Model ${model} rate-limited, trying next...`);
        lastError = new Error(`${model} returned ${response.status}: ${err}`);
        continue; // try next model
      }

      if (!response.ok) {
        const err = await response.text();
        throw new Error(`OpenRouter ${response.status}: ${err}`);
      }

      const data    = await response.json();
      const content = data.choices?.[0]?.message?.content || '';

      // Strip markdown code fences some models add
      const clean = content.replace(/```(?:json)?/g, '').replace(/```/g, '').trim();

      // Extract JSON if model wraps it in text
      const jsonMatch = clean.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error('No valid JSON in model response');

      const parsed = JSON.parse(jsonMatch[0]);
      console.log(`[AI] Success with model: ${model}`);
      return parsed;

    } catch (err) {
      lastError = err;
      if (!err.message.includes('rate') && !err.message.includes('429')) {
        throw err; // non-rate-limit errors bubble up immediately
      }
      console.warn(`[AI] Model ${model} failed:`, err.message);
    }
  }

  throw lastError || new Error('All OpenRouter models exhausted');
}


// ─── Main Export ──────────────────────────────────────────────────────────────
export async function generateBusinessAnalysis(contactData, auditData, diagnosisData) {
  if (!OPENROUTER_API_KEY) {
    console.warn('[AI] No OPENROUTER_API_KEY — using rule-based fallback.');
    return ruleBasedAnalysis(auditData, diagnosisData);
  }

  const { leadScore, bottleneck } = computeAuditScore(auditData, diagnosisData);

  const prompt = `A business owner has completed a comprehensive 3-stage business audit. Analyze their complete profile and return a detailed, professional JSON business audit report. The report must feel like it was written by a senior McKinsey/Bain consultant specifically for this business.

=== BUSINESS OWNER ===
Name: ${contactData.name || 'N/A'}
Designation: ${contactData.designation || 'Business Owner'}
Organisation: ${contactData.organisation || 'Their Business'}
City: ${contactData.city || 'India'}

=== STAGE 2 - BUSINESS AUDIT ===
${buildAuditText(auditData)}

=== STAGE 3 - DIAGNOSIS ===
${buildDiagText(diagnosisData)}

=== SCORING ===
Calculated Score: ${leadScore}/100
Primary Bottleneck: ${bottleneck}

=== CRITICAL INSTRUCTIONS ===
1. Be EXTREMELY SPECIFIC to their answers - reference their exact revenue (${(typeof auditData === 'string' ? JSON.parse(auditData) : auditData)?.currentRevenue || 'their revenue'}), team size (${(typeof auditData === 'string' ? JSON.parse(auditData) : auditData)?.teamSize || 'their team'}), and actual challenges
2. Use analytical consulting language (McKinsey/Bain style) - professional but not generic or motivational
3. Reference Indian business context where relevant (INR amounts, Indian market realities, GST, digital India)
4. Every recommendation must be practical, actionable, and specific to THIS business
5. Write executiveSummary as 4-5 detailed sentences (minimum 80 words)
6. Each keyFinding should be 2-3 sentences (minimum 40 words each)
7. Each recommendation should be a detailed paragraph (minimum 30 words each)
8. The conclusion should be 4-5 impactful sentences (minimum 80 words)
9. Provide AT LEAST 6 key findings and 3 recommendations per phase

Return ONLY this JSON (no markdown, no code fences, no extra text):
{
  "executiveSummary": "4-5 detailed sentences specific to THIS business (minimum 80 words)",
  "auditScore": ${leadScore},
  "categoryScores": {
    "revenue": <0-100>,
    "clients": <0-100>,
    "operations": <0-100>,
    "sales": <0-100>,
    "brand": <0-100>
  },
  "bottleneck": "${bottleneck}",
  "keyFindings": ["detailed finding 1 (2-3 sentences)", "finding 2", "finding 3", "finding 4", "finding 5", "finding 6"],
  "recommendations": {
    "immediate": ["detailed action 1", "action 2", "action 3"],
    "day30": ["detailed action 1", "action 2", "action 3", "action 4"],
    "day90": ["detailed action 1", "action 2", "action 3", "action 4"],
    "year1": ["detailed action 1", "action 2", "action 3", "action 4", "action 5"]
  },
  "conclusion": "4-5 impactful analytical sentences (minimum 80 words)"
}`;

  try {
    const result = await callOpenRouter(prompt);
    console.log(`[AI] OpenRouter (${OPENROUTER_MODEL}) analysis complete.`);
    return { ...result, source: 'openrouter' };
  } catch (err) {
    console.error('[AI] OpenRouter failed, using rule-based fallback:', err.message);
    return ruleBasedAnalysis(auditData, diagnosisData);
  }
}
