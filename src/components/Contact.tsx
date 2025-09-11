import { Github, Linkedin, Mail } from "lucide-react";

// Impor komponen Section dan data profil
import Section from "./Section";
import { profile } from "../data/site";

// Objek untuk memetakan nama sosial media ke komponen ikon
const socialIcons = {
  GitHub: <Github size={32} />,
  LinkedIn: <Linkedin size={32} />,
};

export default function Contact() {
  return (
    // Hapus prop `title` dari sini
    <Section id="contact">
      {/* Tambahkan judul secara manual dengan text-center */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Hubungi Saya
      </h2>

      <div className="max-w-xl mx-auto text-center">
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          Saya selalu terbuka untuk diskusi, kolaborasi, atau sekadar bertukar pikiran.
          Jangan ragu untuk menghubungi saya.
        </p>
        
        {/* Tombol Email */}
        <div className="mb-8">
          <a
            href={`mailto:${profile.email}`}
            title="Kirim Email"
            className="btn-invert inline-flex items-center justify-center p-3"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Bagian sosial media */}
        <div>
          <p className="mb-4 text-base text-gray-500">
            Temukan saya di:
          </p>
          {/* Ikon Sosial Media dari site.ts dalam satu baris */}
          <div className="flex justify-center gap-8">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="text-gray-500 transition hover:text-black dark:text-gray-400 dark:hover:text-white"
              >
                {socialIcons[social.label as keyof typeof socialIcons]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

