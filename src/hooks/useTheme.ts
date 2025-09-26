import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// Custom hook to easily consume the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  // This error is crucial for developers, ensuring the hook is used correctly.
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
