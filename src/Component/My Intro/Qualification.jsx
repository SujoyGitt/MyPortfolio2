import React from 'react';
import "../My Intro/Qualification.css";
import { SchoolSharp,Work,CalendarToday,Facebook,Twitter,LinkedIn,Pinterest} from '@material-ui/icons';

export const Qualification = () => {
  return (
    <div id='qualification' className='skill qualification container-fluid d-flex justify-content-center align-items-center'>
        <ul className='socialmedia'>
        <li><a href="/"><Facebook/></a></li>
        <li><a href="/"><Twitter/></a></li>
        <li><a href="/"><LinkedIn/></a></li>
        <li><a href="/"><Pinterest/></a></li>
      </ul>
      <div className="container">
         <h6 className='text-center mt-5'>My Qualification</h6>
         <h1 className='text-center mb-5'>Awesome journey</h1>
         <div className="row d-flex justify-content-sm-evenly justify-content-center align-itmes-center my-5">
          <div className="col-10 col-sm-5 text-center text-sm-start">
              <h3 className='fw-bold'><SchoolSharp className='fs-1'/> Education</h3>
              <div className="skillname mt-5"><p className='my-0 py-0'>Burdwan Raj College</p><span className='fw-light'>Graduate</span><br /><span><CalendarToday/> 2019 - 2022</span>
              </div> 
              <div className="skillname mt-5"><p className='my-0 py-0'>Udaypalli Shiksha Niketon High School</p><span className='fw-light'>High School</span><br /><span><CalendarToday/> 2011 - 2019</span>
              </div>
              <div className="skillname mt-5"><p className='my-0 py-0'>Belpukur G.S.F.P School</p><span className='fw-light'>Primary School</span><br /><span><CalendarToday/> 2006 - 2010</span>
              </div> 
          </div>
          <div className="col-10 col-sm-5 text-center text-sm-start">
          <h3 className='fw-bold'><Work  className='fs-1'/> Experience</h3>
               <div className="skillname mt-5"><p className='my-0 py-0'>...</p><span className='fw-light'>....</span><br /><span><CalendarToday/> .... </span>
              </div>
              <div className="skillname mt-5"><p className='my-0 py-0'>Self learning</p><span className='fw-light'>Frontend Devolopment</span><br /><span><CalendarToday/> 2020 - 2022</span>
              </div> 
              <div className="skillname mt-5"><p className='my-0 py-0'>BKCO</p><span className='fw-light'>Diploma</span><br /><span><CalendarToday/> 2017 April - 2017 Sep</span>
              </div>
          </div>
         </div>
      </div>
    
    </div>
  )
}
