// Portfolio.jsx

import { useState } from 'react';
//import PropTypes from 'prop-types';
import '../Sass/Portfolio.scss';
import projectData from '../projectData.json';
import Carousel from './Carousel';
import Modal from './Modal';

const Portfolio = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const openModal = (projectId) => {
    setSelectedProjectId(projectId);
  };

  const closeModal = () => {
    setSelectedProjectId(null);
  };

  return (
    <section id="projects" className="portfolio">
      <Carousel projects={projectData} openModal={openModal} />
      {selectedProjectId && (
        <Modal
          projectData={projectData.find((project) => project.id === selectedProjectId)}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Portfolio;
