import PropTypes from 'prop-types';
import '../Sass/Collapse.scss';

function Collapse({ isOpen, onClose, animationDuration }) {
  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`} style={{ transitionDuration: `${animationDuration}ms` }}>
      <ul>
        <li><a href="#home" onClick={onClose}>Home</a></li>
        <li><a href="#about" onClick={onClose}>About</a></li>
        <li><a href="#projects" onClick={onClose}>Projects</a></li>
        <li><a href="#contact" onClick={onClose}>Contact</a></li>
      </ul>
    </div>
  );
}

Collapse.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  animationDuration: PropTypes.number.isRequired,
};

export default Collapse;
