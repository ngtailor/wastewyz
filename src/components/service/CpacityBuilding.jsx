import React, { useEffect, useState } from 'react'
import { Contact } from '../contact'
import JsonData from '../../data/data.json'
import { useNavigate } from 'react-router-dom'

export const CapacityBuilding = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate('/epr_management');
    };
    return (
        <div>
            <div id="capcity_build">
                <div className="container">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="section-title">
                                <h2>Capacity Building</h2>
                                <p>
                                Empowering informed action, Wastewyze offers capacity building services for private, public, and government sectors.  Our programs equip participants with the knowledge and skills to navigate Extended Producer Responsibility (EPR) regulations, alongside other key areas in environmental policy, waste management, and the circular economy. Through interactive workshops and tailored training sessions, we help organisations build capacity to implement sustainable practices and achieve their environmental goals
                                </p>
                            </div>
                            {/* <form name="sentMessage" validate onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="form-control"
                      placeholder="City"
                      required
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="state"
                      name="state"
                      className="form-control"
                      placeholder="State"
                      required
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="form-control"
                      placeholder="Company/Organization"
                      required
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="phone"
                      id="phone"
                      name="email"
                      className="form-control"
                      placeholder="Phone Number"
                      required
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Message"
                  required
                  onChange={handleChange}
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div id="success"></div>
              <button type="submit" className="btn btn-custom btn-lg">
                Send Message
              </button>
            </form> */}
                        </div>
                    </div>
                    {/* <div className="col-md-3 col-md-offset-1 contact-info">
          <div className="contact-item">
            <h3>Contact Info</h3>
            <p>
              <span>
                <i className="fa fa-map-marker"></i> Address
              </span>
              {props.data ? props.data.address : "loading"}
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <i className="fa fa-phone"></i> Phone
              </span>{" "}
              {props.data ? props.data.phone : "loading"}
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <i className="fa fa-envelope-o"></i> Email
              </span>{" "}
              {props.data ? props.data.email : "loading"}
            </p>
          </div>
          <div className="row">
            <div className="social">
              <ul>
                <li>
                  <a href={props.data ? props.data.instagram : "/"}
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href={props.data ? props.data.whatsapp : "/"}
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a href={props.data ? props.data.linkedin : "/"}
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa fa-linkedin-square"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
                </div>
            </div>
            {/* <div id="footer">
      <div className="container text-center">
        <p>
          &copy; 2024 All Rights Reserved
        </p>
      </div>
    </div> */}
            <Contact data={landingPageData.Contact} />
        </div>
    )
}
