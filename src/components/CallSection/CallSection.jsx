import React from "react";
import "./CallSection.css";

const CallSection = () => {
  return (
    <section className="call-bg-section">
      <div className="call-overlay">
        <h2 className="call-title">Need Legal Help?</h2>
        <p className="call-subtitle">Talk to Advocate Tanish Thkur today</p>
        <a href="tel:+911234567890" className="call-btn">📞 Call Now: +91 12345 67890</a>
      </div>
    </section>
  );
};

export default CallSection;
