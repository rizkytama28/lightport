// / Mengimpor ikon, data, dan komponen Section
import { Github, Link as LinkIcon } from "lucide-react";
import { projects } from "../data/site";
import Section from "./Section";

export default function Projects() {
  return (
    // / Menggunakan <Section> untuk mengaktifkan animasi fade-in
    <Section id="projects">
      <div className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* / Judul Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#334155] tracking-tight">
              Proyek Unggulan
            </h2>
            <div className="mt-4 w-24 h-1 bg-[#0d9488] mx-auto rounded"></div>
          </div>

          {/* / Grid untuk menampilkan kartu proyek */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col"
              >
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
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-[#0d9488] transition-colors">
                        <Github size={20} /> <span>Kode</span>
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-[#0d9488] transition-colors">
                        <LinkIcon size={20} /> <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

