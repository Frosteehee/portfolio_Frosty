import { useEffect, useRef, useState } from 'react';
import Button from './Button';
import '../Sass/AboutMe.scss';
import { useLanguage } from '../context/LanguageContext'; 

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const { translate } = useLanguage(); 

  // Téléchargement du CV
  const handleDownloadCV = () => {
    window.open('https://bit.ly/3wVqZGD', '_blank');
  };

  // Téléchargement depuis GitHub
  const handleDownloadFromGithub = () => {
    window.open('https://github.com/Frosteehee', '_blank');
  };

  // Effet pour détecter si la section est visible à l'écran
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = aboutRef.current;
      const sectionPosition = aboutSection.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Vérifie si la section est visible
      if (scrollPosition >= sectionPosition - windowHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Nettoyage de l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effet pour réinitialiser les animations lorsque la section devient visible
  useEffect(() => {
    if (isVisible) {
      const elementsToAnimate = document.querySelectorAll('.animate-text, .animated-lines');
      elementsToAnimate.forEach((element) => {
        element.style.animation = 'none';
        element.offsetHeight; // Force le repaint et réinitialise l'animation
        element.style.animation = null;
      });
    }
  }, [isVisible]);

  return (
    <section id="about" ref={aboutRef} aria-labelledby="about-heading" role="region">
      <div className="content">
        <div className="profile-picture" aria-hidden="true"></div>
        <div className="info">
          <h2 id="about-heading" className={`animate-text ${isVisible ? 'appear' : ''}`}>
            {translate('about.about')}
          </h2>
          <div className="animated-lines">
            <p className={isVisible ? 'animate-lines' : ''}>{translate('about.aboutContent1')}</p>  
            <p className={isVisible ? 'animate-lines' : ''}>{translate('about.aboutContent2')}</p>  
            <p className={isVisible ? 'animate-lines' : ''}>{translate('about.aboutContent3')}</p> 
            <p className={isVisible ? 'animate-lines' : ''}>{translate('about.aboutContent4')}</p> 
          </div>
          <div className="button-container">
            {/* Bouton pour télécharger le CV */}
            <Button onClick={handleDownloadCV} styleType="primary" aria-label={translate('about.cvButtonAria')}>
              {translate('about.cvButton')}
            </Button>
            {/* Bouton pour télécharger depuis GitHub à corriger */}
            <Button onClick={handleDownloadFromGithub} styleType="secondary" aria-label={translate('about.githubButtonAria')}>
              {translate('about.githubButton')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
