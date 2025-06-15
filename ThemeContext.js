"use client"
// ThemeContext.js (or ThemeContext.tsx)

import { createContext, useContext, useState } from 'react';



const ThemeContext = createContext(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
