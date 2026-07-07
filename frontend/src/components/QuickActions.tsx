import {
  CheckCircle,
  Clock,
  ClipboardList,
} from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      title: "Today's Tasks",
      icon: <ClipboardList />,
    },
    {
      title: "Pending",
      icon: <Clock />,
    },
    {
      title: "Completed",
      icon: <CheckCircle />,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-5 mt-8">

      {actions.map((item) => (
        <div
          key={item.title}
          className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition"
        >
          <div className="text-blue-600 mb-4">

            {item.icon}

          </div>

          <h2 className="font-bold text-xl">

            {item.title}

          </h2>

        </div>
      ))}

    </div>
  );
}