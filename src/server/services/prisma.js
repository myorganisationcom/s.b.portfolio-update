import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis;

export function hasDatabase() {
  return !!process.env.DATABASE_URL;
}

export function getPrisma() {
  if (!hasDatabase()) {
    throw new Error('DATABASE_URL is not configured.');
  }

  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
    });
  }

  return globalForPrisma.prisma;
}
