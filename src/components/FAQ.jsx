import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq-item glass ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={onClick}>
        <span>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="faq-icon-wrapper"
        >
          <ChevronDown size={20} className="text-gold" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="faq-answer-wrapper"
          >
            <div className="faq-answer">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What kind of IT services does Divine Nakshatra provide?",
      a: "We offer end-to-end IT solutions including full-stack web and mobile app development, scalable cloud architecture, strict cybersecurity audits, and advanced AI/Machine Learning integration for enterprise clients."
    },
    {
      q: "What technologies do you specialize in for web and mobile development?",
      a: "Our engineering team specializes in modern, scalable tech stacks including React, Next.js, and Node.js for web platforms, as well as cross-platform frameworks like Flutter and React Native for mobile applications."
    },
    {
      q: "Do you provide custom cloud architecture and infrastructure management?",
      a: "Yes, we design, deploy, and manage highly scalable and secure cloud architectures using AWS, Google Cloud, and Microsoft Azure, tailored specifically to your enterprise requirements."
    },
    {
      q: "Do you offer post-launch support for IT projects?",
      a: "Absolutely. We view our clients as long-term partners. We offer 24/7 dedicated maintenance, server monitoring, and scaling support to ensure your application remains robust."
    },
    {
      q: "How can I request a quote for my project?",
      a: "You can use the contact form below or reach out to us directly at contact@divinenakshatra.com. Our discovery team will get back to you within 24 hours to schedule a free initial consultation."
    }
  ];

  return (
    <section className="faq-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className="section-subtitle">Everything you need to know about our services and products.</p>
        </motion.div>

        <motion.div 
          className="faq-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.q} 
              answer={faq.a} 
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
