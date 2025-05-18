import { Server } from 'socket.io';
import type { NextApiResponseServerIO } from '../types';

/** In-memory game state for demo purposes */
const games: Record<string, any> = {};

/** Initializes Socket.IO server */
export function initSocket(res: NextApiResponseServerIO) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server, { path: '/api/socket' });
    res.socket.server.io = io;
    io.on('connection', (socket) => {
      socket.on('join', (gameId) => {
        socket.join(gameId);
        socket.emit('state', games[gameId] || {});
      });
      socket.on('update', ({ gameId, data }) => {
        games[gameId] = data;
        io.to(gameId).emit('state', data);
      });
    });
  }
}
