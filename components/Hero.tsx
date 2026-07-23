"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowDown,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { certificates } from "@/data/certificates";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6"
    >
      {/* Background Glow */}

      <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-[140px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-20 lg:grid-cols-2">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-500 dark:text-cyan-300 backdrop-blur-xl"
          >
            👋 Welcome To My Portfolio
          </motion.div>

          <h2 className="text-theme-muted mt-8 text-2xl font-light">
            Hello, I'm
          </h2>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-6xl font-black leading-tight lg:text-7xl"
          >
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          <div className="text-theme mt-8 text-3xl font-semibold lg:text-4xl">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Laravel Developer",
                2000,
                "Next.js Developer",
                2000,
                "Flutter Developer",
                2000,
              ]}
              repeat={Infinity}
              cursor
            />
          </div>

          <p className="text-theme-muted mt-8 max-w-xl text-lg leading-8">
            {profile.description}
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              href="#projects"
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30"
            >
              View Projects
              <FaArrowRight />
            </Link>

            <Link
              href={profile.resume}
              target="_blank"
              className="card-theme flex items-center gap-2 rounded-2xl border border-cyan-500/30 px-8 py-4 font-semibold text-theme transition-all duration-300 hover:scale-105 hover:border-cyan-400"
            >
              <FaDownload />
              Download CV
            </Link>
          </div>

          {/* Social */}

          <div className="mt-12 flex gap-5">
            <Link
              href={profile.github}
              target="_blank"
              className="card-theme flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 text-2xl text-theme transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:text-cyan-500"
            >
              <FaGithub />
            </Link>

            <Link
              href={profile.linkedin}
              target="_blank"
              className="card-theme flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 text-2xl text-theme transition-all duration-300 hover:-translate-y-2 hover:border-blue-400 hover:text-blue-500"
            >
              <FaLinkedin />
            </Link>

            <Link
              href={profile.instagram}
              target="_blank"
              className="card-theme flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 text-2xl text-theme transition-all duration-300 hover:-translate-y-2 hover:border-pink-400 hover:text-pink-500"
            >
              <FaInstagram />
            </Link>
          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="glass card-theme rounded-3xl p-6 text-center">
              <h3 className="text-3xl font-bold text-cyan-400">
                {projects.length}+
              </h3>

              <p className="text-theme-muted mt-2 text-sm">Major Projects</p>
            </div>

            <div className="glass card-theme rounded-3xl p-6 text-center">
              <h3 className="text-3xl font-bold text-cyan-400">
                {skills.length}+
              </h3>

              <p className="text-theme-muted mt-2 text-sm">Technologies</p>
            </div>

            <div className="glass card-theme rounded-3xl p-6 text-center">
              <h3 className="text-3xl font-bold text-cyan-400">
                {certificates.length}+
              </h3>

              <p className="text-theme-muted mt-2 text-sm">Certificates</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="absolute h-[430px] w-[430px] rounded-full bg-cyan-500/20 blur-[80px]" />

          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6,
            }}
            className="card-theme relative overflow-hidden rounded-full border border-cyan-500/30 p-3 backdrop-blur-xl"
          >
            <div className="relative h-[430px] w-[430px]">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                priority
                className="rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Floating Card 1 */}
          {/* Floating Card 1 */}

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="glass card-theme absolute -left-5 top-20 rounded-3xl px-6 py-5"
          >
            <p className="text-theme-muted text-sm">Completed</p>

            <h3 className="mt-1 text-3xl font-bold text-cyan-400">
              {projects.length}+
            </h3>

            <p className="text-theme-muted text-xs">Projects</p>
          </motion.div>

          {/* Floating Card 2 */}

          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="glass card-theme absolute -right-5 bottom-20 rounded-3xl px-6 py-5"
          >
            <p className="text-theme-muted text-sm">Tech Stack</p>

            <h3 className="mt-1 text-3xl font-bold text-cyan-400">
              {skills.length}+
            </h3>

            <p className="text-theme-muted text-xs">Technologies</p>
          </motion.div>

          {/* Floating Card 3 */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="glass card-theme absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-3xl px-6 py-4 lg:block"
          >
            <p className="text-theme-muted text-center text-sm">Certificates</p>

            <h3 className="text-center text-2xl font-bold text-cyan-400">
              {certificates.length}+
            </h3>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <motion.a
        href="#about"
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-500 dark:text-cyan-300"
      >
        <FaArrowDown className="text-2xl" />
      </motion.a>
    </section>
  );
}
