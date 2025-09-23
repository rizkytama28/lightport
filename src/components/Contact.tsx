// / Mengimpor hook dari React dan ikon
import React, { useState } from "react";
import { Github, Linkedin } from "lucide-react";
import { profile } from "../data/site";
import Section from "./Section";

const socialIcons = {
  GitHub: <Github size={24} />,
  LinkedIn: <Linkedin size={24} />,
};

export default function Contact() {
  // / State untuk mengelola hasil pengiriman form
  const [result, setResult] = useState<string | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Mengirim....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "GANTI_DENGAN_ACCESS_KEY_ANDA");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Pesan berhasil terkirim!");
      (event.target as HTMLFormElement).reset();
      // @ts-ignore
      grecaptcha.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <Section id="contact">
      <div className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#334155] tracking-tight">
              Hubungi Saya
            </h2>
            <div className="mt-4 w-24 h-1 bg-[#0d9488] mx-auto rounded"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-center text-lg text-slate-600 leading-relaxed mb-8">
              Punya pertanyaan atau ingin berdiskusi? Silakan isi formulir di bawah ini.
            </p>
            
            <form onSubmit={onSubmit} className="space-y-6">
              <input type="hidden" name="subject" value={`Pesan Baru dari Portofolio - ${profile.name}`} />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nama Lengkap</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  // / REVISI: Menambahkan bg-white agar kontras
                  className="mt-1 block w-full rounded-md border-slate-300 bg-white shadow-sm focus:border-[#0d9488] focus:ring-[#0d9488] sm:text-sm p-3"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Alamat Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  // / REVISI: Menambahkan bg-white agar kontras
                  className="mt-1 block w-full rounded-md border-slate-300 bg-white shadow-sm focus:border-[#0d9488] focus:ring-[#0d9488] sm:text-sm p-3"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Pesan</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={4} 
                  required
                  // / REVISI: Menambahkan bg-white agar kontras
                  className="mt-1 block w-full rounded-md border-slate-300 bg-white shadow-sm focus:border-[#0d9488] focus:ring-[#0d9488] sm:text-sm p-3"
                ></textarea>
              </div>

              <div 
                className="g-recaptcha"
                data-sitekey="GANTI_DENGAN_SITE_KEY_ANDA"
              ></div>

              <div>
                <button 
                  type="submit"
                  className="w-full inline-flex justify-center rounded-lg px-6 py-3 font-semibold text-white transition-all duration-300 bg-[#0d9488] hover:bg-[#fb923c] hover:scale-105"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>

            {result && <p className="text-center mt-4 text-slate-600">{result}</p>}

            <div className="mt-12 text-center">
              <p className="mb-4 text-base text-gray-500">
                Atau temukan saya di:
              </p>
              <div className="flex justify-center gap-8">
                {profile.socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" title={social.label} className="text-slate-500 hover:text-[#0d9488] transition-colors">
                    {socialIcons[social.label as keyof typeof socialIcons]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}