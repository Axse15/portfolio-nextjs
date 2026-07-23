"use client";

import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-theme mt-32 border-t">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-10 text-center md:flex-row">
        {/* Logo / Name */}

        <h2 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-2xl font-bold text-transparent">
          {profile.name}
        </h2>

        {/* Copyright */}

        <p className="text-theme-muted text-sm md:text-base">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
