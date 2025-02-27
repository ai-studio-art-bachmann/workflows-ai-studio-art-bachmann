import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: { params: { prompt: "select_account" } }
    })
  ],
  // Only allow emails from specific domain
  callbacks: {
    signIn: async ({ user }) => {
      const email = user.email || "";
      // You can customize this to match your company domain
      // For demo purposes, we'll allow all emails
      return true;
      
      // Uncomment to restrict to specific domain
      // if (email.endsWith("@yrityksennimi.fi")) {
      //   return true;
      // } else {
      //   // Prevent login if email doesn't belong to company domain
      //   return "/unauthorized";
      // }
    }
  },
  pages: {
    signIn: "/",
    error: "/unauthorized",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" }  // Use JWT-based session (no DB needed)
});

export { handler as GET, handler as POST };
