"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUserGraduate,
} from "react-icons/fa";

import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { certificates } from "@/data/certificates";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-32 px-6">
      {/* Background */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="mt-5 text-5xl font-black tracking-[4px] text-cyan-400 lg:text-6xl">
            Tentang Saya
          </p>
        </motion.div>

        <div className="mt-24 grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="absolute h-[430px] w-[430px] rounded-full bg-cyan-500/20 blur-[80px]" />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="card-theme relative rounded-full border border-cyan-500/30 p-3 backdrop-blur-xl"
            >
              <div className="relative h-[430px] w-[430px] overflow-hidden rounded-full">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-theme text-4xl font-black">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h3>

            <p className="text-theme-muted mt-8 text-lg leading-9">
              {profile.description}
            </p>

            <p className="text-theme-muted mt-6 text-lg leading-9">
              Saya memiliki ketertarikan pada pengembangan aplikasi web modern
              menggunakan Laravel, Next.js, TypeScript, Flutter, Bootstrap,
              Tailwind CSS serta MySQL dengan mengutamakan performa, keamanan,
              clean code dan pengalaman pengguna yang baik.
            </p>

            {/* Info */}

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <div className="glass card-theme rounded-3xl p-5">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-cyan-400 text-xl" />

                  <div>
                    <p className="text-theme-muted text-sm">Email</p>

                    <p className="text-theme font-medium">{profile.email}</p>
                  </div>
                </div>
              </div>

              <div className="glass card-theme rounded-3xl p-5">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-cyan-400 text-xl" />

                  <div>
                    <p className="text-theme-muted text-sm">Phone</p>

                    <p className="text-theme font-medium">{profile.phone}</p>
                  </div>
                </div>
              </div>

              <div className="glass card-theme rounded-3xl p-5">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-cyan-400 text-xl" />

                  <div>
                    <p className="text-theme-muted text-sm">Location</p>

                    <p className="text-theme font-medium">{profile.location}</p>
                  </div>
                </div>
              </div>

              <div className="glass card-theme rounded-3xl p-5">
                <div className="flex items-center gap-3">
                  <FaUserGraduate className="text-cyan-400 text-xl" />

                  <div>
                    <p className="text-theme-muted text-sm">Education</p>

                    <p className="text-theme font-medium">Universitas BSI</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics */}
            {/* Statistics */}

            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                className="glass card-theme rounded-3xl p-6 text-center"
              >
                <h3 className="text-3xl font-black text-cyan-400">
                  {projects.length}+
                </h3>

                <p className="mt-2 text-theme-muted">Projects</p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                className="glass card-theme rounded-3xl p-6 text-center"
              >
                <h3 className="text-3xl font-black text-cyan-400">
                  {skills.length}+
                </h3>

                <p className="mt-2 text-theme-muted">Technologies</p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                className="glass card-theme rounded-3xl p-6 text-center"
              >
                <h3 className="text-3xl font-black text-cyan-400">
                  {certificates.length}+
                </h3>

                <p className="mt-2 text-theme-muted">Certificates</p>
              </motion.div>
            </div>

            {/* Buttons */}

            <div className="mt-14 flex flex-wrap gap-5">
              <Link
                href={profile.resume}
                target="_blank"
                className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30"
              >
                <FaDownload />
                Download CV
              </Link>

              <Link
                href="#contact"
                className="card-theme flex items-center justify-center rounded-2xl border border-cyan-500/30 px-8 py-4 font-semibold text-theme transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
