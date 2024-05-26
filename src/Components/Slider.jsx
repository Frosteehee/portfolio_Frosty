import { useState } from 'react';

const Slider = ({ projects }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === projects.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? projects.length - 1 : prevSlide - 1));
    };

    return (
        <div className="slider">
            <img src={projects[currentSlide].images[0]} alt={projects[currentSlide].title} />
            <div className="arrow arrow-left" onClick={prevSlide}>
                &lt;
            </div>
            <div className="arrow arrow-right" onClick={nextSlide}>
                &gt;
            </div>
            <div className="bullet-points">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`bullet ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
