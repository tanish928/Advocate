import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import './hero.css';
import { FaBalanceScale } from 'react-icons/fa';

export const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <div id="home" className="hero-section" ref={ref}>
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        src="/video1.mp4"
        type="video/mp4"
      ></video>

      <div className="hero-overlay">
        <motion.div
          className="hero-content text-center text-white"
          initial="hidden"
          animate={controls}
          variants={fadeUp}
        >
          <div className="hero-subtitle gap-3 d-flex align-items-center justify-content-center mb-3">
            <div className="icon-circle mb-2">
              <FaBalanceScale className="scale-icon" />
            </div>
            <span>Reliable Legal Solutions</span>
          </div>
          <h1 className="display-4 fw-bold">
            Expert Legal <span>Guidance</span>
          </h1>
          <p className="lead mb-4">
            Trusted advocacy tailored to your needs. Your justice is our priority.
          </p>
          <a href="#Book a Consulation" className="btn btn-advocate btn-lg rounded-pill px-4">
            Hire Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};
