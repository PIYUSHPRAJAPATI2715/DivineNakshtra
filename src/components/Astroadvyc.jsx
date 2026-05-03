import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, Phone, Calendar } from 'lucide-react';
import './Astroadvyc.css';

const Astroadvyc = () => {
  const features = [
    { icon: <Phone size={24} />, text: "Live Video Consultations" },
    { icon: <MessageCircle size={24} />, text: "Instant Chat with Astrologers" },
    { icon: <Calendar size={24} />, text: "Daily Personalized Horoscopes" },
    { icon: <Star size={24} />, text: "Detailed Kundli Matching" }
  ];

  const mockups = [
    "/astro_mockup_4.png", // Home
    "/astro_mockup_3.png", // Astrologer List
    "/astro_mockup_2.png", // Live
    "/astro_mockup_1.png", // Astromall
  ];

  return (
    <section id="astroadvyc" className="astro-section">
      <div className="container">
        <div className="astro-content-wrapper">
          <motion.div 
            className="astro-text"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.div 
              className="badge glass"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(212,175,55,0.4)" }}
            >
              Featured Product
            </motion.div>
            
            <motion.div 
              className="astro-logo-wrapper"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <img src="/astroadvyc_logo.png" alt="Astroadvyc Logo" className="astro-logo-img" />
            </motion.div>

            <motion.p 
              className="astro-desc"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Discover your destiny with Astroadvyc, Divine Nakshatra Private Limited's flagship astrology platform. 
              Connect with top astrologers instantly, get your daily horoscope, and find answers to your life's biggest questions.
            </motion.p>

            <ul className="astro-features">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                  whileHover={{ scale: 1.05, x: 10, color: "var(--primary-gold)" }}
                >
                  <motion.span 
                    className="feature-icon"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.span>
                  {feature.text}
                </motion.li>
              ))}
            </ul>

            <motion.button 
              className="btn-primary glow mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(212,175,55,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Download App
            </motion.button>
          </motion.div>

          <motion.div 
            className="astro-mockups-container"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="astro-glow-bg"></div>
            <div className="mockup-gallery">
              {mockups.map((src, index) => (
                <motion.img 
                  key={index}
                  src={src} 
                  alt={`Astroadvyc App View ${index + 1}`} 
                  className={`astro-mockup-item mockup-${index}`}
                  initial={{ y: 100, opacity: 0, rotate: index * 2 - 5 }}
                  whileInView={{ 
                    y: 0, 
                    opacity: 1,
                    rotate: index * 4 - 5 
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.6 + index * 0.2, 
                    duration: 0.8, 
                    type: "spring",
                    bounce: 0.4
                  }}
                  whileHover={{ 
                    y: -30, 
                    scale: 1.1, 
                    zIndex: 10,
                    rotate: 0,
                    boxShadow: "0 30px 60px rgba(0,0,0,0.8)"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Astroadvyc;
