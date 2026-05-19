/**
 * Leads Service
 *
 * Business logic only — no HTTP, no DB queries.
 * Calls the repository for data access.
 */

import {
  createLead,
  getAllLeads,
  getLeadById,
  getLeadStats,
  updateLeadReport,
  updateLeadStatus,
} from '../repositories/leads.js';

import { generateBusinessAnalysis } from './ai-analysis.js';
import { generateReportPDF }        from './pdf-generator.js';

// ─── Lead Quality Scoring ────────────────────────────────────────────────────

function scoreLeadQuality(quizAnswers) {
  const values = Object.values(quizAnswers ?? {});
  if (!values.length) return 'Nurture';
  const avg = values.reduce((sum, v) => sum + Number(v), 0) / values.length;
  if (avg <= 1.0) return 'Hot';
  if (avg <= 2.0) return 'Warm';
  return 'Nurture';
}

/**
 * Compute a numeric health score (0–100) and bottleneck from quiz answers.
 */
function computeHealthScore(quizAnswers) {
  const a = typeof quizAnswers === 'string' ? JSON.parse(quizAnswers) : (quizAnswers ?? {});
  let score = 55;

  // Q1 — Revenue
  if ([0, 1].includes(a[1])) score -= 12; else score += 8;
  // Q3 — Hours worked (founder dependency)
  if (a[3] === 0) score -= 12; else if (a[3] === 3) score += 12;
  // Q5 — Systems
  if (a[5] === 0) score -= 10; else if (a[5] === 3) score += 10;
  // Q4 — Sales
  if ([0, 1, 2].includes(a[4])) score -= 8; else score += 8;
  // Q6 — Brand
  if ([0, 1].includes(a[6])) score -= 5; else score += 5;

  const bottleneckMap = {
    0: 'Lead Generation & Revenue Growth',
    1: 'Operational Systems & Scaling',
    2: 'Strategic Clarity & Direction',
    3: 'Brand Authority & Trust',
  };

  return {
    healthScore: Math.max(10, Math.min(90, score)),
    bottleneck: bottleneckMap[a[7]] || 'Lead Generation & Revenue Growth',
  };
}

// ─── Validation ──────────────────────────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d\s\-()[\]]{7,20}$/;

export function validateLeadPayload({ name, email, phone }) {
  const errors = [];
  if (!name?.trim())              errors.push('Name is required.');
  if (!email?.trim())             errors.push('Email is required.');
  else if (!EMAIL_RE.test(email)) errors.push('Email format is invalid.');
  if (!phone?.trim())             errors.push('Phone is required.');
  else if (!PHONE_RE.test(phone)) errors.push('Phone format is invalid.');
  return { valid: errors.length === 0, errors };
}

// ─── Async background report generation ─────────────────────────────────────

async function triggerReportGeneration(leadId, payload) {
  try {
    const contactData = {
      name:         payload.name,
      organisation: payload.organisation ?? '',
      designation:  payload.designation  ?? '',
      email:        payload.email,
      phone:        payload.phone,
    };

    const aiAnalysis = await generateBusinessAnalysis(contactData, payload.quizAnswers);
    const pdfPath    = await generateReportPDF(leadId, contactData, aiAnalysis);

    await updateLeadReport(leadId, {
      aiAnalysis: JSON.stringify(aiAnalysis),
      pdfPath,
    });

    console.log(`[Report] Generated for lead #${leadId}: ${pdfPath}`);
  } catch (err) {
    console.error(`[Report] Failed for lead #${leadId}:`, err.message);
  }
}

// ─── Public Service Methods ──────────────────────────────────────────────────

export async function saveLead(payload) {
  const leadQuality = scoreLeadQuality(payload.quizAnswers);
  const { healthScore, bottleneck } = computeHealthScore(payload.quizAnswers);

  const { lastInsertId } = await createLead({
    name:         payload.name.trim(),
    organisation: (payload.organisation ?? '').trim(),
    designation:  (payload.designation  ?? '').trim(),
    email:        payload.email.trim().toLowerCase(),
    phone:        payload.phone.trim(),
    quizAnswers:  payload.quizAnswers ?? {},
    leadQuality,
    healthScore,
    bottleneck,
  });

  // Trigger AI analysis + PDF generation in the background (non-blocking)
  triggerReportGeneration(lastInsertId, payload);

  return { id: lastInsertId, leadQuality, healthScore, bottleneck };
}

export async function fetchAllLeads(filters) {
  return getAllLeads(filters);
}

export async function fetchLeadById(id) {
  return getLeadById(id);
}

export async function fetchLeadStats() {
  return getLeadStats();
}

export async function patchLeadStatus(id, patch) {
  await updateLeadStatus(id, patch);
}
