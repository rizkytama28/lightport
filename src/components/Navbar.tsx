// / Mengimpor hook dari React, ikon dari lucide-react, dan motion dari framer-motion
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = ["home", "about", "projects", "skills", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek untuk mengubah latar belakang navbar saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efek untuk mendeteksi section yang aktif
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActive(id);
          }
        },
        { rootMargin: "-50% 0px -50% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* / REVISI: Nama Anda dengan animasi masuk dari kiri */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`font-bold text-xl transition-colors ${isScrolled ? 'text-[#0d9488]' : 'text-white'}`}
        >
          Rizkytama David
        </motion.a>
        
        <div className="flex items-center gap-4">
          {/* / REVISI: Daftar link dengan animasi masuk dari kanan */}
          <motion.ul
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="hidden md:flex gap-2 text-sm font-medium"
          >
            {sections.slice(1).map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    active === item
                      ? "bg-[#0d9488] text-white"
                      : `hover:text-[#0d9488] ${isScrolled ? 'text-[#334155]' : 'text-slate-200 hover:text-white'}`
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </motion.ul>
          
          {/* / REVISI: Tombol "Hubungi Saya" dengan animasi masuk dari kanan */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="hidden md:inline-block rounded-lg px-6 py-3 font-semibold text-white transition-all duration-300 bg-[#0d9488] hover:bg-[#fb923c]/90 hover:scale-105"
          >
            Get In Touch
          </motion.a>
        </div>
      </nav>
    </header>
  );
}