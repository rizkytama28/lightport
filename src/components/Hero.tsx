// Mengimpor framer-motion untuk animasi
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { profile } from "../data/site";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const animatedHeadlines = profile.headlines.flatMap((text) => [text, 2000]);

  // Teks untuk dianimasikan
  const heroText = `Hello, I'm ${profile.name}`;
  const words = heroText.split(" ");

  // Varian animasi untuk kontainer (mengatur stagger)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Jeda antar kata
      },
    },
  };

  // Varian animasi untuk setiap kata
  const wordVariants = {
    hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, // Durasi animasi per kata
      },
    },
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
      {/* Background Image & Overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <img src="/bg.jpg" alt="Workspace" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>
      
      {/* Konten Hero */}
      <div className="relative z-10 px-4">
        {/* REVISI: Judul dengan animasi blur-in per kata menggunakan Framer Motion */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 flex flex-wrap justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-4" // Memberi jarak antar kata
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        
        {/* TypeAnimation masuk dari kanan */}
        <motion.div
          className="text-xl sm:text-2xl md:text-3xl text-slate-300"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        >
          <TypeAnimation sequence={animatedHeadlines} wrapper="span" cursor={true} repeat={Infinity}/>
        </motion.div>
        
        {/* Tombol masuk dari bawah */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
        >
          <a 
            href="#projects" 
            className="inline-block rounded-lg px-6 py-3 font-semibold text-white transition-all duration-300 bg-[#0d9488] hover:bg-[#fb923c] hover:scale-105"
          >
            Explore Projects
          </a>
        </motion.div>
      </div>

      {/* Indikator Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="w-8 h-8 animate-bounce"/>
        </a>
      </div>
    </section>
  );
}