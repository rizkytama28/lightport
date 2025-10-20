
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/site";
import type { Project } from "../data/site";
import Section from "./Section";
import ProjectModal from "./ProjectModal";



const getCardSpan = (project: Project) => {
  if (project.title === "E-Katalog Pempek Bhayangkara") return "md:col-span-2 md:row-span-2";
  if (project.title === "Menu Digital Waroeng Banyuwangi" || project.title === " Aplikasi Prediksi Harga Rumah Yogyakarta") return "md:col-span-2";
  return "md:col-span-1";
};

const getCardOrder = (project: Project) => {
  if (project.title === "E-Katalog Pempek Bhayangkara") return "order-first";
  return "";
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleNext = () => {
    if (selectedProject) {
      const currentIndex = projects.findIndex(p => p.title === selectedProject.title);
      const nextIndex = (currentIndex + 1) % projects.length;
      setSelectedProject(projects[nextIndex]);
    }
  };

  const handlePrev = () => {
    if (selectedProject) {
      const currentIndex = projects.findIndex(p => p.title === selectedProject.title);
      const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
      setSelectedProject(projects[prevIndex]);
    }
  };

  return (
    <Section id="projects">
      <div className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 tracking-tight">
              Projects
            </h2>
            <div className="mt-4 w-24 h-1 bg-teal-500 mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[20rem]">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                layoutId={`card-${project.title}`}
                onClick={() => openModal(project)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className={`relative rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 ${getCardSpan(project)} ${getCardOrder(project)}`}
              >
                <motion.img
                  layoutId={`image-${project.title}`}
                  src={project.thumbnail}
                  alt={`Thumbnail for ${project.title}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-slate-200 mt-1">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={closeModal}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </AnimatePresence>
    </Section>
  );
}