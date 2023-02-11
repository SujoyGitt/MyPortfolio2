import React from 'react'
import { useState } from 'react';
import "../Blog/Blog.css";
import Blogdata from './Blogdata';
export const Blog = () => {
  let [data,setdata] = useState(Blogdata);
  return (
    <div id='blog' className='blog container-fluid d-flex justify-content-center align-items-center  py-5 py-md-0'>
     
      <div className="container-fluid">
      <h5 className='text-center'>Blog</h5>
      <h1 className='text-center mb-4'>Latest Updates</h1>
        <div className="row g-0 justify-content-center">
          {
            data.map((currentelm,index)=>{
              let {img,date,about} = currentelm;
             return <div className="card carddata col-10 col-sm-8 col-md-5 col-lg-3 mt-5" key={index}>
                    <img src={img} className="img-fluid" alt="" />
                    <span className='p-4 pb-2'>{date}</span>
                    <p className='px-4 pb-3'>{about}</p>
                  </div>
              })
             }
        </div>
      </div>
    </div>
  )
}
