import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-950/70 border-b border-gray-100 dark:border-gray-900">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 h-14 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">Graham</a>
        <div className="flex items-center gap-3">
          <ul className="hidden md:flex items-center gap-5 text-sm">
            {links.map(l => (
              <li key={l.href}>
                <a className="hover:underline underline-offset-4" href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
