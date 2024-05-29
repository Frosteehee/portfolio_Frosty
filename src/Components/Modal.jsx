import PropTypes from 'prop-types';
import { useEffect } from 'react';
import SliderModal from './SliderModal';
import '../Sass/Modal.scss';
import { useLanguage } from '../context/LanguageContext';
import ICONS from './Icons'; // Importer les icônes

const Modal = ({ projectData, onClose }) => {
  const { translate } = useLanguage();

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
        >
          &times;
        </button>
        <h2 id="modal-title">{translate(`projects.${projectData.id}.title`)}</h2>
        <p id="modal-description">{translate(`projects.${projectData.id}.description`)}</p>
        <div className="skills-container">
          {projectData.skills && projectData.skills.map(skill => (
            <div key={skill.class} className="skill">
              {ICONS[skill.class]}
            </div>
          ))}
        </div>
        <SliderModal images={projectData.images} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  projectData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
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
