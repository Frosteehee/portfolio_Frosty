import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import '../Sass/SliderModal.scss'; 

const SliderModal = ({ images, onImageClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide === 0 ? images.length - 1 : currentSlide - 1));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 37) { // Flèche gauche
        prevSlide();
      } else if (event.keyCode === 39) { // Flèche droite
        nextSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  return (
    <div className="slider-modal">
      <div className="image-container">
        <img 
          src={images[currentSlide]} 
          alt={`Slide ${currentSlide + 1} (cliquable pour agrandir)`} 
          className="slider-image" 
          loading="lazy"
          onClick={() => onImageClick(images[currentSlide])}
        />
        <div className="click-indicator">🔍</div>   {/* Indicateur visuel pour cliquer sur l'image */}
      </div>
      <button className="prev" onClick={prevSlide} aria-label="Previous slide" aria-keyshortcuts="ArrowLeft">&#10094;</button>
      <button className="next" onClick={nextSlide} aria-label="Next slide" aria-keyshortcuts="ArrowRight">&#10095;</button>
    </div>
  );
};

SliderModal.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default SliderModal;
