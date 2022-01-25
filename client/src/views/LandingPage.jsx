import React from 'react';
import AboutMe from '../components/LandingPage/AboutMe';
import Blogs from '../components/LandingPage/Blogs';
import ToolsTech from '../components/LandingPage/ToolsTech';
import modules from "../modules/LandingPage.modules.css"


const LandingPage = (props) => {
  return <div>

   <AboutMe></AboutMe>
   <Blogs></Blogs>
   <ToolsTech></ToolsTech>
   

  </div>;
};


export default LandingPage;
