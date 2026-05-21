/**
 * Premium PDF Generator — 7-page consulting-grade audit report
 * Fixed font rendering, detailed business profile & diagnosis pages
 */

import { jsPDF } from 'jspdf';
import fs        from 'fs';
import path      from 'path';

// ─── Brand palette ────────────────────────────────────────────────────────────
const C = {
  dark:    [10,  10,  20],
  card:    [16,  16,  32],
  gold:    [245, 197, 24],
  white:   [255, 255, 255],
  grey:    [140, 140, 160],
  light:   [235, 235, 245],
  green:   [16,  185, 129],
  red:     [239, 68,  68],
  purple:  [99,  102, 241],
  orange:  [249, 115, 22],
};

const PAGE_W = 210;
const PAGE_H = 297;
const M      = 18;   // margin
const IW     = PAGE_W - M * 2; // inner width

// ─── Helpers ──────────────────────────────────────────────────────────────────

function ensureDir() {
  const dir = path.join(process.cwd(), 'public', 'reports');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return dir;
}

function setFill(doc, color)   { doc.setFillColor(...color); }
function setDraw(doc, color, w = 0.3) { doc.setDrawColor(...color); doc.setLineWidth(w); }
function setFont(doc, size, color = C.dark, bold = false) {
  doc.setFontSize(size);
  doc.setTextColor(...color);
  doc.setFont('helvetica', bold ? 'bold' : 'normal');
  doc.setCharSpace(0);
}

function rect(doc, x, y, w, h, color) { setFill(doc, color); doc.rect(x, y, w, h, 'F'); }

function txt(doc, s, x, y, { size = 10, color = C.dark, bold = false, align = 'left', maxW, lineH, paragraphGap = 3 } = {}) {
  setFont(doc, size, color, bold);
  const str = String(s || '').trim();
  if (!str) return 0;
  const lh = lineH || size * 0.42;

  // Split by newline to preserve paragraphs from AI-generated content
  const paragraphs = str.split(/\n+/).map(p => p.replace(/\r/g, '').trim()).filter(Boolean);

  if (maxW) {
    let totalH = 0;
    paragraphs.forEach((para, pIdx) => {
      const lines = doc.splitTextToSize(para, maxW);
      for (let i = 0; i < lines.length; i++) {
        doc.text(lines[i], x, y + totalH + i * lh, { align, charSpace: 0 });
      }
      totalH += lines.length * lh;
      // Add paragraph gap between paragraphs (not after the last one)
      if (pIdx < paragraphs.length - 1) totalH += paragraphGap;
    });
    return totalH;
  }

  // Single-line (no maxW) — join paragraphs back with space
  const joined = paragraphs.join(' ');
  doc.text(joined, x, y, { align, charSpace: 0 });
  return lh;
}

function hr(doc, y, color = [60, 60, 80]) {
  setDraw(doc, color, 0.25);
  doc.line(M, y, PAGE_W - M, y);
}

function pageFooter(doc, orgName, today) {
  const fy = PAGE_H - 10;
  txt(doc, `${orgName} — Sarvanu Business Audit Report  |  ${today}`, PAGE_W / 2, fy, { size: 7, color: C.grey, align: 'center' });
}

// ─── SVG-style circular score gauge ──────────────────────────────────────────
function drawGauge(doc, cx, cy, r, score, label) {
  const pct = Math.min(1, Math.max(0, score / 100));

  // Outer ring bg
  setDraw(doc, [40, 40, 60], 4);
  doc.circle(cx, cy, r, 'S');

  // Coloured arc (approximate with line segments)
  const color = score >= 70 ? C.green : score >= 50 ? C.gold : C.red;
  const steps = 60;
  const start = -Math.PI / 2;
  const end   = start + pct * 2 * Math.PI;
  setDraw(doc, color, 4);
  for (let i = 0; i < steps; i++) {
    const t1 = start + (i / steps) * (end - start);
    const t2 = start + ((i + 1) / steps) * (end - start);
    if (t2 > end) break;
    doc.line(
      cx + r * Math.cos(t1), cy + r * Math.sin(t1),
      cx + r * Math.cos(t2), cy + r * Math.sin(t2),
    );
  }

  // Score number inside
  txt(doc, String(score), cx, cy + 3, { size: 20, color: C.white, bold: true, align: 'center' });
  txt(doc, '/ 100', cx, cy + 9, { size: 7, color: C.grey, align: 'center' });
  if (label) txt(doc, label, cx, cy + r + 8, { size: 8, color: C.grey, align: 'center' });
}

