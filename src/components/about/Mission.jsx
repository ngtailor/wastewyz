
import React, { useEffect, useState } from 'react'
import { Contact } from '../contact'
import JsonData from '../../data/data.json'


export const Mission = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);
    return (
        <>
            <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <img src="img/about.jpg" className="img-responsive" alt="" />
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="about-text">
                                <h2>About Us</h2>
                                <h3>Our Mission</h3>
                                <div className="list-style">
                                    <div className="col-lg-12 col-sm-8 col-xs-12">
                                        <p className="justified-text">
                                            We are driven to build a more equitable and sustainable
                                            society where environmental responsibility goes hand-in-hand
                                            with social and economic progress. We strongly believe in the transformative power of
                                            innovation to create a sustainable future. Our approach
                                            focuses on implementing solutions to optimize efficiency
                                            towards resource utilization and waste minimization while
                                            reducing direct and indirect environmental impacts to create
                                            a balanced ecosystem where technological advancement and
                                            socio-ecological responsibility coexist harmoniously.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact data={landingPageData.Contact} />
        </>

    )
}
