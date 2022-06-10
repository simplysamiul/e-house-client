import React, { useState, useRef     } from 'react';
import emailjs from '@emailjs/browser';
import { Alert, CircularProgress } from '@mui/material';
import { useForm } from "react-hook-form";
import '../../styles/ContactUs.css';

const ContactUsForm = () => {
    const form = useRef();
    const [sendProgess, setSendProgress] = useState(false);
    const [emailSendSuccess, setEmailSendSuccess] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    // Contact form submit
    const onSubmit = () => {
        setSendProgress(true);
        emailjs.sendForm('service_z4e78to', 'template_jk8gkju', form.current, 'user_5J2KF5PBtXsIFEVdAu5UM')
        .then((result) => {
          if(result.text){
              reset();
            setSendProgress(false);
            setEmailSendSuccess(true);
          }
      }, (err) => {
          if(err.text){
            setEmailError(true);
          }
      });
    };

    if(emailSendSuccess === true){
        setTimeout(() =>{
            setEmailSendSuccess(false);
        }, 10000)
    }
    return (
        <div className='contat-form-area'>
            <div className="contact-form-container">
                <div className="contact-form-title contact-title-border">
                    <h1>Send the message</h1>
                </div>
                <div className="contact-form">
                    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                        <div className="name-input">
                            <div className="first-name">
                                <label>Your Name <small>*</small> </label>
                            <input type="text" name="name" 
                            {...register ("name")} required />
                            </div>
                        </div>
                        <div className="email">
                            <label>Email <small>*</small></label>
                        <input type="email" name="email" {...register ('email')} required />
                        </div>
                        <div className="message">
                            <label>Message <small>*</small></label>
                            <textarea name="message" cols="30" rows="8" {...register ("message")} required />
                        </div>
                        <div className="contact-submit">
                        <button type="submit" value="Send">Submit</button>
                        </div>
                    </form>
                    {sendProgess && <div style={{textAlign:"center", padding:"20px 0"}}><CircularProgress color="secondary" /></div> }
                    {emailSendSuccess && <div style={{textAlign:"center", margin:"20px 0"}}><Alert severity="success">Email send successfully!</Alert></div>}
                    {emailError && <div style={{textAlign:"center", margin:"20px 0"}}><Alert severity="error">Email send faield. please try again!</Alert></div>}
                </div>
            </div>
        </div>
    );
};

export default ContactUsForm;