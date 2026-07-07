import { ClipboardList } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-16 text-center">

      <ClipboardList
        size={80}
        className="mx-auto text-blue-600"
      />

      <h2 className="text-4xl font-bold mt-6">

        No Tasks Yet

      </h2>

      <p className="text-gray-500 mt-4">

        Create your first task and boost your productivity.

      </p>

    </div>
  );
}