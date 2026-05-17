import { createFormSubmission } from '../repositories/forms.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d\s\-()\[\]]{7,20}$/;

export function validateFormSubmission(payload = {}) {
  const errors = [];

  if (!payload.formType?.trim()) errors.push('formType is required.');
  if (!payload.name?.trim()) errors.push('name is required.');
  if (payload.email && !EMAIL_RE.test(payload.email)) errors.push('email format is invalid.');
  if (payload.phone && !PHONE_RE.test(payload.phone)) errors.push('phone format is invalid.');

  return { valid: errors.length === 0, errors };
}

export async function saveFormSubmission(payload) {
  return createFormSubmission({
    formType: payload.formType.trim(),
    name: payload.name.trim(),
    email: payload.email?.trim().toLowerCase() || null,
    phone: payload.phone?.trim() || null,
    organisation: payload.organisation?.trim() || null,
    designation: payload.designation?.trim() || null,
    businessStage: payload.businessStage?.trim() || null,
    goals: payload.goals?.trim() || null,
    businessType: payload.businessType?.trim() || null,
    revenue: payload.revenue?.trim() || null,
    challenge: payload.challenge?.trim() || null,
    otherChallenge: payload.otherChallenge?.trim() || null,
    investment: payload.investment?.trim() || null,
    metadata: payload.metadata ?? null,
  });
}
