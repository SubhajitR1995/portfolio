// Edit this file to customize your portfolio content.

export const profile = {
  name: "Subhajit Roy",
  role: "Software Engineer — WordPress",
  tagline:
    "Web developer with 4+ years of experience building fast, responsive, and maintainable WordPress websites and custom solutions.",
  location: "Kolkata, India",
  email: "subhajit.roy69@gmail.com",
  phone: "+91 70034 20681",
  socials: {
    github: "https://github.com/SubhajitR1995",
    linkedin: "https://www.linkedin.com/in/subhajit-roy-2ab436bb/",
  },
};

export const about = {
  paragraphs: [
    "I'm a Software Engineer specializing in WordPress, with 4+ years of experience turning designs and ideas into polished, production-ready websites. Currently at Webskitters Technology Solutions Pvt. Ltd.",
    "I focus on clean, maintainable code, responsive layouts, performance, and great user experience — from custom themes and plugins to full client websites.",
  ],
  highlights: [
    { label: "Years experience", value: "4+" },
    { label: "Projects delivered", value: "20+" },
    { label: "Current role", value: "WordPress Engineer" },
  ],
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

// NOTE: Adjust the periods/roles below to match your actual history.
export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer — WordPress",
    company: "Webskitters Technology Solutions Pvt. Ltd.",
    period: "2023 — Present",
    description:
      "Develop and maintain custom WordPress themes, plugins, and full client websites. Focus on performance, responsive design, and clean, scalable code.",
  },
  {
    role: "Web Developer",
    company: "Webskitters Technology Solutions Pvt. Ltd.",
    period: "2021 — 2023",
    description:
      "Built responsive websites and landing pages, implemented designs into pixel-perfect, cross-browser layouts, and collaborated with design and QA teams.",
  },
];

export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "WordPress Development",
    description:
      "End-to-end WordPress websites — from setup and configuration to launch, built for performance and easy maintenance.",
  },
  {
    title: "Custom Themes & Plugins",
    description:
      "Bespoke themes and plugins tailored to your brand and requirements, with clean, standards-compliant code.",
  },
  {
    title: "Responsive & Pixel-Perfect UI",
    description:
      "Designs translated into responsive, cross-browser layouts that look sharp on every device.",
  },
  {
    title: "Performance & SEO",
    description:
      "Speed optimization, clean markup, and on-page SEO fundamentals to help your site rank and load fast.",
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Webskitters",
    description:
      "Corporate website for a leading web development & digital agency, built and maintained on WordPress.",
    tags: ["WordPress", "PHP", "Responsive"],
    liveUrl: "https://www.webskitters.com/",
  },
  {
    title: "Webskitters Academy",
    description:
      "Education and training platform website featuring courses, enrollment, and a content-rich layout.",
    tags: ["WordPress", "PHP", "LMS"],
    liveUrl: "https://www.webskittersacademy.in/",
  },
  {
    title: "Military Graphics",
    description:
      "Brand and product website with custom design and WordPress development tailored to the client's needs.",
    tags: ["WordPress", "Custom Theme", "SEO"],
    liveUrl: "https://militarygraphics.com/",
  },
  {
    title: "Greenleaf Houston",
    description:
      "Business website built on WordPress with a clean, modern, and fully responsive design.",
    tags: ["WordPress", "PHP", "Responsive"],
    liveUrl: "https://greenleafhouston.com/",
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "WordPress",
    items: ["Custom Themes", "Plugin Development", "Elementor", "WooCommerce", "ACF"],
  },
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Responsive Design"],
  },
  {
    category: "Backend & Tools",
    items: ["PHP", "MySQL", "Git", "REST APIs", "cPanel", "SEO"],
  },
];
