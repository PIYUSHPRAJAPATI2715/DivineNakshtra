import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';
import './Footer.css';

const InstagramIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

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
            <img src="/dnpllogo.png" alt="DNPL Logo" style={{ height: '160px', width: 'auto', marginBottom: '1.5rem' }} />
            <p className="footer-desc">
              Divine Nakshatra Private Limited. Innovating the future of IT services while preserving cosmic wisdom through Astroadvyc.
            </p>
            <div className="social-links">
              <motion.a href="#" aria-label="Website" whileHover={{ scale: 1.2, rotate: 10 }}><Globe size={20} /></motion.a>
              <motion.a href="#" aria-label="Instagram" whileHover={{ scale: 1.2, rotate: -10 }}><InstagramIcon size={20} /></motion.a>
              <motion.a href="#" aria-label="Facebook" whileHover={{ scale: 1.2, rotate: 10 }}><FacebookIcon size={20} /></motion.a>
            </div>
          </motion.div>

          <motion.div className="footer-links" variants={itemVariants}>
            <h3>Quick Links</h3>
            <ul>
              <motion.li whileHover={{ x: 5 }}><a href="#home">Home</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#about">About Us</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#services">IT Services</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#astroadvyc">Our Products</a></motion.li>
            </ul>
          </motion.div>

          <motion.div className="footer-contact" variants={itemVariants}>
            <h3>Contact Us</h3>
            <ul>
              <motion.li whileHover={{ scale: 1.05, originX: 0 }}>
                <MapPin size={60} className="text-gold" />
                <span>218-A, 4th Floor, J-Extension, Murthi Wali Gali No-7, Near Jain Mandir, Laxmi Nagar, Delhi - 110092, India</span>
              </motion.li>
              <motion.li whileHover={{ scale: 1.05, originX: 0 }}>
                <Phone size={18} className="text-gold" />
                <span>+91 98716 70826</span>
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
