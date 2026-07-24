"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaStar,
  FaCircle,
} from "react-icons/fa";

import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProject =
    projects.find((project) => project.featured) || projects[0];

  const otherProjects = projects.filter(
    (project) => project.title !== featuredProject.title,
  );

  return (
    <section
      id="projects"
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
          <p className="text-4xl font-black tracking-[2px] text-cyan-500 dark:text-cyan-300 sm:text-5xl lg:text-6xl lg:tracking-[4px]">
            Project Saya
          </p>

          <p className="text-theme-muted mx-auto mt-5 max-w-3xl text-base leading-8 sm:mt-6 sm:text-lg">
            Berikut beberapa project yang pernah saya bangun menggunakan
            Laravel, Next.js, Flutter, Firebase, TypeScript, MySQL, Bootstrap
            dan teknologi modern lainnya.
          </p>
        </motion.div>

        {/* Featured */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="glass card-theme mt-14 overflow-hidden rounded-3xl sm:mt-20 lg:mt-24"
        >
          <div className="grid lg:grid-cols-2">
            {/* IMAGE */}

            <div className="group relative h-64 overflow-hidden sm:h-80 md:h-96 lg:h-full lg:min-h-[420px]">
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent dark:from-slate-950 dark:via-slate-950/20" />

              <div className="absolute right-4 top-4 rounded-full bg-yellow-500 px-3 py-2 text-xs font-semibold text-white shadow-lg sm:right-6 sm:top-6 sm:px-4 sm:text-sm">
                <div className="flex items-center gap-2">
                  <FaStar />
                  Featured
                </div>
              </div>

              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileHover={{
                  opacity: 1,
                }}
                className="absolute inset-0 hidden items-center justify-center bg-black/40 backdrop-blur-sm lg:flex"
              >
                <div className="glass card-theme border-theme flex items-center gap-3 rounded-full border px-6 py-3 text-theme">
                  View Project
                  <FaArrowRight />
                </div>
              </motion.div>
            </div>
            {/* CONTENT */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-14">
              <div className="flex items-center gap-3">
                <FaCircle
                  className={`text-xs ${
                    featuredProject.status === "Completed"
                      ? "text-green-500"
                      : "text-yellow-500"
                  }`}
                />

                <span
                  className={`text-sm font-semibold ${
                    featuredProject.status === "Completed"
                      ? "text-green-500"
                      : "text-yellow-500"
                  }`}
                >
                  {featuredProject.status}
                </span>
              </div>

              <h3 className="text-theme mt-5 text-3xl font-black sm:mt-6 sm:text-4xl">
                {featuredProject.title}
              </h3>

              <p className="text-theme-muted mt-5 text-base leading-8 sm:mt-6">
                {featuredProject.description}
              </p>

              <div className="border-theme my-6 border-t sm:my-8" />

              <div className="flex flex-wrap gap-3">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="card-theme border-theme rounded-full border px-4 py-2 text-sm text-theme-muted transition-all duration-300 hover:border-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap">
                <Link
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass card-theme border-theme flex items-center justify-center gap-3 rounded-2xl border px-7 py-4 font-semibold text-theme transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400"
                >
                  <FaGithub />
                  Source Code
                </Link>

                <Link
                  href={featuredProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Other Projects */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
          className="mt-14 sm:mt-16"
        >
          <h3 className="text-theme mb-8 text-2xl font-bold sm:mb-10 sm:text-3xl">
            More Projects
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="glass card-theme group overflow-hidden rounded-3xl"
              >
                {/* Image */}

                <div className="relative h-52 overflow-hidden sm:h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent dark:from-slate-950 dark:via-slate-950/20" />

                  <div className="absolute left-4 top-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-500 dark:text-green-300"
                          : "bg-yellow-500/20 text-yellow-500 dark:text-yellow-300"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}

                <div className="p-5 sm:p-6">
                  <h4 className="text-theme text-xl font-bold sm:text-2xl">
                    {project.title}
                  </h4>

                  <p className="text-theme-muted mt-4 line-clamp-3 text-sm leading-7 sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="card-theme border-theme rounded-full border px-3 py-1 text-xs text-theme-muted transition-all duration-300 hover:border-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}

                    {project.technologies.length > 4 && (
                      <span className="card-theme border-theme rounded-full border px-3 py-1 text-xs text-theme-muted">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="mt-8 flex items-center justify-between gap-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-theme-muted transition-all duration-300 hover:text-cyan-500 dark:hover:text-cyan-300"
                    >
                      <FaGithub />

                      <span className="text-sm font-medium">Source</span>
                    </Link>

                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 sm:px-5"
                    >
                      Live Demo
                      <FaExternalLinkAlt className="text-xs" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
