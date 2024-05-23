import  { createContext, useState, useContext } from 'react';

// Crée un contexte pour la langue
const LanguageContext = createContext();

// Crée un fournisseur de contexte pour la langue
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Langue par défaut: anglais

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook pour utiliser le contexte de la langue
export const useLanguage = () => useContext(LanguageContext);
