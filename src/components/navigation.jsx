import React from "react";
import { Link } from 'react-router-dom';
import logo from '../image/wastewyze-logo.jpeg'

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
       <div className="brand-logo">
         <a className="navbar-brand page-scroll" href="#page-top">
                <img src={logo} alt="Wastewyze Logo" style={{ height: '40px', marginRight: '10px' }} />
          </a>

         </div>
      <div className="container" style={{ width: "1279px" }}>
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          {/* <a className="navbar-brand page-scroll" href="#page-top">
            <img src={logo} alt="Wastewyze Logo" style={{ height: '40px', marginRight: '10px' }} />
          </a> */}

        </div>
        

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
         
             
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/" className="page-scroll">
                Home
              </a>
            </li>
            <li className="page-scroll">
              <a
                href="#about"
              >
                About <span></span>
              </a>
              {/* <ul className="dropdown-menu">
                <li>
                  <Link to="/who-we-are">Who are we</Link>
                </li>
                <li>
                  <a href="/our-vision">Our Vision</a>
                </li>
                <li>
                  <a href="/our-mission">Our Mission</a>
                </li>
                <li>
                  <a href="/what-we-do">What do we do</a>
                </li>
              </ul> */}
            </li>

            <li className="page-scroll">
              <a
                href="#driving"
                className="dropdown-toggle"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >What’s Driving Us <span></span>
              </a>
              {/* <ul className="dropdown-menu">
                <li>
                  <a href="/circulaty">The Power of Circularity</a>
                </li>
                <li>
                  <a href="/social_imapct">Sustained Social Impact </a>
                </li>
              </ul> */}
            </li>
            {/* <li>
              <a href="#portfolio" className="page-scroll">
                Our Services
              </a>
            </li> */}
            <li className="page-scroll">
              <a
                href="#services"
                className="dropdown-toggle"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              > Our Services <span></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="/epr_management">EPR Compliance Management</a>
                </li>
                <li>
                  <a href="/epr_management_solutions">Waste Management Solutions </a>
                </li>
                <li>
                  <a href="/capcity_build">Capacity Building </a>
                </li>
                <li>
                  <a href="#action4">Coming Soon: Wastewyze Community Builder</a>
                </li>
              </ul>
            </li>
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                EPR Management
              </a>
            </li> */}

            <li>
              <a href="#services" className="page-scroll">
                EPR Management
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Our Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Connect
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
