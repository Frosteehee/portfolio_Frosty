import  { useState, useEffect } from 'react';
import '../Sass/ScrollToTopButton.scss'; 

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fonction qui vérifie la position de défilement et met à jour la visibilité du bouton
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Écoute l'événement de défilement
    window.addEventListener('scroll', handleScroll);

    // Nettoyage de l'écouteur d'événements lorsque le composant est démonté
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Cette fonction ne doit être exécutée qu'une seule fois, d'où la dépendance vide

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <div className="scrollToTopButton" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i> 
        </div>
      )}
    </>
  );
}

export default ScrollToTopButton;
