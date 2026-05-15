import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import './Process.css';

const Process = () => {
  const steps = [
    { icon: <Search size={32} />, title: "01. Discovery", desc: "We analyze your requirements, business goals, and current infrastructure." },
    { icon: <PenTool size={32} />, title: "02. Design & Architecture", desc: "Creating scalable blueprints and stunning UI/UX designs." },
    { icon: <Code size={32} />, title: "03. Agile Development", desc: "Iterative coding with continuous testing and client feedback loops." },
    { icon: <Rocket size={32} />, title: "04. Deployment", desc: "Smooth launch with ongoing 24/7 maintenance and support." }
  ];

  return (
    <section className="process-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">How We <span className="text-gradient">Work</span></h2>
          <p className="section-subtitle">A proven, transparent process for delivering enterprise-grade solutions.</p>
        </motion.div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="process-step"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="step-icon-wrapper glass glow">
                {step.icon}
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
              {/* Timeline Connector */}
              {index !== steps.length - 1 && <div className="step-connector"></div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
