import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { Contact } from "../contact";
import JsonData from '../../data/data.json'

export const KnowMore = (props) => {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    const navigate = useNavigate();
    const [data, setData] = useState({
        Registration: [
            "Filing a fresh application: We can help you to complete the EPR registration application on the Centralized EPR Portal. We will provide you with guidance on all aspects of the application process, including the documents required and the fees payable.",
            "Resubmitting a rejected application: If your EPR registration application is rejected, we can help you to identify the reasons for the rejection and make the necessary changes to your application. We can also help you to resubmit your application to the CPCB",
        ],
        compliance: ["Post registration requirements: Once you are registered for EPR, you will have to comply with a number of post-registration requirements, such as maintaining records of your plastic packaging production and sales, and reporting this information to the CPCB. We can help you to comply with all post-registration requirements.",
            "Real-time entries PIBO Operations (procurement and sales) and PWP Operations (procurement, production and sales): We can help you to develop and implement a system for entering real-time data on PIBOs’ plastic packaging production and sales, and PWPs’ plastic waste processing and sales related details.",
            "Assisting PWPs with generating and selling EPR certificates: PWPs generate EPR certificates based on the amount of plastic waste they process and sales of the output. We can help you to generate and sell EPR certificates to PIBOs.",
            "Assisting PIBOs with fulfilling targets by buying EPR certificates: PIBOs can fulfil their EPR targets by buying EPR certificates from PWPs. We can help you to identify and purchase the required number of EPR certificates to meet your targets.",
            "Annual Return filing: Both PIBOs and PWPs are required to file an annual return with the CPCB, failing which an environmental compensation can be levied upon them. We can help you to prepare and file your annual return.",
            "Mock Audits for EPR: The CPCB conducts third party audits of PWPs and PIBOs to ensure transparency and reliability of information provided regarding operations. We conduct mock audits to ensure that you are at par with regulatory requirements of these audits.",
            "Use of Recycled Plastic: We help with connecting Producers and PWPs for good quality recycled plastic material across categories and Brand Owners with good quality recycled packaging providers."
        ],
        usedOil:["Voluntary EPR Systems - Want to pioneer producer responsibility in your segment ahead of regulatory requirements? We will help you develop a plan and appropriate systems for the same."],

    },)

    const handleReadMore = () => {
        navigate('/who-we-are');
    };


    return (
        <>
            <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="about-text">
                                <h2>We are leaders in EPR for all waste streams currently under the ambit of Indian regulations.</h2>
                                <h3>EPR for Plastic Packaging</h3>
                                <h3>Our services for EPR compliance include:</h3>
                                <div className="list-style">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <h3>EPR Registration</h3>
                                        <ul>
                                            {data
                                                ? data.Registration.map((d, i) => (
                                                    <li key={`${d}-${i}`}>{d}</li>
                                                ))
                                                : "loading"}
                                        </ul>
                                    </div>

                                </div>
                                <div className="list-style">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <h3>EPR compliance</h3>
                                        <ul>
                                            {data
                                                ? data.compliance.map((d, i) => (
                                                    <li key={`${d}-${i}`}>{d}</li>
                                                ))
                                                : "loading"}
                                        </ul>
                                    </div>
                                </div>
                                <div className="list-style">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <h3>EPR for E-waste
                                        </h3>
                                        {/* <ul>
                                            {data
                                                ? data.compliance.map((d, i) => (
                                                    <li key={`${d}-${i}`}>{d}</li>
                                                ))
                                                : "loading"}
                                        </ul> */}
                                    </div>
                                </div>
                                <div className="list-style">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <h3>EPR for Battery
                                        </h3>
                                        {/* <ul>
                                            {data
                                                ? data.compliance.map((d, i) => (
                                                    <li key={`${d}-${i}`}>{d}</li>
                                                ))
                                                : "loading"}
                                        </ul> */}
                                    </div>
                                </div>
                                <div className="list-style">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <h3>EPR for Waste Tyre
                                        </h3>
                                        {/* <ul>
                                            {data
                                                ? data.compliance.map((d, i) => (
                                                    <li key={`${d}-${i}`}>{d}</li>
                                                ))
                                                : "loading"}
                                        </ul> */}
                                    </div>
                                </div>
                                <div className="list-style">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <h3>EPR for Used Oil</h3>
                                        <ul>
                                            {data
                                                ? data.usedOil.map((d, i) => (
                                                    <li key={`${d}-${i}`}>{d}</li>
                                                ))
                                                : "loading"}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Contact data={landingPageData.Contact} />
        </>

    );
};
