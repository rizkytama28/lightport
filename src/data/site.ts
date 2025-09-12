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
    title: "Menu Digital Waroeng Banyuwangi",
    description: "Menu Digital dengan fitur CRUD dan Admin Dashboard.",
    tags: ["PHP", "CSS", "HTML"],
    repo: "https://github.com/rizkytama28/Menu-Digital_Waroeng-Banyuwangi",
  },
  {
    title: "Prediksi Harga Rumah Di Yogyakarta",
    description: "Website Prediksi Harga Rumah dengan Algoritma Random Forest.",
    tags: ["Phyton","Forecasting", "Machine Learning" , "Pandas", "Numpy"],
    link: "https://yourdemo.vercel.app",
    repo: "https://github.com/rizkytama28/Prediksi-Harga-Rumah-Yogyakarta",
  },
];

export const skills = {
  main: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind"],
  tools: ["Git", "Vite", "REST API", "Figma", "Framer Motion"],
};
