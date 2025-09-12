// / Mengimpor data profil dan komponen Section
import { profile } from "../data/site";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about">
      {/* / Padding sekarang diterapkan di div terluar */}
      <div className="py-24 sm:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* / Judul Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#334155] tracking-tight">
            Tentang Saya
          </h2>
          <div className="mt-4 w-24 h-1 bg-[#0d9488] mx-auto rounded"></div>
        </div>

        {/* / Layout dua kolom */}
        <div className="grid md:grid-cols-5 gap-16 items-center">
          {/* / Kolom Gambar */}
          <div className="md:col-span-2">
            {/* / PERBAIKAN: Menambahkan `aspect-ratio` untuk mencegah layout shift.
              / Browser akan menyiapkan kotak dengan rasio 4:5 untuk gambar.
            */}
            <div className="aspect-w-4 aspect-h-5 bg-slate-200 rounded-lg">
              <img 
                src="/profile.jpg"
                alt="Foto Profil Rizky Tama"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>

          {/* / Kolom Teks Deskripsi */}
          <div className="md:col-span-3">
            <h3 className="text-3xl font-semibold text-[#334155] mb-4">
              Seorang {profile.role}
            </h3>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Saya adalah seorang antusias Machine Learning dengan minat mendalam di sektor Food & Beverage (F&B) dan pemikiran analitis. Saya bersemangat dalam pengambilan keputusan berbasis data, pemodelan prediktif, dan menerapkan teknologi untuk memecahkan tantangan di dunia nyata.
              </p>
            </div>
            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-block rounded-lg px-6 py-3 font-semibold text-white transition-all duration-300 bg-[#fb923c] hover:bg-[#fb923c]/90 hover:scale-105"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}