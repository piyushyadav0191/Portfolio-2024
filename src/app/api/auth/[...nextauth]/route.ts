import { env } from '@/env'
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: env.OAUTH_CLIENT_KEY,
      clientSecret: env.OAUTH_CLIENT_SECRET,
    }),
    // GoogleProvider({
    //   clientId: env.GOOGLE_CLIENT_KEY,
    //   clientSecret: env.GOOGLE_CLIENT_SECRET,
    // })
  ],
};
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
