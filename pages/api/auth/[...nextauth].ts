import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  debug: true,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
       console.log('🧠 Google profile:', profile);
      return profile?.email === 'pttong89@gmail.com';
    },
    async session({ session }) {
      console.log('✅ Session created:', session);
      return session;
    },
  },
};

export default NextAuth(authOptions);