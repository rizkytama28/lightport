// / Mengimpor framer-motion, ikon-ikon relevan, data keahlian, dan komponen Section
import { motion } from "framer-motion";
import { Code, BarChart3, BrainCircuit, Database, Briefcase, ShieldCheck, TrendingUp, Search, Lightbulb, Users } from "lucide-react";
import { skills } from "../data/site";
import Section from "./Section";
import React from "react";

// / Pemetaan dari nama keahlian ke komponen ikon
const iconMap: { [key: string]: React.ReactNode } = {
  "Python Programming": <Code size={18} className="text-[#0d9488]" />,
  "Exploratory Data Analysis": <BarChart3 size={18} className="text-[#0d9488]" />,
  "Deep Learning": <BrainCircuit size={18} className="text-[#0d9488]" />,
  "Data Processing": <Database size={18} className="text-[#0d9488]" />,
  "Basic Web Development": <Code size={18} className="text-[#0d9488]" />,
  "Operational Management": <Briefcase size={18} className="text-[#0d9488]" />,
  "Business Oversight": <ShieldCheck size={18} className="text-[#0d9488]" />,
  "Financial Monitoring": <TrendingUp size={18} className="text-[#0d9488]" />,
  "Analytical Thinking": <Search size={18} className="text-[#0d9488]" />,
  "Problem Solving": <Lightbulb size={18} className="text-[#0d9488]" />,
  "Collaboration": <Users size={18} className="text-[#0d9488]" />,
};


// / Varian animasi untuk kontainer grid
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // / Jeda antar kartu dibuat sedikit lebih cepat
    },
  },
};

// / Varian animasi untuk setiap item (kartu)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  // / REVISI: Menambahkan properti transisi ke 'visible'
  visible: { 
    opacity: 1, 
    y: 0,
    // / Menggunakan tipe 'spring' untuk animasi yang lebih natural dan halus
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 15
    }
  },
} as const;

export default function Skills() {
  return (
    <Section id="skills">
      <div className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* / Judul Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#334155] tracking-tight">
              Skills
            </h2>
            <div className="mt-4 w-24 h-1 bg-[#0d9488] mx-auto rounded"></div>
          </div>

          {/* / Grid untuk menampilkan kategori keahlian dengan animasi */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {skills.map((category) => (
              // / Setiap kartu kategori dengan animasi dan efek hover
              <motion.div 
                key={category.category} 
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" // Efek shadow-xl dari Tailwind
                }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-[#0d9488] mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.skills.map(skill => (
                    // / Menampilkan ikon di samping setiap keahlian
                    <li key={skill} className="flex items-center text-slate-600">
                      {iconMap[skill] || <div className="w-[18px]"></div>}
                      <span className="ml-3">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
