import React from 'react';
import './PeopleMakeTheDifference.css';
import team1 from '../../assets/team1.jpg';
import team2 from '../../assets/team2.jpg';
import team3 from '../../assets/team3.jpg';

export const PeopleMakeTheDifference = () => {
  return (
    <section className="people-difference-section py-5" id="people">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">People Make the Difference</h2>
          <p className="text-muted">
            Meet the dedicated team driving success through expertise and care.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="person-card text-center p-4 shadow-sm rounded">
              <img src={team1} alt="Jane Doe" className="img-fluid rounded-circle mb-3 person-img" />
              <h4 className="fw-bold">Jane Doe</h4>
              <p className="text-muted">Senior Partner</p>
              <p className="small text-muted">
                With over 15 years of experience, Jane leads with integrity and expertise.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="person-card text-center p-4 shadow-sm rounded">
              <img src={team2} alt="John Smith" className="img-fluid rounded-circle mb-3 person-img" />
              <h4 className="fw-bold">John Smith</h4>
              <p className="text-muted">Legal Advisor</p>
              <p className="small text-muted">
                John's strategic insights have been pivotal in high-profile cases.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="person-card text-center p-4 shadow-sm rounded">
              <img src={team3} alt="Alice Brown" className="img-fluid rounded-circle mb-3 person-img" />
              <h4 className="fw-bold">Alice Brown</h4>
              <p className="text-muted">Client Relations</p>
              <p className="small text-muted">
                Alice ensures that every client receives personalized care and attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
