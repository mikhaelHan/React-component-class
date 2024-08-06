import React, { createContext, ReactNode, useState, useMemo } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme((prevTheme) => !prevTheme);

  const contextValue = useMemo(
    () => ({ isDarkTheme, toggleTheme }),
    [isDarkTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
