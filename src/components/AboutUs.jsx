import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        duration: 0.8, 
        type: "spring", 
        stiffness: 100 
      } 
    }
  };

  const cards = [
    {
      icon: <Target className="text-gold" size={32} />,
      title: "Our Mission",
      description: "To deliver transformative IT solutions and connect individuals to their cosmic paths through innovative tech."
    },
    {
      icon: <Lightbulb className="text-gold" size={32} />,
      title: "Our Vision",
      description: "Pioneering a future where technology and ancient wisdom coexist seamlessly, enriching lives globally."
    },
    {
      icon: <Users className="text-gold" size={32} />,
      title: "Who We Are",
      description: "A team of passionate developers, designers, and visionary thinkers building scalable, beautiful products."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About <span className="text-gradient">Divine Nakshatra</span></h2>
          <p className="section-subtitle">Bridging the gap between the digital realm and the cosmos.</p>
        </motion.div>

        <motion.div 
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {cards.map((card, index) => (
            <motion.div 
              key={index} 
              className="about-card glass" 
              variants={itemVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                borderColor: "rgba(212, 175, 55, 0.5)"
              }}
            >
              <motion.div 
                className="card-icon"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                {card.icon}
              </motion.div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
