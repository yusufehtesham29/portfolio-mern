import { useState, useEffect } from 'react';
import { getAllProjects } from '../services/api';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getAllProjects();
      setProjects(response.data);
    } catch (err) {
      setError(err);
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="projects-page section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading projects...</p>
          </div>
        )}

        {error && (
          <div className="alert alert-error">
            Failed to load projects. Please try again later.
          </div>
        )}

        {!loading && !error && projects.length === 0 && (
          <div className="no-projects">
            <p>No projects found. Check back soon!</p>
          </div>
        )}

        {!loading && !error && projects.length > 0 && (
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;