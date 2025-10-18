
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, Github, Link as LinkIcon } from "lucide-react";
import type { Project } from "../data/site";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2, delay: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.3 } as const
  },
  exit: { 
    opacity: 0, 
    y: 30,
    transition: { type: "tween", ease: "easeIn", duration: 0.2 } as const
  },
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: 'tween', ease: 'easeOut' } as const },
};

export default function ProjectModal({ project, onClose, onNext, onPrev }: ProjectModalProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!project) return;
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev, project]);

  useEffect(() => {
    if (project) setIsImageLoaded(false);
  }, [project]);

  const handleNavClick = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation();
    action();
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* --- Main Modal Container --- */}
          <motion.div
            key={project.title}
            variants={modalVariants}
            className="bg-slate-50 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* --- Close Button --- */}
            <button 
              onClick={onClose} 
              className="absolute top-3 right-3 bg-slate-200/50 rounded-full p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-300/70 transition-all duration-200 z-20"
              aria-label="Close project details"
            >
              <X size={22} />
            </button>

            {/* --- Image Preview --- */}
            <div className="w-full md:w-[55%] h-56 md:h-auto bg-slate-200 flex items-center justify-center relative flex-shrink-0">
              {!isImageLoaded && (
                  <div className="absolute inset-0 bg-slate-200"></div>
              )}
              {project.thumbnail && (
                <motion.img
                  key={project.thumbnail}
                  src={project.thumbnail}
                  alt={`Thumbnail for ${project.title}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isImageLoaded ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  onLoad={() => setIsImageLoaded(true)}
                />
              )}
            </div>

            {/* --- Project Details --- */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="p-6 md:p-8 flex flex-col overflow-y-auto flex-grow"
            >
              <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">{project.title}</motion.h2>
              <motion.p variants={itemVariants} className="text-slate-600 mb-5 flex-grow text-sm md:text-base">{project.fullDescription}</motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-5">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-teal-100 text-teal-800 text-xs font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-x-6 gap-y-3 flex-wrap pt-4 border-t border-slate-200 mt-auto">
                {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-700 hover:text-teal-600 transition-colors font-medium text-sm"> <Github size={18} /> <span>Source Code</span> </a>}
                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-700 hover:text-teal-600 transition-colors font-medium text-sm"> <LinkIcon size={18} /> <span>Live Demo</span> </a>}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* --- Navigation Buttons (Desktop) --- */}
          <button onClick={(e) => handleNavClick(e, onPrev)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 text-slate-800 hover:bg-white transition-all duration-200 z-20 hidden md:block shadow-md hover:scale-105 active:scale-95">
            <ArrowLeft size={28} />
          </button>
          <button onClick={(e) => handleNavClick(e, onNext)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 text-slate-800 hover:bg-white transition-all duration-200 z-20 hidden md:block shadow-md hover:scale-105 active:scale-95">
            <ArrowRight size={28} />
          </button>

          {/* --- Navigation Buttons (Mobile) --- */}
          <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-20">
            <button onClick={(e) => handleNavClick(e, onPrev)} className="bg-white/90 rounded-full p-3 text-slate-800 shadow-lg">
              <ArrowLeft size={24} />
            </button>
            <button onClick={(e) => handleNavClick(e, onNext)} className="bg-white/90 rounded-full p-3 text-slate-800 shadow-lg">
              <ArrowRight size={24} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
