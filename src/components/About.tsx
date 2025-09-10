import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
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
            className="w-40 aspect-square rounded-full object-cover border-4 border-gray-300 dark:border-gray-700"
          />
          <a
            href="https://www.linkedin.com/in/rizkytama-david-a1197b376/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 transition pl-7"
          >
            <FaLinkedin size={24} />
            <span className="font-medium">LinkedIn</span>
          </a>
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
            Hello! I'm Graham Rizky Tama, a passionate web developer with expertise in
            building dynamic and responsive web applications. I love turning
            complex problems into simple, beautiful, and intuitive designs.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            With a strong foundation in JavaScript, React, and Node.js, I enjoy
            creating seamless user experiences and robust backend systems. I'm
            constantly exploring new technologies and best practices to improve
            my skills and deliver high-quality solutions.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Let's connect and collaborate on exciting projects! Feel free to
            reach out to me through the contact form or connect with me on
            LinkedIn.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
