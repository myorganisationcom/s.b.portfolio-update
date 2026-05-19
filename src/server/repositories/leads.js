/**
 * Leads Repository
 *
 * All database queries for scored diagnosis leads live here.
 */

import { getPrisma } from '../services/prisma.js';

/**
 * Insert a new lead record.
 */
export async function createLead({
  name,
  organisation,
  designation,
  email,
  phone,
  quizAnswers,
  leadQuality,
  healthScore,
  bottleneck,
}) {
  const lead = await getPrisma().lead.create({
    data: {
      name,
      organisation: organisation ?? '',
      designation:  designation  ?? '',
      email,
      phone,
      quizAnswers: typeof quizAnswers === 'string'
        ? quizAnswers
        : JSON.stringify(quizAnswers ?? {}),
      leadQuality:  leadQuality  ?? 'Nurture',
      healthScore:  healthScore  ?? 0,
      bottleneck:   bottleneck   ?? '',
    },
  });

  return { lastInsertId: Number(lead.id) };
}

/**
 * Update a lead's AI analysis + PDF path after async generation.
 */
export async function updateLeadReport(id, { aiAnalysis, pdfPath }) {
  await getPrisma().lead.update({
    where: { id: BigInt(id) },
    data:  { aiAnalysis: aiAnalysis ?? '', pdfPath: pdfPath ?? '' },
  });
}

/**
 * Update a lead's CRM status and notes.
 */
export async function updateLeadStatus(id, { callStatus, notes }) {
  await getPrisma().lead.update({
    where: { id: BigInt(id) },
    data:  {
      ...(callStatus !== undefined && { callStatus }),
      ...(notes      !== undefined && { notes }),
    },
  });
}

/**
 * Return all leads, newest first (with optional filters).
 */
export async function getAllLeads({ quality, status, search, page = 1, limit = 20 } = {}) {
  const where = {};

  if (quality && quality !== 'All') where.leadQuality = quality;
  if (status  && status  !== 'All') where.callStatus  = status;
  if (search) {
    where.OR = [
      { name:         { contains: search, mode: 'insensitive' } },
      { email:        { contains: search, mode: 'insensitive' } },
      { phone:        { contains: search } },
      { organisation: { contains: search, mode: 'insensitive' } },
    ];
  }

  const [rows, total] = await Promise.all([
    getPrisma().lead.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip:  (page - 1) * limit,
      take:  limit,
    }),
    getPrisma().lead.count({ where }),
  ]);

  return { leads: rows.map(parseRow), total, page, limit };
}

/**
 * Return a single lead by id.
 */
export async function getLeadById(id) {
  const row = await getPrisma().lead.findUnique({
    where: { id: BigInt(id) },
  });

  return row ? parseRow(row) : undefined;
}

/**
 * Dashboard stats.
 */
export async function getLeadStats() {
  const now       = new Date();
  const weekStart = new Date(now); weekStart.setDate(now.getDate() - 7);
  const monStart  = new Date(now.getFullYear(), now.getMonth(), 1);

  const [total, hot, warm, nurture, thisWeek, thisMonth, avgResult] = await Promise.all([
    getPrisma().lead.count(),
    getPrisma().lead.count({ where: { leadQuality: 'Hot' } }),
    getPrisma().lead.count({ where: { leadQuality: 'Warm' } }),
    getPrisma().lead.count({ where: { leadQuality: 'Nurture' } }),
    getPrisma().lead.count({ where: { createdAt: { gte: weekStart } } }),
    getPrisma().lead.count({ where: { createdAt: { gte: monStart } } }),
    getPrisma().lead.aggregate({ _avg: { healthScore: true } }),
  ]);

  return {
    total, hot, warm, nurture,
    cold: total - hot - warm - nurture,
    thisWeek, thisMonth,
    avgScore: Math.round(avgResult._avg.healthScore ?? 0),
  };
}

function parseRow(row) {
  return {
    id:           Number(row.id),
    name:         row.name,
    organisation: row.organisation,
    designation:  row.designation,
    email:        row.email,
    phone:        row.phone,
    lead_quality: row.leadQuality,
    health_score: row.healthScore,
    bottleneck:   row.bottleneck,
    ai_analysis:  (() => {
      try { return row.aiAnalysis ? JSON.parse(row.aiAnalysis) : null; }
      catch { return null; }
    })(),
    pdf_path:     row.pdfPath,
    call_status:  row.callStatus,
    notes:        row.notes,
    source:       row.source,
    created_at:   row.createdAt,
    quiz_answers: (() => {
      try { return JSON.parse(row.quizAnswers); }
      catch { return {}; }
    })(),
  };
}
