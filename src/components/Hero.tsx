// Lokasi file: src/components/Hero.tsx (sesuaikan jika perlu)

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

// Komponen-komponen lokal Anda
import Section from "./Section";

// Impor data terpusat dari site.ts
// PASTIKAN PATH INI BENAR SESUAI STRUKTUR FOLDER ANDA
import { profile } from "../data/site";

export default function Hero() {
  // Secara dinamis membuat 'sequence' untuk TypeAnimation dari array 'headlines' di site.ts
  // Ini akan mengubah ['Teks 1', 'Teks 2'] menjadi ['Teks 1', 1500, 'Teks 2', 1500]
  const animatedHeadlines = profile.headlines.flatMap((text) => [text, 1500]);

  return (
    <Section id="home" className="relative pt-20 pb-28 text-center bg-[url('/bg.jpg')] bg-cover bg-center">
      {/* Lapisan overlay gelap untuk membuat teks lebih mudah dibaca */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Kontainer utama dengan animasi masuk dari Framer Motion */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Nama ditampilkan secara dinamis dari site.ts */}
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          {profile.name}
        </h1>
        
        {/* Komponen animasi mengetik dengan data dinamis */}
        <TypeAnimation
          sequence={animatedHeadlines}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
          className="mt-4 text-base sm:text-lg text-gray-200"
        />

        {/* Tombol Call-to-Action */}
        <div className="mt-8 flex justify-center gap-3">
          <a href="#projects" className="btn-invert">Lihat Projects</a>
          <a href="#contact" className="btn-invert">Kontak Saya</a>
        </div>
      </motion.div>
    </Section>
  );
}