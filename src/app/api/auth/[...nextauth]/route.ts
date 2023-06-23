import NextAuth, { Awaitable } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import dbConnect from "@/utils/db";
import User from "@/models/User";
import { IUser } from "@/utils/model_interface";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        await dbConnect();
        try {
          const user = await User.findOne({
            email: credentials?.email,
          });

          if (user) {
            //check password
            const isPasswordCorrect = await bcrypt.compare(
              credentials?.password!,
              user.password!
            );

            if (isPasswordCorrect) {
              const { password, ...other } = user;
              return other;
            }
            throw new Error("Password Incorect");
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          const err: Error = error as Error;

          throw new Error(err.message);
        }
      },
    }),
  ],
  pages: {
    error: "/",
  },
});
const GET = handler;
const POST = handler;
export { GET, POST };
