import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import './Gateway.css';

const ExpandableText = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="expandable-text-container">
      <div className={`gt-desc ${isExpanded ? 'expanded' : 'collapsed'}`}>
        {children}
      </div>
      <span
        className="view-more-btn"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? 'View Less' : 'View More'}
      </span>
    </div>
  );
};

const Gateway = ({ onEnterIT }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, type: "spring" }
    }
  };

  return (
    <div className="gateway-container">
      <div className="gateway-bg-elements">
        <div className="gateway-circle gc-1"></div>
        <div className="gateway-circle gc-2"></div>
        <div className="gateway-circle gc-3"></div>
      </div>

      <motion.div
        className="gateway-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img src="/dnpllogo.png" alt="Divine Nakshatra" className="gateway-main-logo" />
        <h1 className="gateway-title">Welcome to <span className="text-gradient">Divine Nakshatra</span></h1>
        <p className="gateway-subtitle">Choose your destination to begin the journey.</p>
      </motion.div>

      <motion.div
        className="gateway-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Astroadvyc Tile */}
        <motion.a
          href="https://astroadvyc.com"
          className="gateway-tile glass glow"
          variants={itemVariants}
          whileHover={{ y: -10, scale: 1.02, boxShadow: "0 20px 40px rgba(212,175,55,0.3)" }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="gt-logo-wrapper">
            <img src="/astroadvyc_logo.png" alt="Astroadvyc" className="gt-logo gt-astro-logo" />
          </div>
          <div className="gt-content">
            <h3>Astroadvyc Astrology Services</h3>
            <ExpandableText>
              <div className="gt-para">Astroadvyc connects ancient astrology with modern life through a powerful digital platform.</div>
              <div className="gt-para">Get instant guidance from verified astrologers, tarot readers, and pandits anytime, anywhere.</div>
              <div className="gt-para">Find clarity in love, career, relationships, and life decisions with trusted spiritual experts.</div>
              <div className="gt-para">Experience live video, voice, and chat consultations tailored to your journey.</div>
              <div className="gt-para">Explore AstroMart for gemstones, spiritual products, and energy-aligning remedies.</div>
              <div className="gt-para">Book authentic poojas and support meaningful charity through E-Daan for positive karma.</div>
              <div className="gt-para"><strong>Astroadvyc — your complete spiritual ecosystem where destiny meets guidance.</strong></div>
            </ExpandableText>
            <div className="gt-action">
              <span>Visit Portal</span>
              <ExternalLink size={18} />
            </div>
          </div>
        </motion.a>

        {/* IT Service Tile */}
        <motion.div
          className="gateway-tile glass glow cursor-pointer"
          variants={itemVariants}
          whileHover={{ y: -10, scale: 1.02, boxShadow: "0 20px 40px rgba(0,195,255,0.3)", borderColor: "rgba(0,195,255,0.5)" }}
          whileTap={{ scale: 0.98 }}
          onClick={onEnterIT}
        >
          <div className="gt-logo-wrapper">
            <img src="/dnpllogo.png" alt="IT Services" className="gt-logo gt-it-logo" />
          </div>
          <div className="gt-content">
            <h3>Enterprise IT Services</h3>
            <ExpandableText>Partner with Divine Nakshatra Private Limited to transform your business through cutting-edge digital solutions. We specialize in developing premium web applications, robust mobile platforms, and secure cloud infrastructure tailored to your enterprise needs. From initial UI/UX discovery to full-stack development and seamless deployment, our expert engineering team ensures flawless execution to drive innovation and unprecedented growth.</ExpandableText>
            <div className="gt-action text-blue">
              <span>Explore Website</span>
              <ArrowRight size={18} />
            </div>
          </div>
        </motion.div>

        {/* Charity Service Tile */}
        <motion.div
          className="gateway-tile glass gt-disabled"
          variants={itemVariants}
        >
          <div className="gt-logo-wrapper">
            <img src="/foundation.png" alt="Divine Nakshatra Foundation" className="gt-logo gt-foundation-logo" />
          </div>
          <div className="gt-content">
            <h3>Charity Services</h3>
            <ExpandableText>Join our mission to create a lasting, positive impact across the globe through the Divine Nakshatra Foundation. We are deeply committed to empowering underprivileged communities, advancing education, and providing essential resources. By leveraging technology for social good, our upcoming charity initiatives will bridge the gap between digital innovation and humanitarian aid to build a transparent platform dedicated to uplifting humanity.</ExpandableText>
            <div className="gt-action-badge">
              Coming Soon
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Gateway;
