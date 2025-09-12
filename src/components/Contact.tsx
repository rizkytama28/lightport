import { Mail, Github, Linkedin } from "lucide-react";
import { profile } from "../data/site";
import Section from "./Section";

const socialIcons = {
  GitHub: <Github size={24} />,
  LinkedIn: <Linkedin size={24} />,
};

export default function Contact() {
  return (
    <Section id="contact">
      <div className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#334155] tracking-tight">
              Get in Touch
            </h2>
            <div className="mt-4 w-24 h-1 bg-[#0d9488] mx-auto rounded"></div>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Saya selalu terbuka untuk peluang baru, kolaborasi, atau sekadar bertukar pikiran. Jangan ragu untuk menghubungi saya.
            </p>
            {/* PERBAIKAN: Tombol dengan warna dan hover interaktif langsung */}
            <a 
              href={`mailto:${profile.email}`} 
              className="inline-flex items-center gap-2 mb-12 rounded-lg px-6 py-3 font-semibold text-white transition-all duration-300 bg-[#0d9488] hover:bg-[#fb923c] hover:scale-105"
            >
              <Mail size={20} />
              <span>Send Email</span>
            </a>
            <div className="flex justify-center gap-8">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="text-slate-500 hover:text-[#0d9488] transition-colors"
                >
                  {socialIcons[social.label as keyof typeof socialIcons]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

