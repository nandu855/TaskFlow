type Props = {
  category: string;
};

export default function CategoryBadge({
  category,
}: Props) {
  return (
    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
      {category}
    </span>
  );
}