// / Mengimpor data baru dan ikon
import { profile, experiences, skills } from "../data/site";
import { Mail, Phone, Linkedin, Download } from "lucide-react";
import React from "react";

export default function Resume() {
  return (
    <div className="bg-white text-[#334155] p-8 max-w-4xl mx-auto rounded-lg shadow-2xl">
      {/* / Header CV */}
      <header className="flex flex-col sm:flex-row justify-between items-start mb-8 pb-4 border-b-2 border-[#0d9488]">
        <div>
          <h1 className="text-4xl font-bold text-[#0d9488]">{profile.name}</h1>
          <h2 className="text-xl font-light text-slate-600">Informatics Graduate | Data Scientist</h2>
        </div>
        <div className="text-sm text-right mt-4 sm:mt-0">
          <a href={`mailto:${profile.email}`} className="flex items-center justify-end gap-2 mb-1 hover:text-[#0d9488]">
            {profile.email} <Mail size={14} />
          </a>
          <p className="flex items-center justify-end gap-2 mb-1">
            088225061797 <Phone size={14} />
          </p>
          <a href={profile.socials.find(s => s.label === 'LinkedIn')?.href} target="_blank"  rel="noopener noreferrer" className="flex items-center justify-end gap-2 hover:text-[#0d9488]">
            LinkedIn  <Linkedin size={14} />
          </a>
        </div>
      </header>

      {/* / Konten CV */}
      <main className="grid md:grid-cols-3 gap-8">
        {/* / Kolom Kiri */}
        <div className="md:col-span-2">
          <Section title="Tentang Saya">
            <p className="text-sm">{profile.bio}</p>
          </Section>
          <Section title="Pengalaman Kerja">
            {experiences.map(exp => (
              <ExperienceItem 
                key={exp.role}
                title={exp.role}
                company={exp.company}
                date={exp.period} 
                descriptionItems={exp.description} 
              />
            ))}
          </Section>
          <Section title="Pendidikan">
            <ExperienceItem 
              title="S1 Jurusan Informatika"
              company="Universitas AMIKOM Yogyakarta"
              date="2020 - 2025"
              descriptionItems={[" "]}
            />
          </Section>
        </div>
        {/* / Kolom Kanan */}
        <div className="md:col-span-1">
           <Section title="Kemampuan">
             {skills.map(category => (
               <div key={category.category} className="mb-4">
                 <h4 className="font-bold mb-2 text-base">{category.category}</h4>
                 <ul className="list-disc list-inside space-y-1 text-sm">
                   {category.skills.map(skill => (
                     <li key={skill}>{skill}</li>
                   ))}
                 </ul>
               </div>
             ))}
           </Section>
           <Section title="Sertifikasi">
            <ul className="list-disc list-inside space-y-1 text-sm">
                <li>CCNA: Introduction to Networks</li>
                <li>Bisnis Digital (Micro Skill)</li>
                <li>Deep Learning Track</li>
                <li>Business Analysis & Process Management</li>
            </ul>
          </Section>
        </div>
      </main>
      
      {/* / Tombol Download */}
      <footer className="text-center mt-8 pt-4">
        <a 
          href="/CV.pdf" // / Pastikan nama file ini sesuai dengan yang ada di folder public
          download
          className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition-all duration-300 bg-[#0d9488] hover:bg-[#fb923c] hover:scale-105"
        >
          <Download size={20} />
          Download PDF
        </a>
      </footer>
    </div>
  );
}

// / Komponen pembantu untuk membuat section CV
const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <section className="mb-6">
    <h3 className="text-xl font-semibold text-[#0d9488] border-b border-slate-200 pb-1 mb-3">{title}</h3>
    <div className="text-slate-700">{children}</div>
  </section>
);

// / Komponen pembantu untuk item pengalaman/pendidikan
const ExperienceItem = ({ title, company, date, descriptionItems }: { title: string, company: string, date: string, descriptionItems: string[] }) => (
  <div className="mb-4">
    <div className="flex justify-between items-baseline">
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm text-slate-500">{date}</p>
    </div>
    <p className="text-sm font-semibold text-slate-600">{company}</p>
    <ul className="text-sm mt-1 list-disc list-inside space-y-1">
      {descriptionItems.map(item => <li key={item}>{item}</li>)}
    </ul>
  </div>
);

