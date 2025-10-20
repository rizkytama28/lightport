
import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ArrowLeft, ArrowRight, Github, Link as LinkIcon } from "lucide-react";
import type { Project } from "../data/site";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3, delay: 0.2 } },
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { type: 'tween', ease: 'easeOut' } as const },
};

export default function ProjectModal({ project, onClose, onNext, onPrev }: ProjectModalProps) {

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  const handleNavClick = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation();
    action();
  };

  return (
    <motion.div
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* --- Main Modal Container --- */}
      <motion.div
        layoutId={`card-${project.title}`}
        className="bg-slate-50 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* --- Image Preview --- */}
        <div className="w-full md:w-[55%] bg-slate-200 relative">
          <motion.img
            layoutId={`image-${project.title}`}
            key={project.thumbnail}
            src={project.thumbnail}
            alt={`Thumbnail for ${project.title}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* --- Project Details --- */}
        <motion.div
          key={project.title}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full md:w-[45%] p-6 md:p-8 flex flex-col overflow-y-auto"
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

      {/* --- Close Button --- */}
      <motion.button 
        onClick={onClose} 
        className="absolute top-4 right-4 bg-white/50 rounded-full p-1.5 text-white hover:bg-white/70 transition-all duration-200 z-30"
        aria-label="Close project details"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.4 } }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <X size={24} />
      </motion.button>

      {/* --- Navigation Buttons --- */}
      <motion.button 
        onClick={(e) => handleNavClick(e, onPrev)} 
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/60 rounded-full p-2 text-slate-800 hover:bg-white transition-all duration-200 z-30 backdrop-blur-sm shadow-md hover:scale-105 active:scale-95"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
        exit={{ opacity: 0, x: -20 }}
      >
        <ArrowLeft size={28} />
      </motion.button>
      <motion.button 
        onClick={(e) => handleNavClick(e, onNext)} 
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/60 rounded-full p-2 text-slate-800 hover:bg-white transition-all duration-200 z-30 backdrop-blur-sm shadow-md hover:scale-105 active:scale-95"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
        exit={{ opacity: 0, x: 20 }}
      >
        <ArrowRight size={28} />
      </motion.button>
    </motion.div>
  );
}
