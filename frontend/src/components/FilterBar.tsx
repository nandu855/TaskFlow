type Props = {
  filter: string;
  setFilter: (
    value: string
  ) => void;
};

export default function FilterBar({
  filter,
  setFilter,
}: Props) {
  const filters = [
    "All",
    "Pending",
    "Completed",
  ];

  return (
    <div className="flex gap-3 mt-5">

      {filters.map((item) => (
        <button
          key={item}
          onClick={() =>
            setFilter(item)
          }
          className={`px-5 py-2 rounded-xl ${
            filter === item
              ? "bg-blue-600 text-white"
              : "bg-white shadow"
          }`}
        >
          {item}
        </button>
      ))}

    </div>
  );
}