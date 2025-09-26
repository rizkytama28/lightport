// / Mendefinisikan data profil utama Anda
export const profile = {
  name: "Rizkytama David MG",
  role: "Informatics Graduate | Data Science",
  email: "rizkytama0012@gmail.com",
  // / Bio singkat yang diambil dari CV baru Anda
  bio: "Rizkytama David is an Informatics graduate from Universitas Amikom Yogyakarta, currently on an intensive journey to become an End-to-End Data Professional, mastering skills across Data Engineering, Machine Learning, and Cloud Infrastructure. He has professional experience as an External Supervisor at Waroeng Banyuwangi Selomartani, where he contributes to operational oversight and strategic improvements.\n\nPassionate about data-driven decision making, predictive modeling, and applying a full-stack data perspective to create impactful technology.",
  headlines: [
    'Exploring Data Analytics.',
    'Passionate about Data Science.',
    'Solving real-world challenges with technology.',
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/rizkytama28" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rizkytama-david-a1197b376/" },
  ],
};

// / Mendefinisikan tipe data untuk Proyek
export type Project = {
  title: string;
  description: string;
  tags: string[];
  thumbnail?: string;
  link?: string;
  repo?: string;
};

// / Daftar proyek Anda (tidak berubah)
export const projects: Project[] = [
  {
    title: "Menu Digital Waroeng Banyuwangi",
    description: "Menu Digital dengan fitur CRUD dan Admin Dashboard.",
    tags: ["PHP", "CSS", "HTML"],
    thumbnail: "./bg.jpg", // / Ganti dengan path gambar Anda
    repo: "https://github.com/rizkytama28/Menu-Digital_Waroeng-Banyuwangi",
    link: "#",
  },
  {
    title: "Prediksi Harga Rumah Di Yogyakarta",
    description: "Website Prediksi Harga Rumah dengan Algoritma Random Forest.",
    tags: ["Python","Forecasting", "Machine Learning" , "Pandas", "Numpy"],
    thumbnail: "./bg.jpg", // / Ganti dengan path gambar Anda
    repo: "https://github.com/rizkytama28/Prediksi-Harga-Rumah-Yogyakarta",
    link: "#",
  },
];

// / Struktur data baru untuk Keahlian yang dikategorikan
export type SkillCategory = {
  category: string;
  skills: string[];
}

// / Daftar Keahlian baru sesuai CV
export const skills: SkillCategory[] = [
  {
    category: "Data & IT",
    skills: ["Python Programming", "Exploratory Data Analysis", "Deep Learning", "Data Processing", "Basic Web Development"]
  },
  {
    category: "Business & Management",
    skills: ["Operational Management", "Business Oversight", "Financial Monitoring"]
  },
  {
    category: "Soft Skills",
    skills: ["Analytical Thinking", "Problem Solving"]
  }
];

// / Struktur data baru untuk Pengalaman Kerja
export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string[];
};

// / Daftar Pengalaman Kerja baru sesuai CV
export const experiences: Experience[] = [
  {
    company: "Waroeng Banyuwangi Selomartani",
    role: "External Supervisor",
    period: "Juli 2025 - Sekarang",
    description: [
      "Mengawasi dan mengontrol jalannya operasional rumah makan agar sesuai dengan SOP.",
      "Memantau kas harian dan omzet.",
      "Memberikan laporan singkat dan rekomendasi perbaikan kepada manajemen.",
    ]
  },
  {
    company: "Klaten, Jawa Tengah",
    role: "Volunteer Kemanusiaan Krisis Air Bersih",
    period: "September 2023 - Januari 2024",
    description: [
      "Berpartisipasi dalam pendistribusian air bersih bagi masyarakat terdampak kekeringan.",
      "Bekerja sama dengan organisasi kemanusiaan (MDMC) dan komunitas pemuda lokal.",
      "Mendukung koordinasi lapangan untuk memastikan bantuan sampai kepada warga yang membutuhkan.",
    ]
  }
];

