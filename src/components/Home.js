import React from 'react';
import BackgroundImageComponent from './BackgroundImageComponent';
import OurTeam from './OurTeam';
import About from "./About";
import Services from "./Services";
import Scholarship from "./Scholarship";
import Events from './Events'
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
<>

  <BackgroundImageComponent/> 
  <About/>
  <OurTeam/>
  <Services/>
  <Scholarship/>
  <Events/>
  <Contact/>
  <Footer/>
</>
  )
}
