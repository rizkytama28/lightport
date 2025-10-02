
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
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } as const },
  exit: { opacity: 0, scale: 0.95 },
};

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } as const },
};

export default function ProjectModal({ project, onClose, onNext, onPrev }: ProjectModalProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    if (project) {
      setIsImageLoaded(false);
    }
  }, [project]);

  const handlePrevClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onPrev();
  };

  const handleNextClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNext();
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="relative w-full max-w-4xl flex items-center justify-center">
            {/* Navigation Buttons */}
            <button onClick={handlePrevClick} className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 text-slate-700 hover:bg-white transition-colors">
              <ArrowLeft size={28} />
            </button>
            <button onClick={handleNextClick} className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 text-slate-700 hover:bg-white transition-colors">
              <ArrowRight size={28} />
            </button>

            <motion.div
              variants={modalVariants}
              className="bg-white rounded-lg shadow-xl w-full h-[450px] flex flex-col relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button onClick={onClose} className="absolute top-3 right-3 bg-slate-100/50 rounded-full p-1 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 transition-all z-10">
                <X size={20} />
              </button>

              <div className="flex-grow overflow-y-auto">
                <div className="grid md:grid-cols-2 h-full">
                  {/* Image Preview */}
                  <div className="bg-slate-100 flex items-center justify-center relative">
                    {!isImageLoaded && (
                      <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
                    )}
                    {project.thumbnail && (
                      <img 
                        key={project.title}
                        src={project.thumbnail} 
                        alt={`Thumbnail untuk ${project.title}`}
                        className={`w-full h-full object-cover transition-opacity duration-300 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setIsImageLoaded(true)}
                      />
                    )}
                  </div>

                  {/* Project Details */}
                  <motion.div 
                    key={project.title} // Animasikan ulang saat proyek berubah
                    variants={textContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="p-8 flex flex-col"
                  >
                    <motion.h2 variants={textItemVariants} className="text-3xl font-bold text-slate-800 mb-3">{project.title}</motion.h2>
                    <motion.p variants={textItemVariants} className="text-slate-600 mb-6 flex-grow">{project.fullDescription}</motion.p>
                    
                    <motion.div variants={textItemVariants} className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-[#0d9488]/10 text-[#0d9488] text-xs font-semibold px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    <motion.div variants={textItemVariants} className="flex items-center gap-6 pt-4 border-t border-slate-200 mt-auto">
                      {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-700 hover:text-[#0d9488] transition-colors font-medium"> <Github size={20} /> <span>Source Code</span> </a>}
                      {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-700 hover:text-[#0d9488] transition-colors font-medium"> <LinkIcon size={20} /> <span>Live Demo</span> </a>}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
