// / Mengimpor data profil dan komponen Section
import { profile } from "../data/site";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about">
      <div className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* / Judul Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#334155] tracking-tight">
              Mengapa Memilih Saya?
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
              {/* / REVISI: Subjudul disesuaikan dengan narasi baru */}
              <h3 className="text-3xl font-semibold text-[#334155] mb-4">
                Problem Solver Berbasis Teknologi
              </h3>
              {/* / REVISI: Teks yang menguraikan tagline Anda */}
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Sebagai seorang <strong>lulusan Informatika</strong>, saya menjelajahi dunia <strong>Data Analytics</strong> dan <strong>Machine Learning</strong> bukan hanya sebagai disiplin akademis, tetapi sebagai perangkat untuk menciptakan dampak. Saya memiliki fondasi yang kuat untuk memahami bagaimana teknologi bekerja dari akarnya.
                </p>
              </div>
              <div className="mt-8">
                <a 
                  href="#contact" 
                  className="inline-block rounded-lg px-6 py-3 font-semibold text-white transition-all duration-300 bg-[#0d9488] hover:bg-[#fb923c]/90 hover:scale-105"
                >
                  Let's Discuss
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

