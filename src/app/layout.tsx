import './globals.css';
import { Providers } from './providers';
import { ReactNode } from 'react';

export const metadata = { title: 'Would I Lie To You?' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
