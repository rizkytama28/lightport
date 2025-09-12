// / Mengimpor data profil dan ikon
import { profile } from "../data/site";
import { Mail, Phone, Linkedin, Download } from "lucide-react";
import React from "react";

// / Komponen ini hanya untuk tampilan visual CV di dalam modal
export default function Resume() {
  return (
    <div className="bg-white text-[#334155] p-8 max-w-4xl mx-auto rounded-lg shadow-2xl">
      {/* / Header CV */}
      <header className="flex flex-col sm:flex-row justify-between items-start mb-8 pb-4 border-b-2 border-[#0d9488]">
        <div>
          <h1 className="text-4xl font-bold text-[#0d9488]">Rizkytama David</h1>
          <h2 className="text-xl font-light text-slate-600">Business Oversight | Data Analyst | Machine Learning</h2>
        </div>
        <div className="text-sm text-right mt-4 sm:mt-0">
          <a href={`mailto:${profile.email}`} className="flex items-center justify-end gap-2 mb-1 hover:text-[#0d9488]">
            {profile.email} <Mail size={14} />
          </a>
          <p className="flex items-center justify-end gap-2 mb-1">
            088225061797 <Phone size={14} />
          </p>
          <a href={profile.socials.find(s => s.label === 'LinkedIn')?.href} target="_blank"  rel="noopener noreferrer" className="flex items-center justify-end gap-2 hover:text-[#0d9488]">
            LinkedIn Profile <Linkedin size={14} />
          </a>
        </div>
      </header>

      {/* / Konten CV */}
      <main className="grid md:grid-cols-3 gap-8">
        {/* / Kolom Kiri */}
        <div className="md:col-span-2">
          <Section title="Ringkasan Profesional">
            <p>Lulusan Informatika dari Universitas Amikom Yogyakarta yang saat ini sedang mengembangkan keahlian di bidang Analisis Data. Memiliki pengalaman profesional sebagai Supervisor Eksternal di mana saya berkontribusi pada pengawasan operasional dan peningkatan strategis. Sangat tertarik untuk mengeksplorasi sektor F&B, Machine Learning, dan Pemikiran Analitis.</p>
          </Section>
          <Section title="Pengalaman">
            <ExperienceItem 
              title="External Supervisor"
              company="Waroeng Banyuwangi Selomartani"
              date="Juli 2025 - Sekarang" 
              description="Bertanggung jawab atas pengawasan operasional dan memberikan masukan untuk perbaikan strategis." 
            />
          </Section>
          <Section title="Pendidikan">
            <ExperienceItem 
              title="Gelar Sarjana, Informatika"
              company="Universitas AMIKOM Yogyakarta"
              date="2020 - 2025" 
              description="Fokus studi pada kecerdasan buatan, analisis data, dan pengembangan perangkat lunak."
            />
          </Section>
        </div>
        {/* / Kolom Kanan */}
        <div className="md:col-span-1">
          <Section title="Keahlian Teratas">
            <ul className="list-disc list-inside space-y-1">
              <li>Deep Learning</li>
              <li>Data Processing</li>
              <li>Data Analysis</li>
              <li>Business Oversight</li>
              <li>Analytical Thinking</li>
            </ul>
          </Section>
           <Section title="Sertifikasi">
            <ul className="list-disc list-inside space-y-1">
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
          href="/CV-Rizkytama.pdf" // / Pastikan nama file ini sesuai
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
const ExperienceItem = ({ title, company, date, description }: { title: string, company: string, date: string, description: string }) => (
  <div className="mb-4">
    <div className="flex justify-between items-baseline">
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm text-slate-500">{date}</p>
    </div>
    <p className="text-sm font-semibold text-slate-600">{company}</p>
    <p className="text-sm mt-1">{description}</p>
  </div>
);

