import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/Variants";
export function FloatingBadge({
  icon,
  className,
}: {
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      className={`absolute flex items-center justify-center gap-2.5 rounded-md shadow-xl shadow-black/30  ${className}`}
    >
      <span className="text-3xl">{icon}</span>
    </motion.div>
  );
}
