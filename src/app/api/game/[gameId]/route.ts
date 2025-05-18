import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';
import { auth } from '../../../../lib/auth';

/** Fetch game state */
export async function GET(_: Request, { params }: { params: { gameId: string } }) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  const game = await prisma.game.findUnique({
    where: { id: params.gameId },
    include: { rounds: { include: { statement: true, votes: true } }, players: true },
  });
  return NextResponse.json(game);
}

/** Update game state with new round or vote */
export async function POST(req: Request, { params }: { params: { gameId: string } }) {
  const data = await req.json();
  // Simplified demo update
  await prisma.game.update({ where: { id: params.gameId }, data });
  return NextResponse.json({ ok: true });
}
