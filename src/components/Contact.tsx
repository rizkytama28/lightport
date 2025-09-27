// / Mengimpor hook dari React dan ikon
import React, { useState } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import { profile } from "../data/site";
import Section from "./Section";

const socialIcons = {
  Instagram: <Instagram size={24} />,
  LinkedIn: <Linkedin size={24} />,
  GitHub: <Github size={24} />,
};

export default function Contact() {
  // / State untuk mengelola hasil pengiriman form
  const [result, setResult] = useState<string | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Mengirim....");
    const formData = new FormData(event.currentTarget);

    // / GANTI DENGAN ACCESS KEY ANDA
    formData.append("access_key", "3aec1ebf-ab88-46e9-8ec1-be6b69ee4189");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Pesan berhasil terkirim!");
      (event.target as HTMLFormElement).reset();
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
              Get In Touch
            </h2>
            <div className="mt-4 w-24 h-1 bg-[#0d9488] mx-auto rounded"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-center text-lg text-slate-600 leading-relaxed mb-8">
              Let's work together! Whether you have a question or just want to say hi, my inbox is always open. I'll do my best to get back to you!
            </p>
            
            {/* / Formulir Kontak Baru */}
            <form onSubmit={onSubmit} className="space-y-6">
              <input type="hidden" name="subject" value={`Pesan Baru dari Portofolio - ${profile.name}`} />
              
              {/* / REVISI: Menambahkan Honeypot untuk menangkal bot */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  className="mt-1 block w-full bg-slate-100 rounded-md border-slate-300 shadow-sm focus:border-[#0d9488] focus:ring-[#0d9488] sm:text-sm p-3"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  className="mt-1 block w-full bg-slate-100 rounded-md border-slate-300 shadow-sm focus:border-[#0d9488] focus:ring-[#0d9488] sm:text-sm p-3"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={4} 
                  required
                  className="mt-1 block w-full bg-slate-100 rounded-md border-slate-300 shadow-sm focus:border-[#0d9488] focus:ring-[#0d9488] sm:text-sm p-3"
                ></textarea>
              </div>

              {/* / REVISI: Menambahkan checkbox persetujuan */}
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 rounded border-slate-300 text-[#0d9488] focus:ring-[#0d9488]"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-slate-600">
                  I agree to be contacted again.
                </label>
              </div>

              <div>
                <button 
                  type="submit"
                  className="w-full inline-flex justify-center rounded-lg px-6 py-3 font-semibold text-white transition-all duration-300 bg-[#0d9488] hover:bg-[#fb923c] hover:scale-105"
                >
                  Submit 
                </button>
              </div>
            </form>

            {/* / Menampilkan status pengiriman pesan */}
            {result && <p className="text-center mt-4 text-slate-600">{result}</p>}

            {/* / Tautan Sosial Media */}
            <div className="mt-12 text-center">
              <p className="mb-4 text-base text-gray-500">
                Or find me on social media:
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