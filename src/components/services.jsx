import React from "react";
import {useNavigate} from 'react-router-dom'


export const Services = (props) => {
  const navigate = useNavigate();
    
  const handleKnowMore = () => {
    navigate('/epr_management');
  };

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
          India’s EPR landscape is both complex and evolving, and navigating these regulations can be daunting. We hold deep expertise in decoding EPR policy for plastics and other waste streams. We leverage cutting-edge IT solutions to simplify compliance, automate reporting, and minimise your environmental footprint. Let us translate complex regulations into actionable pathways for success.
          </p>
          <span
              style={{ color: 'green', cursor: 'pointer' }}
              onClick={handleKnowMore}
            >
              ... Know more
            </span>

        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
                {" "}
                <i className={d.icon}></i>
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
