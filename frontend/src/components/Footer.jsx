import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { PERSONAL_INFO } from '../utils/constants';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Social Links */}
          <div className="footer-social">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Copyright */}
          <p className="footer-text">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          {/* Built With */}
          <p className="footer-tech">
            Built with React + Vite + Node.js + MongoDB
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;