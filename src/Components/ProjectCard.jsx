
import PropTypes from 'prop-types';
import '../Sass/ProjectCard.scss'; // Assurez-vous que le chemin d'importation est correct
import ICONS from './Icons'; // Importez les icônes
//import { useLanguage } from '../context/LanguageContext'; // Importation du  contexte de langue

const ProjectCard = ({ title, description, images, skills, onClick }) => {
  //const { language } = useLanguage(); //  hook useLanguage pour accéder au contexte de langue est ce que ça fonctionne finalement ?

  return (
    <div className="project-card"  onClick={onClick}>
     <img src={images[0]} loading="lazy" alt={`${title} project screenshot`} className="project-card-img" />
      <div className="project-card-content">
        <h2 className="project-card-title">{title}</h2>

      <p className="project-card-description">{description}</p>
      <div className="skills-container">
      {skills && skills.map(skill => (
            <div key={skill.class} className="skill_Icon">
              {ICONS[skill.class]}
            </div>
        ))}
      </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      class: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};

export default ProjectCard;
