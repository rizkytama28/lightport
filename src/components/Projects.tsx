import Section from "./Section";
import { projects } from "../data/site";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" className="py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-sm transition">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.description}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {p.tags.map(t => (
                <li key={t} className="text-xs rounded-full border border-gray-200 dark:border-gray-800 px-2 py-1">{t}</li>
              ))}
            </ul>
            <div className="mt-4 flex gap-3">
              {p.link && <a className="text-sm underline underline-offset-4" href={p.link} target="_blank" rel="noreferrer">Live</a>}
              {p.repo && <a className="text-sm underline underline-offset-4" href={p.repo} target="_blank" rel="noreferrer">Repo</a>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
