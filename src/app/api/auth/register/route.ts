import User from "@/models/User";
import dbConnect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { name, email, password } = await request.json();
  console.log("holla");

  try {
    await dbConnect();
    const hashedPw = await bcrypt.hash(password, 5);

    const newUser = new User({ name, email, password: hashedPw });

    await newUser.save();

    return NextResponse.json(
      { message: "User has been created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed Request", error },
      { status: 500 }
    );
  }
};
