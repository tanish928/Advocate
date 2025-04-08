import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { About } from "./components/about/About";
import { Achievements } from "./components/achivements/Achivements";
import { PeopleMakeTheDifference } from "./components/PeopleMakeTheDifference/PeopleMakeTheDifference";
import { Services } from "./components/services/Services";
import { Attorneys } from "./components/Attorneys/Attorneys";
import { Testimonials } from "./components/Test/Testimonials";
import { Consultation } from "./components/Consultation/Consultation";
import { PracticeAreas } from "./components/practiceareas/PracticeAreas";
import Footer from "./components/Footer/Footer";
import { FaWhatsapp } from "react-icons/fa";


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      < About/>
      <Achievements />
      <PeopleMakeTheDifference />
      < Services/>
      <Attorneys />
      <Testimonials />
      < Consultation />
      <PracticeAreas />
      {/* <CallSection /> */}
      <Footer />
    
           {/* WhatsApp Icon */}
      <a
        href="https://wa.me/+91 9877445707"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#ac835d",
          borderRadius: "50%",
          padding: "15px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          animation: "pulse 2s infinite",  // Adding the infinite animation
        }}
      >
        <FaWhatsapp size={50} color="#ffffff" />
      </a>

      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);  /* Normal size */
          }
          50% {
            transform: scale(1.2);  /* Slightly bigger */
          }
          100% {
            transform: scale(1);  /* Back to normal size */
          }
        }

        /* Hover effect to add some interactivity */
        a:hover {
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);  /* Enhanced shadow on hover */
        }
      `}</style>

    </>
  );
};

export default App;
