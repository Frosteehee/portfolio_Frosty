import PropTypes from 'prop-types';
import '../Sass/Lightbox.scss';
import { useEffect, useCallback, useRef, useState } from 'react';

const Lightbox = ({ images, currentImage, onClose }) => {
  const isMobile = window.innerWidth <= 768;
  const lightboxRef = useRef(null);
  const [fullImageLoaded, setFullImageLoaded] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (!isMobile && !['ArrowLeft', 'ArrowRight'].includes(event.key)) {
        event.stopPropagation(); // Empêche la propagation de l'événement si une touche de navigation clavier est pressée
      }
    },
    [isMobile, onClose]
  );

  const handleClickOutside = (event) => {
    if (event.target === lightboxRef.current) {
      onClose();
    }
  };

  const handleImageLoad = () => {
    setFullImageLoaded(true);
  };

  return (
    <div className="lightbox" onClick={handleClickOutside} ref={lightboxRef} role="dialog" aria-label="Lightbox">
      <button className="close" onClick={onClose} aria-label="Close lightbox">&times;</button>
      <div className="lightbox-content">
        {isMobile ? (
          <div className="lightbox-vertical">
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Lightbox view ${index + 1}`} />
            ))}
          </div>
        ) : (
          <div className="lightbox-horizontal">
            {fullImageLoaded ? (
              <img src={images[currentImage]} alt={`Lightbox view ${currentImage + 1}`} onLoad={handleImageLoad} />
            ) : (
              <img src={images[currentImage]} alt={`Lightbox view ${currentImage + 1}`} style={{ visibility: 'hidden' }} onLoad={handleImageLoad} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

Lightbox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentImage: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Lightbox;
