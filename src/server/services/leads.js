/**
 * Leads Service
 *
 * Business logic only — no HTTP, no DB queries.
 * Calls the repository for data access.
 */

import { createLead, getAllLeads, getLeadById } from '../repositories/leads.js';

// ─── Lead Quality Scoring ───────────────────────────────────────────────────

/**
 * Score the lead based on quiz answers.
 *
 * Quiz options are indexed 0-3 where:
 *   0 = most challenged (highest pain, hottest lead)
 *   3 = most stable / least urgent
 *
 * Average answer index:
 *   0.0 – 1.0  → Hot
 *   1.0 – 2.0  → Warm
 *   2.0+       → Nurture
 *
 * @param {Object<string, number>} quizAnswers  { "1": 0, "2": 1, … }
 * @returns {'Hot'|'Warm'|'Nurture'}
 */
function scoreLeadQuality(quizAnswers) {
  const values = Object.values(quizAnswers ?? {});
  if (!values.length) return 'Nurture';

  const avg = values.reduce((sum, v) => sum + Number(v), 0) / values.length;

  if (avg <= 1.0) return 'Hot';
  if (avg <= 2.0) return 'Warm';
  return 'Nurture';
}

// ─── Validation ─────────────────────────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d\s\-()\[\]]{7,20}$/;

/**
 * Validate the raw payload coming from the API.
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateLeadPayload({ name, email, phone }) {
  const errors = [];

  if (!name?.trim())             errors.push('Name is required.');
  if (!email?.trim())            errors.push('Email is required.');
  else if (!EMAIL_RE.test(email)) errors.push('Email format is invalid.');
  if (!phone?.trim())            errors.push('Phone is required.');
  else if (!PHONE_RE.test(phone)) errors.push('Phone format is invalid.');

  return { valid: errors.length === 0, errors };
}

// ─── WhatsApp Message Builder ────────────────────────────────────────────────

/**
 * Build the WhatsApp deep-link message for a new lead.
 * @param {{ name, organisation, designation, email, phone }} contact
 * @param {string} leadQuality
 * @returns {string} Encoded WhatsApp URL
 */
export function buildWhatsAppUrl({ name, organisation, designation, email, phone }, leadQuality) {
  const WA_NUMBER = '918700541657';

  const lines = [
    `*New Business Enquiry — Sarvanu Strategies*`,
    ``,
    `*Name:*   ${name}`,
    organisation?.trim() ? `*Organisation:* ${organisation.trim()}` : null,
    designation?.trim()  ? `*Designation:*  ${designation.trim()}`  : null,
    `*Email:*  ${email}`,
    `*Phone:*  ${phone}`,
    ``,
    `_Lead Quality: ${leadQuality}_`,
  ].filter(Boolean).join('\n');

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`;
}

// ─── Public Service Methods ──────────────────────────────────────────────────

/**
 * Save a new lead.
 * @param {{ name, organisation, designation, email, phone, quizAnswers }} payload
 * @returns {{ id: number, leadQuality: string }}
 */
export async function saveLead(payload) {
  const leadQuality = scoreLeadQuality(payload.quizAnswers);

  const { lastInsertId } = await createLead({
    name:         payload.name.trim(),
    organisation: (payload.organisation ?? '').trim(),
    designation:  (payload.designation  ?? '').trim(),
    email:        payload.email.trim().toLowerCase(),
    phone:        payload.phone.trim(),
    quizAnswers:  payload.quizAnswers ?? {},
    leadQuality,
  });

  return { id: lastInsertId, leadQuality };
}

/**
 * Fetch all leads (admin use).
 */
export async function fetchAllLeads() {
  return getAllLeads();
}

/**
 * Fetch a single lead by id.
 */
export async function fetchLeadById(id) {
  return getLeadById(id);
}
