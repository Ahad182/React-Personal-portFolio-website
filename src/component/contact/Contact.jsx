import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const [done,setDone]=useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5yt7h5a', 'template_cec38mf', form.current, 'z3Yq2Q6Fgvb_eTTn-')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    
    <div className="c-Wrapper" id="contact">
        <div className="c-left">
            
                <span>Get in touch</span>
                <span>Contact me</span>
                
            
        </div>
        <div className="c-right">
           <form ref={form} className="c-form" onSubmit={sendEmail}>
            <input className='Inputfield' type="text" name="user_name" placeholder="Name"/>
            <input className='Inputfield' type="email" name="from_name" placeholder='email'/>
            <textarea className='Inputfield' name="message" style={{resize:'none'}} placeholder="Type Message..."></textarea>
            <button type="submit" className="button">Send</button>
            <span>{done &&  "Thanks For Connecting me"}</span>
           </form>
        </div>
    </div>
  )
}

export default Contact