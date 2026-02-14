import { PERSONAL_INFO, ABOUT_TEXT, SKILLS } from '../utils/constants';
import './About.css';

const About = () => {
  return (
    <section className="about-page section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          {/* About Text */}
          <div className="about-text">
            <h3>Hello! I'm {PERSONAL_INFO.name}</h3>
            <p>{ABOUT_TEXT}</p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or learning something new.
              I believe in writing clean, maintainable code and creating
              user-friendly applications.
            </p>
          </div>

          {/* Skills Section */}
          <div className="skills-category">
  <h4>Data Science & Analysis</h4>
  <div className="skills-list">
    {SKILLS.dataScience.map((skill, index) => (
      <span key={index} className="skill-tag">
        {skill}
      </span>
    ))}
  </div>
</div>

          <div className="skills-section">
            <h3>Technical Skills</h3>

            <div className="skills-category">
              <h4>Frontend Development</h4>
              <div className="skills-list">
                {SKILLS.frontend.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h4>Backend Development</h4>
              <div className="skills-list">
                {SKILLS.backend.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h4>Tools & Technologies</h4>
              <div className="skills-list">
                {SKILLS.tools.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;