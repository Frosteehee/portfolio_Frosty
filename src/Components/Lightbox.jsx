import PropTypes from 'prop-types';
import '../Sass/Lightbox.scss';
import { useEffect, useCallback, useState } from 'react';

const Lightbox = ({ images, currentImage, onClose }) => {
  const isMobile = window.innerWidth <= 768;
  const [fullImageLoaded, setFullImageLoaded] = useState(false);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (!isMobile && !['ArrowLeft', 'ArrowRight'].includes(event.key)) {
        // Empêche la fermeture de la lightbox lors de la navigation au clavier
        event.stopPropagation();
      }
    },
    [isMobile, onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleClickOutside = (event) => {
    if (event.target.className === 'lightbox') {
      onClose();
    }
  };

  const handleImageLoad = () => {
    setFullImageLoaded(true);
  };

  return (
    <div className="lightbox" onClick={handleClickOutside}>
      <button className="close" onClick={onClose} aria-label="Close lightbox">&times;</button>
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
  );
};

Lightbox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentImage: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Lightbox;
