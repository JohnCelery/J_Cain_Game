'use client';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

/** App-level providers */
export function Providers({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
