import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../utils/constants';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
          </h1>
          <h2 className="hero-subtitle">{PERSONAL_INFO.title}</h2>
          <p className="hero-description">
            I build exceptional digital experiences with modern web technologies.
            Specialized in full-stack development using the MERN stack.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;