import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`navbar navbar-expand-lg fixed-top transparent-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container">
        <a className="navbar-brand fw-bold fs-4 advocate-brand" href="#home">
          <span className="advocate-icon">🏛</span> Adv. Swati
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon custom-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center me-3">
            <li className="nav-item">
              <a className="nav-link nav-hover active" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-hover" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-hover" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-hover" href="#contact">Contact</a>
            </li>
          </ul>
          <a href="#Book a Consulation" className="btn btn-outline-advocate rounded-pill px-4 mt-2 mt-lg-0">
            Hire Us
          </a>
        </div>
      </div>
    </motion.nav>
  );
};
