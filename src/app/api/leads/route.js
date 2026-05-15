/**
 * POST /api/leads  — save a new lead
 * GET  /api/leads  — retrieve all leads (admin)
 *
 * This route is intentionally thin: parse HTTP, call service, return response.
 * All business logic lives in src/server/services/leads.js
 * All DB queries live in src/server/repositories/leads.js
 */

import { NextResponse } from 'next/server';
import { saveLead, fetchAllLeads, validateLeadPayload } from '@/server/services/leads';

export const runtime = 'nodejs'; // required for better-sqlite3 / pg

// ─── POST /api/leads ─────────────────────────────────────────────────────────

export async function POST(request) {
  try {
    const body = await request.json();

    // 1. Validate
    const { valid, errors } = validateLeadPayload(body);
    if (!valid) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // 2. Save via service layer
    const { id, leadQuality } = await saveLead(body);

    return NextResponse.json({ success: true, id, leadQuality }, { status: 201 });

  } catch (err) {
    console.error('[POST /api/leads]', err);
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
      { status: 500 }
    );
  }
}

// ─── GET /api/leads ──────────────────────────────────────────────────────────

export async function GET() {
  try {
    const leads = await fetchAllLeads();
    return NextResponse.json({ success: true, count: leads.length, leads });
  } catch (err) {
    console.error('[GET /api/leads]', err);
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
