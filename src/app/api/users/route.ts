import dbConnect from "@/utils/db";
import { NextResponse } from "next/server";
import User from "@/models/User";

//ini buat App router
export const GET = async (request: Request) => {
  //fetch
  try {
    await dbConnect();
    const users = await User.find();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
