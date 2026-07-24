"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { skills } from "@/data/skills";

const categories = ["Frontend", "Backend", "Mobile", "Database", "Tools"];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      {/* Background */}

      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[90px] sm:-left-32 sm:h-96 sm:w-96 sm:blur-[120px]" />

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[90px] sm:-right-32 sm:h-96 sm:w-96 sm:blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="mt-4 text-4xl font-black tracking-[2px] text-cyan-500 dark:text-cyan-300 sm:mt-5 sm:text-5xl lg:text-6xl lg:tracking-[4px]">
            Skills
          </p>

          <p className="text-theme-muted mx-auto mt-5 max-w-3xl text-base leading-8 sm:mt-6 sm:text-lg">
            Beberapa teknologi yang saya gunakan dalam membangun aplikasi web,
            mobile dan backend yang modern, scalable serta mudah di-maintain.
          </p>
        </motion.div>

        {/* Category */}

        <div className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-12">
          {categories.map((category) => (
            <span
              key={category}
              className="card-theme border-theme inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm text-theme-muted transition-all duration-300 hover:border-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 sm:px-5"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Skills Grid */}

        <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:mt-20 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.45,
              }}
              whileHover={{
                y: -8,
              }}
              className="glass card-theme group rounded-3xl p-6 sm:p-7"
            >
              {/* Header */}

              <div className="flex items-start justify-between">
                <div className="card-theme border-theme flex h-14 w-14 items-center justify-center rounded-2xl border sm:h-16 sm:w-16">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={40}
                    height={40}
                  />
                </div>

                <span className="card-theme border-theme inline-flex min-w-[80px] items-center justify-center rounded-full border px-3 py-1 text-center text-xs font-medium text-theme-muted sm:min-w-[90px]">
                  {skill.category}
                </span>
              </div>

              {/* Name */}

              <h3 className="text-theme mt-5 text-xl font-bold sm:mt-6 sm:text-2xl">
                {skill.name}
              </h3>

              {/* Description */}

              <p className="text-theme-muted mt-3 text-sm leading-7">
                Digunakan untuk membangun aplikasi yang modern, responsif,
                scalable dan mudah di-maintain.
              </p>

              {/* Progress */}
              {/* Progress */}

              <div className="mt-8">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-theme-muted text-sm">Proficiency</span>

                  <span className="text-sm font-semibold text-cyan-500 dark:text-cyan-300">
                    {skill.level}%
                  </span>
                </div>

                <div className="border-theme h-2 overflow-hidden rounded-full border bg-slate-200 dark:bg-slate-800">
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1,
                      delay: index * 0.08,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  />
                </div>
              </div>

              {/* Footer */}

              <div className="mt-8 flex items-center justify-between">
                <span className="text-theme-muted text-sm">
                  {skill.category}
                </span>

                <motion.div
                  whileHover={{
                    x: 4,
                  }}
                  className="flex items-center gap-2 text-cyan-500 dark:text-cyan-300"
                >
                  <span className="text-sm font-medium">Learn More</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
