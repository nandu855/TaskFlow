import { Clock } from "lucide-react";
import type { Task } from "../types/task";

type Props = {
  tasks: Task[];
};

export default function RecentActivity({ tasks }: Props) {
  const recent = [...tasks]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
    )
    .slice(0, 5);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mt-8">
      <div className="flex items-center gap-2 mb-5">
        <Clock className="text-blue-600" />
        <h2 className="text-2xl font-bold">
          Recent Activity
        </h2>
      </div>

      {recent.length === 0 ? (
        <p className="text-gray-500">
          No recent activity.
        </p>
      ) : (
        recent.map((task) => (
          <div
            key={task.id}
            className="border-b py-3 last:border-none"
          >
            <p className="font-semibold">
              {task.title}
            </p>
            <p className="text-sm text-gray-500">
              {new Date(
                task.createdAt
              ).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}