"use client";

import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-theme mt-20 border-t sm:mt-24 lg:mt-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-center sm:px-6 sm:py-10 md:flex-row lg:px-8">
        {/* Logo / Name */}

        <h2 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
          {profile.name}
        </h2>

        {/* Copyright */}

        <p className="text-theme-muted text-sm leading-6 md:text-base">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
