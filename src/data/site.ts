export const profile = {
  name: "Graham",
  role: "Informatics Student",
  tagline: "Building clean, fast, and delightful web experiences.",
  email: "your_email@example.com", // ganti ya
  socials: [
    { label: "GitHub", href: "https://github.com/youruser" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/youruser" },
    { label: "X/Twitter", href: "https://twitter.com/youruser" },
  ],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Smart Notes",
    description: "Note-taking web app dengan search cepat & shortcut keyboard.",
    tags: ["React", "Vite", "Tailwind"],
    repo: "https://github.com/youruser/smart-notes",
  },
  {
    title: "Image Segmentation Demo",
    description: "Demo segmentasi gambar sederhana untuk studi komputer visi.",
    tags: ["TypeScript", "Canvas", "ML UI"],
    link: "https://yourdemo.vercel.app",
    repo: "https://github.com/youruser/segmentation-demo",
  },
];

export const skills = {
  main: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind"],
  tools: ["Git", "Vite", "REST API", "Figma", "Framer Motion"],
};
