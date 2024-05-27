import { useLanguage } from '../context/LanguageContext';
import Button from './Button'; 
const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div>
      <Button onClick={() => toggleLanguage('en')} disabled={language === 'en'}>English</Button>
      <Button onClick={() => toggleLanguage('fr')} disabled={language === 'fr'}>Français</Button>
    </div>
  );
};

export default LanguageSwitcher;
