import { motion } from "framer-motion";
// Make sure Section.tsx exists in the same folder, or update the path if it's elsewhere
import Section from "./Section";
import { profile } from "../data/site";

export default function Hero() {
  return (
    <Section id="home" className="pt-16 pb-20 sm:pt-20 sm:pb-28">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight"
        >
          {profile.name} — {profile.role}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300"
        >
          {profile.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 flex justify-center gap-3"
        >
          <a href="#projects" className="rounded-2xl px-5 py-2.5 text-sm font-medium bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90">
            Lihat Projects
          </a>
          <a href="#contact" className="rounded-2xl px-5 py-2.5 text-sm font-medium border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900">
            Kontak Saya
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
