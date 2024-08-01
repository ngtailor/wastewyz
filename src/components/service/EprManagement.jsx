import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigation } from '../navigation';

export const EprManagement = () => {

    const [data, setData] = useState([
        {
            "icon": "fa fa-wordpress",
            "name": "EPR Compliance Management",
            "text": "India’s EPR landscape is both complex and evolving, and navigating these regulations can be daunting."
        },
        {
            "icon": "fa fa-cart-arrow-down",
            "name": "Waste Management Solutions",
            "text": "We believe that waste management solutions must focus on the complete lifecycle of a product and integrate sustainability in the operational aspects and processes of an enterprise."
        },
        {
            "icon": "fa fa-cloud-download",
            "name": "Capacity Building",
            "text": "Empowering informed action, Wastewyze offers capacity building services for private, public, and government sectors. Our programs equip participants with the knowledge and skills to navigate Extended Producer Responsibility (EPR) regulations."
        },
        {
            "icon": "fa fa-language",
            "name": "Coming Soon: Wastewyze Community Builder",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
        },
        {
            "icon": "fa fa-plane",
            "name": "Lorem ipsum dolor",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
        },
        {
            "icon": "fa fa-pie-chart",
            "name": "Consectetur adipiscing",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
        }
    ])
    const navigate = useNavigate();

    const handleKnowMore = () => {
        navigate('/know_epr_management');
    };
    return (
        <>
        <div id="services" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2> EPR Compliance Management</h2>
                    <p>
                        India’s EPR landscape is both complex and evolving, and navigating these regulations can be daunting. We hold deep expertise in decoding EPR policy for plastics and other waste streams. We leverage cutting-edge IT solutions to simplify compliance, automate reporting, and minimise your environmental footprint. Let us translate complex regulations into actionable pathways for success.
                    </p>
                    <span
                        style={{ color: 'green', cursor: 'pointer' }}
                        onClick={handleKnowMore}
                    >
                        ... Know more
                    </span>

                </div>
                <div className="row">
                    {data
                        ? data.map((d, i) => (
                            <div key={`${d.name}-${i}`} className="col-md-4">
                                {" "}
                                <i className={d.icon}></i>
                                <div className="service-desc">
                                    <h3>{d.name}</h3>
                                    <p>{d.text}</p>
                                </div>
                            </div>
                        ))
                        : "loading"}
                </div>
            </div>
        </div>
        </>
    )
}
