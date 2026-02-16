import React, { useState, useEffect, useRef } from 'react';
import './skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const skills = [
    { name: 'Python', level: 85, color: '#3776ab' },
    { name: 'Data Analysis', level: 90, color: '#667eea' },
    { name: 'Pandas & NumPy', level: 85, color: '#13aa52' },
    { name: 'Data Visualization', level: 80, color: '#f39c12' },
    { name: 'SQL', level: 75, color: '#00758f' },
    { name: 'React', level: 80, color: '#61dafb' },
    { name: 'Node.js', level: 75, color: '#68a063' },
    { name: 'MongoDB', level: 70, color: '#4db33d' },
    { name: 'Express.js', level: 75, color: '#000000' },
    { name: 'Machine Learning', level: 70, color: '#ff6f00' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div className="skills-section" ref={skillsRef}>
      <h3>💼 Technical Skills</h3>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className={`skill-progress ${isVisible ? 'animate' : ''}`}
                style={{ 
                  width: isVisible ? `${skill.level}%` : '0%',
                  backgroundColor: skill.color
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;