import { motion } from "framer-motion";
// Make the element draggable
<motion.div
  drag
  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
  dragSnapToOrigin={true}
  whileDrag={{ scale: 1.1, rotate: 5, cursor: "grabbing" }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
  className={`absolute flex items-center justify-center gap-2.5 rounded-md shadow-xl shadow-black/30 cursor-grab`}
>
  <span className="text-3xl">text</span>
</motion.div>;
// 