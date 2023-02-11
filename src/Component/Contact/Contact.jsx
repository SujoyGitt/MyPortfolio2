import "../Contact/Contact.css";
import { Call } from '@material-ui/icons';
import { Email } from '@material-ui/icons';
import { LocationOn } from '@material-ui/icons';
import {useState } from "react";
import React,  {useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useEffect } from "react";
export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_p135l8q', 'template_qqn2sry', form.current, 'FWjRwgdaiNq5Nklal')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  //sendemail end
    //see  what is say users start
    let [data,setdata] = useState({
      name:"",
      subject:"",
      email:"",
      message:""
    });
    let submitevent = ()=>{
      if(data.name && data.email && data.message){
        alert(`Your name is ${data.name}.Your subject is ${data.subject} Your email is ${data.email}. And you want to say me ${data.message} and you can reply within 24 hours.`);
        setTimeout(() => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
        }, 3000);
      }
      else{
     
      }
     
    }
    let InputEvent = (event)=>{
      const{name,value} = event.target;
      setdata((previousData)=>{
        return{...previousData,[name]:value};
      })
    };
  //see  what is say users end
  //button effect start
useEffect(()=>{
  let btn = document.querySelector(".btn");
  let fom = document.querySelector("form");
  
fom.addEventListener('keyup',()=>{
     if(data.email.length > 10 && data.name.length > 4){
      btn.removeEventListener('mouseover',hover);
      btn.classList.remove('btnadd');
     }
  });
  let hover = ()=>{
    btn.classList.toggle('btnadd');
}  
btn.addEventListener("mouseover",hover);

})
 //button effect end
  return (
    <div id='contact' className='contact container-fluid d-flex justify-content-center align-items-center  py-5 py-md-0'>
      <div className="container">
        <h5 className='text-center'>Contact Me</h5>
        <h1 className='text-center mb-5 pb-5'>Get in Touch</h1>
        <div className="row d-flex justify-content-evenly">
            <div className="col-12 col-md-7">
              <form ref={form} action="" onSubmit={sendEmail}>
               <div className="row">
                  <div className="col-12 col-sm-6">
                    <input type="text" id="name" name="name" value={data.name}  onChange={InputEvent} className='form-control py-4' placeholder='Name'/>
                  </div>
                  <div className="col-12 col-sm-6 mt-5 mt-sm-0">
                    <input  type="text" id="subject" name="subject" value={data.subject}  onChange={InputEvent} className='form-control py-4' placeholder='Subject(optional)'/>
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col my-3">
                   <input type="email" id="email" name="email" placeholder="Email" value={data.email}  onChange={InputEvent} className='form-control py-4'/>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                   <textarea type="text" id="message" name="message" placeholder="Message" value={data.message}  onChange={InputEvent} className='form-control py-4'/>
                  </div>
                </div>
                <div className="row my-5 " >
                  <div className="col-12 submitbtn">
                    <button className='btn' onClick={submitevent}>Send Message</button>
                  </div>
                </div>
             </form>
           </div>
          <div className="col-12 col-md-4 contactinformation">
            <div className="row ">
              <div className="col-12">
                <div className="row d-flex align-items-center justify-content-evenly">
                  <div className="col-4"><Call/></div>
                   <div className="col-8">
                    <h5>Call Me</h5>
                    <a href="tel:9064171925">9064171925</a>
                   </div>
                </div>
              </div>
              <div className="col-12">
               <div className="row d-flex align-items-center justify-content-evenly">
                  <div className="col-4"><Email/></div>
                  <div className="col-8">
                    <h5>E-mail</h5>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='_blank'>sujoy143656@gmail.com</a><br />
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='_blank'>ghsujoy677@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="col-12">
               <div className="row d-flex align-items-center justify-content-evenly">
                  <div className="col-4"><LocationOn/></div>
                  <div className="col-8">
                    <h5>Location</h5>
                    <p>713102,Burdwan,West Bengal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
