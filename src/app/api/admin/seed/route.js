/**
 * POST /api/admin/seed
 * Creates or resets admin user from env vars.
 */

import { NextResponse } from 'next/server';
import bcrypt           from 'bcryptjs';
import { getPrisma }    from '@/server/services/prisma';

export const runtime = 'nodejs';

export async function POST() {
  const email    = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    return NextResponse.json({ success: false, error: 'ADMIN_EMAIL and ADMIN_PASSWORD must be set in .env' }, { status: 400 });
  }

  try {
    // Delete all existing admins and recreate
    await getPrisma().adminUser.deleteMany({});

    const hashed = await bcrypt.hash(password, 12);
    const admin  = await getPrisma().adminUser.create({
      data: { email, password: hashed, name: 'Sarvanu Admin' },
    });

    return NextResponse.json({
      success: true,
      message: `Admin user created for ${admin.email}`,
    });
  } catch (err) {
    console.error('[POST /api/admin/seed]', err);
    return NextResponse.json({ success: false, error: 'Server error.' }, { status: 500 });
  }
}
