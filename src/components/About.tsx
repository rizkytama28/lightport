import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About Me" className="py-16">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-4 leading-relaxed">
          <p>
            Halo! Saya Graham, mahasiswa informatika yang fokus ke web dev —
            pengen tumbuh dari pemula jadi expert. Saya suka ngebangun UI yang bersih,
            cepat, dan accessible.
          </p>
          <p>
            Stack favorit: React + TypeScript + Tailwind. Lagi ngulik animasi
            micro-interaction dengan Framer Motion dan praktik performa modern (Lighthouse 90+).
          </p>
        </div>
        <ul className="space-y-2 text-sm">
          <li>📍 Yogyakarta (ID)</li>
          <li>🎓 Informatika</li>
          <li>💼 Open to internship / freelance</li>
        </ul>
      </div>
    </Section>
  );
}
