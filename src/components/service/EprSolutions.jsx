import React,{useState,useEffect} from "react";
import { Contact } from "../contact";
import JsonData from '../../data/data.json'

export const EprSolutions = () => {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    const [data,setData]=useState([ {
        "img": "img/testimonials/01.jpg",
        "text": "We connect you with reliable sources of high-quality recycled plastic, reducing your virgin plastic consumption and contributing to a more sustainable circular economy. By integrating recycled content into your production processes, you minimise environmental impact and boost your brand's green credentials. ",
        "name": "John Doe",
        "point":"Recycled Materials"
      },
      {
        "img": "img/testimonials/02.jpg",
        "text": "We help you optimise your operations to minimise waste generation before it happens. From efficient design changes to resource-conscious production processes, we implement tailored strategies that save costs, conserve resources, and prevent valuable materials from ending up in landfills.",
        "name": "Johnathan Doe",
        "point":"Pre-consumer Waste Reduction"
      },
      {
        "img": "img/testimonials/03.jpg",
        "text": "We promote and implement mono-material packaging solutions focused on plastic and paper, eliminating complex mixed-material packaging that often hinders efficient recycling. By simplifying packaging streams,we ensure higher recycling rates, divert waste from landfills, and drive the transition towards a truly circular economy.",
        "name": "John Doe",
        "point":"Monomaterial Packaging"
      },
      {
        "img": "img/testimonials/04.jpg",
        "text": "We design and implement customised take-back programs, allowing businesses to reclaim responsibility for their products beyond the point of sale. From electronics and batteries to clothing and furniture, we handle return logistics, refurbishment, and responsible recycling, building brand loyalty and closing the loop on resource use.The time is now for embracing the circular economy. Become a sustainability leader now!",
        "name": "Johnathan Doe",
        "point":"Take-Back Programs"
      },
    ])

    const [data1,setData1]=useState([ {
        "img": "img/testimonials/01.jpg",
        "text": "We offer efficient and reliable door-to-door waste collection solutions tailored to the needs of businesses, large organisations, and resident welfare associations. Our flexible options ensure convenient and responsible waste disposal, minimising clutter and promoting environmental awareness within your community. ",
        "name": "John Doe",
        "point":"Collection"
      },
      {
        "img": "img/testimonials/02.jpg",
        "text": "We provide a range of solutions for managing diverse waste streams. We leverage technology like AI and blockchain to accurately and efficiently segregate waste for best use of waste as resource, higher recycling rates, and resource recovery process.",
        "name": "Johnathan Doe",
        "point":"Tailored Solutions Waste-Wise"
      },
      {
        "img": "img/testimonials/03.jpg",
        "text": "We partner with registered plastic waste processors and other reputable recyclers to guarantee responsible and sustainable recycling of different kinds of waste streams. We provide expertise in setting up waste processing systems and building partnerships between waste processors, urban local bodies and municipalities and business.",
        "name": "John Doe",
        "point":"Recycling"
      },
      {
        "img": "img/testimonials/04.jpg",
        "text": "We understand the power of organic waste management. We provide guidance for implementing effective waste segregation programs and setting up safety-optimised composting plants",
        "name": "Johnathan Doe",
        "point":"Composting"
      },
      {
        "img": "img/testimonials/06.jpg",
        "text": "We aim to ensure dignified livelihoods for waste workers who are the real change-makers in on-ground waste management by ensuring fair wage, social security and work environments conducive to health and safety. Join us in fuelling positive social impact through your business.",
        "name": "Valuing Work",
        "point":"Valuing Work in Waste"
      }
    ])
  return (
    <>
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Waste Management Solutions </h2>
        </div>
        <div className="testimonial-meta"> Seeding a Circular Future: Our Upstream Solutions </div>
        <div className="row">
          {data
            ? data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-6">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <ul>
                    <div className="testimonial-meta"> {d.point} </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta">  </div>
                    </div>
                    </ul>
                    
                  </div>
                </div>
              ))
            : "loading"}
        </div>
        <div className="testimonial-meta">Redefining Responsibility, Empowering Communities: Our Downstream Solutions </div>
        <div className="row">
          {data
            ? data1.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-6">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <ul>
                    <div className="testimonial-meta"> {d.point} </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta">  </div>
                    </div>
                    </ul>
                    
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
    <Contact data={landingPageData.Contact} />
    </>
  );
};