// ─── Category score bar ───────────────────────────────────────────────────────
function scoreBar(doc, label, score, y) {
  const color = score >= 70 ? C.green : score >= 50 ? C.gold : C.red;
  txt(doc, label, M, y, { size: 8.5, color: C.grey });
  txt(doc, `${score}`, PAGE_W - M, y, { size: 8.5, color: C.white, bold: true, align: 'right' });
  const bY = y + 2.5;
  rect(doc, M, bY, IW, 4, [40, 40, 60]);
  rect(doc, M, bY, (score / 100) * IW, 4, color);
  return bY + 9;
}

// ─── Section header ───────────────────────────────────────────────────────────
function sectionHeader(doc, title, y) {
  rect(doc, M, y, IW, 8, C.dark);
  setDraw(doc, C.gold, 0.4);
  doc.rect(M, y, IW, 8);
  txt(doc, title.toUpperCase(), M + 4, y + 5.5, { size: 7.5, color: C.gold, bold: true });
  return y + 14;
}

// ─── Recommendation phase block ───────────────────────────────────────────────
function phaseBlock(doc, label, color, actions, y) {
  if (y > PAGE_H - 50) { doc.addPage(); pageBg(doc); y = 26; }
  rect(doc, M, y, IW, 7, color);
  txt(doc, label.toUpperCase(), M + 4, y + 5, { size: 7.5, color: C.white, bold: true });
  y += 9;
  (actions || []).forEach(a => {
    if (y > PAGE_H - 20) { doc.addPage(); pageBg(doc); y = 26; }
    txt(doc, '>', M + 2, y + 3.5, { size: 9, color, bold: true });
    const h = txt(doc, a, M + 10, y + 3.5, { size: 9, color: [210, 210, 230], maxW: IW - 14 });
    y += Math.max(h, 4) + 3;
  });
  return y + 5;
}

function pageBg(doc) {
  rect(doc, 0, 0, PAGE_W, PAGE_H, C.dark);
  rect(doc, 0, 0, 5, PAGE_H, C.gold);
}

// ─── Business profile info row ────────────────────────────────────────────────
function infoRow(doc, label, value, y) {
  if (!value || value === 'N/A') return y;
  txt(doc, label, M + 2, y, { size: 7.5, color: C.grey, bold: true });
  const h = txt(doc, String(value), M + 50, y, { size: 8.5, color: [220, 220, 240], maxW: IW - 54 });
  return y + Math.max(h, 4) + 2;
}

function tagRow(doc, label, items, y, color = C.gold) {
  if (!items || !items.length) return y;
  txt(doc, label, M + 2, y, { size: 7.5, color: C.grey, bold: true });
  y += 5;
  let xOff = M + 2;
  items.forEach(item => {
    const tw = doc.getTextWidth(item) + 8;
    if (xOff + tw > PAGE_W - M) { xOff = M + 2; y += 7; }
    rect(doc, xOff, y - 3.5, tw, 6, [...color, 30]);
    setDraw(doc, color, 0.3); doc.roundedRect(xOff, y - 3.5, tw, 6, 2, 2, 'S');
    txt(doc, item, xOff + 4, y, { size: 7, color });
    xOff += tw + 3;
  });
  return y + 8;
}

