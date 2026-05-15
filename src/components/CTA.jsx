import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div 
          className="cta-card glow"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Future?</h2>
            <p className="cta-desc">
              Whether you need enterprise-grade IT solutions or seek cosmic guidance, Divine Nakshatra Private Limited is your ultimate partner.
            </p>
            <div className="cta-buttons">
              <motion.a 
                href="#contact" 
                className="btn-primary"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Our IT Experts
              </motion.a>
              <motion.a 
                href="#astroadvyc" 
                className="btn-secondary"
                whileHover={{ scale: 1.05, backgroundColor: "var(--primary-gold)", color: "#000" }}
                whileTap={{ scale: 0.95 }}
              >
                Download Astroadvyc <ArrowRight size={20} className="ml-2" />
              </motion.a>
            </div>
          </div>
          <div className="cta-bg-elements">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
