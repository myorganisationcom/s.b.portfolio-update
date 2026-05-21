/**
 * GET    /api/admin/case-studies/[id] — single case study detail
 * PATCH  /api/admin/case-studies/[id] — update case study fields
 * DELETE /api/admin/case-studies/[id] — delete case study permanently
 */

import { NextResponse }     from 'next/server';
import { requireAdmin }     from '@/lib/admin-auth';
import {
  getCaseStudyById,
  updateCaseStudy,
  deleteCaseStudy,
} from '@/server/repositories/case-studies';

export const runtime = 'nodejs';

export async function GET(request, { params }) {
  try { requireAdmin(request); } catch (r) { return r; }

  const { id } = await params;
  try {
    const caseStudy = await getCaseStudyById(id);
    if (!caseStudy) return NextResponse.json({ success: false, error: 'Not found.' }, { status: 404 });
    return NextResponse.json({ success: true, caseStudy });
  } catch (err) {
    console.error('[GET /api/admin/case-studies/:id]', err);
    return NextResponse.json({ success: false, error: 'Server error.' }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  try { requireAdmin(request); } catch (r) { return r; }

  const { id }  = await params;
  const body    = await request.json();

  try {
    const caseStudy = await updateCaseStudy(id, body);
    return NextResponse.json({ success: true, caseStudy });
  } catch (err) {
    console.error('[PATCH /api/admin/case-studies/:id]', err);
    return NextResponse.json({ success: false, error: 'Server error.' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try { requireAdmin(request); } catch (r) { return r; }

  const { id } = await params;
  try {
    await deleteCaseStudy(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[DELETE /api/admin/case-studies/:id]', err);
    return NextResponse.json({ success: false, error: 'Server error.' }, { status: 500 });
  }
}
