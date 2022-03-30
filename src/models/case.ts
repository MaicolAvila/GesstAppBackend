import mongoose from "mongoose";
import { ICase } from "../intefaces/case";

const Case = new mongoose.Schema(
  {
    user_id: String,
    client_id: String,
    number: Number,
    state: String,
  },
  { timestamps: true }
);

export default mongoose.model<ICase & mongoose.Document>("Case", Case);
