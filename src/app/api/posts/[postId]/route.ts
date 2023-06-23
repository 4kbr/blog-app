import Post from "@/models/Post";
import dbConnect from "@/utils/db";
import { IPost } from "@/utils/model_interface";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

/**
 *  ini buat App router
 * */
export const GET = async (
  request: Request,
  { params }: { params: { postId?: string } }
): Promise<NextResponse<IPost | {}>> => {
  //fetch
  try {
    await dbConnect();
    const post = await Post.findById<IPost | null>(params.postId);

    if (!post) {
      return NextResponse.json(
        { message: "Data not founded" },
        { status: 404 }
      );
    }
    return NextResponse.json<IPost>(post, { status: 200 });
  } catch (error) {
    if (!error)
      return NextResponse.json(
        { message: "Not Found ", error },
        { status: 404 }
      );
    return NextResponse.json(
      { message: "Not Found Or Server Error", error },
      { status: 500 }
    );
  }
};

export const DELETE = async (
  request: Request,
  { params }: { params: { postId?: string } }
): Promise<NextResponse<IPost | {}>> => {
  try {
    await dbConnect();
    await Post.findByIdAndDelete(params.postId);
    return NextResponse.json(
      { message: "successfully delete" },
      { status: 200 }
    );
  } catch (error) {
    if (!error)
      return NextResponse.json(
        { message: "Not Found ", error },
        { status: 404 }
      );
    return NextResponse.json(
      { message: "Not Found Or Server Error", error },
      { status: 500 }
    );
  }
};
