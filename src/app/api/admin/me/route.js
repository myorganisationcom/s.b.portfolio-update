/** GET /api/admin/me — validate session and return admin info */
import { NextResponse }             from 'next/server';
import { getAdminFromRequest }      from '@/lib/admin-auth';
import { getPrisma }                from '@/server/services/prisma';

export const runtime = 'nodejs';

export async function GET(request) {
  const payload = getAdminFromRequest(request);
  if (!payload) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const admin = await getPrisma().adminUser.findUnique({ where: { email: payload.email } });
    if (!admin) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, email: admin.email, name: admin.name });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
