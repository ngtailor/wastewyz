import React from "react";
import {useNavigate} from 'react-router-dom'

export const WhatDrivingUs = (props) => {

  const navigate = useNavigate();
    
      const handleReadMore = () => {
        navigate('/circulaty');
      };
  return (
    <div id="driving" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>What’s Driving Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
          <span
              style={{ color: 'green', cursor: 'pointer' }}
              onClick={handleReadMore}
            >
              ... Know More
            </span>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="driving-desc">
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
