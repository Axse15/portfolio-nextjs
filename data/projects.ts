import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "PECOR",

    description:
      "Website E-Commerce Pempek Palembang menggunakan Laravel 13 dengan fitur autentikasi, keranjang belanja, checkout, pembayaran, dashboard admin, dan laporan.",

    image: "/projects/pecor.png",

    technologies: ["Laravel 13", "Bootstrap", "MySQL", "Blade"],

    github: "#",

    demo: "#",

    status: "Completed",

    featured: true,
  },

  {
    title: "Smart RT",

    description:
      "Website administrasi RT Digital dengan role Super Admin, Pengurus RT, dan Warga.",

    image: "/projects/smart-rt.png",

    technologies: ["Laravel 13", "Bootstrap", "MySQL"],

    github: "#",

    demo: "#",

    status: "Development",

    featured: true,
  },

  {
    title: "MoneyTalk",

    description:
      "Aplikasi personal finance untuk mengelola pemasukan, pengeluaran, tabungan, dan laporan keuangan.",

    image: "/projects/moneytalk.png",

    technologies: ["Laravel", "Chart.js", "MySQL"],

    github: "#",

    demo: "#",

    status: "Completed",

    featured: false,
  },

  {
    title: "Wedding Guest App",

    description:
      "Aplikasi Flutter Firebase untuk registrasi tamu undangan, QR Code, souvenir, photobooth, dan pesan tamu.",

    image: "/projects/wedding-app.png",

    technologies: ["Flutter", "Firebase"],

    github: "#",

    demo: "#",

    status: "Completed",

    featured: false,
  },
];
