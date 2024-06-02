import PropTypes from 'prop-types';
import '../Sass/Collapse.scss';
import { useLanguage } from '../context/LanguageContext';

function Collapse({ isOpen, onClose, animationDuration }) {
  const { translate } = useLanguage(); // Utilisation de la fonction de traduction

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`} style={{ transitionDuration: `${animationDuration}ms` }}>
      <ul>
        <li><a href="#home" onClick={onClose}>{translate('navbar.home')}</a></li>
        <li><a href="#about" onClick={onClose}>{translate('navbar.about')}</a></li>
        <li><a href="#projects" onClick={onClose}>{translate('navbar.projects')}</a></li>
        <li><a href="#contact" onClick={onClose}>{translate('navbar.contact')}</a></li>
      </ul>
    </div>
  );
}

Collapse.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  animationDuration: PropTypes.number.isRequired,
};

export default Collapse;
