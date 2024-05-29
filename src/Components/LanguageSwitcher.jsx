import { useLanguage } from '../context/LanguageContext';
import '../Sass/Button.scss';
import Flag from 'react-world-flags';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button className='language-button' onClick={() => toggleLanguage('en')} disabled={language === 'en'}>
        <Flag code="CAN" style={{ width: 25, height: 25 }} alt="English" />
      </button>
      <button className='language-button' onClick={() => toggleLanguage('fr')} disabled={language === 'fr'}>
        <Flag code="FRA" style={{ width: 25, height: 25 }} alt="Français" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
