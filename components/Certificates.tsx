"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";

console.log("Certificates:", certificates);

export default function Certificates() {
  return (
    <section
      id="certificates"
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
            Sertifikat Saya
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-2 lg:gap-8 xl:mt-20 xl:grid-cols-4">
          {certificates.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group card-theme overflow-hidden rounded-3xl border border-cyan-500/20 backdrop-blur-xl"
            >
              {/* Image */}

              <div className="relative h-56 overflow-hidden sm:h-60 lg:h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}

              <div className="p-5 sm:p-6">
                <h3 className="text-theme line-clamp-2 text-lg font-bold">
                  {item.title}
                </h3>

                <p className="text-theme-muted mt-2 text-sm sm:text-base">
                  {item.issuer}
                </p>

                <span className="mt-4 inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400 dark:text-cyan-300">
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
