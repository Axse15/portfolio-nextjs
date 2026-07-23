"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import ThemeToggle from "@/components/ui/ThemeToggle";

const menus = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project Saya", href: "#projects" },
  { name: "Sertifikat Saya", href: "#certificates" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = menus.map((menu) =>
        document.querySelector(menu.href)
      );

      sections.forEach((section, index) => {
        if (!section) return;

        const top = section.getBoundingClientRect().top;

        if (top <= 120 && top >= -400) {
          setActive(menus[index].name);
        }
      });
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-theme border-b bg-white/75 backdrop-blur-xl dark:bg-slate-950/80"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex h-20 items-center justify-between">
        {/* Logo */}

        <Link
          href="#home"
          className="text-2xl font-black tracking-wide text-theme"
        >
          Fazli
          <span className="text-cyan-500 dark:text-cyan-300">.</span>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 lg:flex">
          {menus.map((menu) => (
            <Link
              key={menu.name}
              href={menu.href}
              className={`relative text-sm font-semibold transition-all duration-300 ${
                active === menu.name
                  ? "text-cyan-500 dark:text-cyan-300"
                  : "text-theme-muted hover:text-theme"
              }`}
            >
              {menu.name}

              {active === menu.name && (
                <motion.span
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-cyan-500 dark:bg-cyan-300"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl p-2 text-theme transition hover:bg-slate-200 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Toggle Menu"
          >
            {open ? (
              <HiX size={30} />
            ) : (
              <HiOutlineMenuAlt3 size={30} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="card-theme border-theme border-t shadow-xl lg:hidden"
          >
            <div className="flex flex-col p-6">
              {menus.map((menu) => (
                <Link
                  key={menu.name}
                  href={menu.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-4 transition-all duration-300 ${
                    active === menu.name
                      ? "bg-cyan-500/10 text-cyan-500 dark:text-cyan-300"
                      : "text-theme hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {menu.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}