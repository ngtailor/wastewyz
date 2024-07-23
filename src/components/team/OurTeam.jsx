import React, { useState,useEffect } from "react";
import { Contact } from "../contact";
import JsonData from '../../data/data.json'


export const OurTeam = (props) => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);


    const [data,setData]=useState([
    {
      "img": "img/team/01.jpg",
      "name": "John Doe",
      "job": "Director"
    },
    {
      "img": "img/team/02.jpg",
      "name": "Mike Doe",
      "job": "Senior Designer"
    },
    {
      "img": "img/team/03.jpg",
      "name": "Jane Doe",
      "job": "Senior Designer"
    },
    {
      "img": "img/team/04.jpg",
      "name": "Karen Doe",
      "job": "Project Manager"
    }
  ])
  return (
    <>
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            We're not just waste management experts – we're passionate advocates for a greener future. Our team is a powerhouse of diverse talent, driven by a passion for sustainability
          </p>
        </div>
        <div id="row">
          {data
            ? data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                <div className="thumbnail">
                  {" "}
                  <img src={d.img} alt="..." className="team-img" />
                  <div className="caption">
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                  </div>
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
