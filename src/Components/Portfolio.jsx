import { useEffect, useRef, useState } from 'react';
import '../Sass/Portfolio.scss';
import projectData from '../projectData.json';
import Carousel from './Carousel';
import Modal from './Modal';
import { useLanguage } from '../context/LanguageContext';

const Portfolio = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const portfolioRef = useRef(null);
  const { translate } = useLanguage(); 

  const openModal = (projectId) => {
    setSelectedProjectId(projectId);
  };

  const closeModal = () => {
    setSelectedProjectId(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const portfolioSection = portfolioRef.current;
      const sectionPosition = portfolioSection.offsetTop;
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
      const elementsToAnimate = document.querySelectorAll('.animate-text, .animated-lines');
      elementsToAnimate.forEach((element) => {
        element.style.animation = 'none';
        element.offsetHeight;
        element.style.animation = null;
      });
    }
  }, [isVisible]);

  return (
    <section id="projects" className="portfolio" ref={portfolioRef} aria-labelledby="portfolio-heading">
      <h2 id="portfolio-heading" className={`animate-text ${isVisible ? 'appear' : ''}`}>{translate('portfolio.heading')}</h2>
      <Carousel projects={projectData} openModal={openModal} />
      {selectedProjectId && (
        <Modal
          projectData={projectData.find((project) => project.id === selectedProjectId)}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Portfolio;
