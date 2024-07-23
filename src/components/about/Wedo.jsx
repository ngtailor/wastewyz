import React, { useEffect, useState } from 'react'
import { Contact } from '../contact'
import JsonData from '../../data/data.json'

export const Wedo = () => {
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
                                <h3>What We Do</h3>
                                <div className="list-style">
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
