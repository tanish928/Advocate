import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import './Testimonials.css';
import attorney1 from '../../assets/team1.jpg';
import attorney2 from '../../assets/team2.jpg';
import attorney3 from '../../assets/team3.jpg';

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const bannerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const testimonials = [
    {
      id: 1,
      name: 'Aarav Sharma',
      role: 'Civil Case Client',
      feedback:
        '“The professionalism and dedication I received were beyond expectations. Truly grateful for their support.”',
      bgImage: attorney1,
    },
    {
      id: 2,
      name: 'Priya Mehta',
      role: 'Family Law Client',
      feedback:
        '“They handled my case with care and gave me peace of mind during a very difficult time.”',
      bgImage: attorney2,
    },
    {
      id: 3,
      name: 'Rohan Patel',
      role: 'Criminal Defense Client',
      feedback:
        '“Exceptional legal advice and representation. Their team fought for me like family.”',
      bgImage: attorney3,
    },
  ];

  return (
    <motion.section
      className="testimonials-banner-section"
      id="testimonials"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {testimonials.map((t) => (
        <motion.div
          key={t.id}
          className="testimonial-banner"
          style={{ backgroundImage: `url(${t.bgImage})` }}
          variants={bannerVariants}
        >
          <div className="testimonial-overlay">
            <div className="testimonial-content container text-center text-white">
              <p className="testimonial-quote mb-4">{t.feedback}</p>
              <h5 className="fw-bold client-name">{t.name}</h5>
              <small className="client-role">{t.role}</small>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};
