import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { readFileSync } from 'fs';

// Load env
const envText = readFileSync('.env', 'utf8');
envText.split('\n').forEach(line => {
  const clean = line.replace('\r', '').trim();
  if (!clean || clean.startsWith('#')) return;
  const eqIdx = clean.indexOf('=');
  if (eqIdx === -1) return;
  const key = clean.slice(0, eqIdx).trim();
  const val = clean.slice(eqIdx + 1).trim().replace(/^"|"$/g, '');
  if (key) process.env[key] = val;
});

const email    = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;

const prisma = new PrismaClient();

try {
  const deleted = await prisma.adminUser.deleteMany({});
  console.log(`Deleted ${deleted.count} existing admin(s)`);

  const hashed = await bcrypt.hash(password, 12);
  const admin  = await prisma.adminUser.create({
    data: { email, password: hashed, name: 'Sarvanu Admin' },
  });

  console.log('SUCCESS — Admin created:');
  console.log('  Email   :', admin.email);
  console.log('  Password:', password);
} finally {
  await prisma.$disconnect();
}
