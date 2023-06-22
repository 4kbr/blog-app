import NextAuth from "next-auth";
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
        email: { label: "Username", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await dbConnect();
        try {
          // const user = User.findOne<IUser>({ email: credentials?.email });
          const user = await User.findOne<IUser | null>({
            email: credentials?.email,
          });

          if (user) {
            //check password
            const isPasswordCorrect = await bcrypt.compare(
              credentials?.password!,
              user.password!
            );

            if (isPasswordCorrect) {
              return user;
            }
            return NextResponse.json(
              { message: "Wrong Credentials" },
              { status: 400 }
            );
          }
        } catch (error) {
          return NextResponse.json(
            { message: "Request Failed" },
            { status: 500 }
          );
          // throw new Error(error);
        }
      },
    }),
  ],
});
const GET = handler;
const POST = handler;
export { GET, POST };
