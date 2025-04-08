import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import './About.css';

export const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      id="about"
      className="about-section py-5"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left: Image */}
          <div className="col-lg-6">
            <div className="about-img-wrapper">
              <img
                src="/images.jpg"
                alt="Advocate Tanish Thkur profile portrait"
                className="img-fluid rounded-4 shadow"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3 text-dark">Who I Am</h2>
            <p className="text-muted mb-3 fs-5">
              Hello, I'm <span className="text-advocate fw-semibold">Adv. Swati</span> — a passionate legal professional
              with a commitment to providing clear, honest, and strong legal support to my clients.
            </p>
            <p className="text-muted mb-3">
              With years of experience in civil, criminal, and property law, I have helped countless clients
              navigate the legal system with confidence and clarity. My mission is to deliver practical, ethical,
              and effective legal solutions tailored to each individual case.
            </p>
            <p className="text-muted mb-3">
              I believe in communication, transparency, and standing firmly for what's right. Whether you're facing
              legal issues or just need consultation, I’m here to help you every step of the way.
            </p>
            <a href="#practice-areas" className="btn btn-advocate mt-3 px-4 py-2 rounded-pill">
              Explore My Services
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
