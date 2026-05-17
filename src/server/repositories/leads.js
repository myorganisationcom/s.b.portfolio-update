/**
 * Leads Repository
 *
 * All database queries for scored diagnosis leads live here.
 */

import { getPrisma } from '../services/prisma.js';

/**
 * Insert a new lead record.
 * @param {{ name, organisation, designation, email, phone, quizAnswers, leadQuality }} data
 * @returns {{ lastInsertId: number }}
 */
export async function createLead({
  name,
  organisation,
  designation,
  email,
  phone,
  quizAnswers,
  leadQuality,
}) {
  const lead = await getPrisma().lead.create({
    data: {
      name,
      organisation: organisation ?? '',
      designation: designation ?? '',
      email,
      phone,
      quizAnswers: typeof quizAnswers === 'string'
        ? quizAnswers
        : JSON.stringify(quizAnswers ?? {}),
      leadQuality: leadQuality ?? 'Nurture',
    },
  });

  return { lastInsertId: Number(lead.id) };
}

/**
 * Return all leads, newest first.
 * @returns {Array<Object>}
 */
export async function getAllLeads() {
  const rows = await getPrisma().lead.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return rows.map(parseRow);
}

/**
 * Return a single lead by id.
 * @param {number} id
 * @returns {Object|undefined}
 */
export async function getLeadById(id) {
  const row = await getPrisma().lead.findUnique({
    where: { id: BigInt(id) },
  });

  return row ? parseRow(row) : undefined;
}

function parseRow(row) {
  return {
    id: Number(row.id),
    name: row.name,
    organisation: row.organisation,
    designation: row.designation,
    email: row.email,
    phone: row.phone,
    lead_quality: row.leadQuality,
    created_at: row.createdAt,
    quiz_answers: (() => {
      try { return JSON.parse(row.quizAnswers); }
      catch { return {}; }
    })(),
  };
}
