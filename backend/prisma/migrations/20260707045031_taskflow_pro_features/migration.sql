/*
  Warnings:

  - Added the required column `updatedAt` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "category" TEXT NOT NULL DEFAULT 'Personal',
ADD COLUMN     "dueDate" TIMESTAMP(3),
ADD COLUMN     "priority" TEXT NOT NULL DEFAULT 'Medium',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
