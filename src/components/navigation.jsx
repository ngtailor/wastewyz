import React from "react";
import { Link } from 'react-router-dom';

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
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
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src="/logo.png" alt="Wastewyze Logo" style={{ height: '40px', marginRight: '10px' }} />
            Wastewyze
          </a>

        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Home
              </a>
            </li>
            <li className="dropdown page-scroll">
              <a
                href="#about"
                className="dropdown-toggle"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/who-we-are">Who are we</Link>
                </li>
                <li>
                  <a href="#action2">Our Vision</a>
                </li>
                <li>
                  <a href="#action3">Our Mission</a>
                </li>
                <li>
                  <a href="#action4">What do we do</a>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a
                href="#about"
                className="dropdown-toggle"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >What’s Driving Us <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#action1">The Power of Circularity</a>
                </li>
                <li>
                  <a href="#action2">Sustained Social Impact </a>
                </li>
                <li>
                  <a href="#action3">Our Mission</a>
                </li>
                <li>
                  <a href="#action4">What do we do</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Our Services
              </a>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              > Our Services <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#action1">EPR Compliance Management</a>
                </li>
                <li>
                  <a href="#action2">Waste Management Solutions </a>
                </li>
                <li>
                  <a href="#action3">Capacity Building </a>
                </li>
                <li>
                  <a href="#action4">Coming Soon: Wastewyze Community Builder</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
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
