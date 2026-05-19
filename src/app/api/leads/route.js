/**
 * POST /api/leads  — save a new lead (extended: triggers AI + PDF)
 * GET  /api/leads  — retrieve all leads (admin, deprecated — use /api/admin/leads)
 */

import { NextResponse } from 'next/server';
import { saveLead, fetchAllLeads, validateLeadPayload } from '@/server/services/leads';

export const runtime = 'nodejs';

// ─── POST /api/leads ─────────────────────────────────────────────────────────

export async function POST(request) {
  try {
    const body = await request.json();

    const { valid, errors } = validateLeadPayload(body);
    if (!valid) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const { id, leadQuality, healthScore, bottleneck } = await saveLead(body);

    // PDF URL is predictable — it will be written async in the background
    const pdfUrl = `/reports/${id}-report.pdf`;

    return NextResponse.json(
      { success: true, id, leadQuality, healthScore, bottleneck, pdfUrl },
      { status: 201 },
    );
  } catch (err) {
    console.error('[POST /api/leads]', err);
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
      { status: 500 },
    );
  }
}

// ─── GET /api/leads ──────────────────────────────────────────────────────────

export async function GET() {
  try {
    const result = await fetchAllLeads();
    const leads  = result.leads ?? result;
    return NextResponse.json({ success: true, count: leads.length, leads });
  } catch (err) {
    console.error('[GET /api/leads]', err);
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
      { status: 500 },
    );
  }
}
