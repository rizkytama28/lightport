// / Mengimpor hook dari React dan ikon
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import { profile } from "../data/site";
import Section from "./Section";

const socialIcons = {
  Instagram: <Instagram size={24} />,
  LinkedIn: <Linkedin size={24} />,
  GitHub: <Github size={24} />,
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { type: 'tween', ease: 'easeOut' } },
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
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-[#334155] tracking-tight">
              Get In Touch
            </motion.h2>
            <motion.div variants={itemVariants} className="mt-4 w-24 h-1 bg-[#0d9488] mx-auto rounded"></motion.div>
          </div>

          <div className="max-w-2xl mx-auto">
            <motion.p variants={itemVariants} className="text-center text-lg text-slate-600 leading-relaxed mb-8">
              Let's work together! Whether you have a question or just want to say hi, my inbox is always open. I'll do my best to get back to you!
            </motion.p>
            
            <motion.form variants={itemVariants} onSubmit={onSubmit} className="space-y-6">
              <input type="hidden" name="subject" value={`Pesan Baru dari Portofolio - ${profile.name}`} />
              
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  className="mt-1 block w-full bg-slate-100 rounded-md border-slate-300 shadow-sm focus:border-[#0d9488] focus:ring-[#0d9488] sm:text-sm p-3"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  className="mt-1 block w-full bg-slate-100 rounded-md border-slate-300 shadow-sm focus:border-[#0d9488] focus:ring-[#0d9488] sm:text-sm p-3"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={4} 
                  required
                  className="mt-1 block w-full bg-slate-100 rounded-md border-slate-300 shadow-sm focus:border-[#0d9488] focus:ring-[#0d9488] sm:text-sm p-3"
                ></textarea>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center">
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
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-full inline-flex justify-center rounded-lg px-6 py-3 font-semibold text-white bg-[#0d9488] hover:bg-[#fb923c] shadow-md"
                >
                  Submit 
                </motion.button>
              </motion.div>
            </motion.form>

            {result && <p className="text-center mt-4 text-slate-600">{result}</p>}

            <motion.div variants={itemVariants} className="mt-12 text-center">
              <p className="mb-4 text-base text-gray-500">
                Or find me on social media:
              </p>
              <div className="flex justify-center gap-8">
                {profile.socials.map((social) => (
                  <motion.a 
                    key={social.label} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title={social.label} 
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-slate-500 hover:text-[#0d9488]"
                  >
                    {socialIcons[social.label as keyof typeof socialIcons]}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}