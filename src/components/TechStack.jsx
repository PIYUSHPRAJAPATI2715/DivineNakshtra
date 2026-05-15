import React from 'react';
import './TechStack.css';

const TechStack = () => {
  const technologies = [
    "React", "Node.js", "Python", "AWS", "Google Cloud", 
    "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "TensorFlow",
    "Framer Motion", "Vite", "GraphQL", "Redis"
  ];

  return (
    <div className="tech-stack-section">
      <div className="tech-stack-marquee">
        <div className="tech-track">
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={index} className="tech-item glass">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
