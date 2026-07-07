import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  value: number;
  color: string;
  icon: React.ReactNode;
};

export default function AnalyticsCard({
  title,
  value,
  color,
  icon,
}: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`${color} rounded-2xl p-6 shadow-xl text-white`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-80">{title}</p>

          <h1 className="text-4xl font-bold mt-2">
            {value}
          </h1>
        </div>

        <div className="text-4xl">
          {icon}
        </div>
      </div>

      <div className="flex items-center mt-6 text-sm opacity-90">
        <ArrowUpRight size={18} />
        <span className="ml-2">
          Updated just now
        </span>
      </div>
    </motion.div>
  );
}