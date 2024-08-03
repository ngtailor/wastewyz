import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import JsonData from '../data/data.json'



export const Services = (props) => {
  const navigate = useNavigate();


  const handleKnowMore = () => {
    navigate('/epr_management');
  };

  const items = [
    { icon: '♻️', text: 'EPR Management' },
    { icon: '🗑️', text: 'Waste Collection Infrastructure' },
    { icon: '🔄', text: 'Recycling' },
    { icon: '💻', text: 'Technology Integration' },
    { icon: '🌿', text: 'Composting' },
    { icon: '🔄', text: 'Take-back Programs' },
    { icon: '♻️', text: 'Sourcing Recycled Materials' },
    { icon: '📦', text: 'Sustainable Packaging' },
    { icon: '🛠️', text: 'Waste Minimization' },
    { icon: '📚', text: 'Training and Capacity Building' }
];

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We work with enterprises, governance agencies at state and national level, alliances, individuals and communities through our range of environmental solutions. These include services for:
          </p>


        </div>
        {/* <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-2">
                {" "}
                <i className={d.icon}></i>
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
            : "loading"}
        </div> */}
        <div className="icon-grid">
            {items.map((item, index) => (
                <div className="icon-item" key={index}>
                    <div className="icon-wrapper">
                        <div className="icon">{item.icon}</div>
                    </div>
                    <p className="icon-text">{item.text}</p>
                </div>
            ))}
        </div>
        {/* <a class="button arrow" href="/epr_management">Know More...</a> */}
      </div>
    </div>
  );
};
