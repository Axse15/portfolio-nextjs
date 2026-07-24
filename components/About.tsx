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
    <section
      id="about"
      className="relative overflow-hidden px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      {/* Background */}

      <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-cyan-500/10 blur-[90px] sm:-left-24 sm:top-20 sm:h-80 sm:w-80 sm:blur-[120px]" />

      <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px] sm:-right-20 sm:h-96 sm:w-96 sm:blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="mt-4 text-4xl font-black tracking-[2px] text-cyan-400 sm:mt-5 sm:text-5xl lg:text-6xl lg:tracking-[4px]">
            Tentang Saya
          </p>
        </motion.div>

        <div className="mt-16 grid items-center gap-14 lg:mt-24 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 relative flex justify-center"
          >
            <div className="absolute h-64 w-64 rounded-full bg-cyan-500/20 blur-[70px] sm:h-80 sm:w-80 lg:h-[430px] lg:w-[430px] lg:blur-[80px]" />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="card-theme relative rounded-full border border-cyan-500/30 p-2 backdrop-blur-xl sm:p-3"
            >
              <div className="relative h-64 w-64 overflow-hidden rounded-full sm:h-80 sm:w-80 md:h-[360px] md:w-[360px] lg:h-[430px] lg:w-[430px]">
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
            className="order-2 text-center lg:text-left"
          >
            <h3 className="text-theme text-3xl font-black sm:text-4xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h3>

            <p className="text-theme-muted mt-6 text-base leading-8 sm:text-lg sm:leading-9">
              {profile.description}
            </p>

            <p className="text-theme-muted mt-5 text-base leading-8 sm:mt-6 sm:text-lg sm:leading-9">
              Saya memiliki ketertarikan pada pengembangan aplikasi web modern
              menggunakan Laravel, Next.js, TypeScript, Flutter, Bootstrap,
              Tailwind CSS serta MySQL dengan mengutamakan performa, keamanan,
              clean code dan pengalaman pengguna yang baik.
            </p>

            {/* Info */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 sm:mt-12">
              <div className="glass card-theme rounded-3xl p-5">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-xl text-cyan-400" />

                  <div>
                    <p className="text-theme-muted text-sm">Email</p>

                    <p className="text-theme break-all font-medium">
                      {profile.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass card-theme rounded-3xl p-5">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-xl text-cyan-400" />

                  <div>
                    <p className="text-theme-muted text-sm">Phone</p>

                    <p className="text-theme font-medium">{profile.phone}</p>
                  </div>
                </div>
              </div>
              <div className="glass card-theme rounded-3xl p-5">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-xl text-cyan-400" />

                  <div>
                    <p className="text-theme-muted text-sm">Location</p>

                    <p className="text-theme font-medium">{profile.location}</p>
                  </div>
                </div>
              </div>

              <div className="glass card-theme rounded-3xl p-5">
                <div className="flex items-center gap-3">
                  <FaUserGraduate className="text-xl text-cyan-400" />

                  <div>
                    <p className="text-theme-muted text-sm">Education</p>

                    <p className="text-theme font-medium">Universitas BSI</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics */}

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-14">
              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                className="glass card-theme rounded-3xl p-5 text-center sm:p-6"
              >
                <h3 className="text-2xl font-black text-cyan-400 sm:text-3xl">
                  {projects.length}+
                </h3>

                <p className="text-theme-muted mt-2 text-sm sm:text-base">
                  Projects
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                className="glass card-theme rounded-3xl p-5 text-center sm:p-6"
              >
                <h3 className="text-2xl font-black text-cyan-400 sm:text-3xl">
                  {skills.length}+
                </h3>

                <p className="text-theme-muted mt-2 text-sm sm:text-base">
                  Technologies
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                className="glass card-theme rounded-3xl p-5 text-center sm:p-6"
              >
                <h3 className="text-2xl font-black text-cyan-400 sm:text-3xl">
                  {certificates.length}+
                </h3>

                <p className="text-theme-muted mt-2 text-sm sm:text-base">
                  Certificates
                </p>
              </motion.div>
            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-col gap-4 sm:mt-14 sm:flex-row sm:flex-wrap lg:justify-start">
              <Link
                href={profile.resume}
                target="_blank"
                className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30"
              >
                <FaDownload />
                Download CV
              </Link>

              <Link
                href="#contact"
                className="card-theme flex items-center justify-center rounded-2xl border border-cyan-500/30 px-7 py-4 font-semibold text-theme transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
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
