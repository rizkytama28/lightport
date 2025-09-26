import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center rounded-full transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
      aria-label="Toggle theme"
      whileTap={{ scale: 0.95 }}
    >
      {theme === 'light' ? <Sun className="w-5 h-5 text-slate-700" /> : <Moon className="w-5 h-5 text-slate-200" />}
    </motion.button>
  );
}
