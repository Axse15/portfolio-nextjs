"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Aurora 1 */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -80, 120, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      {/* Aurora 2 */}
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -100, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-220px] top-[100px] h-[550px] w-[550px] rounded-full bg-blue-500/20 blur-[160px]"
      />

      {/* Aurora 3 */}
      <motion.div
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -120, 80, 0],
          scale: [1, 1.3, 1, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-220px] left-1/3 h-[600px] w-[600px] rounded-full bg-purple-500/20 blur-[180px]"
      />

      {/* Aurora 4 */}
      <motion.div
        animate={{
          x: [0, -80, 120, 0],
          y: [0, 120, -80, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-180px] right-[-120px] h-[450px] w-[450px] rounded-full bg-sky-400/15 blur-[150px]"
      />
    </div>
  );
}
