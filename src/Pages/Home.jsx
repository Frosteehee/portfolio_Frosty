
import ProjectCard from '../Components/ProjectCard';
import Hero from '../Components/Hero';
import Contact from '../Components/Contact';
function Home() {
  return (
    <div className="home">
     <section className="hero">
      <Hero />
      </section>
      <section className="projectCard">
      <ProjectCard/>
</section>
      <section id="contact" className="contact">
      <Contact/>
      </section>

    </div>
     
  );
}

export default Home;
