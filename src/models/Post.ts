import { IPost } from "@/utils/model_interface";
import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Post: mongoose.Model<IPost> =
  mongoose.models.Post || mongoose.model<IPost>("Post", postSchema);
export default Post;
