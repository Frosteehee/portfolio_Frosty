// LanguageSwitcher.js
import { useLanguage } from './LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div>
      <button onClick={() => toggleLanguage('en')} disabled={language === 'en'}>
        English
      </button>
      <button onClick={() => toggleLanguage('fr')} disabled={language === 'fr'}>
        Français
      </button>
    </div>
  );
};

export default LanguageSwitcher;
