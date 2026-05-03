import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Astroadvyc from './components/Astroadvyc';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for initial animations to be ready
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <AnimatePresence>
        {loading && (
          <motion.div 
            className="loader-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              background: '#050510',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999
            }}
          >
            <motion.img 
              src="/astroadvyc_logo.png" 
              alt="Loading" 
              style={{ maxWidth: '200px', filter: 'drop-shadow(0 0 20px rgba(212,175,55,0.5))' }}
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.h2 
              className="text-gradient"
              style={{ marginTop: '2rem', fontFamily: 'Outfit' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Divine Nakshatra Private Limited
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <main>
            <Hero />
            <AboutUs />
            <Services />
            <Astroadvyc />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
