/**
 * Case Study Repository — Unified data layer
 *
 * When DATABASE_URL is set  → queries the PostgreSQL "case_studies" table through Prisma.
 * When it is NOT set             → falls back to static data for dev/preview.
 *
 * External DB schema (Prisma @@map("case_studies")):
 *   id, title, seo_slug, status, industry, duration, client_name,
 *   intro_text, challenges, solutions, results, quote_text, quote_author,
 *   featured_image, tags, views, created_at, updated_at
 */

import { getPrisma, hasDatabase } from '../services/prisma.js';

/* ─── helpers ─────────────────────────────────────────── */

/**
 * Safely parse a JSON string, returning fallback on failure.
 */
function parseJSON(value, fallback) {
  if (!value) return fallback;
  if (Array.isArray(value)) return value;
  try {
    const parsed = JSON.parse(value);
    return parsed ?? fallback;
  } catch { return fallback; }
}

/**
 * Parse tags — could be JSON array string, comma-separated, or already an array.
 */
function parseTags(tags) {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags;
  try {
    const parsed = JSON.parse(tags);
    if (Array.isArray(parsed)) return parsed;
  } catch { /* not JSON */ }
  return String(tags).split(',').map(t => t.trim()).filter(Boolean);
}

/**
 * Convert a raw DB row into the normalised CaseStudy shape
 * that the frontend components expect.
 */
function normaliseRow(row) {
  return {
    id:            Number(row.id),
    slug:          row.seoSlug,
    title:         row.title,
    status:        row.status,
    industry:      row.industry,
    duration:      row.duration,
    clientName:    row.clientName,
    introText:     row.introText,
    challenges:    parseJSON(row.challenges, []),
    solutions:     parseJSON(row.solutions, []),
    results:       parseJSON(row.results, []),
    quoteText:     row.quoteText || '',
    quoteAuthor:   row.quoteAuthor || '',
    featuredImage: row.featuredImage || '',
    tags:          parseTags(row.tags),
    views:         Number(row.views ?? 0),
    createdAt:     row.createdAt,
    updatedAt:     row.updatedAt,
  };
}

/* ─── static fallback data ────────────────────────────── */

