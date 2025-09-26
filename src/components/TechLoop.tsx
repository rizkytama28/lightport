import { SiReact, SiTailwindcss, SiTypescript, SiPython, SiPhp, SiCss3, SiHtml5, SiNumpy, SiPandas } from "react-icons/si";
import Section from "./Section";
import LogoLoop, { type LogoItem } from "./LogoLoop";

// Data ikon dan nama teknologi
const technologies = [
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

// Mengubah data menjadi format yang diterima oleh LogoLoop
const logoItems: LogoItem[] = technologies.map(tech => ({
  node: (
    <div className="flex items-center gap-2">
      {tech.icon}
      <span className="font-semibold text-lg text-slate-700">{tech.name}</span>
    </div>
  )
}));

export default function TechLoop() {
  return (
    <Section id="tech">
      <div className="py-24 sm:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#334155] tracking-tight">
            Tech
          </h2>
          <div className="mt-4 w-24 h-1 bg-[#0d9488] mx-auto rounded"></div>
        </div>
        
        <LogoLoop 
          logos={logoItems} 
          speed={100} 
          logoHeight={40} 
          gap={48} 
        />
      </div>
    </Section>
  );
}
