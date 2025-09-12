// / Mengimpor ikon dan komponen Section
import { Code, BrainCircuit, Database, Wind, Bot } from "lucide-react";
import Section from "./Section";

const skills = [
  { name: "React", icon: <Code size={40} /> },
  { name: "Tailwind CSS", icon: <Wind size={40} /> },
  { name: "TypeScript", icon: <Code size={40} /> },
  { name: "Machine Learning", icon: <BrainCircuit size={40} /> },
  { name: "Data Analysis", icon: <Database size={40} /> },
  { name: "AI Integration", icon: <Bot size={40} /> },
];

export default function Skills() {
  return (
    // / Menggunakan <Section> untuk mengaktifkan animasi fade-in
    <Section id="skills">
      <div className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* / Judul Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#334155] tracking-tight">
              Skills
            </h2>
            <div className="mt-4 w-24 h-1 bg-[#0d9488] mx-auto rounded"></div>
          </div>

          {/* / Grid untuk menampilkan kartu keahlian */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="text-[#0d9488] mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#334155]">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

