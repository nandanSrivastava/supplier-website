'use client';

import { useContext, createContext } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children, activeSection, setActiveSection }) => {
  const navigateToSection = (section) => {
    setActiveSection(section);
  };

  return (
    <NavigationContext.Provider value={{ activeSection, navigateToSection }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
