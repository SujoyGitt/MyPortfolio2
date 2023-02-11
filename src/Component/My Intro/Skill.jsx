import React from 'react';
import "../My Intro/Skill.css";
export const Skill = () => {
  return (
    <div id='skill' className='skill container-fluid d-flex justify-content-center align-items-center'>
      <div className="container">
         <h6 className='text-center mt-5'>Why Choose Me</h6>
         <h1 className='text-center mb-5'>My Expertise Area</h1>
         <div className="row d-flex justify-content-evenly my-5">
          <div className="col-10 col-md-5">
              <div className="skillname d-flex justify-content-between"><p>Html 5</p><span>85%</span></div>
              <input type="range" />
              <div className="skillname d-flex justify-content-between"><p>CSS 3</p><span>90%</span></div>
              <input type="range" />
              <div className="skillname d-flex justify-content-between"><p>Javascript</p><span>80%</span></div>
              <input type="range" />
              <div className="skillname d-flex justify-content-between"><p>Bootstrap</p><span>80%</span></div>
              <input type="range" />
          </div>
          <div className="col-10 col-md-5">
          <div className="skillname d-flex justify-content-between"><p>Sass</p><span>75%</span></div>
              <input type="range" />
              <div className="skillname d-flex justify-content-between"><p>Jquary</p><span>90%</span></div>
              <input type="range" />
              <div className="skillname d-flex justify-content-between"><p>React Js</p><span>80%</span></div>
              <input type="range" />
              <div className="skillname d-flex justify-content-between"><p>GitHub</p><span>80%</span></div>
              <input type="range" />
          </div>
         </div>
      </div>
    </div>
  )
}
