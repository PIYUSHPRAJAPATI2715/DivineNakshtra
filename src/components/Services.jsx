import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Cloud, Shield, Database, Cpu } from 'lucide-react';
import './Services.css';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.6, type: "spring" } 
    }
  };

  const services = [
    { icon: <Code size={28} />, title: "Web Development", desc: "Custom, responsive web applications built with modern frameworks." },
    { icon: <Smartphone size={28} />, title: "Mobile Apps", desc: "Native and cross-platform mobile experiences for iOS and Android." },
    { icon: <Cloud size={28} />, title: "Cloud Solutions", desc: "Scalable cloud architecture, deployment, and management." },
    { icon: <Shield size={28} />, title: "Cybersecurity", desc: "Robust security audits and implementation to protect your data." },
    { icon: <Database size={28} />, title: "Data Analytics", desc: "Transforming raw data into actionable business intelligence." },
    { icon: <Cpu size={28} />, title: "AI & Machine Learning", desc: "Integrating smart, predictive algorithms into your workflows." }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our <span className="text-gradient">IT Services</span></h2>
          <p className="section-subtitle">Empowering your business with state-of-the-art technology solutions.</p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card glass" 
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0 15px 30px rgba(0,0,0,0.5)",
              }}
            >
              <motion.div 
                className="service-icon-wrapper"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <div className="service-hover-glow"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
