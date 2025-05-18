'use client';
import { useState } from 'react';
import Button from '../../../components/Button';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const create = async () => {
    await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <input className="border p-2" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input className="border p-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <Button onClick={create}>Sign Up</Button>
    </div>
  );
}
