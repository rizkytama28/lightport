import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

// Define the types
type Theme = 'light' | 'dark';
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create the provider component
export function ThemeProvider({ children }: { children: ReactNode }) {
  // Set initial state from localStorage or system preference
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      // Return a default theme for server-side rendering if ever applicable
      return 'light';
    }
    const savedTheme = window.localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      return savedTheme;
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  // Effect to update the DOM and localStorage when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    // Remove previous theme class and add the new one
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    // Save the new theme to localStorage
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  // The function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // The value provided to consuming components
  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};