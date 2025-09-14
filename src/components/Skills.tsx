// / Mengimpor framer-motion, ikon, dan komponen Section
import { motion } from "framer-motion";
import { Code, BrainCircuit, Database, Wind, Bot } from "lucide-react";
import Section from "./Section";

// / Varian animasi untuk kontainer grid (bisa digunakan ulang)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // / Jeda lebih cepat untuk ikon yang lebih kecil
    },
  },
};

// / Varian animasi untuk setiap item (kartu)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const skills = [
  { name: "React", icon: <Code size={40} /> },
  { name: "Tailwind CSS", icon: <Wind size={40} /> },
  { name: "TypeScript", icon: <Code size={40} /> },
  { name: "Machine Learning", icon: <BrainCircuit size={40} /> },
  { name: "Data Analysis", icon: <Database size={40} /> },
  { name: "AI Integration", icon: <Bot size={40} /> },
];

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

          {/* / REVISI: Grid sekarang menggunakan motion.div dengan varian animasi */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {skills.map((skill) => (
              // / REVISI: Setiap kartu sekarang adalah motion.div
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="text-[#0d9488] mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#334155]">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

