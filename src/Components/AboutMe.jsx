import { useEffect, useRef, useState } from 'react';
import '../Sass/AboutMe.scss';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = aboutRef.current;
      const sectionPosition = aboutSection.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= sectionPosition - windowHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Si la section est visible, réinitialisez les animations
      const elementsToAnimate = document.querySelectorAll('.animate-text, .animated-lines');
      elementsToAnimate.forEach((element) => {
        element.style.animation = 'none';
        element.offsetHeight; // Pour forcer le repaint et réinitialiser l'animation
        element.style.animation = null;
      });
    }
  }, [isVisible]);

  return (
    <section className="about" ref={aboutRef}>
      <div className="content">
        <div className="profile-picture"></div>
        <div className="info">
          <h2 className={`animate-text ${isVisible ? 'appear' : ''}`}>A propos</h2>
        <div className="animated-lines">
            <p className={isVisible ? 'animate-lines' : ''}>En tant que développeuse web passionnée par <a href="https://www.monparcourshandicap.gouv.fr/accessibilite-numerique"> l&apos;accessibilité </a>, je m&apos;efforce d&apos;allier mes compétences techniques solides à une sensibilité humaine profonde. Forte de mon parcours en Arts Visuel, je porte un regard attentif sur l&apos;importance de l&apos;esthétique et de l&apos;inclusivité dans la conception web. Ma formation actuelle en développement front-end me permet de concrétiser cette vision, en utilisant mon bagage artistique pour réfléchir de manière créative aux solutions d&apos;accessibilité. Je suis convaincue que la technologie doit être au service de tous, et je m&apos;engage à créer des expériences en ligne accessibles, intuitives et esthétiquement plaisantes pour chacun des utilisateurs.</p>
        </div>
        <div className="button-container">
            <button>Mon CV</button> 
            <button>GitHub</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

/*
https://design-accessible.fr/checklist
https://accessibilite.numerique.gouv.fr/obligations/
*/