// ─── Diagnosis question+answer row ────────────────────────────────────────────
const DIAG_Q = [
  { id: 'q1', t: 'Business Performance', o: ['Revenue inconsistent','Growth stagnant','Growing slower than expected','Strong but chaotic'] },
  { id: 'q2', t: 'New Business Source', o: ['Referrals/word of mouth','Social media','Repeat customers','No predictable channel'] },
  { id: 'q3', t: 'Founder Involvement', o: ['Handle everything personally','Manage most decisions','Some operations delegated','Team manages independently'] },
  { id: 'q4', t: 'Sales Process', o: ['Leads rarely convert','Sales lack structure','Conversion unpredictable','Sales stable'] },
  { id: 'q5', t: 'Operational Systems', o: ['Manual management','Spreadsheets/WhatsApp','Disconnected systems','Structured & scalable'] },
  { id: 'q6', t: 'Brand Positioning', o: ['Struggle to differentiate','Value known internally only','Branding inconsistent','Strong & understood'] },
  { id: 'q7', t: 'Primary 12-Month Goal', o: ['Revenue & clients','Scalable systems','Strategic clarity','Brand authority'] },
];

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

export async function generateReportPDF(leadId, contactData, aiAnalysis, extra = {}) {
  const doc   = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const today = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  const org   = contactData.organisation || 'Your Business';
  const name  = contactData.name || 'Business Owner';
  const score = aiAnalysis.auditScore ?? 0;
  const qual  = score >= 70 ? 'STRONG GROWTH POTENTIAL' : score >= 50 ? 'NEEDS STRUCTURAL IMPROVEMENTS' : 'CRITICAL INTERVENTION REQUIRED';
  const qualColor = score >= 70 ? C.green : score >= 50 ? C.gold : C.red;
  const cats  = aiAnalysis.categoryScores || {};
  const recs  = aiAnalysis.recommendations || {};

  // ═══════════════════════════════════════════════════════════════════
  // PAGE 1 — COVER
  // ═══════════════════════════════════════════════════════════════════
  pageBg(doc);

  // Header band
  rect(doc, 5, 0, PAGE_W - 5, 28, [16, 14, 30]);
  txt(doc, 'Sarvanu', M + 4, 12, { size: 18, color: C.white, bold: true });
  txt(doc, 'Business Growth Advisory', M + 4, 20, { size: 9, color: C.gold });
  txt(doc, `Prepared on ${today}`, PAGE_W - M, 12, { size: 8, color: C.grey, align: 'right' });
  txt(doc, 'CONFIDENTIAL', PAGE_W - M, 19, { size: 7, color: [100, 100, 130], align: 'right' });

  // Divider
  setDraw(doc, C.gold, 0.4);
  doc.line(M + 4, 24, PAGE_W - M, 24);

  // Report type label
  txt(doc, '— BUSINESS GROWTH AUDIT REPORT —', PAGE_W / 2, 38, { size: 9, color: C.gold, bold: true, align: 'center' });

  // Business name
  txt(doc, org, PAGE_W / 2, 58, { size: 26, color: C.white, bold: true, align: 'center' });
  txt(doc, `${name}  ·  ${contactData.designation || 'Founder'}`, PAGE_W / 2, 67, { size: 10, color: C.grey, align: 'center' });
  if (contactData.city) txt(doc, contactData.city, PAGE_W / 2, 73, { size: 8.5, color: [100, 100, 130], align: 'center' });

  setDraw(doc, [40, 40, 60], 0.3);
  doc.line(M + 30, 77, PAGE_W - M - 30, 77);

  // Central score gauge
  drawGauge(doc, PAGE_W / 2, 118, 24, score, 'Business Health Score');

  // Quality badge
  const qbW = 80;
  rect(doc, PAGE_W / 2 - qbW / 2, 147, qbW, 9, [...qualColor, 20]);
  setDraw(doc, qualColor, 0.5);
  doc.rect(PAGE_W / 2 - qbW / 2, 147, qbW, 9);
  txt(doc, qual, PAGE_W / 2, 153, { size: 7, color: qualColor, bold: true, align: 'center' });

  // Bottleneck pill
  txt(doc, 'PRIMARY BOTTLENECK', PAGE_W / 2, 166, { size: 7, color: C.grey, align: 'center' });
  txt(doc, aiAnalysis.bottleneck || '', PAGE_W / 2, 174, { size: 11, color: C.white, bold: true, align: 'center' });

  // Two mini stats
  rect(doc, M + 4, 186, 80, 22, [22, 20, 42]);
  txt(doc, 'AUDIT CATEGORY', M + 44, 194, { size: 6.5, color: C.grey, align: 'center' });
  txt(doc, 'REVENUE & GROWTH', M + 44, 201, { size: 8, color: C.white, bold: true, align: 'center' });
  txt(doc, `${cats.revenue ?? 0}/100`, M + 44, 206, { size: 9, color: C.gold, align: 'center' });

  rect(doc, PAGE_W - M - 84, 186, 80, 22, [22, 20, 42]);
  txt(doc, 'OPERATIONS SCORE', PAGE_W - M - 44, 194, { size: 6.5, color: C.grey, align: 'center' });
  txt(doc, `${cats.operations ?? 0}/100`, PAGE_W - M - 44, 201, { size: 9, color: cats.operations >= 60 ? C.green : C.red, bold: true, align: 'center' });
  txt(doc, 'Operational Maturity', PAGE_W - M - 44, 206, { size: 8, color: C.white, align: 'center' });

  // Footer
  txt(doc, '© ' + new Date().getFullYear() + ' Sarvanu  ·  business@sarvanu.com  ·  sarvanu.com', PAGE_W / 2, PAGE_H - 10, { size: 7, color: [80, 80, 110], align: 'center' });

  // ═══════════════════════════════════════════════════════════════════
  // PAGE 2 — EXECUTIVE SUMMARY + CATEGORY SCORES
  // ═══════════════════════════════════════════════════════════════════
  doc.addPage(); pageBg(doc);
  rect(doc, 5, 0, PAGE_W - 5, 18, [16, 14, 30]);
  txt(doc, 'EXECUTIVE SUMMARY', M + 4, 12, { size: 13, color: C.white, bold: true });

  let y = 26;
  y += txt(doc, aiAnalysis.executiveSummary || '', M, y, { size: 10, color: [210, 210, 230], maxW: IW }) + 10;

  hr(doc, y); y += 8;

  // Overall score row
  y = sectionHeader(doc, 'Overall Business Health Score', y);
  // Mini gauges row for 5 categories
  const catDefs = [
    { key: 'revenue',    label: 'Revenue' },
    { key: 'clients',    label: 'Clients' },
    { key: 'operations', label: 'Operations' },
    { key: 'sales',      label: 'Sales' },
    { key: 'brand',      label: 'Brand' },
  ];
  const gW = IW / 5;
  catDefs.forEach((c, i) => {
    const gx = M + gW * i + gW / 2;
    drawGauge(doc, gx, y + 16, 10, cats[c.key] ?? 50, c.label);
  });
  y += 42;

  y = sectionHeader(doc, 'Category Performance Breakdown', y);
  const catFull = [
    { key: 'revenue',    label: 'Revenue & Growth' },
    { key: 'clients',    label: 'Client Acquisition' },
    { key: 'operations', label: 'Operations & Systems' },
    { key: 'sales',      label: 'Sales & Conversion' },
    { key: 'brand',      label: 'Brand & Positioning' },
  ];
  catFull.forEach(c => { y = scoreBar(doc, c.label, cats[c.key] ?? 50, y); });

  y += 6;
  // Qualification card
  rect(doc, M, y, IW, 18, [...qualColor, 18]);
  setDraw(doc, qualColor, 0.5);
  doc.rect(M, y, IW, 18);
  txt(doc, 'QUALIFICATION LEVEL', M + 5, y + 7, { size: 7, color: qualColor, bold: true });
  txt(doc, qual, M + 5, y + 14, { size: 11, color: C.white, bold: true });

  pageFooter(doc, org, today);

  // ═══════════════════════════════════════════════════════════════════
  // PAGE 3 — KEY FINDINGS
  // ═══════════════════════════════════════════════════════════════════
  doc.addPage(); pageBg(doc);
  rect(doc, 5, 0, PAGE_W - 5, 18, [16, 14, 30]);
  txt(doc, 'KEY FINDINGS & GROWTH BOTTLENECKS', M + 4, 12, { size: 13, color: C.white, bold: true });

  y = 26;
  y = sectionHeader(doc, 'Critical Business Findings', y);

  (aiAnalysis.keyFindings || []).forEach((finding, i) => {
    if (y > PAGE_H - 30) { doc.addPage(); pageBg(doc); y = 26; }
    rect(doc, M, y, 7, 7, C.gold);
    txt(doc, String(i + 1), M + 3.5, y + 5.2, { size: 7, color: C.dark, bold: true, align: 'center' });
    const lines = doc.splitTextToSize(finding, IW - 12);
    setFont(doc, 9.5, [210, 210, 230]);
    doc.text(lines, M + 11, y + 5.2);
    y += lines.length * 5 + 7;
  });

  y += 4;
  y = sectionHeader(doc, 'Primary Bottleneck Analysis', y);
  rect(doc, M, y, IW, 20, [...C.gold, 12]);
  setDraw(doc, C.gold, 0.4);
  doc.rect(M, y, IW, 20);
  txt(doc, 'IDENTIFIED PRIMARY BOTTLENECK', M + 5, y + 8, { size: 7, color: [160, 130, 0], bold: true });
  txt(doc, aiAnalysis.bottleneck || '', M + 5, y + 16, { size: 13, color: C.dark, bold: true });
  y += 26;

  y = sectionHeader(doc, 'Operational Analysis', y);
  const auditD = extra.auditData ? (typeof extra.auditData === 'string' ? JSON.parse(extra.auditData) : extra.auditData) : {};
  const opNote = `${org} operates with ${auditD.teamSize || 'a founding team'} in the ${auditD.stage || 'growth'} stage, currently generating ${auditD.currentRevenue || 'early'} revenue. The business shows characteristics of ${(auditD.founderDependency || 'founder dependency').toLowerCase()}, which presents a primary scaling constraint. Transition to structured delegation and documented processes is essential before significant growth targets can be pursued.`;
  y += txt(doc, opNote, M, y, { size: 9.5, color: [210, 210, 230], maxW: IW }) + 10;

  // Founder dependency analysis
  if (y < PAGE_H - 40) {
    y = sectionHeader(doc, 'Founder Dependency Risk', y);
    const depScore = { 'Business depends fully on me': 90, 'Team handles some operations': 60, 'Mostly delegated': 35, 'Runs independently': 10 }[auditD.founderDependency] ?? 65;
    const depColor = depScore >= 70 ? C.red : depScore >= 40 ? C.gold : C.green;
    rect(doc, M, y, IW * (depScore / 100), 10, [...depColor, 40]);
    rect(doc, M + IW * (depScore / 100), y, IW * (1 - depScore / 100), 10, [30, 30, 50]);
    txt(doc, `Dependency Level: ${depScore}%  —  ${auditD.founderDependency || 'Moderate'}`, M + 3, y + 7, { size: 8.5, color: C.white, bold: true });
    y += 16;
  }

  pageFooter(doc, org, today);

  // ═══════════════════════════════════════════════════════════════════
  // PAGE 4 — BUSINESS PROFILE (from Stage 2 audit data)
  // ═══════════════════════════════════════════════════════════════════
  doc.addPage(); pageBg(doc);
  rect(doc, 5, 0, PAGE_W - 5, 18, [16, 14, 30]);
  txt(doc, 'BUSINESS PROFILE & AUDIT DATA', M + 4, 12, { size: 13, color: C.white, bold: true });

  y = 26;
  y = sectionHeader(doc, 'Business Information', y);
  y = infoRow(doc, 'Business Type', auditD.businessType, y);
  y = infoRow(doc, 'Industry', auditD.industry, y);
  y = infoRow(doc, 'Business Stage', auditD.stage, y);
  y = infoRow(doc, 'Operating Since', auditD.operatingSince, y);
  y = infoRow(doc, 'Team Size', auditD.teamSize, y);
  if (auditD.description) {
    y += 2;
    y = sectionHeader(doc, 'Business Description', y);
    y += txt(doc, auditD.description, M + 2, y, { size: 9, color: [200, 200, 220], maxW: IW - 4 }) + 6;
  }

  y = sectionHeader(doc, 'Financial Overview', y);
  y = infoRow(doc, 'Current Revenue', auditD.currentRevenue, y);
  y = infoRow(doc, 'Target Revenue', auditD.targetRevenue, y);
  y = infoRow(doc, 'CRM/Systems', auditD.crmUsage, y);
  y = infoRow(doc, 'Sales Process', auditD.salesProcess, y);
  y = infoRow(doc, 'Founder Dep.', auditD.founderDependency, y);

  if ((auditD.growthGoals || []).length) {
    y += 2;
    setFont(doc, 7, C.gold, true); doc.setCharSpace(0);
    y = tagRow(doc, 'Growth Goals', auditD.growthGoals, y, C.green);
  }
  if ((auditD.challenges || []).length) {
    y = tagRow(doc, 'Challenges', auditD.challenges, y, C.red);
  }
  if ((auditD.customerSources || []).length) {
    y = tagRow(doc, 'Lead Sources', auditD.customerSources, y, C.gold);
  }

  if (auditD.operationalBottleneck) {
    y += 2;
    y = sectionHeader(doc, 'Operational Bottleneck (Self-Reported)', y);
    y += txt(doc, auditD.operationalBottleneck, M + 2, y, { size: 9, color: [200, 200, 220], maxW: IW - 4 }) + 4;
  }
  if (auditD.whyNotGrowing) {
    y = sectionHeader(doc, 'Growth Barriers (Self-Reported)', y);
    y += txt(doc, auditD.whyNotGrowing, M + 2, y, { size: 9, color: [200, 200, 220], maxW: IW - 4 }) + 4;
  }

  pageFooter(doc, org, today);

  // ═══════════════════════════════════════════════════════════════════
  // PAGE 5 — DIAGNOSIS RESPONSES
  // ═══════════════════════════════════════════════════════════════════
  const diagD = extra.diagnosisData ? (typeof extra.diagnosisData === 'string' ? JSON.parse(extra.diagnosisData) : extra.diagnosisData) : {};
  if (Object.keys(diagD).length > 0) {
    doc.addPage(); pageBg(doc);
    rect(doc, 5, 0, PAGE_W - 5, 18, [16, 14, 30]);
    txt(doc, 'BUSINESS DIAGNOSIS RESPONSES', M + 4, 12, { size: 13, color: C.white, bold: true });

    y = 26;
    y = sectionHeader(doc, 'Strategic Assessment Questions', y);
    DIAG_Q.forEach((q, qi) => {
      if (y > PAGE_H - 30) { doc.addPage(); pageBg(doc); y = 26; }
      const ansIdx = diagD[q.id];
      const ans = ansIdx !== undefined ? q.o[ansIdx] : 'Not answered';
      const answered = ansIdx !== undefined;
      rect(doc, M, y - 1, IW, 12, answered ? [20, 25, 20] : [20, 20, 30]);
      txt(doc, `Q${qi+1}`, M + 2, y + 4, { size: 7, color: C.gold, bold: true });
      txt(doc, q.t, M + 12, y + 4, { size: 8, color: C.grey });
      txt(doc, ans, M + 12, y + 9, { size: 9, color: answered ? C.white : [100,100,120], bold: answered });
      y += 14;
    });

    // Ratings
    const ratings = [
      { id: 'rating_confidence', label: 'Confidence in Strategy' },
      { id: 'rating_stress', label: 'Business Stress Level' },
      { id: 'rating_scaling', label: 'Scaling Readiness' },
    ];
    if (ratings.some(r => diagD[r.id] !== undefined)) {
      y += 4;
      y = sectionHeader(doc, 'Self-Assessment Ratings', y);
      ratings.forEach(r => {
        if (diagD[r.id] === undefined) return;
        const val = diagD[r.id];
        const rc = val >= 7 ? C.green : val >= 5 ? C.gold : C.red;
        rect(doc, M, y - 1, IW, 10, [20, 20, 35]);
        txt(doc, r.label, M + 4, y + 5, { size: 9, color: [200, 200, 220] });
        txt(doc, `${val}/10`, PAGE_W - M - 4, y + 5, { size: 11, color: rc, bold: true, align: 'right' });
        // Mini bar
        rect(doc, M + 90, y + 1.5, 50, 4, [40, 40, 60]);
        rect(doc, M + 90, y + 1.5, 50 * (val / 10), 4, rc);
        y += 12;
      });
    }
    pageFooter(doc, org, today);
  }

  // ═══════════════════════════════════════════════════════════════════
  // PAGE 6 — STRATEGIC RECOMMENDATIONS
  // ═══════════════════════════════════════════════════════════════════
  doc.addPage(); pageBg(doc);
  rect(doc, 5, 0, PAGE_W - 5, 18, [16, 14, 30]);
  txt(doc, 'STRATEGIC RECOMMENDATIONS & ROADMAP', M + 4, 12, { size: 13, color: C.white, bold: true });

  y = 26;
  const phases = [
    { key: 'immediate', label: 'Immediate Actions (This Week)', color: C.red },
    { key: 'day30',     label: '30-Day Roadmap',                 color: C.gold },
    { key: 'day90',     label: '90-Day Roadmap',                 color: C.green },
    { key: 'year1',     label: '12-Month Scaling Plan',          color: C.purple },
  ];
  phases.forEach(p => { y = phaseBlock(doc, p.label, p.color, recs[p.key] || [], y); });

  pageFooter(doc, org, today);

  // ═══════════════════════════════════════════════════════════════════
  // PAGE 7 — CONCLUSION + CTA
  // ═══════════════════════════════════════════════════════════════════
  doc.addPage(); pageBg(doc);
  rect(doc, 5, 0, PAGE_W - 5, 18, [16, 14, 30]);
  txt(doc, 'STRATEGIC CONCLUSION', M + 4, 12, { size: 13, color: C.white, bold: true });

  y = 26;
  y = sectionHeader(doc, 'Consulting Perspective', y);
  y += txt(doc, aiAnalysis.conclusion || '', M, y, { size: 10, color: [210, 210, 230], maxW: IW }) + 14;

  // CTA box
  rect(doc, M, y, IW, 52, [16, 14, 30]);
  rect(doc, M, y, 5, 52, C.gold);
  setDraw(doc, C.gold, 0.5);
  doc.rect(M, y, IW, 52);

  txt(doc, 'READY TO IMPLEMENT THESE STRATEGIES?', M + 10, y + 11, { size: 8.5, color: C.gold, bold: true });
  txt(doc, 'Book a Strategy Call with Sarvanu', M + 10, y + 20, { size: 13, color: C.white, bold: true });
  txt(doc, 'Our consulting team will work with you to implement a customised growth plan', M + 10, y + 28, { size: 8.5, color: [185, 185, 210] });
  txt(doc, 'based on the specific findings in this audit report.', M + 10, y + 34, { size: 8.5, color: [185, 185, 210] });
  txt(doc, 'Email: business@sarvanu.com', M + 10, y + 43, { size: 9, color: C.gold, bold: true });
  txt(doc, 'Web: sarvanu.com', M + 100, y + 43, { size: 9, color: C.gold, bold: true });

  y += 60;

  // Disclaimer
  txt(doc, 'DISCLAIMER', M, y, { size: 7, color: C.grey, bold: true });
  y += 4.5;
  const disc = 'This audit report has been prepared by Sarvanu based on self-reported business information. All findings and recommendations are advisory in nature and should be validated against your specific business context before implementation. This document is confidential and prepared exclusively for the named recipient.';
  txt(doc, disc, M, y, { size: 7, color: C.grey, maxW: IW });

  txt(doc, 'Copyright ' + new Date().getFullYear() + ' Sarvanu. All rights reserved.', PAGE_W / 2, PAGE_H - 10, { size: 7, color: [70, 70, 100], align: 'center' });

  // ─── Save ─────────────────────────────────────────────────────────
  const dir      = ensureDir();
  const filename = `${leadId}-report.pdf`;
  const fullPath = path.join(dir, filename);
  fs.writeFileSync(fullPath, Buffer.from(doc.output('arraybuffer')));
  return `/reports/${filename}`;
}
