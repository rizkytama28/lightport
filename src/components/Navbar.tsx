// Mengimpor hook dari React, ikon dari lucide-react, dan motion dari framer-motion
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = ["home", "about", "projects", "skills", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State untuk menu mobile

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

  // Varian animasi untuk menu mobile
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.3 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`font-bold text-xl transition-colors ${isScrolled ? 'text-[#0d9488]' : 'text-white'}`}
        >
          Rizkytama David
        </motion.a>
        
        {/* Navigasi Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <motion.ul
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex gap-2 text-sm font-medium"
          >
            {sections.slice(1).map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setIsOpen(false)}
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
          
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="inline-block rounded-lg px-6 py-3 font-semibold text-white transition-spring duration-300 bg-[#0d9488] hover:bg-[#fb923c]/90 hover:scale-105"
          >
            Get In Touch
          </motion.a>
        </div>

        {/* Tombol Menu Mobile */}
        <div className="md:hidden">
          <motion.button 
            onClick={() => setIsOpen(!isOpen)}
            className={`relative z-50 transition-colors ${isScrolled && !isOpen ? 'text-[#334155]' : 'text-white'}`}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* Panel Menu Mobile dengan Animasi */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden absolute top-0 left-0 right-0 pt-16 bg-white shadow-lg"
          >
            <ul className="flex flex-col items-center gap-4 p-6">
              {sections.slice(1).map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => setIsOpen(false)} // Tutup menu saat link diklik
                    className={`px-4 py-2 rounded-md w-full text-center transition-colors text-lg font-medium ${
                      active === item
                        ? "bg-[#0d9488] text-white"
                        : "text-[#334155] hover:bg-slate-100"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" onClick={() => setIsOpen(false)} className="mt-4 inline-block rounded-lg px-8 py-3 font-semibold text-white transition-all duration-300 bg-[#0d9488] hover:bg-[#fb923c]/90">
                  Get In Touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
