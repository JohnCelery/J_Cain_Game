'use client';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Button from '../../../components/Button';
import Timer from '../../../components/Timer';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Game({ params }: { params: { gameId: string } }) {
  const { data, mutate } = useSWR(`/api/game/${params.gameId}`, fetcher);
  const [vote, setVote] = useState<boolean | null>(null);
  useEffect(() => {
    const socket = io({ path: '/api/socket' });
    socket.emit('join', params.gameId);
    socket.on('state', mutate);
  }, []);
  if (!data) return null;
  const round = data.rounds[data.rounds.length - 1];
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl">Round</h1>
      {round?.statement && <p className="text-xl">{round.statement.content}</p>}
      {!vote ? (
        <div className="space-x-4">
          <Button onClick={() => setVote(true)}>Truth</Button>
          <Button onClick={() => setVote(false)}>Lie</Button>
        </div>
      ) : (
        <p>Waiting for others...</p>
      )}
      <Timer seconds={30} />
    </div>
  );
}
