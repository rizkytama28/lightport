import { profile, experiences, skills } from "../data/site";
import { Mail, Phone, Linkedin, Download } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

// Varian animasi untuk stagger effect
const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Resume() {
  return (
    <motion.div 
      className="bg-white text-[#334155] p-8 sm:p-12 max-w-4xl mx-auto rounded-lg shadow-2xl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header CV */}
      <header className="flex flex-col sm:flex-row justify-between items-start mb-8 pb-4 border-b-2 border-[#0d9488]">
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl font-bold text-[#0d9488]">{profile.name}</h1>
          <h2 className="text-xl font-light text-slate-600">Informatics Graduate | Data Scientist</h2>
        </motion.div>
        <motion.div variants={itemVariants} className="text-sm text-left sm:text-right mt-4 sm:mt-0">
          <a href={`mailto:${profile.email}`} className="flex items-center sm:justify-end gap-2 mb-1 hover:text-[#0d9488]">
            {profile.email} <Mail size={14} />
          </a>
          <p className="flex items-center sm:justify-end gap-2 mb-1">
            088225061797 <Phone size={14} />
          </p>
          <a href={profile.socials.find(s => s.label === 'LinkedIn')?.href} target="_blank"  rel="noopener noreferrer" className="flex items-center sm:justify-end gap-2 hover:text-[#0d9488]">
            LinkedIn  <Linkedin size={14} />
          </a>
        </motion.div>
      </header>

      {/* Konten CV */}
      <main className="grid md:grid-cols-3 gap-12">
        {/* Kolom Kiri */}
        <div className="md:col-span-2">
          <Section title="Profile">
            <motion.p variants={itemVariants} className="text-sm">{profile.bio}</motion.p>
          </Section>
          <Section title="Work Experience">
            <div className="relative border-l-2 border-slate-200 ml-2">
              {experiences.map((exp, index) => (
                <ExperienceItem 
                  key={exp.role}
                  title={exp.role}
                  company={exp.company}
                  date={exp.period} 
                  descriptionItems={exp.description} 
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </Section>
          <Section title="Education">
             <ExperienceItem 
              title="S1 Jurusan Informatika"
              company="Universitas AMIKOM Yogyakarta"
              date="2020 - 2025"
              descriptionItems={[]}
            />
          </Section>
        </div>
        {/* Kolom Kanan */}
        <div className="md:col-span-1">
           <Section title="Skills">
             {skills.map(category => (
               <div key={category.category} className="mb-6">
                 <motion.h4 variants={itemVariants} className="font-bold mb-3 text-base">{category.category}</motion.h4>
                 <motion.div variants={containerVariants} className="flex flex-wrap gap-2">
                   {category.skills.map(skill => (
                     <SkillBadge key={skill} skill={skill} />
                   ))}
                 </motion.div>
               </div>
             ))}
           </Section>
           <Section title="Certifications">
            <motion.ul variants={containerVariants} className="space-y-1 text-sm">
                <motion.li variants={itemVariants}>CCNA: Introduction to Networks</motion.li>
                <motion.li variants={itemVariants}>Bisnis Digital (Micro Skill)</motion.li>
                <motion.li variants={itemVariants}>Deep Learning Track</motion.li>
                <motion.li variants={itemVariants}>Business Analysis & Process Management</motion.li>
            </motion.ul>
          </Section>
        </div>
      </main>
      
      {/* Tombol Download */}
      <footer className="text-center mt-12 pt-4">
        <motion.a 
          variants={itemVariants}
          href="/CV.pdf"
          download
          className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition-all duration-300 bg-[#0d9488] hover:bg-[#fb923c] hover:scale-105"
        >
          <Download size={20} />
          Download PDF
        </motion.a>
      </footer>
    </motion.div>
  );
}

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <motion.section variants={itemVariants} className="mb-8">
    <h3 className="text-xl font-semibold text-[#0d9488] border-b border-slate-200 pb-1 mb-4">{title}</h3>
    <div className="text-slate-700">{children}</div>
  </motion.section>
);

const ExperienceItem = ({ title, company, date, descriptionItems, isLast }: { title: string, company: string, date: string, descriptionItems: string[], isLast?: boolean }) => (
  <motion.div variants={itemVariants} className={`relative pl-8 pb-8 ${isLast ? '' : 'border-l-2 border-transparent'}`}>
    {/* Timeline Dot */}
    <div className="absolute -left-[7px] top-1 w-4 h-4 bg-[#0d9488] rounded-full border-4 border-white"></div>
    <div className="flex justify-between items-baseline">
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm text-slate-500">{date}</p>
    </div>
    <p className="text-sm font-semibold text-slate-600 mb-2">{company}</p>
    <ul className="text-sm list-disc list-inside space-y-1">
      {descriptionItems.map(item => <li key={item}>{item}</li>)}
    </ul>
  </motion.div>
);

const SkillBadge = ({ skill }: { skill: string }) => (
  <motion.span 
    variants={itemVariants}
    className="bg-slate-200 text-slate-700 text-sm font-medium px-3 py-1 rounded-full"
  >
    {skill}
  </motion.span>
);