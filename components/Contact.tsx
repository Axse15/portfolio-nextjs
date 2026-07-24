"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { profile } from "@/data/profile";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ Pesan berhasil dikirim.");

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);

      alert("❌ Terjadi kesalahan.");
    }

    setLoading(false);
  };
  return (
    <section
      id="contact"
      className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mt-4 text-4xl font-black tracking-[2px] text-cyan-400 sm:mt-5 sm:text-5xl lg:text-6xl lg:tracking-[4px]">
            Contact
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:mt-16 lg:mt-20 lg:grid-cols-2 lg:gap-12">
          {/* Contact Info */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass card-theme rounded-3xl p-6 sm:p-8">
              <h3 className="text-theme text-2xl font-bold">Get In Touch</h3>

              <p className="text-theme-muted mt-5 text-base leading-8">
                Jika tertarik bekerja sama atau berdiskusi mengenai project,
                silakan hubungi saya melalui email atau media sosial di bawah
                ini.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/10">
                    <FaEnvelope className="text-cyan-500 dark:text-cyan-300" />
                  </div>

                  <span className="text-theme break-all font-medium">
                    {profile.email}
                  </span>
                </div>

                {/* Social */}

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-theme flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/20 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500/10"
                  >
                    <FaGithub className="text-theme text-2xl transition-colors hover:text-cyan-500 dark:hover:text-cyan-300" />
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-theme flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/20 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500/10"
                  >
                    <FaLinkedin className="text-theme text-2xl transition-colors hover:text-cyan-500 dark:hover:text-cyan-300" />
                  </a>

                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-theme flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/20 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500/10"
                  >
                    <FaInstagram className="text-theme text-2xl transition-colors hover:text-cyan-500 dark:hover:text-cyan-300" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass card-theme space-y-5 rounded-3xl p-6 sm:space-y-6 sm:p-8"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="input-theme w-full rounded-xl p-4"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="input-theme w-full rounded-xl p-4"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="input-theme w-full rounded-xl p-4"
              required
            />

            <textarea
              rows={6}
              name="message"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              className="input-theme w-full rounded-xl p-4"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/30"
            >
              {loading ? "Sending..." : "Send Message"}
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
