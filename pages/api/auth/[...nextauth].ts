import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../lib/prisma";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = user.id;
      session.user.username = user.username as string;
      return session;
    },
    async signIn({ user }) {
      if (!user.email) {
        return false;
      }
   
   
      return true;
    },
    
  },

  events: {
    async createUser({ user }) {
      let username;
      if (user.name) {
        username = user.name.replace(/\s/g, "").toLowerCase();
      } else if (user.email) {
        username = user.email.split("@")[0];
      } else {
        username = user.id;
      }
      try {
        await prisma.user.update({
          where: { id: user.id },
          data: {
            username,
          },
        });
      } catch (e) {
        username += Math.floor(1000 + Math.random() * 9000).toString();
        await prisma.user.update({
          where: { id: user.id },
          data: {
            username,
          },
        });
      }
    },
    },
  };

  export default NextAuth(authOptions);
