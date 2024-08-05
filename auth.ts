import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Credentials from "next-auth/providers/credentials"

import authConfig from "./auth.config"
import db from "./db"

 
export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.SECRET,
  adapter: PrismaAdapter(db),
  session:{strategy: "jwt"},
  ...authConfig, callbacks: {
    // authorized({ request, auth }) {
    //   const { pathname } = request.nextUrl
    //   if (pathname === "/middleware-example") return !!auth
    //   return true
    // },
    jwt({ token, trigger, session }) {
      if (trigger === "update") token.name = session?.user?.name
      return token
    },
 
  },
})