import { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './ProjectsSection.css';

const ProjectsSection = ({ projectsData }) => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
        if (direction === 'left') {
            scrollContainerRef.current.scrollLeft -= scrollAmount;
        } else {
            scrollContainerRef.current.scrollLeft += scrollAmount;
        }
    };

    return (
        <section id="projects" className="projects-section">
            <div className="projects-header">
                <div className="projects-info">
                    <h2 className="section-title">{projectsData.title}</h2>
                    <p className="projects-description">{projectsData.description}</p>
                </div>
            </div>
            <div className="slider-controls">
                <button onClick={() => scroll('left')} className="slider-btn" aria-label="Previous Project">
                    <FaArrowLeft />
                </button>
                <button onClick={() => scroll('right')} className="slider-btn" aria-label="Next Project">
                    <FaArrowRight />
                </button>
            </div>

            <div className="projects-slider-container" ref={scrollContainerRef}>
                {projectsData.project_list.map((project, index) => (
                    <a href={project.link} className="project-card" key={index}>
                        <img src={project.image_path} alt={project.title} className="project-image" />
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-category">{project.category}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
