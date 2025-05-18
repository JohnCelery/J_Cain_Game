'use client';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import Button from '../../../components/Button';
import { useEffect } from 'react';
import { io } from 'socket.io-client';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Lobby({ params }: { params: { gameId: string } }) {
  const { data } = useSWR(`/api/game/${params.gameId}`, fetcher, { refreshInterval: 1000 });
  const router = useRouter();
  useEffect(() => {
    const socket = io({ path: '/api/socket' });
    socket.emit('join', params.gameId);
    socket.on('state', (state) => {
      if (state.started) router.push(`/game/${params.gameId}`);
    });
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-2xl">Lobby</h1>
      <p>{data?.players?.length || 0} players joined</p>
      <Button onClick={() => fetch(`/api/game/${params.gameId}`, { method: 'POST', body: JSON.stringify({ started: true }) })}>Start</Button>
    </div>
  );
}
