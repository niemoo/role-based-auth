import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import Google from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
  providers: [
    Google({
      clientId: process.env.GoogleClientId!,
      clientSecret: process.env.GoogleClientSecret!,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
