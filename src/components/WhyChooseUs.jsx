import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Zap, ShieldCheck } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } }
  };

  const advantages = [
    { icon: <Clock size={32} />, title: "24/7 Availability", desc: "Our global team and Astroadvyc experts are available round the clock." },
    { icon: <Zap size={32} />, title: "Lightning Fast Delivery", desc: "Agile methodology ensures rapid deployment of enterprise IT solutions." },
    { icon: <ShieldCheck size={32} />, title: "Uncompromised Security", desc: "Military-grade encryption for both corporate data and private astrological consultations." },
    { icon: <CheckCircle size={32} />, title: "Certified Experts", desc: "Top 1% developers and verified, renowned astrologers." }
  ];

  return (
    <section className="why-section">
      <div className="container">
        <div className="why-layout">
          <motion.div 
            className="why-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 className="section-title" variants={itemVariants}>
              Why Choose <span className="text-gradient">Us?</span>
            </motion.h2>
            <motion.p className="section-subtitle align-left" variants={itemVariants}>
              We don't just provide services; we build lasting partnerships. Here is what sets Divine Nakshatra Private Limited apart from the rest.
            </motion.p>
            
            <div className="advantages-grid">
              {advantages.map((adv, idx) => (
                <motion.div 
                  key={idx} 
                  className="advantage-card glass"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10, borderColor: "var(--primary-gold)" }}
                >
                  <div className="adv-icon text-gold">{adv.icon}</div>
                  <h4 className="adv-title">{adv.title}</h4>
                  <p className="adv-desc">{adv.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
