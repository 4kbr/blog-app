import dbConnect from "@/utils/db";
import { NextResponse } from "next/server";
import Post from "@/models/Post";

//ini buat App router
export const GET = async (params: Request) => {
  //fetch
  try {
    await dbConnect();
    const posts = await Post.find();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

//INI buat page router
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   console.log("get trigger");
//   switch (req.method) {
//     case "GET":
//       res.status(200).json({ response: "sukses atuh" });
//       break;
//     default:
//       res.status(500).json({ response: "Can't" });
//       break;
//   }
// }
