import { useState } from "react";
import {
  Calendar,
  Pencil,
  Trash2,
  CheckCircle2,
} from "lucide-react";

import PriorityBadge from "./PriorityBadge";
import CategoryBadge from "./CategoryBadge";

type Task = {
  id: string;
  title: string;
  description: string;
  status: string;

  priority?: string;
  category?: string;
  dueDate?: string;
};

type Props = {
  task: Task;

  onDelete: (id: string) => void;

  onUpdate: (
    id: string,
    title: string,
    description: string,
    status: string
  ) => void;
};

export default function TaskCard({
  task,
  onDelete,
  onUpdate,
}: Props) {
  const [editing, setEditing] = useState(false);

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(
    task.description
  );
  const [status, setStatus] = useState(task.status);

  const save = () => {
    if (!title.trim()) return;

    onUpdate(
      task.id,
      title,
      description,
      status
    );

    setEditing(false);
  };

  if (editing) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">

        <h2 className="text-2xl font-bold mb-5">
          Edit Task
        </h2>

        <input
          className="border rounded-xl font-semibold transition-all duration-300 p-3 w-full mb-4"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <textarea
          rows={4}
          className="border rounded-xl font-semibold transition-all duration-300 p-3 w-full mb-4"
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
        />

        <select
          className="border rounded-xl font-semibold transition-all duration-300 p-3 w-full mb-5"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >
          <option>
            Pending
          </option>

          <option>
            Completed
          </option>
        </select>

        <div className="flex gap-3">

          <button
            onClick={save}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            Save
          </button>

          <button
            onClick={() =>
              setEditing(false)
            }
            className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            Cancel
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300 transition p-6 mb-6">

      <div className="flex justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            {task.title}
          </h2>

          <p className="text-gray-500 mt-3">
            {task.description}
          </p>

        </div>

        <CheckCircle2
          size={34}
          className={
            task.status === "Completed"
              ? "text-green-600"
              : "text-orange-500"
          }
        />

      </div>

      <div className="flex flex-wrap gap-3 mt-6">

        <PriorityBadge
          priority={
            task.priority ??
            "Medium"
          }
        />

        <CategoryBadge
          category={
            task.category ??
            "Personal"
          }
        />

        {task.dueDate && (
          <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2">

            <Calendar size={16} />

            {new Date(
              task.dueDate
            ).toLocaleDateString()}

          </div>
        )}

      </div>

      <div className="flex gap-4 mt-8">

        <button
          onClick={() =>
            setEditing(true)
          }
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300"
        >
          <Pencil size={18} />

          Edit
        </button>

        <button
          onClick={() =>
            onDelete(task.id)
          }
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300"
        >
          <Trash2 size={18} />

          Delete
        </button>

      </div>

    </div>
  );
}