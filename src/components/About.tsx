import { motion } from "framer-motion";
import Section from "./Section"; // Pakai Section utama, bukan bikin ulang

export default function About() {
  return (
    <Section id="about" title="About Me" className="py-16">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        {/* Foto + LinkedIn */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start min-w-[160px]"
        >
          <img
            src="/profile.jpg"
            alt="Foto Graham Rizky Tama"
            className="w-65 aspect-square rounded-full object-cover border-4 border-gray-300 dark:border-gray-700"
          />

        </motion.div>

        {/* Teks About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 pl-0 md:pl-8"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
           Rizkytama David is an Informatics graduate from Universitas Amikom Yogyakarta, currently developing expertise in Data Analytics. He has professional experience as an External Supervisor at Waroeng Banyuwangi Selomartani, where he contributes to operational oversight and strategic improvements.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
           David is deeply interested in exploring the Food & Beverage (F&B) sector, Machine Learning, and Analytical Thinking.

          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Passionate about data-driven decision making, predictive modeling, and applying technology to solve real-world challenges.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
