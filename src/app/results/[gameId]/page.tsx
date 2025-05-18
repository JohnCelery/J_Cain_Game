'use client';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Results({ params }: { params: { gameId: string } }) {
  const { data } = useSWR(`/api/game/${params.gameId}`, fetcher);
  return (
    <div className="p-4">
      <h1 className="text-2xl">Results</h1>
      <ul>
        {data?.scores?.map((s: any) => (
          <li key={s.id}>{s.userId}: {s.points}</li>
        ))}
      </ul>
    </div>
  );
}
