// / Mengimpor framer-motion untuk animasi yang lebih kompleks
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { profile } from "../data/site";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const animatedHeadlines = profile.headlines.flatMap((text) => [text, 2000]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
      {/* / REVISI #1: Background Image & Overlay dengan animasi fade-in */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <img src="/bg.jpg" alt="Workspace" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>
      
      {/* / Konten Hero */}
      <div className="relative z-10 px-4">
        {/* / REVISI #2: Judul masuk dari kiri */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          Hello, I'm {profile.name}
        </motion.h1>
        
        {/* / REVISI #2: TypeAnimation masuk dari kanan */}
        <motion.div
          className="text-xl sm:text-2xl md:text-3xl text-slate-300"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        >
          <TypeAnimation sequence={animatedHeadlines} wrapper="span" cursor={true} repeat={Infinity}/>
        </motion.div>
        
        {/* / Tombol masuk dari bawah */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
        >
          <a 
            href="#projects" 
            className="inline-block rounded-lg px-6 py-3 font-semibold text-white transition-all duration-300 bg-[#0d9488] hover:bg-[#fb923c] hover:scale-105"
          >
            Lihat Proyek Saya
          </a>
        </motion.div>
      </div>

      {/* / Indikator Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="w-8 h-8 animate-bounce"/>
        </a>
      </div>
    </section>
  );
}

