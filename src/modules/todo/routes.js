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

router.get("/api/todo/:id", async (req, res) => {
  try {
    const requestId = req.params.id;
    const result = await getTodoByID(requestId);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

router.post("/api/todo/", async (req, res) => {
  try {
    const { title, description, is_completed } = req.body;
    await createNewItem(title, description, is_completed);
    res.status(201).json({
      message: "New Task Added",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/api/todo/update/", async (req, res) => {
  try {
    const { id, title, description, is_completed } = req.body;

    await updateTodoById(id, title, description, is_completed);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete("/api/todo/delete/:id", async (req, res) => {
  try {
    const requestId = req.params.id;
    const result = await deleteTodoById(requestId);
    res.json(result);
    deleteTodoById();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete("/api/todo/deleteall/", async (req, res) => {
  try {
    const result = await deleteAllTodos();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/api/todo/updateallstatus/", async (req, res) => {
  try {
    const result = await updateAllTodosStatus();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

export { router };
