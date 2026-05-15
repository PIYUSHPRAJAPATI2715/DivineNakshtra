import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Target, Lightbulb, Users, Download, Building, Award } from 'lucide-react';
import './AboutUs.css';

const StatCounter = ({ end, label, icon }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="stat-box glass">
      <div className="stat-icon">{icon}</div>
      <h4 className="stat-number">{count}{end > 100 ? '+' : ''}</h4>
      <p className="stat-label">{label}</p>
    </div>
  );
};

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, type: "spring" } }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About <span className="text-gradient">Divine Nakshatra</span></h2>
          <p className="section-subtitle">Bridging the gap between the digital realm and the cosmos.</p>
        </motion.div>

        <div className="about-layout">
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-glow"></div>
            <img src="/dnpl_about_bg.png" alt="Divine Nakshatra Tech and Astro" className="about-main-image" />
            
            <div className="stats-container">
              <StatCounter end={500} label="App Downloads" icon={<Download size={20} />} />
              <StatCounter end={50} label="Enterprise Clients" icon={<Building size={20} />} />
              <StatCounter end={100} label="Expert Astrologers" icon={<Award size={20} />} />
            </div>
          </motion.div>

          <motion.div 
            className="about-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 className="about-heading" variants={itemVariants}>
              Pioneering the Intersection of <span className="text-gradient">Technology & Destiny</span>
            </motion.h3>
            <motion.p className="about-text" variants={itemVariants}>
              At Divine Nakshatra Private Limited, we don't just build software; we build ecosystems that empower businesses and individuals alike. Our deep-rooted expertise in modern IT infrastructure allows us to deliver scalable, secure, and robust solutions for enterprise clients worldwide.
            </motion.p>
            <motion.p className="about-text" variants={itemVariants}>
              Simultaneously, we honor ancient cosmic wisdom through our flagship platform, <strong>Astroadvyc</strong>. By leveraging cutting-edge AI and seamless real-time communication protocols, we've created a sanctuary where users can seek guidance from trusted astrological experts instantly.
            </motion.p>

            <div className="about-cards-mini">
              {[
                { icon: <Target size={24}/>, title: "Our Mission", desc: "Empowering growth through innovative code and cosmic insight." },
                { icon: <Lightbulb size={24}/>, title: "Our Vision", desc: "A harmonious future driven by tech and guided by the stars." },
                { icon: <Users size={24}/>, title: "Who We Are", desc: "Visionary developers, designers, and spiritual guides." }
              ].map((card, idx) => (
                <motion.div key={idx} className="mini-card glass" variants={itemVariants} whileHover={{ y: -5, borderColor: "var(--primary-gold)" }}>
                  <div className="mini-icon text-gold">{card.icon}</div>
                  <div>
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
