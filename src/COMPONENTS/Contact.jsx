import { send } from 'emailjs-com';
import React from 'react'
import {useState} from 'react';
import newmail from '../../src/images/newmail.svg'
import phone from '../../src/images/phone.svg'
import './Contact.css'
import Social from './Social'
import Swal from 'sweetalert2'



const Contact = () => {

  const [toSend, setToSend] = useState({
    from_name: '',
    reply_to: '',
    message:'',


  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_bayoform',
      'template_mraxopv',
      toSend,
      'meppxqhxUUNcxAFB1'
    )

    .then((result) => {
      console.log(result.text);
      Swal.fire({
        icon: 'success',
        title: 'message sent successfully'
      })
    } ,
    (error) => {
      console.log(error.text);
      Swal.fire({
        icon: 'error',
        title: 'Ooops, something went wrong',
        text: error.text,
      })
    });
  e.target.reset()
    };
   

   
  

  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value});
  };
  return (
    <div className = "contact-wrapper">
        <div className="contact-touch">
            <h1>Get In Touch</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Praesentium magnam ad soluta dignissimos, sit quo. <br /> 
            <Social /></p>
            
            
            <div style={{padding:'5px'}}>          
          
          <img src={newmail} alt='mail-icon' className="ok"/> <span>olabayoantonio@gmail.com</span><br />
          <img src={phone} alt='phone-icon' className="ok"/> <span>(+234)708-502-0530</span>
          
        </div>
        </div>
             
        <div className="contact-form">
            <h2>Need a Service?</h2>
            <h1>Send A Message</h1>
        <form id='form' onSubmit ={onSubmit}>
        <label>Enter your name <br/>
          <input type="text" name= "from_name" placeholder = "Enter name" value = {toSend.from_name}
          onChange = {handleChange}/></label>

        <br/>
          <label>Enter Email Address<br/>
            <input type="email" id="email" name="reply_to"  placeholder = "Enter email" value = {toSend.reply_to}
            onChange={handleChange}/>
          </label><br/>
          <label for="lname">Write a Message <br/>
          <textarea type="message" rows = "5" cols = "50" name ="message" 
          value={toSend.message} onChange = {handleChange} />
          
          </label> <br />
          
        
        <button type="submit">Send Message</button>
        </form>
        </div>
        
    </div>
  )
  }

export default Contact