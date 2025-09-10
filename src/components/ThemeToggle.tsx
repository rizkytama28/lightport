import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const THEME_KEY = "theme";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) {
      setDark(saved === "dark");
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !dark ? "dark" : "light";
    setDark(!dark);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem(THEME_KEY, newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 rounded-lg border border-gray-400 dark:border-gray-700 transition
                 hover:bg-black hover:text-white
                 dark:hover:bg-white dark:hover:text-black"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
