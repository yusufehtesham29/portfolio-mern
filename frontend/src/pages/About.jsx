import React from 'react';
import Skills from '../components/skills';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title" data-aos="fade-down">About Me</h1>
        
        <div className="about-content">
          <h2 data-aos="fade-right">Hello! I'm Yusuf Ehtesham</h2>
          
          <p data-aos="fade-up">
            I am a data-driven problem solver with a strong interest in Data Analysis 
            and Data Science. I enjoy working with datasets, uncovering patterns, and 
            transforming raw information into meaningful insights that support better 
            decision-making. My core focus lies in data cleaning, exploratory analysis, 
            visualization, and applying statistical techniques to real-world problems.
          </p>

          <p data-aos="fade-up" data-aos-delay="100">
            Alongside analytics, I have experience in full stack web development using 
            the MERN stack. I build scalable applications and data-driven dashboards 
            that help present insights in an interactive and accessible way. For me, 
            development is a tool to deliver the power of data effectively.
          </p>

          <p data-aos="fade-up" data-aos-delay="200">
            As an MCA student, I am continuously learning and exploring machine learning 
            fundamentals, business intelligence concepts, and modern web technologies to 
            strengthen both my analytical and technical skills.
          </p>

          <p data-aos="fade-up" data-aos-delay="300">
            I believe in writing clean, maintainable code and approaching problems with 
            logical thinking and curiosity.
          </p>

          <div data-aos="fade-up" data-aos-delay="400">
            <Skills />
          </div>

          <h3 data-aos="fade-right">🛠️ Technologies & Tools</h3>
          <div className="tech-stack" data-aos="fade-up">
            <div className="tech-category">
              <h4>Data Analysis</h4>
              <p>Python, Pandas, NumPy, Jupyter Notebook, Excel</p>
            </div>
            <div className="tech-category">
              <h4>Data Visualization</h4>
              <p>Power BI, Matplotlib, Seaborn, Plotly</p>
            </div>
            <div className="tech-category">
              <h4>Web Development</h4>
              <p>React, Node.js, Express, MongoDB, JavaScript</p>
            </div>
            <div className="tech-category">
              <h4>Tools & Others</h4>
              <p>Git, VS Code, SQL, Statistical Analysis</p>
            </div>
          </div>

          <h3 data-aos="fade-right">🎓 Education</h3>
          <p data-aos="fade-up">
            <strong>Master of Computer Applications (MCA)</strong><br />
            Continuously learning and expanding knowledge in data science, 
            machine learning, and modern web technologies.
          </p>

          <h3 data-aos="fade-right">💡 My Approach</h3>
          <p data-aos="fade-up">
            I approach every project with curiosity and logical thinking. Whether 
            it's analyzing complex datasets or building web applications, I focus 
            on understanding the problem first, then crafting solutions that are 
            both technically sound and practically useful. Clean code, clear insights, 
            and continuous learning are the foundations of my work.
          </p>

          <h3 data-aos="fade-right">📫 Let's Connect</h3>
          <p data-aos="fade-up">
            I'm always excited to collaborate on data-driven projects, explore new 
            opportunities, or discuss ideas in data science and web development. 
            Feel free to reach out through the contact page or connect with me on 
            social media!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;