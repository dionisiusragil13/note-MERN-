import mongoose from "mongoose";

//1.schema
//model based on schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //createat,updated at
);

const Note = mongoose.model("Note",noteSchema)
export default Note
