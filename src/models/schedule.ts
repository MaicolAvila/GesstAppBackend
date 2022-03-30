import mongoose from "mongoose";
import { ISchedule } from "../intefaces/schedule";

const Schedule = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name"],
      index: true,
    },
    description: String,
    id_case: String,
  },
  { timestamps: true }
);

export default mongoose.model<ISchedule & mongoose.Document>(
  "Schedule",
  Schedule
);
