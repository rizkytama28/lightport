import Section from "./Section";
import { skills } from "../data/site";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" className="py-16">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium tracking-tight mb-2">Main</h3>
          <ul className="flex flex-wrap gap-2">
            {skills.main.map((s) => (
              <li key={s} className="text-sm rounded-full bg-gray-100 dark:bg-gray-900 px-3 py-1">{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-medium tracking-tight mb-2">Tools</h3>
          <ul className="flex flex-wrap gap-2">
            {skills.tools.map((s) => (
              <li key={s} className="text-sm rounded-full bg-gray-100 dark:bg-gray-900 px-3 py-1">{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
