import { profile } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-900 py-8 mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <ul className="flex gap-4">
          {profile.socials.map(s => (
            <li key={s.label}><a className="hover:underline underline-offset-4" href={s.href} target="_blank">{s.label}</a></li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
