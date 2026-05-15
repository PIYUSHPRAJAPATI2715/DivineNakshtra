import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageCircle, Phone, Calendar, X } from 'lucide-react';
import './Astroadvyc.css';

const Astroadvyc = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    { icon: <Phone size={24} />, text: "Live Video Consultations" },
    { icon: <MessageCircle size={24} />, text: "Instant Chat with Astrologers" },
    { icon: <Calendar size={24} />, text: "Daily Personalized Horoscopes" },
    { icon: <Star size={24} />, text: "Detailed Kundli Matching" }
  ];

  const mockups = [
    "/astro_mockup_4.png",
    "/astro_mockup_3.png",
    "/astro_mockup_2.png",
    "/astro_mockup_1.png",
  ];

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <section id="astroadvyc" className="astro-product-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our <span className="text-gradient">Products</span></h2>
          <p className="section-subtitle">
            We don't just build solutions for clients; we build and scale our own successful enterprise platforms.
          </p>
        </motion.div>

        <div className="product-tile-container">
          {/* Astroadvyc Tile */}
          <motion.div
            className="product-square-tile glass glow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(212,175,55,0.2)" }}
          >
            <div className="tile-logo-wrapper">
              <img src="/astroadvyc_logo.png" alt="Astroadvyc Logo" className="tile-logo" />
            </div>
            <motion.button
              className="btn-primary"
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Full Story
            </motion.button>
          </motion.div>

          {/* Divine Nakshatra Foundation Tile */}
          <motion.div
            className="product-square-tile glass glow disabled-tile"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="tile-logo-wrapper">
              <img src="/foundation.png" alt="Divine Nakshatra Foundation" className="tile-logo" />
            </div>
            <div className="coming-soon-badge">
              Coming Soon
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full Story Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="modal-content glass"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
            >
              <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
                <X size={28} />
              </button>

              <div className="modal-body">
                <div className="modal-text-content">
                  <img src="/astroadvyc_logo.png" alt="Astroadvyc" className="modal-logo" />
                  <h3 className="modal-title">Astroadvyc: Your Destiny, Decoded.</h3>
                  <div className="modal-desc" style={{ textAlign: 'justify' }}>
                    <p>Astroadvyc connects ancient astrology with modern life through a powerful digital platform. Get instant guidance from verified astrologers, tarot readers, and pandits anytime, anywhere. Find clarity in love, career, relationships, and life decisions with trusted spiritual experts.</p>

                    <ul className="modal-features" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                      <li><span className="feature-icon text-gold"><Phone size={20} /></span> Experience live video, voice, and chat consultations tailored to your journey.</li>
                      <li><span className="feature-icon text-gold"><Star size={20} /></span> Explore AstroMart for gemstones, spiritual products, and energy-aligning remedies.</li>
                      <li><span className="feature-icon text-gold"><Calendar size={20} /></span> Book authentic poojas and support meaningful charity through E-Daan for positive karma.</li>
                    </ul>

                    <p style={{ marginTop: '1rem', fontWeight: 'bold', color: 'var(--primary-gold)' }}>Astroadvyc — your complete spiritual ecosystem where destiny meets guidance.</p>
                  </div>

                  <button className="btn-secondary mt-4">Download App Now</button>
                </div>

                <div className="modal-gallery">
                  {mockups.map((src, idx) => (
                    <img key={idx} src={src} alt={`App screen ${idx}`} className="modal-mockup" />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Astroadvyc;
