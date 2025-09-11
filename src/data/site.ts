export const profile = {
  name: "Rizkytama David ",
  role: "Informatics",
  email: "rizkytama0012@gmail.com", // ganti ya
  headlines: [
    'A Machine Learning Practitioner.',
    'Passionate about predictive modeling.',
    'Solving real-world challenges with technology.',
    'With a deep interest in the F&B sector.',
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/rizkytama28" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rizkytama-david-a1197b376/" },
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
