type Props = {
  title: string;
  value: number;
  color: string;
};

function StatsCard({
  title,
  value,
  color,
}: Props) {
  return (
    <div
      className={`${color} rounded-xl shadow-lg p-6 text-white`}
    >
      <h3 className="text-lg">
        {title}
      </h3>

      <h1 className="text-5xl font-bold mt-3">
        {value}
      </h1>
    </div>
  );
}

export default StatsCard;