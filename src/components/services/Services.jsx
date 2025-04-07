// src/components/services/Services.jsx

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaGavel, FaFileContract, FaUsers } from 'react-icons/fa';
import './Services.css';

export const Services = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const servicesData = [
    {
      icon: <FaGavel size={70} />,
      title: 'Legal Consultation',
      desc: 'In-depth legal advice tailored to your situation, rights, and next best steps.',
    },
    {
      icon: <FaFileContract size={70} />,
      title: 'Document Review',
      desc: 'Careful review of contracts, agreements, and legal documents to protect your interests.',
    },
    {
      icon: <FaUsers size={70} />,
      title: 'Case Representation',
      desc: 'Courtroom-ready legal defense & representation with strategy, precision, and integrity.',
    },
  ];

  return (
    <motion.section
      className="services-section py-5"
      id="services"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">What I Offer</h2>
          <p className="text-white">Professional legal support tailored to your unique case</p>
        </div>
        <motion.div className="row gy-4" variants={containerVariants}>
          {servicesData.map((service, index) => (
            <motion.div
              className="col-md-4"
              key={index}
              variants={cardVariants}
            >
              <div className="service-card-new shadow rounded-4 p-4 h-100 text-center">
                <div className="icon-box mb-4">{service.icon}</div>
                <h4 className="fw-bold mb-3 service-title">{service.title}</h4>
                <p className="service-desc">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
