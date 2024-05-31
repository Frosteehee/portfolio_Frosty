import { useEffect, useRef, useState } from 'react';
import Button from './Button';
import '../Sass/AboutMe.scss';
import { useLanguage } from '../context/LanguageContext'; 

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const { translate } = useLanguage(); //fonction de traduction du contexte de langue

  // Téléchargement du CV
  const handleDownloadCV = () => {
    console.log('Téléchargement du CV');
  };

  // Telechargement depuis GitHub
  const handleDownloadFromGithub = () => {
    console.log('Téléchargement depuis GitHub'); // c'est bien mais retravailler les conditions
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
    <section id="about" ref={aboutRef} aria-labelledby="about-heading">
      <div className="content">
        <div className="profile-picture"></div>
        <div className="info">
          <h2 id="about-heading" className={`animate-text ${isVisible ? 'appear' : ''}`}>
            {translate('about.about')} 
          </h2>
          <div className="animated-lines">
            <p className={isVisible ? 'animate-lines' : ''}>{translate('about.aboutContent')}</p>
          </div>
          <div className="button-container">
            {/* Bouton pour télécharger le CV */}

            <a href="https://github.com/Frosteehee/portfolio_Frosty/CV_Marine_Allavoine_2024.pdf">
            <Button onClick={handleDownloadCV} styleType="primary" aria-label="Télécharger mon CV">
              {translate('about.cvButton')} {/* pourquoi ça ne fonctionne pas ? */}
            </Button> 
            </a> 
            {/* Bouton pour télécharger depuis GitHub */}
            <Button onClick={handleDownloadFromGithub} styleType="secondary" aria-label="Télécharger depuis GitHub">
              {translate('about.githubButton')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
