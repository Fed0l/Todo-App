import express from "express";
import {
  getall,
  getTodoByID,
  createNewItem,
  updateTodoById,
  deleteTodoById,
  deleteAllTodos,
  updateAllTodosStatus,
} from "../../models/todos/index.js";

const router = express.Router();

router.get("/api/todo/", async (req, res) => {
  try {
    const result = await getall();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

export { router };
