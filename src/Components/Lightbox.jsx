import PropTypes from 'prop-types';
import '../Sass/Lightbox.scss';
import { useEffect } from 'react';

const Lightbox = ({ images, currentImage, onClose }) => {
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleClickOutside = (event) => {
    if (event.target.className === 'lightbox') {
      onClose();
    }
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
          <img src={images[currentImage]} alt={`Lightbox view ${currentImage + 1}`} />
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