const staticCaseStudies = [
  {
    id: 1,
    slug: 'pronel-idealcore-digital-agency',
    seoSlug: 'pronel-idealcore-digital-agency',
    title: 'Pronel was billing ₹65K/month and working 16-hour days. He needed to stop being the agency.',
    status: 'published',
    industry: 'Digital Agency · Kolkata',
    duration: '14-month engagement',
    clientName: 'Pronel Mohanti',
    introText: 'Pronel Mohanti co-founded Idealcore Solution LLP with real technical skill — design, web development, client delivery. But three years in, every project still ran through him personally. He couldn\'t take a day off. He couldn\'t hire. He had no idea where the next client was coming from. The business was built entirely on one person\'s time.',
    challenges: JSON.stringify([
      'No standard process for client onboarding — each project started differently',
      'Delivery relied on Pronel\'s memory, not documentation',
      'No defined team roles — two junior staff were underutilised',
      'Zero inbound pipeline; all work came through personal WhatsApp',
      'Pricing was inconsistent — he often undersold out of fear of losing the deal',
    ]),
    solutions: JSON.stringify([
      'Standard client onboarding SOP — from first call to contract in 48 hours',
      'Delivery playbooks for each service type (design, dev, branding)',
      'Clear role split: Pronel on strategy and closings, juniors on execution',
      'LinkedIn content pipeline targeting West Bengal SME owners',
      'Fixed pricing tiers with a no-discount rule — anchored to outcomes, not hours',
    ]),
    results: JSON.stringify([
      { num: '₹65K → ₹1.8L', desc: 'Monthly revenue in 14 months' },
      { num: '3 Hires', desc: 'First full team hired and onboarded' },
      { num: '9-hr days', desc: 'Down from 16 — founder\'s time reclaimed' },
      { num: '6 inbound', desc: 'Qualified leads/month from LinkedIn alone' },
    ]),
    quoteText: 'Before this, I was the agency. Now I run the agency. That one shift changed everything.',
    quoteAuthor: 'Pronel Mohanti, Co-Founder — Idealcore Solution LLP',
    featuredImage: '',
    tags: '',
    views: 0,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: 2,
    slug: 'manufacturing-fabrication-howrah',
    seoSlug: 'manufacturing-fabrication-howrah',
    title: 'A 20-year-old fabrication business. No website. Missing tenders they didn\'t even know existed.',
    status: 'published',
    industry: 'Manufacturing · West Bengal',
    duration: '8-month engagement',
    clientName: '',
    introText: 'This client ran a structural fabrication and industrial supply business out of Howrah for two decades. Solid reputation locally. Consistent work from existing clients. But their growth had plateaued — they were invisible to procurement heads in Pune, Ahmedabad, and Chennai who were actively searching for vendors like them. Their pipeline was entirely dependent on two men making calls.',
    challenges: JSON.stringify([
      'No digital presence — not findable by procurement teams outside West Bengal',
      'Company communication was informal — no credentials deck, no capability document',
      'Zero LinkedIn presence; competitors with less experience were winning national tenders',
      'No lead tracking — follow-ups were done on paper and Excel',
      'Pricing conversations were handled verbally with no documented anchor',
    ]),
    solutions: JSON.stringify([
      'Built a professional website with SEO targeting procurement-specific search terms',
      'Created a credentials and capability deck for enterprise outreach',
      'Set up LinkedIn Company Page with weekly content for B2B visibility',
      'Implemented a CRM (Zoho) for lead tracking, follow-up reminders, and pipeline visibility',
      'Structured a rate-card with minimum engagement floors — ended random discounting',
    ]),
    results: JSON.stringify([
      { num: '₹40L+', desc: 'New contracts signed in 8 months' },
      { num: '150+', desc: 'Qualified B2B leads per month' },
      { num: '4 States', desc: 'New markets reached beyond West Bengal' },
      { num: '2 Enterprise', desc: 'Large-format clients onboarded (previously zero)' },
    ]),
    quoteText: 'We had good work but no voice. Now people find us. That\'s a completely different business.',
    quoteAuthor: 'Director — Industrial Fabrication Business, Howrah (name withheld on request)',
    featuredImage: '',
    tags: '',
    views: 0,
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-10'),
  },
  {
    id: 3,
    slug: 'tech-startup-bangalore-series-a',
    seoSlug: 'tech-startup-bangalore-series-a',
    title: 'Series A funded. Growing at 40% MoM. And completely falling apart inside.',
    status: 'published',
    industry: 'Tech Startup · Bangalore',
    duration: '6-month engagement',
    clientName: '',
    introText: 'Two co-founders had raised ₹1.2Cr in seed funding and were growing fast — but the cracks were showing. Decisions were made in hallway conversations. No one was clear on who owned what. The team kept shipping features the market didn\'t ask for. Both founders were exhausted by month six and privately told each other the company felt "out of control." Fast growth without structure isn\'t momentum — it\'s a liability.',
    challenges: JSON.stringify([
      'No OKRs — each team sprint was disconnected from company goals',
      'Decisions escalated to founders for things the team should own',
      'No meeting rhythm — updates happened reactively over Slack and calls',
      'Hiring was chaotic — two bad hires in 3 months were draining morale',
      'Investors asked for a 12-month roadmap; founders had no structured answer',
    ]),
    solutions: JSON.stringify([
      'Quarterly OKR framework — company goals broken to team-level KPIs',
      'Decision matrix: what each role can approve independently, what needs founder sign-off',
      'Weekly 45-minute leadership sync and bi-weekly all-hands rhythm',
      'Structured hiring scorecard — removed bias and gut-feel from new hires',
      '12-month operating roadmap built for Series A investor deck',
    ]),
    results: JSON.stringify([
      { num: '60% faster', desc: 'Internal decision turnaround time' },
      { num: 'Team runs', desc: 'Sprints without daily founder involvement' },
      { num: 'Series A', desc: 'Investor deck and roadmap completed and presented' },
      { num: '0 hires', desc: 'Regrettable attrition in 5 months post-engagement' },
    ]),
    quoteText: 'We were moving fast but not going anywhere. Six months later, the company actually feels like a company.',
    quoteAuthor: 'Co-Founder — B2B SaaS Startup, Bangalore (identity withheld)',
    featuredImage: '',
    tags: '',
    views: 0,
    createdAt: new Date('2024-05-20'),
    updatedAt: new Date('2024-05-20'),
  },
];

