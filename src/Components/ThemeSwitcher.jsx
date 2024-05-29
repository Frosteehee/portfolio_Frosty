import { useState, useEffect } from 'react';
import '../Sass/ThemeSwitcher.scss';
import Button from './Button';
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";


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
     

        {theme === 'light' ? <FaMoon /> :   <GoSun />}
      

      </Button>
    </div>
  );
};

export default ThemeSwitcher;
