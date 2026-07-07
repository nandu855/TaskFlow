import {
  Calendar,
  Bell,
} from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex justify-between items-center mb-8">

      <div>

        <h1 className="text-4xl font-bold">

          Dashboard

        </h1>

        <p className="text-gray-500 mt-2">

          Welcome back 👋

        </p>

      </div>

      <div className="flex gap-4">

        <Bell />

        <Calendar />

      </div>

    </div>
  );
}