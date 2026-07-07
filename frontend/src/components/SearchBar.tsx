import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (
    value: string
  ) => void;
};

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative">

      <Search
        className="absolute left-4 top-4 text-gray-400"
      />

      <input
        className="w-full rounded-xl border p-4 pl-12 shadow"
        placeholder="Search tasks..."
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
      />

    </div>
  );
}