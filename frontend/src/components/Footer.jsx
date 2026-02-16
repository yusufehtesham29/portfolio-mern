import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a 
            href="https://github.com/yusufehtesham29" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/yusuf-ehtesham-9863a6282" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          
          <a 
            href="mailto:yusufehtesham29@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
        
        <p className="footer-text">
          © {new Date().getFullYear()} Yusuf Ehtesham. All rights reserved.
        </p>
        
        <p className="footer-tech">
          Built with React + Vite + Node.js + MongoDB
        </p>
      </div>
    </footer>
  );
};

export default Footer;