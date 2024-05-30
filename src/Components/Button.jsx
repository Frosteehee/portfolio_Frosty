import PropTypes from 'prop-types';
import '../Sass/Button.scss'; 

const Button = ({ children, onClick = null, type = 'button', styleType = 'primary', href = null, icon = null }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  const ButtonContent = (
    <button className={`button ${styleType}`} type={type} onClick={handleClick}>
      {icon && <span className="button-icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {ButtonContent}
      </a>
    );
  }

  return ButtonContent;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  styleType: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.node, // Ajout de la prop icon
};

export default Button;
