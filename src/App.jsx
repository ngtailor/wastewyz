import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { WhatDrivingUs } from "./components/WhatDrivingUs";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { WhoWeAre } from "./components/about/WhoWeAre";
import { Vision } from "./components/about/Vision";
import { Mission } from "./components/about/Mission";
import { Wedo } from "./components/about/Wedo";
import { Circulity } from "./components/driving_us/Circulity";
import { SocialImpact } from "./components/driving_us/SocialImpact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EprManagement } from "./components/service/EprManagement";
import { KnowMore } from "./components/service/KnowMore";
import { EprSolutions } from './components/service/EprSolutions'
import { CapacityBuilding } from "./components/service/CpacityBuilding";
import { OurTeam } from "./components/team/OurTeam";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <Header data={landingPageData.Header} />
            {/* <Features data={landingPageData.Features} /> */}
            <About data={landingPageData.About} />
            <WhatDrivingUs data={landingPageData.Driving} />
            <Services data={landingPageData.Services} />
            {/* <Gallery data={landingPageData.Gallery} /> */}
            {/* <Testimonials data={landingPageData.Testimonials} /> */}
            <Team data={landingPageData.Team} />
            <Contact data={landingPageData.Contact} />
          </>
        } />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/our-vision" element={<Vision />} />
        <Route path="/our-mission" element={<Mission />} />
        <Route path="/what-we-do" element={<Wedo />} />
        <Route path="/circulaty" element={<Circulity />} />
        <Route path="/circulaty" element={<Circulity />} />
        <Route path="/social_imapct" element={<SocialImpact />} />
        <Route path='/epr_management' element={<EprManagement />} />
        <Route path='/know_epr_management' element={<KnowMore />} />
        <Route path='/epr_management_solutions' element={<EprSolutions />} />
        <Route path='/capcity_build' element={<CapacityBuilding />} />
        <Route path='/team' element={<OurTeam />} />

      </Routes>
    </Router>
  );
};

export default App;
