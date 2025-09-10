import { motion } from "framer-motion";
import Section from "./Section";
import { profile } from "../data/site";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" className="py-16">
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-xl space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = `mailto:${profile.email}`;
        }}
      >
        <div>
          <label className="block text-sm font-medium">Nama</label>
          <input
            type="text"
            className="mt-1 w-full rounded-xl border border-gray-700 bg-black px-3 py-2 dark:bg-dark dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="mt-1 w-full rounded-xl border border-gray-700 bg-black px-3 py-2 dark:bg-dark dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Pesan</label>
          <textarea
            rows={5}
            className="mt-1 w-full rounded-xl border border-gray-700 bg-black px-3 py-2 dark:bg-dark dark:text-white"
            required
          />
        </div>
        <button type="submit" className="btn-invert">
          Kirim
        </button>
      </motion.form>
    </Section>
  );
}
