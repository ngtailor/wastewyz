import React, { useEffect, useState } from 'react'
import { Contact } from '../contact'
import JsonData from '../../data/data.json'

export const Vision = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    
    return (
        <div>
            <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            {" "}
                            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="about-text">
                                <h2>About Us</h2>
                                <h3>Our Vision</h3>
                                <div className="list-style">
                                    <div className="col-lg-12 col-sm-8 col-xs-12">
                                        <ul>
                                            We envision a future where waste is obsolete, where resources are perpetually repurposed, and where sustainability isn't an afterthought, but the very foundation of all systems. We see a circular economy woven into the fabric of India's growth, where waste workers are empowered, and communities thrive alongside a healthy environment.

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
