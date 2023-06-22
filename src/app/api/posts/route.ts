import dbConnect from "@/utils/db";
import { NextResponse } from "next/server";
import Post from "@/models/Post";
import { IPost } from "@/utils/model_interface";

/**
 *  ini buat App router
 * */
export const GET = async (
  request: Request
): Promise<NextResponse<IPost[] | {}>> => {
  //fetch
  try {
    await dbConnect();
    const posts = await Post.find<IPost>();
    return NextResponse.json<IPost[]>(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Database Error", error },
      { status: 500 }
    );
  }
};

export const POST = async (request: Request): Promise<NextResponse<{}>> => {
  //fetch
  try {
    await dbConnect();
    const newPost = new Post(await request.json());
    await newPost.save();
    return NextResponse.json(
      { message: "success save data", data: newPost },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "request error", error },
      { status: 500 }
    );
  }
};
