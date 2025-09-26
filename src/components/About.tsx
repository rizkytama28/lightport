// / Mengimpor hook dari React, komponen, dan ikon
import { useState } from "react";
import Section from "./Section";
import Resume from "./Resume"; // / Impor komponen Resume
import { X, Download } from "lucide-react"; // / Impor ikon baru

export default function About() {
  // / State untuk mengontrol visibilitas modal (buka/tutup)
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <Section id="about">
      <div className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* / Judul Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#334155] tracking-tight">
              Tentang Saya
            </h2>
            <div className="mt-4 w-24 h-1 bg-[#0d9488] mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-16 items-center">
            {/* / Kolom Gambar */}
            <div className="md:col-span-2">
              <img 
                src="/profile.jpg"
                alt="Foto Profil Rizky Tama"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>

            {/* / Kolom Teks Deskripsi */}
            <div className="md:col-span-3">
              <h3 className="text-3xl font-semibold text-[#334155] mb-4">
                Informathics Graduate
              </h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Sebagai seorang <strong>lulusan Informatika</strong>, saya mendalami <strong>Analisis Data</strong> dan <strong>Machine Learning</strong> dengan tujuan utama menerapkan teknologi dan pemikiran analitis untuk memecahkan tantangan dunia nyata. Saya percaya bahwa setiap solusi teknis harus efektif, efisien, dan memberikan dampak yang bermanfaat.
                </p>
              </div>
              <div className="mt-8">
                {/* / REVISI: Tombol diubah untuk membuka modal */}
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition-all duration-300 bg-[#0d9488] hover:bg-[#fb923c]/90 hover:scale-105"
                >
                  <Download size={20} />
                  Lihat Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* / REVISI: Modal untuk menampilkan Resume */}
      {isResumeOpen && (
        <div className="fixed inset-0 bg-black/70 z-[9999] flex justify-center items-center p-4">
          <div 
            className="relative w-full h-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            {/* / Menampilkan komponen Resume di dalam modal */}
            <Resume />
            {/* / Tombol untuk menutup modal */}
            <button
              onClick={() => setIsResumeOpen(false)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black"
              aria-label="Tutup Resume"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </Section>
  );
}

