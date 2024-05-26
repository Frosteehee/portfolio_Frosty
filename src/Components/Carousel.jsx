// Carousel.jsx

import { useState } from 'react';
import PropTypes from 'prop-types';
import '../Sass/Carousel.scss';
import ProjectCard from './ProjectCard';

const Carousel = ({ projects, openModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide === 0 ? projects.length - 1 : currentSlide - 1));
  };

  const handleCardClick = (projectId) => {
    openModal(projectId);
  };

  // Créez un nouveau tableau de projets avec un ordre décalé
  const shiftedProjects = [...projects.slice(currentSlide), ...projects.slice(0, currentSlide)];

  return (
    <div className="carousel-container">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <div className="carousel">
        {shiftedProjects.map((project, index) => (
          <div
            key={project.id}
            className={`slide ${index === projects.length ? 'active' : ''}`}
            onClick={() => handleCardClick(project.id)}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              images={project.images}
            />
          </div>
        ))}
      </div>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

Carousel.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Carousel;
