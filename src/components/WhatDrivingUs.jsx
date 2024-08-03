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
           
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-6">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="driving-desc">
                    <h3>{d.name}</h3>
                    <p style={{textAlign:'justify'}}>{d.text}</p>
                    {/* <a class="button arrow" href="#services">Know More...</a> */}
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
