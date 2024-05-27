import PropTypes from 'prop-types';
import '../Sass/Button.scss'; // Importez le fichier SCSS pour les styles

const Button = ({ children, onClick, type, styleType }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button className={`button ${styleType}`} type={type} onClick={handleClick}>
      <span>{children}</span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  styleType: PropTypes.string,
};

Button.defaultProps = {
  onClick: null,
  type: 'button',
  styleType: 'primary',
};

export default Button;
