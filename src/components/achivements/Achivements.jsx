import React from 'react';
import { FaBalanceScale, FaUser, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Achievements.css';

export const Achievements = () => {
  return (
    <section className="achievements-section py-5" id="achievements">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold text-white">Achievements</h2>
          <p className="text-white">Highlights of my professional journey</p>
        </motion.div>

        <div className="row">
          {[{
            icon: <FaBriefcase size={48} />,
            title: "10+ Years",
            desc: "Experience"
          }, {
            icon: <FaUser size={48} />,
            title: "200+ Clients",
            desc: "Served"
          }, {
            icon: <FaBalanceScale size={48} />,
            title: "150+ Cases",
            desc: "Won"
          }].map((item, idx) => (
            <motion.div
              key={idx}
              className="col-md-4 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="achievement-card text-center p-4 shadow-sm rounded">
                <div className="achievement-icon mb-3">{item.icon}</div>
                <h3 className="fw-bold text-white">{item.title}</h3>
                <p className="text-white">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
