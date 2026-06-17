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
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
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
