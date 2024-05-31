import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import '../Sass/Carousel.scss';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../context/LanguageContext';

const Carousel = ({ projects, openModal }) => {
  const { translate } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const carouselRef = useRef(null);
  const language = ''; // Déclaration de la variable language

  useEffect(() => {
    const updateButtonVisibility = () => {
      const carouselContainer = document.querySelector('.carousel-container');
      const carousel = carouselRef.current;
      setShowButtons(carousel.scrollWidth > carouselContainer.clientWidth);
    };

    updateButtonVisibility();
    window.addEventListener('resize', updateButtonVisibility);
    return () => {
      window.removeEventListener('resize', updateButtonVisibility);
    };
  }, [projects]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % projects.length);
    scrollToSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? projects.length - 1 : currentSlide - 1);
    scrollToSlide(currentSlide === 0 ? projects.length - 1 : currentSlide - 1);
  };

  const scrollToSlide = (index) => {
    const carousel = carouselRef.current;
    const slideWidth = carousel.firstChild.clientWidth;
    carousel.scrollLeft = slideWidth * index;
  };

  const handleCardClick = (projectId) => {
    openModal(projectId);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    scrollToSlide(index);
  };

  const shiftedProjects = [...projects.slice(currentSlide), ...projects.slice(0, currentSlide)];

  return (
    <div className={`carousel-container ${showButtons ? 'show-buttons' : ''}`}>
      {showButtons && (
        <button
          className="prev"
          onClick={prevSlide}
          aria-label={translate('carousel.prev')}
        >
          &#10094;
        </button>
      )}
      <div
        className="carousel"
        ref={carouselRef}
        role="region"
        aria-live="polite"
        tabIndex={0}
      >
        {shiftedProjects.map((project, index) => (
          <div
            key={project.id}
            className={`slide ${index === 0 ? 'active' : ''}`}
            onClick={() => handleCardClick(project.id)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleCardClick(project.id);
            }}
            aria-label={translate('carousel.view', { title: project.title })}
          >
            <ProjectCard
              title={project.title}
              images={project.images}
              description={translate(`projects.${project.id}.description`)} // Modification ici
              skills={project.skills}
              onClick={handleCardClick}
              language={language} // Ajout de la prop language
            />
          </div>
        ))}
      </div>
      {showButtons && (
        <button
          className="next"
          onClick={nextSlide}
          aria-label={translate('carousel.next')}
        >
          &#10095;
        </button>
      )}
      <div className="carousel-bullets">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`carousel-bullet ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={translate('carousel.goto', { number: index + 1 })}
          />
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    skills: PropTypes.arrayOf(PropTypes.shape({
      class: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })),
  })).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Carousel;
