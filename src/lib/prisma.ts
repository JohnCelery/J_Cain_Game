import { PrismaClient } from '@prisma/client';

/** Global Prisma client to reuse across hot reloads */
export const prisma = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
