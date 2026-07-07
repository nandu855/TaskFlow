import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

type Props = {
  completed: number;
  pending: number;
};

export default function Chart({
  completed,
  pending,
}: Props) {
  const data = [
    {
      name: "Completed",
      value: completed,
    },
    {
      name: "Pending",
      value: pending,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mt-8">

      <h2 className="text-xl font-bold mb-5">

        Productivity

      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={110}
            label
          >

            <Cell fill="#22C55E" />

            <Cell fill="#F59E0B" />

          </Pie>

          <Tooltip />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}