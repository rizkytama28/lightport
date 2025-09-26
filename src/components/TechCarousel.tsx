// Mengimpor hook, type, dan komponen yang diperlukan
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import { 
  SiReact, SiTailwindcss, SiTypescript, SiPython, SiPhp, SiCss3, SiHtml5, SiNumpy, SiPandas 
} from "react-icons/si";
import Section from "./Section";

// Definisi type untuk objek teknologi
interface Tech {
  name: string;
  icon: ReactNode;
}

// Daftar teknologi yang akan ditampilkan (dengan type)
const technologies: Tech[] = [
  { name: "React", icon: <SiReact size={40} className="text-[#61DAFB]" /> },
  { name: "TypeScript", icon: <SiTypescript size={40} className="text-[#3178C6]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-[#06B6D4]" /> },
  { name: "Python", icon: <SiPython size={40} className="text-[#3776AB]" /> },
  { name: "PHP", icon: <SiPhp size={40} className="text-[#777BB4]" /> },
  { name: "Pandas", icon: <SiPandas size={40} className="text-[#150458]" /> },
  { name: "Numpy", icon: <SiNumpy size={40} className="text-[#013243]" /> },
  { name: "CSS3", icon: <SiCss3 size={40} className="text-[#1572B6]" /> },
  { name: "HTML5", icon: <SiHtml5 size={40} className="text-[#E34F26]" /> },
];

// Definisi type untuk props AppIcon
interface AppIconProps {
  mouseX: MotionValue<number>;
  tech: Tech;
}

// Varian animasi untuk setiap ikon (untuk stagger effect)
const iconVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// Komponen Ikon individual di dalam Dock
function AppIcon({ mouseX, tech }: AppIconProps) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const effectWidth = 35;

  const scaleSync = useTransform(distance, [-effectWidth, 0, effectWidth], [1, 1.8, 1]);
  const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const grayscaleSync = useTransform(distance, [-effectWidth, 0, effectWidth], [1, 0, 1]);
  const grayscale = useSpring(grayscaleSync, { mass: 0.1, stiffness: 150, damping: 12 });
  const filter = useTransform(grayscale, (v) => `grayscale(${v})`);

  return (
    <motion.div
      ref={ref}
      variants={iconVariants} // Menerapkan varian untuk animasi masuk
      style={{ scale, filter }}
      className="cursor-pointer"
    >
      {tech.icon}
    </motion.div>
  );
}

// Komponen utama yang sekarang menjadi "Dock"
export default function TechCarousel() {
  const mouseX = useMotionValue(Infinity);

  // Varian animasi untuk kontainer dock (mengontrol staggerChildren)
  const dockVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Jeda antar animasi ikon
      },
    },
  };

  return (
    <Section id="tech">
      <div className="py-24 sm:py-32">
        <div className="text-center mb-16">
          {/* REVISI: Teks diubah ke Bahasa Inggris */}
          <h2 className="text-4xl font-bold text-[#334155] tracking-tight">
            Tech
          </h2>
          <div className="mt-4 w-24 h-1 bg-[#0d9488] mx-auto rounded"></div>
        </div>
        
        {/* Kontainer Dock: sekarang menjadi motion.div untuk mengontrol animasi stagger */}
        <motion.div
          variants={dockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          onMouseMove={(e) => mouseX.set(e.clientX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className="flex flex-wrap h-32 items-center justify-center gap-8"
        >
          {technologies.map((tech) => (
            <AppIcon mouseX={mouseX} tech={tech} key={tech.name} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
