import { useState, useEffect } from 'react';
import Collapse from './Collapse';
import { useLanguage } from '../context/LanguageContext';
import '../Sass/NavBar.scss';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { translate } = useLanguage();

  useEffect(() => {
    let timeoutId;

    if (isMobileMenuOpen) {
      timeoutId = setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 3000); // Ferme le collapse automatiquement après 3s, est ce que c'est assez?
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Test pour scroll smooth 
    }
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'open' : ''}`} aria-label="Main navigation">
      <div className="navbar-desktop">
        <ul role="menubar">
          <li role="none"><a role="menuitem" href="#home" onClick={() => scrollTo('home')}>{translate('navbar.home')}</a></li>
         <li role="none"><a role="menuitem" href="#projects" onClick={() => scrollTo('projects')}>{translate('navbar.projects')}</a></li>
         <li role="none"><a role="menuitem" href="#aboutMe" onClick={() => scrollTo('about')}>{translate('navbar.about')}</a></li>
          <li role="none"><a role="menuitem" href="#contact" onClick={() => scrollTo('contact')}>{translate('navbar.contact')}</a></li>
        </ul>
      </div>

      {/* Bouton Menu pour afficher le Collapse en version mobile */}
      <button
        id="mobileMenuButton"
        className="mobile-menu-button"
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobileMenu"
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        Menu
      </button>

      {/* Navbar mobile */}
      {isMobileMenuOpen && (
        <Collapse
          id="mobileMenu"
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}

export default NavBar;
