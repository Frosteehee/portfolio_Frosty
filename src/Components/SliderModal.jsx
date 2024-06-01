import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import '../Sass/SliderModal.scss'; 

const SliderModal = ({ images, onImageClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        const { scrollWidth, clientWidth } = sliderRef.current;
        setScrollEnabled(scrollWidth > clientWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide === 0 ? images.length - 1 : currentSlide - 1));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (scrollEnabled) return; // Empêche la navigation au clavier si le défilement horizontal est activé
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
  }, [currentSlide, scrollEnabled]);

  return (
    <div className={`slider-modal ${scrollEnabled ? 'scroll-enabled' : ''}`} ref={sliderRef}>
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
