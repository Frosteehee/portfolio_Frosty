import { useEffect, useRef, useState } from 'react';
import '../Sass/Skills.scss';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGithub } from 'react-icons/fa'; // Importer FaGithub
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPalette, faGamepad } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const SkillsSection = () => {
  const skillsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
            setHasAnimated(true); // Animation déclenchée une fois
          }
        });
      },
      { threshold: 0.1 }
    );

    const skills = skillsRef.current.querySelectorAll('.skill');
    skills.forEach(skill => {
      observer.observe(skill);
    });

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]); // Effect se déclenche lors de la modification de hasAnimated

  return (
    <section id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className='animated-lines'>Compétences</h2>
      <div ref={skillsRef} className="skills-container" role="list">
        <SkillItem icon={<FaHtml5 />} skillName="HTML5" skillClass="html" />
        <SkillItem icon={<FaCss3Alt />} skillName="CSS3" skillClass="css" />
        <SkillItem icon={<FaJs />} skillName="JavaScript" skillClass="js" />
        <SkillItem icon={<FaReact />} skillName="React.js" skillClass="react" />
        <SkillItem icon={<FaNodeJs />} skillName="Node.js" skillClass="node" />
        <SkillItem icon={<FaDatabase />} skillName="DataBase" skillClass="database" />
        <SkillItem icon={<FontAwesomeIcon icon={faCoffee} />} skillName="Café" skillClass="cafe" />
        <SkillItem icon={<FontAwesomeIcon icon={faPalette} />} skillName="Art" skillClass="dessin" />
        <SkillItem icon={<FontAwesomeIcon icon={faGamepad} />} skillName="Gaming" skillClass="jeux-video" />
        <SkillItem icon={<FaGithub />} skillName="GitHub" skillClass="github" /> {/* Ajouter GitHub */}
      </div>
    </section>
  );
};

const SkillItem = ({ icon, skillName, skillClass }) => {
  return (
    <div className={`skill ${skillClass}`} role="listitem" aria-labelledby={`${skillClass}-skill`}>
      <span className="icon" aria-hidden="true">{icon}</span>
      <span id={`${skillClass}-skill`} className="skill-name">{skillName}</span>
    </div>
  );
};

SkillItem.propTypes = {
  icon: PropTypes.element.isRequired,
  skillName: PropTypes.string.isRequired,
  skillClass: PropTypes.string.isRequired,
};

export default SkillsSection;
