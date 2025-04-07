import React, { useRef, useEffect } from "react";
import "./Footer.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { motion, useAnimation, useInView } from "framer-motion";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.footer
      id="contact"
      className="footer-section"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeUp}
    >
      <div className="footer-overlay">
        <div className="footer-container">

          {/* Left Column - Info */}
          <div className="footer-column">
            <h2 className="footer-title">Advocate Tanish Thkur</h2>
            <p className="footer-subtext">High Court Lawyer</p>
            <p className="footer-subtext">Criminal, Civil & Property Law</p>
          </div>

          {/* Middle Column - Contact */}
          <div className="footer-column">
            <h3 className="footer-heading">Contact</h3>
            <p><FaPhoneAlt /> <span>+91 12345 67890</span></p>
            <p><FaEnvelope /> <span>advocate.tanish@example.com</span></p>
            <p><FaMapMarkerAlt /> <span>Delhi, India</span></p>
          </div>

          {/* Right Column - Social */}
          <div className="footer-column">
            <h3 className="footer-heading">Connect</h3>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy green-text">
            &copy; 2025 by Swati
          </p>
          <a href="#home" className="footer-arrow" title="Back to Top">
            <IoIosArrowUp />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
