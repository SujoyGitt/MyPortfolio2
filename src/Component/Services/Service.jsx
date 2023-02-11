import React from 'react';
import { useState } from 'react';
import "../Services/Service.css";
import Servicedata from './Servicedata';
export const Service = () => {
  let [data,setdata] = useState(Servicedata);
  return (
    <div id='service' className="service container-fluid d-flex justify-content-center align-items-center py-5 py-md-0">
     <div className="container me-5">
          <h5 className='text-center'>Specialized in</h5>
          <h1 className='text-center'>What I Offer</h1>
          <div className="row">
            {data.map((currentelem,index)=>{
              let {logo,heading,paragraph} = currentelem;
              return   <div className="col-10 col-md-5 col-lg-3  p-5 servicebox" key={index}>
               <span>{logo}</span>
               <h4 className='my-4'>{heading}</h4>
               <p>{paragraph}</p>
             </div>
            })}
            
          </div>
     </div>
    </div>
  )
}
