import React from 'react';
import "./Intro.css";
import Introimg from "../img/Smileman.jpg";
import { MusicNote,CardTravelOutlined,Movie,Brush,Person,Phone,Email} from '@material-ui/icons';
import Pagination from './Pagination';
export const Intro = () => {

 let k = document.querySelectorAll(".pagination .page-item .page-link");
 k.forEach((ele)=>{
  ele.addEventListener("click",()=>{
    let resutl = ele.classList.contains('active');
    console.log(resutl)
    if(ele.classList.contains('active')){
      ele.classList.add("active")
      ele.classList.remove("disbled")
    }else{
      ele.classList.remove("active")
      ele.classList.add("disbled")
    }
  })
 })
  return (
    <div id='icon' className='intro'>
      <div className="container introinner">
         <div className="row d-flex justify-content-evenly align-items-center">
                <div className="introimg col-10 col-md-5 col-lg-5"><img src={Introimg} alt="introimg" /></div>
                <div className="col-12 col-md-6 col-lg-5 p-5 p-sm-4 p-md-3">
                  <h5>My Intro</h5>
                  <h2>About Me</h2>
                  <p className='introparagraph my-4'>As a highly motivated and adaptablen Idivisual with a strong passion for technology and design, I am excited to bring my unique perspective and skillset to the of front-end devoloper. In addition, my ability to learn Quickly and work effectively.</p>
                  <div className='introdetails my-5'>
                    <p><span><Person/> Name</span> <span className='mx-5'>:</span> Sujoy Ghosal</p>
                    <p><span><Phone/> Phone</span> <span className='mx-5'>:</span> +91 <a href="tel:9064171925" target="_blank">9064171925</a></p>
                    <p><span><Email/> Email</span> <span className='mx-5'>:</span> <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank">sujoy143656@gmail.com</a></p>
                  </div>
                  <h3>My Interest</h3>
                  <div className="interest">
                    <span className='me-5 fs-4'><MusicNote/> Music</span>
                    <span className='me-5 fs-4'><CardTravelOutlined/> Travel</span>
                    <span className='me-5 fs-4'><Movie/> Movies</span>
                    <span className='me-5 fs-4'><Brush/> Painting</span>
                  </div>
                </div>
         </div>
      </div>
  <Pagination/>
  
</div>
  )
}
