export const profile = {
  name: "Rizkytama David MG",
  role: "Informatics",
  tagline: "Machine Learning Enthusiast",
  email: "rizkytama0012@gmail.com", // ganti ya
  socials: [
    { label: "GitHub", href: "https://github.com/rizkytama28" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rizkytama-david-a1197b376/" },
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
