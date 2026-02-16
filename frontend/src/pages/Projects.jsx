import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchProjects = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      console.log('🔍 Fetching from:', `${apiUrl}/projects`);
      
      const response = await axios.get(`${apiUrl}/projects`);
      console.log('✅ Response:', response.data);
      
      // The API returns {success: true, count: 5, data: [...]}
      // So we need response.data.data to get the actual projects array
      setProjects(response.data.data);  // ← Changed this line
      setLoading(false);
    } catch (err) {
      console.error('❌ Error fetching projects:', err);
      setError('Failed to load projects. Please try again later.');
      setLoading(false);
    }
  };

  fetchProjects();
}, []);

  if (loading) {
    return (
      <div className="projects-page">
        <div className="projects-container">
          <h1 className="projects-title">My Projects</h1>
          <div className="loading">Loading projects...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="projects-page">
        <div className="projects-container">
          <h1 className="projects-title">My Projects</h1>
          <div className="error">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="projects-page">
      <div className="projects-container">
        <h1 className="projects-title" data-aos="fade-down">My Projects</h1>
        <p className="projects-subtitle" data-aos="fade-up" data-aos-delay="200">
          Here are some of my data science and data analysis projects
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project._id} 
              data-aos="zoom-in" 
              data-aos-delay={index * 100}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;