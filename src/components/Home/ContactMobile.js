import React, { useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMobile = () => {
   
  const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_nqzg4tq', 'template_70qokfa', form.current, 'Tx8CszlyOrnECPigx')
          .then((result) => {
            console.log(result.text);
            toast.success('Your Email Has Been Sent!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
          }, (error) => {
            console.log(error.text);
            toast.error('There was an error in sending email.Try again later.', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
          });
      };
    

  return (
   <section id="ContactMobile">
    <ToastContainer/>
       <div className="row">
          <div className="col-md-12 text-center">
          <h2>Contact Us</h2>
          <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='user_name' placeholder="Enter your name" className="mt-5" />     
          <input type="text" name='user_email' placeholder="Enter your email Id" className="mt-4" />
            <textarea name="message" placeholder="Write your message here..." rows="4" className="mt-4" />

            <input className='mt-4' type="submit" value="Send" />
            <button type="submit" className="sumb">Send</button>
          </form>
          </div>
         </div>
         
   </section>
  )
}

export default ContactMobile