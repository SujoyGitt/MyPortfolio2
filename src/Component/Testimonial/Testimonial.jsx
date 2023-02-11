import React from 'react';
import "../Testimonial/Testimonial.css";
import Testimonialdata from "../Testimonial/Testimonialdata";
import img from "../Testimonial/Textmonialclient/seven.jpg";
import img2 from "../Testimonial/Textmonialclient/two.jpg";
import img3 from "../Testimonial/Textmonialclient/three.jpg";
import img4 from "../Testimonial/Textmonialclient/four.jpg";
import img5 from "../Testimonial/Textmonialclient/five.jpg";
import img6 from "../Testimonial/Textmonialclient/six.jpg";
import { useEffect } from 'react';
export const Testimonial = () => {
  let one= ()=>{
    document.querySelector('.slider').style.transform = `translateX(0%)`;
  }  
  let two= ()=>{
    document.querySelector('.slider').style.transform = `translateX(-33%)`;
  }  
  let three= ()=>{
    document.querySelector('.slider').style.transform = `translateX(-66.6%)`;
  }
  useEffect(()=>{
    let Child = document.querySelector(".slider");
    let count = 0;
    var k = 1;
    setInterval(() => {
        count += 33.1;
        k = k + 1;
        if (count > 67) {
            count = 0;
            Child.style.transform = `translateX(-${count}%)`;
          }
          if (k > 3) {
            k = 1;
            document.querySelector(".i" + k).checked = true;
           }
            document.querySelector(".i" + k).checked = true;

          Child.style.transform = `translateX(-${count}%)`
    }, 3000);
  },[])
  return (
    <div id='testimonial' className='container-fluid testimonial d-flex justify-content-center align-items-center'>
      <div className="col-11 col-md-10 col-lg-9 text-center">
        <h5>Testimonial</h5>
        <h1>My Client Saying</h1>
        <div className="testimonial_carousel row">
          <div className="slider d-flex">
              <div className="slider_one d-flex justify-content-between align-items-center">
                <Testimonialdata img={img} name="Suju Ghosal"/>
                <Testimonialdata img={img2} name="Asiv uZ Zaman"/>
              </div>
               <div className="slider_one d-flex justify-content-between align-items-center">
                <Testimonialdata img={img3} name="Raul.k Smith"/>
                <Testimonialdata img={img4} name="Asiv uZ Zaman"/>
               </div> 
              <div className="slider_one d-flex justify-content-between align-items-center">
                <Testimonialdata img={img5} name="Raul.k Smith"/>
                <Testimonialdata img={img6} name="Asiv uZ Zaman"/>
              </div>
          </div>
        </div>
       <div className="col-4 m-auto indicator">
        <input type="radio" name='name' className='i1' onClick={one}/>
        <input type="radio" className='mx-2 i2' name='name' onClick={two}/>
        <input type="radio" name='name' className='i3' onClick={three}/>
       </div>
      </div>
    </div>
  )
}
