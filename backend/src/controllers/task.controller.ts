import { Response } from "express";
import prisma from "../config/prisma";
import { AuthRequest } from "../middlewares/auth.middleware";

// Create Task
export const createTask = async (req: AuthRequest, res: Response) => {
  try {
    const { title, description } = req.body;

    const task = await prisma.task.create({
      data: {
        title,
        description,
        userId: req.userId!,
      },
    });

    res.status(201).json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get All Tasks
export const getTasks = async (req: AuthRequest, res: Response) => {
  const tasks = await prisma.task.findMany({
    where: {
      userId: req.userId,
    },
  });

  res.json(tasks);
};

// Update Task
export const updateTask = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const task = await prisma.task.update({
      where: { id },
      data: {
        title,
        description,
        status,
      },
    });

    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete Task
export const deleteTask = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.task.delete({
      where: { id },
    });

    res.json({
      message: "Task Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};