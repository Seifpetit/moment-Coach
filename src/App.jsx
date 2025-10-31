import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <motion.div
        className="w-32 h-32 rounded-full bg-indigo-500 flex items-center justify-center text-white text-lg font-medium shadow-lg cursor-pointer select-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [1, 0.9, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Pause 🫧
      </motion.div>
    </div>
  );
}
