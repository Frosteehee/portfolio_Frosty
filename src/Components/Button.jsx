import PropTypes from 'prop-types';
import '../Sass/Button.scss'; // Assurez-vous d'importer correctement votre fichier de style

const Button = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func, // La fonction onClick est facultative
};

export default Button;
