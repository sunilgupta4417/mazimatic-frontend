import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

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
    <section id="Contact">
        <ToastContainer/>
        <img src="/assets/images/line.svg" className="line-one" />
        <img src="/assets/images/line.svg" className="line-two" />
        <img src="/assets/images/contact-triangle.png" className="contact-triangle" />
        <img src="https://mazimatic.s3.ap-south-1.amazonaws.com/contact-focus.png" className="contact-focus" />
        <div className="row">
           <div className="col-md-4 col-sm-4">
           {/* <video autoPlay ref={videoRef}
            width="250"
            loop
            muted id="Contactvideo">
                <source
                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/contact-video.mp4"
                />
            </video> */}
            <img src='https://mazimatic.s3.ap-south-1.amazonaws.com/contact-poster.png' id="Contactvideo" />
           </div>
            <div className="col-md-8 col-sm-8">
                <h2>Contact Us</h2>

            <form ref={form} onSubmit={sendEmail}>
            <div className="row first-row">               
                <div className="col-md-12 col-sm-12">
                    <input type="text" name='user_name' placeholder="Enter your name" />
                </div>
            </div>

            <div className="row second-row">
                <div className="col-md-12 col-sm-12">
                <input type="text" name='user_email' placeholder="Enter your email Id" />
                </div>
            </div>

            <div className="row second-row">
                <div className="col-md-12 col-sm-12">
                <textarea name="message" placeholder="Write your message here..." rows="4" />
                </div>
                      </div>

            {/* <button type="submit" className="sumb">Send</button> */}
            <input className='mt-4' type="submit" value="Send" />
            </form>
            </div>
        </div>
    </section>
  )
}

export default Contact