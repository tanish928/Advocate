import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import './PeopleMakeTheDifference.css';
import team1 from '../../assets/team1.jpg';
import team2 from '../../assets/team2.jpg';
import team3 from '../../assets/team3.jpg';

export const PeopleMakeTheDifference = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Animation for the section container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.3 } // Stagger children (cards)
    }
  };

  // Animation for each person card
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
      className="people-difference-section py-5"
      id="people"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants} // Apply container animation
    >
      <div className="container">
        <div className="text-center mb-5">
          <motion.h2
            className="fw-bold"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            People Make the Difference
          </motion.h2>
          <motion.p
            className="text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Meet the dedicated team driving success through expertise and care.
          </motion.p>
        </div>
        <div className="row">
          {/* Person 1 */}
          <motion.div
            className="col-md-4 mb-4"
            variants={cardVariants}
          >
            <div className="person-card text-center p-4 shadow-sm rounded">
              <img src={team1} alt="Jane Doe" className="img-fluid rounded-circle mb-3 person-img" />
              <h4 className="fw-bold">Jane Doe</h4>
              <p className="text-muted">Senior Partner</p>
              <p className="small text-muted">
                With over 15 years of experience, Jane leads with integrity and expertise.
              </p>
            </div>
          </motion.div>

          {/* Person 2 */}
          <motion.div
            className="col-md-4 mb-4"
            variants={cardVariants}
          >
            <div className="person-card text-center p-4 shadow-sm rounded">
              <img src={team2} alt="John Smith" className="img-fluid rounded-circle mb-3 person-img" />
              <h4 className="fw-bold">John Smith</h4>
              <p className="text-muted">Legal Advisor</p>
              <p className="small text-muted">
                John's strategic insights have been pivotal in high-profile cases.
              </p>
            </div>
          </motion.div>

          {/* Person 3 */}
          <motion.div
            className="col-md-4 mb-4"
            variants={cardVariants}
          >
            <div className="person-card text-center p-4 shadow-sm rounded">
              <img src={team3} alt="Alice Brown" className="img-fluid rounded-circle mb-3 person-img" />
              <h4 className="fw-bold">Alice Brown</h4>
              <p className="text-muted">Client Relations</p>
              <p className="small text-muted">
                Alice ensures that every client receives personalized care and attention.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
