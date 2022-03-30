import { IUser } from "../intefaces/user";
import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a full name"],
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      index: true,
    },
    password: String,
    ids_cases: Array,
  },
  { timestamps: true }
);

export default mongoose.model<IUser & mongoose.Document>("User", User);
