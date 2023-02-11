import React from 'react';
import "../Footer/Footer.css"
import { Facebook ,Twitter,LinkedIn,Pinterest} from '@material-ui/icons';

export const Footer = () => {
  return (
    <div className='footer container-fluid  g-0'>
      <div className="container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2460555409307!2d87.81867869999999!3d23.234131599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f83758b2c01551%3A0xdfd4298999a2d330!2sKharswar%20Pally%20United%20Club!5e0!3m2!1sen!2sin!4v1675921868701!5m2!1sen!2sin" style={{width:'100%',height:'450px',border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
       <div className="container-fluid d-flex justify-content-center align-items-center">
       <div className="col-12 col-sm-10 col-lg-4 col-md-8 text-center p-5">
         <div className="logo"><span>S.</span></div>
         <p>Extreamly Promotion remainder egarness enjoyment an. Ham her demond removal brought minuiter raising invited gay.</p>
         <ul>
          <li><a href="https://m.facebook.com/sujoy.ghosal.522?eav=Afat2WFw2FAeX_3GPly_WJlcJchkUCONQJQW-r3LU3uhbYk0_kW9v43mXzYJhVPN3fE&paipv=0" target="_blank"><Facebook/></a></li>
          <li><a href="https://twitter.com/SujoyGhosal11" target="_blank"><Twitter/></a></li>
          <li><a href="https://www.linkedin.com/in/sujoy-ghosal-722282248/" target="_blank"><LinkedIn/></a></li>
          <li><a href="" target="_blank"><Pinterest/></a></li>
         </ul>
         <p>All Right Reserved</p>
       </div>
       </div>
    </div>
  )
}
