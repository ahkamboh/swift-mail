import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: '/login', // Redirect to this page for sign-in
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirect to /promote after sign-in if no specific redirect URL is provided
      if (url === baseUrl) {
        return '/promote';
      }
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
});

export { handler as GET, handler as POST };
