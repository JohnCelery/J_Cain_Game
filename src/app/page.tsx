import Link from 'next/link';
import Button from '../components/Button';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Would I Lie To You?</h1>
      <p>Bluff your friends in real-time.</p>
      <Link href="/auth/signin">
        <Button>Get Started</Button>
      </Link>
    </main>
  );
}
