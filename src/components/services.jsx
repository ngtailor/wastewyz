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
          We work with enterprises, governance agencies at state and national level, alliances, individuals and communities through our range of environmental solutions. These include services for:
          </p>
         

        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
                {" "}
                <i className={d.icon}></i>
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  {/* <p>{d.text}</p> */}
                </div>
              </div>
            ))
            : "loading"}
        </div>
            <a class="button arrow" href="/epr_management">Know More...</a>
      </div>
    </div>
  );
};
