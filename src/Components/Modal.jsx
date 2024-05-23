// Modal.jsx
import PropTypes from 'prop-types';
import SliderModal from './SliderModal';
import '../Sass/Modal.scss'; // Assurez-vous d'importer votre fichier SCSS

const Modal = ({ projectData, onClose }) => {
  return (
    <div className="modal ">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{projectData.title}</h2>
        <p>{projectData.description}</p>
        <SliderModal images={projectData.images} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  projectData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
