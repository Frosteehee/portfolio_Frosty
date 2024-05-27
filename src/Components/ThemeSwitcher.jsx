import { useState, useEffect } from 'react';
import '../Sass/ThemeSwitcher.scss';
import Button from './Button';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="theme-switcher">
      <Button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
