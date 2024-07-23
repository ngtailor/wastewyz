import React,{useEffect,useState} from 'react'
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
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <h3>Who we Are</h3>
                <div className="list-style">
                  <div className="col-lg-12 col-sm-8 col-xs-12">
                    <ul>
                      Wastewyze isn't just a company; we're your partners in fostering environmental responsibility. We're driven by the belief that waste is a resource misplaced, and our mission is to turn that misplaced resource into valuable opportunities for you and the planet. With technologically optimised solutions and passionate expertise, we guide businesses through India's complex waste management landscape, ensuring compliance and creating sustainable solutions that leave a lasting positive impact
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
