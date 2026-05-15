import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', service: 'it', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setIsSubmitted(true), 500);
  };

  return (
    <section id="contact-form" className="contact-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
          <p className="section-subtitle">Have a project in mind or need astrological guidance? We are here to help.</p>
        </motion.div>

        <motion.div 
          className="contact-container glass glow"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {isSubmitted ? (
            <div className="success-message">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
                <Send size={48} className="text-gold mb-4" />
              </motion.div>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
              <button className="btn-secondary mt-4" onClick={() => setIsSubmitted(false)}>Send Another Message</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="service">I'm interested in...</label>
                <select 
                  id="service" 
                  value={formState.service}
                  onChange={(e) => setFormState({...formState, service: e.target.value})}
                >
                  <option value="it">Enterprise IT Solutions</option>
                  <option value="astro">Astroadvyc Platform Support</option>
                  <option value="career">Careers at DNPL</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  required 
                  placeholder="Tell us about your project or inquiry..."
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="btn-primary form-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message <Send size={18} className="ml-2" />
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
