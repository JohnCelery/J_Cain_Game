import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

/** Create a new user via POST */
export async function POST(req: Request) {
  const { email, password } = await req.json();
  await prisma.user.create({ data: { email, password } });
  return NextResponse.json({ ok: true });
}
