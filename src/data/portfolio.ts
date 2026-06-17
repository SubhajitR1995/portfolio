// Edit this file to customize your portfolio content.

export const profile = {
  name: "Your Name",
  role: "Full-Stack Developer",
  tagline:
    "I build clean, fast, and accessible web applications that people love to use.",
  location: "Kolkata, India",
  email: "you@example.com",
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
};

export const about = {
  paragraphs: [
    "I'm a developer who enjoys turning ideas into polished products. I care about thoughtful UX, maintainable code, and shipping things that matter.",
    "Outside of coding, I like exploring new tech, contributing to open source, and continuously learning.",
  ],
  highlights: [
    { label: "Years experience", value: "3+" },
    { label: "Projects shipped", value: "20+" },
    { label: "Happy clients", value: "10+" },
  ],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short description of what this project does and the problem it solves.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Two",
    description:
      "A short description of what this project does and the problem it solves.",
    tags: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Three",
    description:
      "A short description of what this project does and the problem it solves.",
    tags: ["Laravel", "MySQL", "Livewire"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Laravel", "PHP", "REST APIs", "PostgreSQL", "MySQL"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Vercel", "Figma", "Linux"],
  },
];
