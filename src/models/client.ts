import mongoose from "mongoose";
import { IClient } from "../intefaces/client";

const Client = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a full name"],
      index: true,
    },
    phone: Number,
    address: String,
    ids_cases: Array,
    cc: Number,
  },
  { timestamps: true }
);

export default mongoose.model<IClient & mongoose.Document>("Client", Client);
