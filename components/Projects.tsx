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
    <section id="projects" className="relative overflow-hidden py-32 px-6">
      {/* Background */}

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-5xl font-black tracking-[4px] text-cyan-500 dark:text-cyan-300 lg:text-6xl">
            Project Saya
          </p>

          <p className="text-theme-muted mx-auto mt-6 max-w-3xl text-lg leading-8">
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
          className="glass card-theme mt-24 overflow-hidden rounded-3xl"
        >
          <div className="grid lg:grid-cols-2">
            {/* IMAGE */}

            <div className="group relative h-[420px] overflow-hidden">
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent dark:from-slate-950 dark:via-slate-950/20" />

              <div className="absolute right-6 top-6 rounded-full bg-yellow-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
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
                className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
              >
                <div className="glass card-theme border-theme flex items-center gap-3 rounded-full border px-6 py-3 text-theme">
                  View Project
                  <FaArrowRight />
                </div>
              </motion.div>
            </div>

            {/* CONTENT */}
            {/* CONTENT */}

            <div className="flex flex-col justify-center p-10 lg:p-14">
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

              <h3 className="mt-6 text-4xl font-black text-theme">
                {featuredProject.title}
              </h3>

              <p className="text-theme-muted mt-6 leading-8">
                {featuredProject.description}
              </p>

              <div className="border-theme my-8 border-t" />

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

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass card-theme border-theme flex items-center gap-3 rounded-2xl border px-7 py-4 font-semibold text-theme transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400"
                >
                  <FaGithub />
                  Source Code
                </Link>

                <Link
                  href={featuredProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Other Projects */} {/* Other Projects */}
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
          className="mt-16"
        >
          <h3 className="text-theme mb-10 text-3xl font-bold">More Projects</h3>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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
                className="glass card-theme hover-card group overflow-hidden rounded-3xl"
              >
                {/* Image */}

                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
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

                <div className="p-6">
                  <h4 className="text-theme text-2xl font-bold">
                    {project.title}
                  </h4>

                  <p className="text-theme-muted mt-4 line-clamp-3 leading-7">
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

                  <div className="mt-8 flex items-center justify-between">
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
                      className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
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
