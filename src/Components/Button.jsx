import PropTypes from 'prop-types';
import '../Sass/Button.scss'; 

const Button = ({ children, onClick = null, type = 'button', styleType = 'primary' }) => {
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

export default Button;
