import express, { Router } from "express";
import {
  createTodo,
  getTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todo";
const router: Router = express.Router();

router.post("/create", createTodo);
router.get("/", getTodo);
router.delete("/:id", deleteTodo);
router.put("/:id", updateTodo);

export default router;
