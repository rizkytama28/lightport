import { motion } from "framer-motion";
import Section from "./Section";
import { profile } from "../data/site";

export default function Hero() {
  return (
    <Section id="home" className="relative pt-20 pb-28 text-center bg-[url('/bg.jpg')] bg-cover bg-center">
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.35, ease: "easeOut" },
        }}
        whileTap={{ scale: 0.98, transition: { duration: 0.15 } }}
      >
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          {profile.name} — {profile.role}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-200">
          {profile.tagline}
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <a href="#projects" className="btn-invert">Lihat Projects</a>
          <a href="#contact" className="btn-invert">Kontak Saya</a>
        </div>
      </motion.div>
    </Section>
  );
}
