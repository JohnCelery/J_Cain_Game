import type { Server as HTTPServer } from 'http';
import type { Socket } from 'net';
import type { NextApiResponse } from 'next';

export interface NextApiResponseServerIO extends NextApiResponse {
  socket: Socket & { server: HTTPServer & { io: any } };
}