/* ─── public API ──────────────────────────────────────── */

/**
 * Get all published case studies (listing data).
 */
export async function getAllPublishedCaseStudies() {
  if (!hasDatabase()) {
    return staticCaseStudies.map(normaliseRow);
  }

  const prisma = getPrisma();
  const rows = await prisma.caseStudy.findMany({
    where: {
      status: {
        equals: 'published',
        mode: 'insensitive',
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return rows.map(normaliseRow);
}

/**
 * Get a single case study by slug (published only).
 */
export async function getCaseStudyBySlug(slug) {
  if (!hasDatabase()) {
    const item = staticCaseStudies.find(cs => cs.slug === slug);
    if (!item) return null;
    return normaliseRow(item);
  }

  const prisma = getPrisma();
  const row = await prisma.caseStudy.findFirst({
    where: {
      seoSlug: slug,
      status: {
        equals: 'published',
        mode: 'insensitive',
      },
    },
  });

  if (!row) return null;
  return normaliseRow(row);
}

/**
 * Get all published slugs (for generateStaticParams).
 */
export async function getAllCaseStudySlugs() {
  if (!hasDatabase()) {
    return staticCaseStudies.map(cs => cs.slug);
  }

  const prisma = getPrisma();
  const rows = await prisma.caseStudy.findMany({
    where: {
      status: {
        equals: 'published',
        mode: 'insensitive',
      },
    },
    select: {
      seoSlug: true,
    },
  });

  return rows.map(r => r.seoSlug);
}

/* ─── admin API ───────────────────────────────────────── */

/**
 * Get all case studies (including drafts) for admin panel.
 */
export async function getAllCaseStudies() {
  const prisma = getPrisma();
  const rows = await prisma.caseStudy.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return rows.map(normaliseRow);
}

/**
 * Get a single case study by ID (admin — any status).
 */
export async function getCaseStudyById(id) {
  const prisma = getPrisma();
  const row = await prisma.caseStudy.findUnique({
    where: { id: BigInt(id) },
  });

  if (!row) return null;
  return normaliseRow(row);
}

/**
 * Create a new case study.
 */
export async function createCaseStudy(data) {
  const prisma = getPrisma();
  const row = await prisma.caseStudy.create({
    data: {
      title:         data.title,
      seoSlug:       data.seoSlug,
      status:        data.status || 'draft',
      industry:      data.industry,
      duration:      data.duration,
      clientName:    data.clientName || '',
      introText:     data.introText,
      challenges:    data.challenges,
      solutions:     data.solutions,
      results:       data.results,
      quoteText:     data.quoteText || '',
      quoteAuthor:   data.quoteAuthor || '',
      featuredImage: data.featuredImage || '',
      tags:          data.tags || '',
    },
  });

  return normaliseRow(row);
}

/**
 * Update an existing case study.
 */
export async function updateCaseStudy(id, data) {
  const prisma = getPrisma();
  const row = await prisma.caseStudy.update({
    where: { id: BigInt(id) },
    data,
  });

  return normaliseRow(row);
}

/**
 * Delete a case study permanently.
 */
export async function deleteCaseStudy(id) {
  const prisma = getPrisma();
  await prisma.caseStudy.delete({
    where: { id: BigInt(id) },
  });
}
