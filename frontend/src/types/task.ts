export interface Task {
  id: string;
  title: string;
  description: string;

  status: "Pending" | "Completed";

  priority: "High" | "Medium" | "Low";

  category:
    | "Study"
    | "Work"
    | "Personal"
    | "Shopping"
    | "Others";

  dueDate?: string;

  createdAt: string;

  updatedAt: string;
}