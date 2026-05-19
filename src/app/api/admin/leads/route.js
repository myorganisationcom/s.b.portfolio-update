/**
 * GET /api/admin/leads       — paginated, filtered lead list
 * POST /api/admin/leads/seed — seed admin user (one-time setup)
 */

import { NextResponse }        from 'next/server';
import { requireAdmin }        from '@/lib/admin-auth';
import { fetchAllLeads }       from '@/server/services/leads';

export const runtime = 'nodejs';

export async function GET(request) {
  try {
    requireAdmin(request);
  } catch (r) { return r; }

  const { searchParams } = new URL(request.url);
  const quality = searchParams.get('quality') || undefined;
  const status  = searchParams.get('status')  || undefined;
  const search  = searchParams.get('search')  || undefined;
  const page    = parseInt(searchParams.get('page') || '1', 10);

  try {
    const result = await fetchAllLeads({ quality, status, search, page, limit: 20 });
    return NextResponse.json({ success: true, ...result });
  } catch (err) {
    console.error('[GET /api/admin/leads]', err);
    return NextResponse.json({ success: false, error: 'Server error.' }, { status: 500 });
  }
}
