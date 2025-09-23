// / Mengimpor framer-motion untuk animasi, ikon, data, dan komponen Section
import { motion } from "framer-motion";
import { Github, Link as LinkIcon } from "lucide-react";
import { projects } from "../data/site";
import Section from "./Section";

// / Varian animasi untuk kontainer grid
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // / Jeda 0.2 detik antara setiap kartu
    },
  },
};

// / Varian animasi untuk setiap item (kartu)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 15,
    } as const,
  },
};

export default function Projects() {
  return (
    <Section id="projects">
      <div className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* / Judul Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#334155] tracking-tight">
              Projects
            </h2>
            <div className="mt-4 w-24 h-1 bg-[#0d9488] mx-auto rounded"></div>
          </div>

          {/* / REVISI: Grid sekarang menggunakan motion.div dengan varian animasi */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              // / REVISI: Setiap kartu sekarang adalah motion.div
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                }}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
              >
                {/* / Menambahkan thumbnail proyek */}
                {project.thumbnail && (
                  <div className="aspect-w-4 aspect-h-3 bg-slate-200">
                    <img 
                      src={project.thumbnail} 
                      alt={`Thumbnail untuk ${project.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-[#334155] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-[#0d9488]/10 text-[#0d9488] text-xs font-semibold px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-200 flex items-center gap-4">
                    {project.repo && ( <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-[#0d9488] transition-colors"> <Github size={20} /> <span>Kode</span> </a> )}
                    {project.link && ( <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-[#0d9488] transition-colors"> <LinkIcon size={20} /> <span>Live Demo</span> </a> )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
