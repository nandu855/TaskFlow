type Props = {
  title: string;
};

export default function SectionTitle({
  title,
}: Props) {
  return (
    <h2 className="text-3xl font-bold mb-6">
      {title}
    </h2>
  );
}