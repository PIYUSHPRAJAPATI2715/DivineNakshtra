import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <motion.img 
          src="/dnpl_hero_bg_1777792307371.png" 
          alt="Background" 
          className="bg-image"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="bg-overlay"></div>
      </div>
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="badge glass"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)" }}
          >
            <Sparkles size={16} className="text-gold" />
            <span>Premium IT & Astro Solutions</span>
          </motion.div>
          
          <motion.h1 className="hero-title" variants={itemVariants}>
            Divine Nakshatra <br />
            <span className="text-gradient" style={{ fontSize: '0.6em', display: 'block', marginTop: '10px' }}>Private Limited</span>
          </motion.h1>
          
          <motion.p className="hero-description" variants={itemVariants}>
            Innovating the future of technology while preserving cosmic wisdom. 
            From robust enterprise IT solutions to our flagship astrology product, Astroadvyc.
          </motion.p>
          
          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.a 
              href="#services" 
              className="btn-primary glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services <ChevronRight size={20} />
            </motion.a>
            <motion.a 
              href="#astroadvyc" 
              className="btn-secondary"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(212, 175, 55, 0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              Discover Astroadvyc
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
