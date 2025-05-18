import { useEffect, useState } from 'react';

/** Countdown timer */
export default function Timer({ seconds, onEnd }: { seconds: number; onEnd?: () => void }) {
  const [time, setTime] = useState(seconds);
  useEffect(() => {
    if (!time) return onEnd?.();
    const id = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(id);
  }, [time]);
  return <span>{time}</span>;
}
