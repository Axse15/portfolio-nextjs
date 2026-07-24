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
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 pb-16 sm:px-6 md:pt-32 lg:px-8"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-10 h-52 w-52 rounded-full bg-cyan-500/20 blur-[90px] sm:left-10 sm:top-20 sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-indigo-500/20 blur-[100px] sm:bottom-10 sm:right-10 sm:h-80 sm:w-80 sm:blur-[140px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-500 backdrop-blur-xl dark:text-cyan-300 sm:px-5 sm:text-sm"
          >
            👋 Welcome To My Portfolio
          </motion.div>

          <h2 className="text-theme-muted mt-6 text-lg font-light sm:mt-8 sm:text-xl md:text-2xl">
            Hello, I&apos;m
          </h2>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          <div className="text-theme mt-6 text-xl font-semibold sm:text-2xl md:mt-8 md:text-3xl lg:text-4xl">
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

          <p className="text-theme-muted mx-auto mt-6 max-w-xl text-base leading-7 sm:text-lg sm:leading-8 lg:mx-0 lg:mt-8">
            {profile.description}
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <Link
              href="#projects"
              className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30"
            >
              View Projects
              <FaArrowRight />
            </Link>

            <Link
              href={profile.resume}
              target="_blank"
              className="card-theme flex items-center justify-center gap-2 rounded-2xl border border-cyan-500/30 px-7 py-4 font-semibold text-theme transition-all duration-300 hover:scale-105 hover:border-cyan-400"
            >
              <FaDownload />
              Download CV
            </Link>
          </div>

          {/* Social */}

          <div className="mt-10 flex justify-center gap-4 lg:justify-start">
            <Link
              href={profile.github}
              target="_blank"
              className="card-theme flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 text-xl text-theme transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:text-cyan-500 sm:h-14 sm:w-14 sm:text-2xl"
            >
              <FaGithub />
            </Link>

            <Link
              href={profile.linkedin}
              target="_blank"
              className="card-theme flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 text-xl text-theme transition-all duration-300 hover:-translate-y-2 hover:border-blue-400 hover:text-blue-500 sm:h-14 sm:w-14 sm:text-2xl"
            >
              <FaLinkedin />
            </Link>

            <Link
              href={profile.instagram}
              target="_blank"
              className="card-theme flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 text-xl text-theme transition-all duration-300 hover:-translate-y-2 hover:border-pink-400 hover:text-pink-500 sm:h-14 sm:w-14 sm:text-2xl"
            >
              <FaInstagram />
            </Link>
          </div>

          {/* Stats */}

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 md:mt-16">
            <div className="glass card-theme rounded-3xl p-5 text-center sm:p-6">
              <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
                {projects.length}+
              </h3>

              <p className="text-theme-muted mt-2 text-sm">Major Projects</p>
            </div>

            <div className="glass card-theme rounded-3xl p-5 text-center sm:p-6">
              <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
                {skills.length}+
              </h3>

              <p className="text-theme-muted mt-2 text-sm">Technologies</p>
            </div>

            <div className="glass card-theme rounded-3xl p-5 text-center sm:p-6">
              <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
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
          className="order-1 relative flex justify-center lg:order-2"
        >
          <div className="absolute h-64 w-64 rounded-full bg-cyan-500/20 blur-[70px] sm:h-80 sm:w-80 lg:h-[430px] lg:w-[430px] lg:blur-[80px]" />

          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6,
            }}
            className="card-theme relative overflow-hidden rounded-full border border-cyan-500/30 p-2 backdrop-blur-xl sm:p-3"
          >
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-[360px] md:w-[360px] lg:h-[430px] lg:w-[430px]">
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

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="glass card-theme absolute left-0 top-6 rounded-2xl px-4 py-3 sm:top-10 sm:px-5 sm:py-4 lg:-left-5 lg:top-20 lg:rounded-3xl lg:px-6 lg:py-5"
          >
            <p className="text-theme-muted text-xs sm:text-sm">Completed</p>

            <h3 className="mt-1 text-xl font-bold text-cyan-400 sm:text-2xl lg:text-3xl">
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
            className="glass card-theme absolute bottom-6 right-0 rounded-2xl px-4 py-3 sm:bottom-10 sm:px-5 sm:py-4 lg:-right-5 lg:bottom-20 lg:rounded-3xl lg:px-6 lg:py-5"
          >
            <p className="text-theme-muted text-xs sm:text-sm">Tech Stack</p>

            <h3 className="mt-1 text-xl font-bold text-cyan-400 sm:text-2xl lg:text-3xl">
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
            className="glass card-theme absolute bottom-2 left-1/2 hidden -translate-x-1/2 rounded-3xl px-6 py-4 md:block"
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
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-cyan-500 dark:text-cyan-300 md:block"
      >
        <FaArrowDown className="text-2xl" />
      </motion.a>
    </section>
  );
}
