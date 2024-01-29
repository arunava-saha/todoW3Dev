import { Request, Response } from "express";
import ToDo from "../models/todoModel";

// Create a new ToDo item
export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const todo = new ToDo({
      title,
      description,
    });
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", error: err });
  }
};

// Get all ToDo items
export const getTodo = async (req: Request, res: Response) => {
  try {
    const todos = await ToDo.find();
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", error: err });
  }
};

// Update a ToDo item
export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const updatedTodo = await ToDo.findByIdAndUpdate(
      id,
      { title, description, completed },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", error: err });
  }
};

// Delete a ToDo item
export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await ToDo.findByIdAndDelete(id);
    res.json({ message: "ToDo item deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", error: err });
  }
};
