import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Email from 'next-auth/providers/email';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from './prisma';
import type { NextAuthOptions } from 'next-auth';

/** Configure NextAuth with email/password and magic link */
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email) return null;
        const user = await prisma.user.findUnique({ where: { email: credentials.email } });
        if (user && credentials.password === user.password) return user;
        return null;
      },
    }),
    Email({ server: process.env.EMAIL_SERVER_HOST ? {
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT || 587),
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASS,
      },
    } : undefined }),
  ],
  session: { strategy: 'jwt' },
  pages: { signIn: '/auth/signin' },
};

export const { handlers, auth } = NextAuth(authOptions);
