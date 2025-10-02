
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/site";
import Section from "./Section";
import ProjectModal from "./ProjectModal"; // Impor komponen modal

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

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
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedProjectIndex(index);
  const closeModal = () => setSelectedProjectIndex(null);

  const handleNext = () => {
    if (selectedProjectIndex !== null) {
      setSelectedProjectIndex((selectedProjectIndex + 1) % projects.length);
    }
  };

  const handlePrev = () => {
    if (selectedProjectIndex !== null) {
      setSelectedProjectIndex((selectedProjectIndex - 1 + projects.length) % projects.length);
    }
  };
  
  const selectedProject = selectedProjectIndex !== null ? projects[selectedProjectIndex] : null;

  return (
    <Section id="projects">
      <div className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#334155] tracking-tight">
              Projects
            </h2>
            <div className="mt-4 w-24 h-1 bg-[#0d9488] mx-auto rounded"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                }}
                className="bg-slate-50 border border-slate-200 rounded-lg shadow-sm overflow-hidden flex flex-col h-full group cursor-pointer"
                onClick={() => openModal(index)}
              >
                {project.thumbnail && (
                  <div className="aspect-w-4 aspect-h-3 bg-slate-200 overflow-hidden">
                    <img 
                      src={project.thumbnail} 
                      alt={`Thumbnail untuk ${project.title}`}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
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
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject}
        onClose={closeModal}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </Section>
  );
}