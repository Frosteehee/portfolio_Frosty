import PropTypes from 'prop-types';
import { useState } from 'react';
import '../Sass/SliderModal.scss'; 

const SliderModal = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide === 0 ? images.length - 1 : currentSlide - 1));
  };

  return (
    <div className="slider-modal">
      {/* Affichage de l'image courante avec lazy loading */}
      <img 
        src={images[currentSlide]} 
        alt={`Slide ${currentSlide + 1}`} 
        className="slider-image" 
        loading="lazy"
      />

      {/* Boutons de navigation */}
      <button className="prev" onClick={prevSlide} aria-label="Previous slide" aria-keyshortcuts="ArrowLeft">&#10094;</button>
      <button className="next" onClick={nextSlide} aria-label="Next slide" aria-keyshortcuts="ArrowRight">&#10095;</button>
    </div>
  );
};

SliderModal.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SliderModal;
