import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import SliderModal from './SliderModal';
import Lightbox from './Lightbox';
import '../Sass/Modal.scss';
import { useLanguage } from '../context/LanguageContext';
import Button from './Button'; 


const GitHubIcon = () => (
  <svg
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
    version="1.1"
    data-view-component="true"
    className="octicon octicon-mark-github v-align-middle"
  >
    <path
      fillRule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.548 7.548 0 018 4.84c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
    />
  </svg>
);

const Modal = ({ projectData, onClose }) => {
  const { translate } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (image) => {
    setLightboxImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage(null);
  };

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
    if (event.target.className === 'modal') {
      onClose();
    }
  };

  return (
    <>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        onClick={handleClickOutside}
      >
        <div className="modal-content">
          <button
            className="close"
            onClick={onClose}
            aria-label="Close modal"
            aria-keyshortcuts="Escape"
          >
            &times;
          </button>
          <h3 id="modal-title">{translate(`projects.${projectData.id}.title`)}</h3>
          <SliderModal images={projectData.images} onImageClick={openLightbox} />
          {/* Utilisez la description spécifique à la modal */}
          <p id="modal-description">{translate(`projects.${projectData.id}.modalDescription`)}</p>
          {projectData.githubLink && (
            <div id="modal-github">
              <Button href={projectData.githubLink} styleType="primary" icon={<GitHubIcon />}>
                GitHub
              </Button>
               
              <Button href={projectData.canvaLink} styleType="primary" >
                Canva
              </Button>
            </div>
          
          
          )}
          
        </div>
      </div>
      {lightboxOpen && (
        <Lightbox 
          images={projectData.images} 
          currentImage={projectData.images.indexOf(lightboxImage)} 
          onClose={closeLightbox} 
        />
      )}
    </>
  );
};

Modal.propTypes = {
  projectData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    modalDescription: PropTypes.string.isRequired, //  nouvelle propriété modalDescription test
    githubLink: PropTypes.string,
    canvaLink: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        class: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
