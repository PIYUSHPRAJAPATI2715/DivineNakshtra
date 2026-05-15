import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MessageCircle, Mail } from 'lucide-react';
import './Founders.css';

const Founders = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const founders = [
    {
      name: "Deepak Tekchandani",
      role: "Founder & CEO",
      image: "/deepak.png",
      description: "Visionary leader bridging the gap between ancient cosmic wisdom and modern technological innovation.",
    },
    {
      name: "Anthony D'cruze",
      role: "Co-Founder",
      image: "/anthony.jpeg",
      description: "Tech mastermind driving the architecture and scalable cloud infrastructure behind our premium platforms.",
    },
    {
      name: "Maya A Rozario",
      role: "Co-Founder",
      image: "/maya.jpeg",
      description: "Strategic visionary ensuring our digital ecosystem seamlessly connects and empowers global communities.",
    },
    {
      name: "Sharad Pandey",
      role: "Director",
      image: "/sharad_pandey.png",
      description: "Driving operational excellence and executing innovative strategies to scale our IT infrastructure.",
    }
  ];

  return (
    <section id="founders" className="founders section">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our <span className="text-gradient">Leadership Team</span></h2>
          <p className="section-subtitle">The visionaries behind Divine Nakshatra Private Limited.</p>
        </motion.div>

        <motion.div
          className="founders-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {founders.map((founder, index) => (
            <motion.div key={index} className="founder-card glass glow" variants={itemVariants}>
              <div className="founder-image-wrapper">
                <img src={founder.image} alt={founder.name} className="founder-image" />
                {/* <div className="founder-socials">
                  <a href="#" className="fs-link"><Globe size={18} /></a>
                  <a href="#" className="fs-link"><MessageCircle size={18} /></a>
                  <a href="#" className="fs-link"><Mail size={18} /></a>
                </div> */}
              </div>
              <div className="founder-info">
                <h3>{founder.name}</h3>
                <span className="founder-role text-gold">{founder.role}</span>
                <p>{founder.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;
