import "../Navbar/Navbar.css";
import { Menu} from "@material-ui/icons";
import { useState} from "react";

let Navbar = ()=>{
  let [somedia,setsomia] = useState(false);


  return(
    <>
      <div className="container-fluid navbar p-0">
      <nav className="mainnav container">
      <div className="logo">
        <h2>S.</h2>
      </div>
      {/* 2nd menu part */}
      <div className="menu-link">
        <ul className={somedia? "showmenu" : ""}>
          <li><a href="#home">Home</a> </li>
          <li><a href="#icon">My Intro</a> </li>
          <li><a href="#service">Services</a> </li>
          <li><a href="#portfolio">Portfolio</a> </li>
          <li><a href="#testimonial">Testimonial</a> </li>
          <li><a href="#blog">Blog</a> </li>
        </ul>
      {/* humbargur menu start*/}
         <div className="humbargerMenu">
           <button onClick={()=>setsomia(!somedia)}><Menu/></button>
         </div>
       {/* humbargur menu end*/}
      </div>
      </nav>
      </div>
    
    </>
  )
}
export default Navbar;