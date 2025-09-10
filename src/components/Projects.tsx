import { motion } from "framer-motion";
import Section from "./Section";
import { projects } from "../data/site";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" className="py-16">
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
  key={p.title}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }} // untuk animasi masuk
  whileHover={{
    scale: 1.05,
    boxShadow: "0px 8px 24px rgba(0,0,0,0.3)",
    transition: { duration: 0.35, ease: "easeOut" }, // hover lebih smooth
  }}
  whileTap={{
    scale: 0.98,
    transition: { duration: 0.15 }, // klik cepat
  }}
  className="bg-gray-900 p-6 rounded-2xl"
>
  <h3 className="font-semibold text-lg">{p.title}</h3>
  <p className="mt-2 text-gray-400 text-sm">{p.description}</p>
</motion.article>


        ))}
      </div>
    </Section>
  );
}
