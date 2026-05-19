/**
 * GET   /api/admin/leads/[id] — full lead detail
 * PATCH /api/admin/leads/[id] — update call status / notes
 */

import { NextResponse }     from 'next/server';
import { requireAdmin }     from '@/lib/admin-auth';
import { fetchLeadById, patchLeadStatus } from '@/server/services/leads';

export const runtime = 'nodejs';

export async function GET(request, { params }) {
  try { requireAdmin(request); } catch (r) { return r; }

  const { id } = await params;
  try {
    const lead = await fetchLeadById(id);
    if (!lead) return NextResponse.json({ success: false, error: 'Not found.' }, { status: 404 });
    return NextResponse.json({ success: true, lead });
  } catch (err) {
    console.error('[GET /api/admin/leads/:id]', err);
    return NextResponse.json({ success: false, error: 'Server error.' }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  try { requireAdmin(request); } catch (r) { return r; }

  const { id }              = await params;
  const { callStatus, notes } = await request.json();

  try {
    await patchLeadStatus(id, { callStatus, notes });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[PATCH /api/admin/leads/:id]', err);
    return NextResponse.json({ success: false, error: 'Server error.' }, { status: 500 });
  }
}
