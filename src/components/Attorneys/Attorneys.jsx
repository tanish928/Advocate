import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import './Attorneys.css';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import attorney1 from '../../assets/team1.jpg';
import attorney2 from '../../assets/team2.jpg';
import attorney3 from '../../assets/team3.jpg';

export const Attorneys = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  // Controls animation trigger when in view
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Container animation (For whole section)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.3 }, // Stagger children animation
    },
  };

  // Card animation (For each individual card)
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Name animation (For each individual name)
  const nameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Data for attorneys
  const attorneys = [
    {
      id: 1,
      name: 'Samuel Johnson',
      title: 'Senior Attorney',
      bio:
        'Samuel has over 20 years of experience in corporate and civil litigation, ensuring justice is served.',
      image: attorney1,
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#',
      },
    },
    {
      id: 2,
      name: 'Olivia Brown',
      title: 'Associate Attorney',
      bio:
        "Olivia specializes in criminal defense with a track record of successfully protecting her clients' rights.",
      image: attorney2,
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#',
      },
    },
    {
      id: 3,
      name: 'Michael Davis',
      title: 'Attorney',
      bio:
        'Michael brings extensive expertise in family law and dispute resolution, providing compassionate support.',
      image: attorney3,
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#',
      },
    },
  ];

  return (
    <motion.section
      className="attorneys-section py-5"
      id="attorneys"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="container">
        <div className="text-center mb-5">
          <motion.h2
            className="fw-bold"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Attorneys
          </motion.h2>
          <motion.p
            className="text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Meet the experts who will fight for your rights
          </motion.p>
        </div>
        <div className="row">
          {attorneys.map((attorney) => (
            <motion.div
              key={attorney.id}
              className="col-md-4 mb-4"
              variants={cardVariants}
            >
              <div className="attorney-card shadow-sm rounded overflow-hidden">
                <div className="attorney-image">
                  <img src={attorney.image} alt={attorney.name} className="img-fluid" />
                </div>
                <div className="attorney-info p-4">
                  <motion.h4
                    className="fw-bold"
                    variants={nameVariants} // Apply nameVariants animation
                  >
                    {attorney.name}
                  </motion.h4>
                  <p className="text-muted mb-2">{attorney.title}</p>
                  <p className="small text-muted">{attorney.bio}</p>
                  <div className="attorney-social mt-3">
                    <a href={attorney.social.linkedin} className="me-3 text-primary">
                      <FaLinkedin size={20} />
                    </a>
                    <a href={attorney.social.twitter} className="me-3 text-info">
                      <FaTwitter size={20} />
                    </a>
                    <a href={attorney.social.facebook} className="text-primary">
                      <FaFacebook size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
