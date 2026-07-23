"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mt-5 text-5xl font-black tracking-[4px] text-cyan-400 lg:text-6xl">
            Contact
          </p>
        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}

          <div className="space-y-6">
            <div className="glass card-theme rounded-3xl p-8">
              <h3 className="text-theme text-2xl font-bold">Get In Touch</h3>

              <p className="text-theme-muted mt-5 leading-8">
                Jika tertarik bekerja sama atau berdiskusi mengenai project,
                silakan hubungi saya melalui email atau media sosial di bawah
                ini.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/10">
                    <FaEnvelope className="text-cyan-500 dark:text-cyan-300" />
                  </div>

                  <span className="text-theme font-medium">
                    {profile.email}
                  </span>
                </div>

                <div className="flex gap-5 pt-2">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/20 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500/10"
                  >
                    <FaGithub className="text-theme text-2xl hover:text-cyan-500 dark:hover:text-cyan-300" />
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/20 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500/10"
                  >
                    <FaLinkedin className="text-theme text-2xl hover:text-cyan-500 dark:hover:text-cyan-300" />
                  </a>

                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/20 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500/10"
                  >
                    <FaInstagram className="text-theme text-2xl hover:text-cyan-500 dark:hover:text-cyan-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}

          <form className="glass card-theme space-y-6 rounded-3xl p-8">
            <input
              type="text"
              placeholder="Your Name"
              className="input-theme w-full rounded-xl p-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="input-theme w-full rounded-xl p-4"
            />

            <textarea
              rows={6}
              placeholder="Write your message..."
              className="input-theme w-full rounded-xl p-4"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/30"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
