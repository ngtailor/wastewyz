import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigation } from '../navigation';
import { Contact } from '../contact';
import JsonData from '../../data/data.json'
import { KnowMore } from './KnowMore';



export const EprManagement = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    const handleReadMore = () => {
        navigate('/know_epr_management');
        window.scrollTo(0, 0);
      };


    const [data, setData] = useState({
        Registration: [
            "India’s EPR landscape is both complex and evolving, and navigating these regulations can be daunting. We hold deep expertise in decoding EPR policy for plastics and other waste streams. We leverage cutting-edge IT solutions to simplify compliance, automate reporting, and minimise your environmental footprint. Let us translate complex regulations into actionable pathways for success.We tailor solutions to your specific needs, waste-type and desired outcome",
        ],
        compliance: ["We believe that waste management solutions must focus on the complete lifecycle of a product and integrate sustainability in the operational aspects and processes of an enterprise."
        ],
        usedOil: ["Voluntary EPR Systems - Want to pioneer producer responsibility in your segment ahead of regulatory requirements? We will help you develop a plan and appropriate systems for the same."],
        materials: ['We connect you with reliable sources of high-quality recycled plastic, reducing your virgin plastic consumption and contributing to a more sustainable circular economy. By integrating recycled content into your production processes, you minimise environmental impact and boost your brands green credentials'],
        reduction: ['We connect you with reliable sources of high-quality recycled plastic, reducing your virgin plastic consumption and contributing to a more sustainable circular economy. By integrating recycled content into your production processes, you minimise environmental impact and boost your brands green credentials'],
        Monomaterial: ['We promote and implement mono-material packaging solutions focused on plastic and paper, eliminating complex mixed-material packaging that often hinders efficient recycling. By simplifying packaging streams, we ensure higher recycling rates, divert waste from landfills, and drive the transition towards a truly circular economy.'],
        Programs: ['We design and implement customised take-back programs, allowing businesses to reclaim responsibility for their products beyond the point of sale. From electronics and batteries to clothing and furniture, we handle return logistics, refurbishment, and responsible recycling, building brand loyalty and closing the loop on resource use.The time is now for embracing the circular economy. Become a sustainability leader now!'],
        Collection: ['We offer efficient and reliable door-to-door waste collection solutions tailored to the needs of businesses, large organisations, and resident welfare associations. Our flexible options ensure convenient and responsible waste disposal, minimising clutter and promoting environmental awareness within your community.'],
        Solutions: ['We provide a range of solutions for managing diverse waste streams. We leverage technology like AI and blockchain to accurately and efficiently segregate waste for best use of waste as resource, higher recycling rates, and resource recovery process'],
        Recycling: ['We partner with registered plastic waste processors and other reputable recyclers to guarantee responsible and sustainable recycling of different kinds of waste streams. We provide expertise in setting up waste processing systems and building partnerships between waste processors, urban local bodies and municipalities and business.'],
        Composting: [' We aim to ensure dignified livelihoods for waste workers who are the real change-makers in on-ground waste management by ensuring fair wage, social security and work environments conducive to health and safety. Join us in fuelling positive social impact through your business.'],
        Valuing: ['We aim to ensure dignified livelihoods for waste workers who are the real change-makers in on-ground waste management by ensuring fair wage, social security and work environments conducive to health and safety. Join us in fuelling positive social impact through your business.'],
        Capacity: ['Empowering informed action, Wastewyze offers capacity building services for private, public, and government sectors.  Our programs equip participants with the knowledge and skills to navigate Extended Producer Responsibility (EPR) regulations, alongside other key areas in environmental policy, waste management, and the circular economy. Through interactive workshops and tailored training sessions, we help organisations build capacity to implement sustainable practices and achieve their environmental goals.']


    },)
    const navigate = useNavigate();

    const handleKnowMore = () => {
        navigate('/know_epr_management');
    };
    return (

        <>
            <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="about-text">
                                <h2>Our Services </h2>

                                <div className="list-style">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <h3><i class="fas fa-balance-scale"></i> EPR Compliance Management</h3>
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
                                        <h3><i class="fas fa-trash-alt"></i> Waste Management Solutions</h3>

                                        <ul>
                                            {data
                                                ? data.compliance.map((d, i) => (
                                                    <li key={`${d}-${i}`}>{d}</li>
                                                ))
                                                : "loading"}
                                        </ul>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="about-text">
                                <h3>Seeding a Circular Future: Our Upstream Solutions</h3>
                                <div className="list-style">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <h3><i class="fas fa-recycle"></i> Recycled Materials</h3>

                                        <ul>
                                            {data
                                                ? data.materials.map((d, i) => (
                                                    <li key={`${d}-${i}`}>{d}</li>
                                                ))
                                                : "loading"}
                                        </ul>
                                    </div>
                                </div>
                                <div className="list-style">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <h3><i class="fas fa-filter"></i> Pre-consumer Waste Reduction</h3>

                                        <ul>
                                            {data
                                                ? data.reduction.map((d, i) => (
                                                    <li key={`${d}-${i}`}>{d}</li>
                                                ))
                                                : "loading"}
                                        </ul>
                                    </div>
                                </div>
                                <div className="list-style">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <h3><i class="fas fa-tag"></i> Monomaterial Packaging</h3>


                                        <ul>
                                            {data
                                                ? data.Monomaterial.map((d, i) => (
                                                    <li key={`${d}-${i}`}>{d}</li>
                                                ))
                                                : "loading"}
                                        </ul>
                                    </div>
                                </div>
                                <div className="list-style">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <h3><i class="fas fa-arrow-circle-left"></i> Take-Back Programs</h3>

                                        <ul>
                                            {data
                                                ? data.Programs.map((d, i) => (
                                                    <li key={`${d}-${i}`}>{d}</li>
                                                ))
                                                : "loading"}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="about-text">
                                <h3>Redefining Responsibility, Empowering Communities: Our Downstream Solutions</h3>
                                <div className="list-style">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <h3><i class="fas fa-truck"></i> Collection</h3>


                                        <ul>
                                            {data
                                                ? data.Collection.map((d, i) => (
                                                    <li key={`${d}-${i}`}>{d}</li>
                                                ))
                                                : "loading"}
                                        </ul>
                                    </div>
                                </div>
                                <div className="list-style">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <h3><i class="fas fa-puzzle-piece"></i> Tailored Solutions Waste-Wise</h3>
                                        <ul>
                                            {data
                                                ? data.Solutions.map((d, i) => (
                                                    <li key={`${d}-${i}`}>{d}</li>
                                                ))
                                                : "loading"}
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="about-text">
                                <div className="list-style">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <h3><i class="fas fa-recycle"></i>Recycling</h3>
                                        <ul>
                                            {data
                                                ? data.Recycling.map((d, i) => (
                                                    <li key={`${d}-${i}`}>{d}</li>
                                                ))
                                                : "loading"}
                                        </ul>
                                    </div>
                                </div>
                                <div className="list-style">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <h3><i class="fas fa-seedling"></i> Composting</h3>

                                        <ul>
                                            {data
                                                ? data.Composting.map((d, i) => (
                                                    <li key={`${d}-${i}`}>{d}</li>
                                                ))
                                                : "loading"}
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="about-text">
                                <div className="list-style">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <h3><i class="fas fa-dollar-sign"></i> Valuing Work in Waste</h3>

                                        <ul>
                                            {data
                                                ? data.Valuing.map((d, i) => (
                                                    <li key={`${d}-${i}`}>{d}</li>
                                                ))
                                                : "loading"}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="about-text">
                                <div className="list-style">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <h3><i class="fas fa-chart-bar"></i> Capacity Building</h3>
                                        <ul>
                                            {data
                                                ? data.Capacity.map((d, i) => (
                                                    <li key={`${d}-${i}`}>{d}</li>
                                                ))
                                                : "loading"}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <span
              style={{ color: 'green', cursor: 'pointer' }}
              onClick={handleReadMore}
            >
              ... Know More
            </span>
                    {/* <KnowMore></KnowMore> */}
                </div>
            </div>
           
            <Contact data={landingPageData.Contact} />
        </>


    )
}
