import { IUser } from "@/utils/model_interface";
import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User: mongoose.Model<IUser> =
  mongoose.models.User || mongoose.model("User", userSchema);
export default User;
