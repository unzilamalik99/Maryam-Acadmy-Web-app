import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from './components/Home'
import Read from './components/Read';
import ARead from './components/ARead'
// import BackgroundImageComponent from './components/BackgroundImageComponent';
import About from "./components/About";
import OurTeam from './components/OurTeam'
import Services from "./components/Services";
import Scholarship from "./components/Scholarship";
import Events from './components/Events'
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    
   
    <Router>
   
    <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="OurTeam" element={<OurTeam />} />
           <Route path="Services" element={<Services />} />
          <Route path="Scholarship" element={<Scholarship />} />
          <Route path="Events" element={<Events />} />
           <Route path="contact" element={<Contact />} />
          <Route path="Footer" element={<Footer />} />
          <Route  path="Read" element={<Read />} />
          <Route exact path="AboutRead" element={<ARead/>} />
        </Route>
      </Routes> 

    </Router>
  {/* <Header/>
  <BackgroundImageComponent/> 
  <About/>
  <Services/>
  <Scholarship/>
  <Contact/>
  <Footer/> */}


{/* 
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<BackgroundImageComponent />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} />
          <Route path="Scholarship" element={<Scholarship />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Footer" element={<Footer />} />
        </Route>
      </Routes>  */}


    
  
    </>
  )
}