/**
 * POST /api/admin/login
 * Authenticates admin with email + password, sets httpOnly JWT cookie.
 */

import { NextResponse } from 'next/server';
import bcrypt           from 'bcryptjs';
import { getPrisma }    from '@/server/services/prisma';
import { signAdminToken, COOKIE_NAME } from '@/lib/admin-auth';

export const runtime = 'nodejs';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ success: false, error: 'Email and password required.' }, { status: 400 });
    }

    // Look up admin user
    const admin = await getPrisma().adminUser.findUnique({ where: { email: email.toLowerCase().trim() } });

    if (!admin) {
      return NextResponse.json({ success: false, error: 'Invalid credentials.' }, { status: 401 });
    }

    const valid = await bcrypt.compare(password, admin.password);
    if (!valid) {
      return NextResponse.json({ success: false, error: 'Invalid credentials.' }, { status: 401 });
    }

    const token = signAdminToken(admin.email);

    const response = NextResponse.json({ success: true, name: admin.name, email: admin.email });
    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure:   process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge:   60 * 60 * 24, // 24 hours
      path:     '/',
    });

    return response;
  } catch (err) {
    console.error('[POST /api/admin/login]', err);
    return NextResponse.json({ success: false, error: 'Internal server error.' }, { status: 500 });
  }
}
