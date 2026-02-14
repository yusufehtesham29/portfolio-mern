import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card card">
      {/* Project Image */}
      {project.imageUrl && (
        <div className="project-image">
          <img src={project.imageUrl} alt={project.title} />
        </div>
      )}

      {/* Project Content */}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        {/* Tech Stack */}
        <div className="project-tech">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="project-links">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaGithub /> Code
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubLink: PropTypes.string,
    liveLink: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;