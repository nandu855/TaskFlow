type Props = {
  total: number;
  completed: number;
};

export default function ProductivityScore({
  total,
  completed,
}: Props) {
  const score =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  let color = "bg-red-500";

  if (score >= 80) color = "bg-green-500";
  else if (score >= 50) color = "bg-yellow-500";

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">

      <h2 className="text-2xl font-bold">
        Productivity Score
      </h2>

      <div className="mt-5 w-full bg-gray-200 rounded-full h-5">

        <div
          className={`${color} h-5 rounded-full transition-all duration-700`}
          style={{
            width: `${score}%`,
          }}
        />

      </div>

      <h1 className="text-5xl font-bold mt-6">

        {score}%

      </h1>

      <p className="text-gray-500 mt-3">

        {completed} of {total} tasks completed

      </p>

    </div>
  );
}