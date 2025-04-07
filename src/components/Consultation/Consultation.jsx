import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import './Consultation.css';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaCheckCircle } from 'react-icons/fa';

export const Consultation = () => {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const staggerChildren = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      id="Book a Consulation"
      className="book-section text-center"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeUp}
    >
      <div className="container">
        <motion.h2 className="section-title" variants={fadeUp}>
          Need Legal Advice?
        </motion.h2>
        <motion.p className="section-subtitle" variants={fadeUp}>
          Book a session with an experienced advocate. We handle criminal, civil, property and high court matters.
        </motion.p>

        <motion.button
          className="btn consult-btn px-5 py-3 rounded-pill"
          onClick={() => setShowModal(true)}
          variants={fadeUp}
        >
          Book a Consultation
        </motion.button>

        <motion.div className="benefits-section mt-5" variants={staggerChildren}>
          <motion.h4 className="mb-4" variants={fadeUp}>Why Choose Us?</motion.h4>
          <ul className="benefits-list">
            <motion.li variants={fadeUp}><FaCheckCircle /> Personalized legal guidance</motion.li>
            <motion.li variants={fadeUp}><FaCheckCircle /> 10+ years of courtroom experience</motion.li>
            <motion.li variants={fadeUp}><FaCheckCircle /> Transparent consultation process</motion.li>
            <motion.li variants={fadeUp}><FaCheckCircle /> Fast & responsive communication</motion.li>
          </ul>
        </motion.div>
      </div>

      {showModal && (
        <div className="consultancy-modal-overlay" onClick={() => setShowModal(false)}>
          <motion.div
            className="consultancy-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h5 className="mb-3">Connect With Us</h5>
            <p className="text-muted">Choose your preferred method to book a consultation:</p>
            <div className="modal-buttons d-flex flex-column gap-3 mt-4">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn modal-btn whatsapp"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <a href="tel:+919999999999" className="btn modal-btn call">
                <FaPhoneAlt /> Call Us
              </a>
              <a href="mailto:lawyer@example.com" className="btn modal-btn email">
                <FaEnvelope /> Email
              </a>
            </div>
            <button className="btn btn-link mt-4 text-decoration-none" onClick={() => setShowModal(false)}>
              Close
            </button>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
};
