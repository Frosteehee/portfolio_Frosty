import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import en from '../Locales/en.json';
import fr from '../Locales/fr.json';

const LanguageContext = createContext();

const translations = { en, fr };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr'); // c'est mieux si c'est français par défaut ?

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  const translate = (key) => {
    return key.split('.').reduce((acc, part) => acc && acc[part], translations[language]);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useLanguage = () => useContext(LanguageContext);
