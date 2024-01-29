import mongoose, { Schema, Document } from "mongoose";

// Define interface for ToDo document
interface IToDo extends Document {
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

// Define ToDo schema
const ToDoSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Define and export ToDo model
const ToDo = mongoose.model<IToDo>("ToDo", ToDoSchema);
export default ToDo;
