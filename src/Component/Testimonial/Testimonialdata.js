import React from 'react'
import { Star } from '@material-ui/icons';

 const Testimonialdata = ({img,name}) => {
  return (
            <>
              <div className="slider_one_left">
                  <div className="slider_one_left_intro container-fluid d-flex align-items-center">
                    <div className="imgdiv col-2"><img src={img}   alt="" /></div>
                    <div className='col-4 relation'><h4>{name}</h4><p>Client</p></div>
                    <div className="star col-5 mb-5"><Star/><Star/><Star/><Star/><Star/></div>
                  </div>
                 <p className='clientpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure quos culpa voluptatem! Laboriosam quod magni libero deleniti, recusandae corporis officiis eum dolorum cupiditate. Eius?</p>
               </div>
            </>
          )
}
export default Testimonialdata;