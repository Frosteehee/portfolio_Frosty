import { useState } from 'react';
import Hero from '../Components/Hero';
import Contact from '../Components/Contact';
import AboutMe from '../Components/AboutMe';
import Portfolio from '../Components/Portfolio'; 
import projectData from '../projectData.json';
import Modal from '../Components/Modal'; // Importer le composant Modal
import '../Sass/Home.scss'; 
import SkillsSection from '../Components/Skills';

function Home() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const openModal = (projectId) => {
    setSelectedProjectId(projectId);
  };

  const closeModal = () => {
    setSelectedProjectId(null);
  };

  return (
    <div className="home">
    
        <Hero />
        <AboutMe />
        <SkillsSection />
      <Portfolio openModal={openModal} closeModal={closeModal} /> {/* Passer la fonction closeModal au composant Portfolio */}
        
        <Contact /> {/* Pourquoi Contact n'est pas une section ? */}

      {selectedProjectId && (
        <Modal
          projectData={projectData.find((project) => project.id === selectedProjectId)} 
          onClose={closeModal} // Passer la fonction closeModal à la modal pour la fermer
        />
      )}
     
    </div>
  );
}

export default Home;
