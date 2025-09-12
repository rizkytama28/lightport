// / Mengimpor hook dari React dan ikon dari lucide-react
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

// / Daftar section untuk navigasi
const sections = ["home", "about", "projects", "skills", "contact"];

export default function Navbar() {
  // / State untuk melacak section aktif (untuk indikator)
  const [active, setActive] = useState("home");
  // / State untuk melacak posisi scroll (untuk mengubah background navbar)
  const [isScrolled, setIsScrolled] = useState(false);
  // / REVISI FINAL: State untuk mengontrol menu mobile (buka/tutup)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // / Efek untuk mengubah latar belakang navbar saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // / Efek untuk mendeteksi section yang aktif
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
        {/* / Logo / Nama Anda */}
        <a href="#home" className={`font-bold text-xl transition-colors ${isScrolled ? 'text-[#0d9488]' : 'text-white'}`}>
          Rizkytama David
        </a>
        
        {/* / Navigasi untuk Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex gap-2 text-sm font-medium">
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
          </ul>
          <a href="#contact" className="rounded-lg px-6 py-3 font-semibold text-white transition-all duration-300 bg-[#fb923c] hover:bg-[#fb923c]/90 hover:scale-105">
            Hubungi Saya
          </a>
        </div>

        {/* / REVISI FINAL: Tombol Hamburger untuk Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`transition-colors ${isScrolled ? 'text-[#334155]' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* / REVISI FINAL: Menu Dropdown untuk Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center py-4">
            {sections.slice(1).map((item) => (
              <li key={item} className="w-full text-center">
                <a
                  href={`#${item}`}
                  // / Saat link diklik, menu akan tertutup
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 text-lg transition-colors ${
                    active === item ? 'text-white bg-[#0d9488]' : 'text-[#334155] hover:bg-slate-100'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="rounded-lg px-6 py-3 font-semibold text-white transition-all duration-300 bg-[#fb923c] hover:bg-[#fb923c]/90">
                Hubungi Saya
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

