import React from "react";
import { Link } from 'react-router-dom';
import logo from '../image/waste-wiselogo.jpg'

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="brand-logo" style={{ marginBottom: '0px', marginTop: '10px' }}>
        <a className="navbar-brand" href="#page-top">
          <img src={logo} alt="Wastewyze Logo" style={{ class: 'responsive', width: '250px', display: 'block', margin: '-41 auto' }} />
        </a>
      </div>
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-expanded="false"
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
          id="navbarCollapse"
        >


          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/" className="page-scroll">
                Home
              </a>
            </li>
            <li className="page-scroll">
              <a
                href="/who-we-are"
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

            {/* <li className="page-scroll">
              <a
                href="#driving"
                className="dropdown-toggle"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >What’s Driving Us
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="/circulaty">The Power of Circularity</a>
                </li>
                <li>
                  <a href="/social_imapct">Sustained Social Impact </a>
                </li>
              </ul>
            </li> */}
            {/* <li>
              <a href="#portfolio" className="page-scroll">
                Our Services
              </a>
            </li> */}
            <li className="page-scroll">
              <a
                href="/epr_management"
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
              <a href="/know_epr_management" className="page-scroll">
                EPR Management
              </a>
            </li>
            {/* <li>
              <a href="#team" className="page-scroll">
                Our Team
              </a>
            </li> */}
            <li>
              <a href="/connect" className="page-scroll">
                Connect
              </a>
            </li>
            <li>
              <a href="https://www.blueheart.foundation/" className="page-scroll" target="_blank" rel="noopener noreferrer">
                CSR
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};
