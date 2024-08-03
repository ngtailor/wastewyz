import React, { useEffect, useState } from 'react'
import { Contact } from '../contact'
import JsonData from '../../data/data.json'


export const WhoWeAre = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <div id="about">
        <div className="container">
          <h2>About Us</h2>
          <div className="row">
            {/* <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
            </div> */}
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h3>Who we Are</h3>
                <div className="list-style" style={{ textAlign: 'justify' }}>
                  <div className="col-lg-12 col-sm-8 col-xs-12">
                    <ul>
                      Wastewyze isn't just a company; we're your partners in fostering environmental responsibility. We're driven by the belief that waste is a resource misplaced, and our mission is to turn that misplaced resource into valuable opportunities for you and the planet. With technologically optimised solutions and passionate expertise, we guide businesses through India's complex waste management landscape, ensuring compliance and creating sustainable solutions that leave a lasting positive impact
                    </ul>
                  </div>

                </div>
                
              </div>
             
              <hr/>
              <div className="about-text">
                <h3>Our Vision</h3>
                <div className="list-style" style={{ textAlign: 'justify' }}>
                  <div className="col-lg-12 col-sm-8 col-xs-12">
                    <ul>
                      We envision a future where waste is obsolete, where resources are perpetually repurposed, and where sustainability isn't an afterthought, but the very foundation of all systems. We see a circular economy woven into the fabric of India's growth, where waste workers are empowered, and communities thrive alongside a healthy environment.
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/board-4876630_640.jpg" className="img-responsiveone" alt="image1" />{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/plastic-waste-3576988_640.jpg" className="img-responsivetwo" alt="image2" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">

              <div className="about-text">
                <h3>Our Mission</h3>
                <div className="list-style" style={{ textAlign: 'justify' }}>
                  <div className="col-lg-12 col-sm-8 col-xs-12">
                    <ul>
                      We are driven to build a more equitable and sustainable
                      society where environmental responsibility goes hand-in-hand
                      with social and economic progress. We strongly believe in the transformative power of
                      innovation to create a sustainable future. Our approach
                      focuses on implementing solutions to optimize efficiency
                      towards resource utilization and waste minimization while
                      reducing direct and indirect environmental impacts to create
                      a balanced ecosystem where technological advancement and
                      socio-ecological responsibility coexist harmoniously.
                    </ul>
                  </div>
                </div>
              </div>
              <hr/>
              <div className="about-text">
                <h3>What We Do</h3>
                <div className="list-style" style={{ textAlign: 'justify' }}>
                  <div className="col-lg-12 col-sm-8 col-xs-12">
                    <ul>
                      At Wastewyze, we help you adopt sustainable pathways for your business. Our aim is to integrate sustainability into the core of your business operations, minimising waste, optimising resource utilisation, and driving long-term value.
                      We integrate lifecycle thinking with technological solutions like AI-driven analytics and blockchain-enabled transparency to forge new pathways to reduce resource consumption, enhance traceability, and promote regenerative business models that benefit both our enterprise and the planet.
                      We provide services in regulatory compliance management, waste management operations, recycled materials and strategic circularity. We work alongside you as trusted advisors, tailoring solutions to your unique needs and challenges.

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
      <Contact data={landingPageData.Contact} />
    </div>
  )
}
