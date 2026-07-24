"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <section id="journey" className="relative overflow-hidden px-6 py-32">
      {/* Background */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-5xl font-black tracking-[4px] text-cyan-500 dark:text-cyan-300 lg:text-6xl">
            Journey
          </p>

          <p className="text-theme-muted mx-auto mt-6 max-w-2xl text-lg">
            Perjalanan saya dalam mempelajari teknologi, membangun project, dan
            mengembangkan kemampuan sebagai Full Stack Developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Line */}
          <div className="border-theme absolute left-5 top-0 h-full border-l-2" />

          <div className="space-y-10">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                }}
                className="relative pl-16"
              >
                {/* Dot */}
                <div className="absolute left-2 top-6 h-6 w-6 rounded-full border-4 border-white bg-cyan-500 dark:border-slate-900" />

                {/* Card */}
                <div className="glass card-theme border-theme rounded-3xl border p-6">
                  <span className="text-sm font-semibold text-cyan-500 dark:text-cyan-300">
                    {item.year}
                  </span>

                  <h3 className="text-theme mt-2 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-theme-muted mt-1 text-sm font-medium">
                    {item.company}
                  </p>

                  <p className="text-theme-muted mt-4 leading-7">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
