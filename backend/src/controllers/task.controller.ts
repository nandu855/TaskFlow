import { Response } from "express";
import prisma from "../config/prisma";
import { AuthRequest } from "../middlewares/auth.middleware";

// Create Task
export const createTask = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const {
      title,
      description,
      priority,
      category,
      dueDate,
      status,
    } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        priority: priority || "Medium",
        category: category || "Personal",
        status: status || "Pending",
        dueDate: dueDate ? new Date(dueDate) : null,
        userId: req.userId!,
      },
    });

    return res.status(201).json(task);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};

// Get Tasks
export const getTasks = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const tasks = await prisma.task.findMany({
      where: {
        userId: req.userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.json(tasks);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};

// Update Task
export const updateTask = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { id } = req.params;

    const {
      title,
      description,
      status,
      priority,
      category,
      dueDate,
    } = req.body;

    const task = await prisma.task.findFirst({
      where: {
        id,
        userId: req.userId,
      },
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    const updatedTask = await prisma.task.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        status,
        priority,
        category,
        dueDate: dueDate ? new Date(dueDate) : null,
      },
    });

    return res.json(updatedTask);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};

// Delete Task
export const deleteTask = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { id } = req.params;

    const task = await prisma.task.findFirst({
      where: {
        id,
        userId: req.userId,
      },
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    await prisma.task.delete({
      where: {
        id,
      },
    });

    return res.json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};