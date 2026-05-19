/** GET /api/admin/stats — dashboard statistics */
import { NextResponse }   from 'next/server';
import { requireAdmin }   from '@/lib/admin-auth';
import { fetchLeadStats } from '@/server/services/leads';

export const runtime = 'nodejs';

export async function GET(request) {
  try { requireAdmin(request); } catch (r) { return r; }

  try {
    const stats = await fetchLeadStats();
    return NextResponse.json({ success: true, stats });
  } catch (err) {
    console.error('[GET /api/admin/stats]', err);
    return NextResponse.json({ success: false, error: 'Server error.' }, { status: 500 });
  }
}
