type Props = {
  priority: string;
};

export default function PriorityBadge({
  priority,
}: Props) {
  const color =
    priority === "High"
      ? "bg-red-500"
      : priority === "Medium"
      ? "bg-yellow-500"
      : "bg-green-500";

  return (
    <span
      className={`${color} text-white px-3 py-1 rounded-full text-sm`}
    >
      {priority}
    </span>
  );
}