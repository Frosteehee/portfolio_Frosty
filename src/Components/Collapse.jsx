import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../Sass/Collapse.scss';

function Collapse({ isOpen, onClose, animationDuration }) {
  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`} style={{ transitionDuration: `${animationDuration}ms` }}>
      <ul>
        <li><Link to="/" onClick={onClose}>Home</Link></li>
        <li><Link to="/about" onClick={onClose}>About</Link></li>
        <li><Link to="/contact" onClick={onClose}>Contact</Link></li>
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
