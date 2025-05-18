'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import Button from '../../../components/Button';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <input className="border p-2" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input className="border p-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <Button onClick={() => signIn('credentials', { email, password })}>Sign In</Button>
      <Button onClick={() => signIn('email', { email })}>Magic Link</Button>
    </div>
  );
}
