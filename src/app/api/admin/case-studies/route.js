/**
 * GET  /api/admin/case-studies       — list all case studies (including drafts)
 * POST /api/admin/case-studies       — create a new case study
 */

import { NextResponse }        from 'next/server';
import { requireAdmin }        from '@/lib/admin-auth';
import {
  getAllCaseStudies,
  createCaseStudy,
} from '@/server/repositories/case-studies';

export const runtime = 'nodejs';

export async function GET(request) {
  try { requireAdmin(request); } catch (r) { return r; }

  try {
    const caseStudies = await getAllCaseStudies();
    return NextResponse.json({ success: true, caseStudies });
  } catch (err) {
    console.error('[GET /api/admin/case-studies]', err);
    return NextResponse.json({ success: false, error: 'Server error.' }, { status: 500 });
  }
}

export async function POST(request) {
  try { requireAdmin(request); } catch (r) { return r; }

  try {
    const body = await request.json();

    const { title, seoSlug, industry, duration, introText } = body;
    if (!title || !seoSlug || !industry || !duration || !introText) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: title, seoSlug, industry, duration, introText.' },
        { status: 400 },
      );
    }

    const caseStudy = await createCaseStudy(body);
    return NextResponse.json({ success: true, caseStudy }, { status: 201 });
  } catch (err) {
    console.error('[POST /api/admin/case-studies]', err);
    return NextResponse.json({ success: false, error: 'Server error.' }, { status: 500 });
  }
}
