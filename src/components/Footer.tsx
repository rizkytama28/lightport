import { Github, Linkedin } from "lucide-react";

// Impor data profil dari file terpusat
import { profile } from "../data/site";

// Objek untuk memetakan nama sosial media ke komponen ikon
const socialIcons = {
  GitHub: <Github />,
  LinkedIn: <Linkedin />,
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Teks hak cipta */}
        <p className="text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        
        {/* Ikon sosial media */}
        <ul className="flex gap-6">
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="text-gray-500 transition hover:text-black dark:text-gray-400 dark:hover:text-white"
              >
                {socialIcons[social.label as keyof typeof socialIcons]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
