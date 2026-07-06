import { Router } from "express";

import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/task.controller";

import { protect } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", protect, createTask);

router.get("/", protect, getTasks);

router.put("/:id", protect, updateTask);

router.delete("/:id", protect, deleteTask);

export default router;