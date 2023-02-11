import './Home.css';
import FrontendDevoloper from "../img/Frontend Devoloper.png";
import { FlashOnTwoTone } from '@material-ui/icons';
import Typed from 'typed.js';
import { useEffect } from 'react';
import { Pages } from '@material-ui/icons';
import { ContactSupport } from '@material-ui/icons';
import Resume from "../Home/White Gold Elegant Minimalist ATS Data Analyst Resume CV A4 Printable.pdf";
let Home = ()=>{
useEffect(()=>{
  var options = {
    strings: ['UI Devoloper','UI Deginer','Frontend Devoloper' ],
    typeSpeed: 140,
    backSpeed:140,
    loop:true
  };
  let typetext = document.querySelector(".typed")
   new Typed(typetext, options);
},[]);

  return (
    <>
      <div id='home' className="home container-fluid py-4 py-lg-0">

        <div className="container">
        
          <div className="row container-child d-flex  align-items-center">
            <div className="homeleft col-12 col-md-6">
              <p>Hi, I'm</p>
              <h1 className='homeheading'>Sujoy Ghosal</h1>
                <span className='typed'>Frontend Devoloper</span>
                <p className='homeparagraph'>Dynamic and driven Frontend Developer with a passion for creating visually appealing, user-friendly web experiences through coading Language.</p>
              <div className="homebuttongroup d-flex flex-wrap">
                <a  href={Resume} target="_blank" rel="noreferrer" className='mt-1'>Download CV</a>
                <a href="#contact" className='mt-1 ms-4'>Contact Me</a>
              
              </div>
            </div>
            <div className="homeright col-12 col-md-4">
              <img src={FrontendDevoloper} alt="men" />
            </div>
          </div>
         
        </div>
        <div className="row mt-5">
            <div className="col-9 m-auto homeExperience px-5">
              <div className="row d-flex justify-content-center">
                <div className="col-10 col-md-4 homeexperiencechild">
                  <div className="row d-flex justify-content-between justify-content-sm-evenly align-items-center">
                    <div className='col-3'><FlashOnTwoTone/></div>
                    <div className='col-7'><p>0 years Job</p><span>Experience</span></div>
                  </div>
                </div>
                <div className="col-10 col-md-4 homeexperiencechild">
                <div className="row d-flex justify-content-between justify-content-sm-evenly align-items-center">
                    <div className='col-3'><Pages/></div>
                    <div className='col-7'><p>80 + </p><span>Projects</span></div>
                  </div>
                </div>
                <div className="col-10 col-md-4 homeexperiencechild">
                <div className="row d-flex justify-content-between justify-content-sm-evenly align-items-center">
                    <div className='col-3'><ContactSupport/></div>
                    <div className='col-7'><p>Support</p><span>Online 24/7</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}
export default Home;