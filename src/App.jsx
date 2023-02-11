
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./Component/Home/Home";
import { Intro } from "./Component/My Intro/Intro";
import { Skill } from "./Component/My Intro/Skill";
import { Qualification } from "./Component/My Intro/Qualification";
import { Service } from "./Component/Services/Service";
import { Portfolio } from "./Component/Portfolio/Portfolio";
import { ProjectOnMind } from "./Component/Portfolio/ProjectOnMind";
import { Testimonial } from "./Component/Testimonial/Testimonial";
import { Blog } from "./Component/Blog/Blog";
import { Contact } from "./Component/Contact/Contact";
import { Footer } from "./Component/Footer/Footer";
import Loading from './Component/Loading/Loading'
const App = ()=> {
  let wheelfun = ()=>{
    let screenWidth = window.innerWidth;
    let app = document.querySelector('.App');
    app.addEventListener('wheel',(e)=>{
      if (screenWidth > 992) {
        e.preventDefault();
        let k = app.scrollLeft += e.deltaY ;
        let pagination = document.querySelector(".pagination");
        if (k > 500 && k < 3700) {
          pagination.classList.add('showpagination');
        }else{
          pagination.classList.remove('showpagination')
        }
      }
    })
  }
  return(
  <div className="App" onWheel={wheelfun} >
    <Loading/>
    <Home/>
    <Intro/>
    <Skill/>
    <Qualification/>
    <Service/>
    <Portfolio/>
    <ProjectOnMind/>
    <Testimonial/>
    <Blog/>
    <Contact/>
    <Footer/>
   
  </div> 
 )
};
export default App;