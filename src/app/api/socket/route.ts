import { initSocket } from '../../../lib/socket';
import { NextResponse } from 'next/server';

export function GET(req: Request, res: any) {
  initSocket(res);
  res.end();
}

export const dynamic = 'force-dynamic';
