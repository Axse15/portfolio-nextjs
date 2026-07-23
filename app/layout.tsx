import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import AuroraBackground from "@/components/ui/AuroraBackground";
import ThemeProvider from "@/components/ui/ThemeProvider";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fazli | Full Stack Developer",
  description:
    "Portfolio Full Stack Developer Laravel, Next.js, TypeScript, Flutter dan MySQL.",
  keywords: [
    "Laravel",
    "Next.js",
    "Portfolio",
    "Full Stack Developer",
    "Flutter",
    "TypeScript",
  ],
  authors: [
    {
      name: "Fazli",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        <ThemeProvider>
          <AuroraBackground />

          <ScrollProgress />

          <Navbar />

          <main className="relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
