import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const THEME_KEY = "theme";

const getInitialTheme = () => {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) return saved === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export default function ThemeToggle() {
  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem(THEME_KEY, newDark ? "dark" : "light");
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
