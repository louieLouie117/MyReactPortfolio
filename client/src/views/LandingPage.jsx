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
   
   <p>I am testing to see if I need to run npm run build every time before pushing code to github.</p>

  </div>;
};


export default LandingPage;
