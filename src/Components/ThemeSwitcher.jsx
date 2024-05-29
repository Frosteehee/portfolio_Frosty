import { useState, useEffect } from 'react';
import '../Sass/ThemeSwitcher.scss';
import Button from './Button';
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

const ThemeSwitcher = () => {
  // Récupérer le thème sauvegardé dans le localStorage s'il existe, sinon utiliser 'dark' par défaut
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    // Mettre à jour le thème dans le localStorage à chaque changement
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    // Inverser le thème entre 'light' et 'dark'
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="theme-switcher">
      <Button onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <GoSun />}
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
