import { useEffect, useState } from "react";
import "../Loading/Loading.css";

let Loading = ()=>{
  let [load,setload]=useState(false);
window.addEventListener('load',()=>{
  setload(true);
  if(load){
    document.querySelector('.loadingbar').remove();
  }
})
useEffect(()=>{
  setTimeout(()=>{
    document.querySelector('.loadingbar').remove();
},1000)
},[])

  return (
    <>
    <div className="loadingbar d-flex justify-content-center align-items-center" >
    <svg viewBox="25 25 50 50" className="loadingsvg">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>
    </div>
    
    </>
  )
}
export default Loading