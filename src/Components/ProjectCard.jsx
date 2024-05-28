import PropTypes from 'prop-types';
import '../Sass/ProjectCard.scss';

const ProjectCard = ({ title, description, images }) => {
  return (
    <div className="project-card">
      <img src={images[0]} alt={`${title} project screenshot`} className="project-card-img" />
      <div className="project-card-content">
        <h2 className="project-card-title">{title}</h2>
        <p className="project-card-description">{description}</p>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;
