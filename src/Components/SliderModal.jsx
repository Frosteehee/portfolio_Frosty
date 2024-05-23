// SliderModal.jsx
import PropTypes from 'prop-types';
import { useState } from 'react';
import '../Sass/SliderModal.scss'; // Assurez-vous d'importer votre fichier SCSS

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
      {/* Affichage de l'image courante */}
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="slider-image" />

      {/* Boutons de navigation */}
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

SliderModal.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SliderModal;
