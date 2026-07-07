import { Calendar } from "lucide-react";
import type { Task } from "../types/task";

type Props = {
  tasks: Task[];
};

export default function UpcomingTasks({
  tasks,
}: Props) {
  const upcoming = tasks
    .filter(
      (t) =>
        t.dueDate &&
        t.status !== "Completed"
    )
    .sort(
      (a, b) =>
        new Date(a.dueDate!).getTime() -
        new Date(b.dueDate!).getTime()
    )
    .slice(0, 5);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mt-8">
      <div className="flex items-center gap-2 mb-5">
        <Calendar className="text-blue-600" />
        <h2 className="text-2xl font-bold">
          Upcoming Tasks
        </h2>
      </div>

      {upcoming.length === 0 ? (
        <p className="text-gray-500">
          No upcoming tasks.
        </p>
      ) : (
        upcoming.map((task) => (
          <div
            key={task.id}
            className="border-b py-3 last:border-none"
          >
            <p className="font-semibold">
              {task.title}
            </p>
            <p className="text-sm text-gray-500">
              Due:{" "}
              {new Date(
                task.dueDate!
              ).toLocaleDateString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}