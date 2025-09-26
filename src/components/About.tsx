import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import Resume from "./Resume";
import { X, Download } from "lucide-react";
import { profile } from "../data/site";
import PixelTransition from "./PixelTransition";

// Data untuk Tab
const tabs = [
  { id: "about", label: "About Me" },
  { id: "education", label: "Education" },
  { id: "hobbies", label: "Hobbies" },
];

// Varian animasi untuk konten tab
const tabContentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export default function About() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // Efek untuk menutup modal dengan tombol Escape
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsResumeOpen(false);
      }
    };

    if (isResumeOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isResumeOpen]);

  return (
    <Section id="about">
      <div className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#334155] tracking-tight">
              About Me
            </h2>
            <div className="mt-4 w-24 h-1 bg-[#0d9488] mx-auto rounded"></div>
          </div>

          <motion.div 
            className="grid md:grid-cols-5 gap-16 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* Kolom Gambar dengan Efek Transisi Piksel */}
            <motion.div 
              className="md:col-span-2"
              variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <PixelTransition
                firstContent={(
                  <img 
                    src="/profile.jpg"
                    alt="Foto Profil Rizky Tama"
                    className="w-full h-full object-cover"
                  />
                )}
                secondContent={(
                  <img 
                    src="/foto.jpg"
                    alt="Foto Alternatif"
                    className="w-full h-full object-cover"
                  />
                )}
                className="w-full h-auto rounded-lg shadow-lg border-0"
                pixelColor="#000000ff"
                gridSize={10}
                animationStepDuration={0.4}
              />
            </motion.div>

            {/* Kolom Teks dengan Sistem Tab */}
            <motion.div 
              className="md:col-span-3"
              variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Tab Buttons */}
              <div className="flex border-b border-slate-200 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative py-2 px-4 text-lg font-medium transition-colors ${
                      activeTab === tab.id ? "text-[#0d9488]" : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="about-active-pill"
                        className="absolute inset-x-0 bottom-[-1px] h-[3px] bg-[#0d9488]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6 text-lg text-slate-600 leading-relaxed"
                >
                  {activeTab === "about" && <p>{profile.bio}</p>}
                  {activeTab === "education" && <p>An Informatics graduate from Amikom University of Yogyakarta, currently focusing on developing skills in Data and Machine Learning.</p>}
                  {activeTab === "hobbies" && <p>In my free time, I enjoy traveling to new places, reading, and exploring technologies beyond the data science field.</p>}
                </motion.div>
              </AnimatePresence>

              <div className="mt-8">
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition-all duration-300 bg-[#0d9488] hover:bg-[#fb923c]/90 hover:scale-105"
                >
                  <Download size={20} />
                  View Resume
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modal untuk Resume */}
      {isResumeOpen && (
        <div className="fixed inset-0 bg-black/70 z-[9999] flex justify-center items-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full h-full max-w-4xl max-h-[90vh] bg-white overflow-y-auto rounded-lg"
          >
            <Resume />
            <button
              onClick={() => setIsResumeOpen(false)}
              className="absolute top-2 right-2 text-slate-500 bg-white/50 rounded-full p-2 hover:bg-slate-200 transition-colors"
              aria-label="Tutup Resume"
            >
              <X size={24} />
            </button>
          </motion.div>
        </div>
      )}
    </Section>
  );
}