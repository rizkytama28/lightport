import { useEffect, useState } from "react";

const sections = ["home", "about", "projects", "skills", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id);
            }
          });
        },
        { threshold: 0.5 } // aktif kalau 50% section kelihatan
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg">Graham</a>
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-6 text-sm">
            {sections.slice(1).map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`px-3 py-1 rounded-md transition 
                    ${active === item
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                    }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          
        </div>
      </nav>
    </header>
  );
}
