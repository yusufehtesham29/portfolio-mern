import React from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" data-aos="fade-up">
      <div className="hero-content">
        <h1 className="hero-title" data-aos="fade-down" data-aos-delay="200">
          Hi, I'm <span className="highlight">Yusuf Ehtesham</span>
        </h1>
        
        <h2 className="hero-subtitle" data-aos="fade-up" data-aos-delay="400">
          <ReactTyped
            strings={[
              "Data Analysis • Data Science • Web Technologies"
            ]}
            typeSpeed={80}
            backSpeed={50}
            backDelay={2000}
            loop
            showCursor={true}
            cursorChar="|"
          />
        </h2>
        
        <p className="hero-description" data-aos="fade-up" data-aos-delay="600">
          I am a data-focused professional with strong foundations in data analysis 
          and data science, complemented by full stack web development skills. I work 
          with structured datasets to clean, analyze, and visualize data, and I build 
          intelligent, data-driven applications that turn analysis into usable products.
        </p>
        
        <div className="hero-buttons" data-aos="fade-up" data-aos-delay="800">
          <Link to="/projects" className="btn btn-primary">
            View Projects
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;