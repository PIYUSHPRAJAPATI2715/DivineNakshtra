import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Hide intro curtain after 10 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

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
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="intro-curtain"
            initial={{ y: 0 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <div className="intro-flowchart-container">
              {/* DNPL Branch */}
              <div className="intro-branch">
                <div className="intro-parent">
                  <img src="/dnpllogo.png" alt="DNPL" className="intro-logo" />
                </div>
                <div className="intro-flow-arrow"></div>
                <div className="intro-children cols-3">
                  <div className="intro-node">
                    <div className="intro-box">
                      <img src="/astroadvyc_logo.png" alt="Astroadvyc Astrology" className="intro-child-logo" />
                      <span>Astrology Services</span>
                    </div>
                  </div>
                  <div className="intro-node">
                    <div className="intro-box">
                      <img src="/astrolearning.png" alt="Astroadvyc Coaching" className="intro-child-logo" />
                      <span>Astrology Learning</span>
                    </div>
                  </div>
                  <div className="intro-node">
                    <div className="intro-box">
                      <img src="/dnpllogo.png" alt="Enterprise IT Services" className="intro-child-logo" />
                      <span>IT Services</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Foundation Branch */}
              <div className="intro-branch single-branch">
                <div className="intro-parent">
                  <img src="/foundation.png" alt="Foundation" className="intro-logo" />
                </div>
                <div className="intro-flow-arrow"></div>
                <div className="intro-children cols-1">
                  <div className="intro-node">
                    <div className="intro-box">
                      <img src="/foundation.png" alt="Charity Services" className="intro-child-logo" />
                      <span>Charity Services</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="skip-intro-btn" onClick={() => setShowIntro(false)}>
              Skip Intro
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="gateway-bg-elements">
        <div className="gateway-circle gc-1"></div>
        <div className="gateway-circle gc-2"></div>
        <div className="gateway-circle gc-3"></div>
      </div>

      <motion.div
        className="gateway-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="gateway-title">Welcome to <span className="text-gradient">Divine Nakshatra</span></h1>
        <p className="gateway-subtitle">Choose your destination to begin the journey.</p>
      </motion.div>

      <div className="campuses-wrapper">
        {/* --- CAMPUS 1: DNPL --- */}
        <section className="company-campus dnpl-campus">
          <motion.div className="cluster-header" variants={itemVariants}>
            <img src="/dnpllogo.png" alt="Divine Nakshatra Private Limited" className="cluster-logo" />
            <h2 className="text-gradient">Divine Nakshatra Private Limited</h2>
          </motion.div>
          <div className="cluster-divider"></div>

          <div className="cluster-cards cols-3">
            <div className="cluster-card-wrapper">
              <motion.a
                href="https://astroadvyc.com"
                className="gateway-tile clean-tile"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="gt-logo-box">
                  <img src="/astroadvyc_logo.png" alt="Astroadvyc" className="gt-clean-logo gt-astro-logo" />
                </div>
                <div className="gt-clean-text">
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
                </div>
                <button className="gt-btn-primary">Visit Portal</button>
              </motion.a>
            </div>

            <div className="cluster-card-wrapper">
              <motion.div
                className="gateway-tile clean-tile gt-disabled"
                variants={itemVariants}
              >
                {/* Using Astro learning logo */}
                <div className="gt-logo-box">
                  <img src="/astrolearning.png" alt="Astrology Learning" className="gt-clean-logo gt-astro-logo" />
                </div>
                <div className="gt-clean-text">
                  <h3>Astrology Learning Services</h3>
                  <ExpandableText>Empower your spiritual and professional journey with Astroadvyc Coaching. We provide comprehensive training and certification programs for aspiring astrologers, tarot readers, and spiritual guides. Our expert-led curriculum combines ancient Vedic wisdom with modern counseling techniques, giving you the tools to build a successful practice and guide others toward their highest potential.</ExpandableText>
                </div>
                <button className="gt-btn-outline">COMING SOON</button>
              </motion.div>
            </div>

            <div className="cluster-card-wrapper">
              <motion.div
                className="gateway-tile clean-tile cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onEnterIT}
              >
                <div className="gt-logo-box">
                  <img src="/dnpllogo.png" alt="IT Services" className="gt-clean-logo gt-it-logo" />
                </div>
                <div className="gt-clean-text">
                  <h3>Enterprise IT Services</h3>
                  <ExpandableText>Partner with Divine Nakshatra Private Limited to transform your business through cutting-edge digital solutions. We specialize in developing premium web applications, robust mobile platforms, and secure cloud infrastructure tailored to your enterprise needs. From initial UI/UX discovery to full-stack development and seamless deployment, our expert engineering team ensures flawless execution to drive innovation and unprecedented growth.</ExpandableText>
                </div>
                <button className="gt-btn-primary">Explore IT Portal</button>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            onClick={() => document.getElementById('foundation-campus').scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Discover Divine Nakshatra Sarvodaya Foundation</span>
            <div className="scroll-arrow">↓</div>
          </motion.div>
        </section>

        {/* --- CAMPUS 2: FOUNDATION --- */}
        <section id="foundation-campus" className="company-campus foundation-campus">
          <motion.div className="cluster-header" variants={itemVariants}>
            <img src="/foundation.png" alt="Divine Nakshatra Sarvodaya Foundation" className="cluster-logo gt-foundation-logo" />
            <h2 className="text-gradient">Divine Nakshatra Sarvodaya Foundation</h2>
          </motion.div>
          <div className="cluster-divider"></div>

          <div className="cluster-cards cols-1">
            {/* Charity */}
            <div className="cluster-card-wrapper">
              <motion.div
                className="gateway-tile clean-tile gt-disabled"
                variants={itemVariants}
              >
                <div className="gt-logo-box">
                  <img src="/foundation.png" alt="Charity Services" className="gt-clean-logo gt-foundation-logo" />
                </div>
                <div className="gt-clean-text">
                  <h3>Charity Services</h3>
                  <ExpandableText>Join our mission to create a lasting, positive impact across the globe through the Divine Nakshatra Sarvodya Foundation. We are deeply committed to empowering underprivileged communities, advancing education, and providing essential resources. By leveraging technology for social good, our upcoming charity initiatives will bridge the gap between digital innovation and humanitarian aid to build a transparent platform dedicated to uplifting humanity.</ExpandableText>
                </div>
                <button className="gt-btn-outline">COMING SOON</button>
              </motion.div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Gateway;
