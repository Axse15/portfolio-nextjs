export interface Profile {
  name: string;
  nickname: string;
  role: string;
  description: string;

  avatar: string;

  email: string;
  phone: string;
  location: string;

  github: string;
  linkedin: string;
  instagram: string;

  resume: string;
}

export interface Skill {
  name: string;

  icon: string;

  category: "Frontend" | "Backend" | "Mobile" | "Database" | "Tools";

  level: number;
}

export interface Project {
  title: string;

  description: string;

  image: string;

  technologies: string[];

  github: string;

  demo: string;

  featured: boolean;

  status: "Completed" | "Development";
}

export interface Certificate {
  title: string;

  issuer: string;

  year: string;

  image: string;
}

export interface TimelineItem {
  year: string;

  title: string;

  subtitle: string;

  description: string;

  color: string;
}

export interface Statistic {
  title: string;

  value: string;
}
