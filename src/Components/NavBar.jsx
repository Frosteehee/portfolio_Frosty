// NavBar.jsx
import { useState, useEffect } from 'react';
import Collapse from './Collapse';
import '../Sass/NavBar.scss';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isMobileMenuOpen) {
      timeoutId = setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 3000); // Ferme le collapse automatiquement après 1s (1000ms)
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'open' : ''}`}>
      {/* Navbar desktop */}
      <div className="navbar-desktop">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Bouton Menu pour afficher le Collapse en version mobile */}
      <button id="mobileMenuButton" className="mobile-menu-button" onClick={toggleMobileMenu}>
        Menu
      </button>

      {/* Navbar mobile */}
      {isMobileMenuOpen && <Collapse isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />}
    </nav>
  );
}

export default NavBar;
