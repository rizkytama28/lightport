// Mengimpor framer-motion, ikon-ikon relevan, data keahlian, dan komponen Section
import { motion } from "framer-motion";
import { Code, BarChart3, BrainCircuit, Database, Briefcase, ShieldCheck, TrendingUp, Search, Lightbulb, Users } from "lucide-react";
import { skills } from "../data/site";
import Section from "./Section";
import React from "react";

// REVISI: className warna ditambahkan langsung di sini untuk memperbaiki error TypeScript
const iconMap: { [key: string]: React.ReactNode } = {
  "Python Programming": <Code size={16} className="text-[#0d9488]" />,
  "Exploratory Data Analysis": <BarChart3 size={16} className="text-[#0d9488]" />,
  "Deep Learning": <BrainCircuit size={16} className="text-[#0d9488]" />,
  "Data Processing": <Database size={16} className="text-[#0d9488]" />,
  "Basic Web Development": <Code size={16} className="text-[#0d9488]" />,
  "Operational Management": <Briefcase size={16} className="text-[#0d9488]" />,
  "Business Oversight": <ShieldCheck size={16} className="text-[#0d9488]" />,
  "Financial Monitoring": <TrendingUp size={16} className="text-[#0d9488]" />,
  "Analytical Thinking": <Search size={16} className="text-[#0d9488]" />,
  "Problem Solving": <Lightbulb size={16} className="text-[#0d9488]" />,
  "Collaboration": <Users size={16} className="text-[#0d9488]" />,
};

// Varian animasi untuk kontainer kartu
const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Varian animasi untuk setiap kartu
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    // REVISI: Menghapus `type: "spring"` untuk memperbaiki error TypeScript
    transition: { 
      stiffness: 90,
      damping: 15
    },
  },
};

// Varian animasi untuk kontainer badge di dalam kartu
const badgeContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

// Varian animasi untuk setiap badge
const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function Skills() {
  return (
    <Section id="skills">
      <div className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#334155] tracking-tight">Skills</h2>
            <div className="mt-4 w-24 h-1 bg-[#0d9488] mx-auto rounded"></div>
          </div>

          <motion.div
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {skills.map((category) => (
              <motion.div 
                key={category.category} 
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                }}
                className="bg-slate-50 border border-slate-200 p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#0d9488] mb-4">{category.category}</h3>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={badgeContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {category.skills.map(skill => (
                    <motion.span 
                      key={skill} 
                      variants={badgeVariants}
                      className="flex items-center gap-2 bg-slate-200 text-slate-700 text-sm font-medium px-3 py-1.5 rounded-full"
                    >
                      {/* REVISI: Langsung render ikon dari map, tanpa cloneElement */}
                      {iconMap[skill] || <div className="w-[16px]"></div>}
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}