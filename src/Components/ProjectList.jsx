import { useState } from 'react';
import Modal from './Modal'; // Importez le composant Modal
import ProjectCard from './ProjectCard';
import projectsData from './projects.json'; // Importez vos données de projets

const ProjectList = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projectCards">
      {projectsData.map(project => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          images={project.images}
          skills={project.skills}
          onClick={() => handleCardClick(project)}
        />
      ))}
      {selectedProject && (
        <Modal
          projectData={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ProjectList;
