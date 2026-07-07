import {
  CheckCircle,
  ClipboardList,
  Clock,
  AlertTriangle,
} from "lucide-react";

import AnalyticsCard from "./AnalyticsCard";

type Props = {
  total: number;
  completed: number;
  pending: number;
  overdue: number;
};

export default function AnalyticsGrid({
  total,
  completed,
  pending,
  overdue,
}: Props) {
  return (
    <div className="grid md:grid-cols-4 gap-6">

      <AnalyticsCard
        title="Total Tasks"
        value={total}
        color="bg-blue-600"
        icon={<ClipboardList />}
      />

      <AnalyticsCard
        title="Completed"
        value={completed}
        color="bg-green-600"
        icon={<CheckCircle />}
      />

      <AnalyticsCard
        title="Pending"
        value={pending}
        color="bg-yellow-500"
        icon={<Clock />}
      />

      <AnalyticsCard
        title="Overdue"
        value={overdue}
        color="bg-red-600"
        icon={<AlertTriangle />}
      />

    </div>
  );
}