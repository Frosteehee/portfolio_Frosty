import PropTypes from 'prop-types';
import SliderModal from './SliderModal';
import '../Sass/Modal.scss';
import { useLanguage } from '../context/LanguageContext'; // Importer le contexte de langue

const Modal = ({ projectData, onClose }) => {
  const { translate } = useLanguage(); // Utiliser le contexte de langue

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{translate(`projects.${projectData.id}.title`)}</h2> {/* Utiliser la traduction */}
        <p>{translate(`projects.${projectData.id}.description`)}</p> {/* Utiliser la traduction */}
        <SliderModal images={projectData.images} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  projectData: PropTypes.shape({
    id: PropTypes.number.isRequired, // Ajouter l'ID pour accéder aux traductions
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
