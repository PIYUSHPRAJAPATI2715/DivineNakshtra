import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: "Rajesh Kumar",
      role: "CEO, TechFlow",
      text: "Divine Nakshatra delivered an enterprise cloud solution that scaled perfectly. Their IT team is simply unmatched in speed and quality.",
      rating: 5,
      type: "IT Client"
    },
    {
      name: "Sneha Sharma",
      role: "Astroadvyc User",
      text: "I was lost regarding my career, but the live consultation on Astroadvyc gave me the clarity I needed. The app interface is so smooth!",
      rating: 5,
      type: "Astro User"
    },
    {
      name: "Vikram Singh",
      role: "Founder, DataSync",
      text: "Their cybersecurity audit saved us from major vulnerabilities. Highly professional and deeply knowledgeable engineers.",
      rating: 5,
      type: "IT Client"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Client <span className="text-gradient">Testimonials</span></h2>
          <p className="section-subtitle">Don't just take our word for it. Hear from those who have experienced our magic.</p>
        </motion.div>

        <div className="testimonials-grid">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx} 
              className="testimonial-card glass"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6, type: "spring" }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
            >
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="var(--primary-gold)" color="var(--primary-gold)" />
                ))}
              </div>
              <p className="testimonial-text">"{review.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{review.name.charAt(0)}</div>
                <div>
                  <h4>{review.name}</h4>
                  <p>{review.role}</p>
                </div>
                <span className="badge glass review-type">{review.type}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
