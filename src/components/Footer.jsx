import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Globe, MessageCircle, Share2 } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <motion.div 
          className="footer-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="footer-brand" variants={itemVariants}>
            <h2 className="logo-text text-gradient">Divine Nakshatra</h2>
            <p className="footer-desc">
              Divine Nakshatra Private Limited. Innovating the future of IT services while preserving cosmic wisdom through Astroadvyc.
            </p>
            <div className="social-links">
              <motion.a href="#" aria-label="Website" whileHover={{ scale: 1.2, rotate: 10 }}><Globe size={20} /></motion.a>
              <motion.a href="#" aria-label="Community" whileHover={{ scale: 1.2, rotate: -10 }}><MessageCircle size={20} /></motion.a>
              <motion.a href="#" aria-label="Social" whileHover={{ scale: 1.2, rotate: 10 }}><Share2 size={20} /></motion.a>
            </div>
          </motion.div>

          <motion.div className="footer-links" variants={itemVariants}>
            <h3>Quick Links</h3>
            <ul>
              <motion.li whileHover={{ x: 5 }}><a href="#home">Home</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#about">About Us</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#services">IT Services</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#astroadvyc">Astroadvyc</a></motion.li>
            </ul>
          </motion.div>

          <motion.div className="footer-contact" variants={itemVariants}>
            <h3>Contact Us</h3>
            <ul>
              <motion.li whileHover={{ scale: 1.05, originX: 0 }}>
                <MapPin size={18} className="text-gold" />
                <span>Tech Park, Silicon Avenue, India</span>
              </motion.li>
              <motion.li whileHover={{ scale: 1.05, originX: 0 }}>
                <Phone size={18} className="text-gold" />
                <span>+91 98765 43210</span>
              </motion.li>
              <motion.li whileHover={{ scale: 1.05, originX: 0 }}>
                <Mail size={18} className="text-gold" />
                <span>contact@divinenakshatra.com</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="footer-bottom border-top"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Divine Nakshatra Private Limited. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
