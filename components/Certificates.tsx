"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";
console.log("Certificates:", certificates);
export default function Certificates() {
  return (
    <section id="certificates" className="py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mt-5 text-5xl font-black lg:text-6xl tracking-[4px] text-cyan-400">
            Sertifikat Saya
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {certificates.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-white">{item.title}</h3>

                <p className="mt-2 text-theme-muted">{item.issuer}</p>

                <span className="mt-4 inline-block rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                  {item.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
