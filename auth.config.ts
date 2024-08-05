import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { comparePassword, saltAndHashPassword } from "./utils/password";
import db from "./lib/db";
 
export default { providers: [Credentials({
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    credentials: {
      email: {},
      password: {},
    },
    authorize: async (credentials) => {
      if (!credentials || !credentials.email || !credentials.password) {
        return null;
      }

      const email = credentials.email as string;
      const hash = saltAndHashPassword(credentials.password);

      let user: any = await db.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        user = await db.user.create({
          data: {
            email,
            hashedPassword: hash,
          },
        });
      } else {
        const isMatch = comparePassword(credentials.password, user.hashedPassword);
        if (!isMatch) {
          throw new Error("Incorrect password.");
        }
      }

      return user;
    },
  }),] } satisfies NextAuthConfig