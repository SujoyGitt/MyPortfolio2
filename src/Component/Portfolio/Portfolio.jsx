import React from 'react';
import { useState } from 'react';
import "../Portfolio/Portfolio.css";
import Portfoliodata from './Portfoliodata';
let AllCatgory =['All Project',...new Set(Portfoliodata.map((e)=> e.category))];
export const Portfolio = () => {
  let [portdata,setportdata] = useState(Portfoliodata);
  let [categoryItm,setcategoryItm] = useState(AllCatgory);

  let filteritem = (categItem)=>{
    if (categItem === 'All Project') {
     return setportdata(Portfoliodata)
    }
    let updateditm = Portfoliodata.filter((currentElm)=>{
      return currentElm.category === categItem;
    });
    setportdata(updateditm)
  }
  return (
    <div id='portfolio' className='portfolio container-fluid d-flex justify-content-center align-items-center  pb-5 pb-lg-0'>
      <div className="container">
         <h5 className='text-center'>My Portfolio</h5>
          <h1 className='text-center'>Resent Works</h1>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-12 col-sm-10 col-md-8   col-lg-5 buttongroup">
              <div className="row">
              {categoryItm.map((cel,index)=>{
              return(<>
              <button key={index} className='col-4 col-sm-3 text-center' onClick={() => filteritem(cel)}>{cel}</button>
            </>)  
        })}
              </div>
            </div>
            <div className="col-12 portfoliogalary ">
              <div className="row d-flex justify-content-center">
                {
                  portdata.map((element)=>{
                    let {id,image,link} = element;
                    return (
                      <>
                      <div className="col-12  col-md-6 col-lg-4 portfolioimg mt-4" key={id}><a href={link} target="_blank"><img src={image} className="img-fluid" alt="portfolioimg" /></a></div>
                      </>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className='text-center mt-3'><button className='showmore'>Show More</button></div>
      </div>
    </div>
  )
}
