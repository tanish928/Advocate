import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import './PracticeAreas.css';
import { FaBalanceScale, FaUserTie, FaLandmark, FaFileAlt } from 'react-icons/fa';

export const PracticeAreas = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      className="practice-areas-section py-5"
      id="practice-areas"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="container">
        <div className="text-center mb-5">
          <motion.h2 className="fw-bold" variants={cardVariants}>Practice Areas</motion.h2>
          <motion.p className="text-muted" variants={cardVariants}>
            Specialized legal areas I focus on
          </motion.p>
        </div>
        <div className="row">
          <motion.div className="col-md-3 mb-4" variants={cardVariants}>
            <div className="practice-card p-4 text-center shadow-sm rounded">
              <FaBalanceScale className="practice-icon mb-3" size={48} />
              <h3 className="fw-bold">Civil Law</h3>
              <p className="text-muted">Resolving civil disputes with expertise.</p>
            </div>
          </motion.div>

          <motion.div className="col-md-3 mb-4" variants={cardVariants}>
            <div className="practice-card p-4 text-center shadow-sm rounded">
              <FaUserTie className="practice-icon mb-3" size={48} />
              <h3 className="fw-bold">Criminal Law</h3>
              <p className="text-muted">Defending your rights in criminal cases.</p>
            </div>
          </motion.div>

          <motion.div className="col-md-3 mb-4" variants={cardVariants}>
            <div className="practice-card p-4 text-center shadow-sm rounded">
              <FaLandmark className="practice-icon mb-3" size={48} />
              <h3 className="fw-bold">Corporate Law</h3>
              <p className="text-muted">Expert legal advice for businesses.</p>
            </div>
          </motion.div>

          <motion.div className="col-md-3 mb-4" variants={cardVariants}>
            <div className="practice-card p-4 text-center shadow-sm rounded">
              <FaFileAlt className="practice-icon mb-3" size={48} />
              <h3 className="fw-bold">Family Law</h3>
              <p className="text-muted">Sensitive and compassionate legal support.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
