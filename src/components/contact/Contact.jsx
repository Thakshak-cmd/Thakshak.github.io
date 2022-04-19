import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {SiTelegram} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w59v35t', 'template_05txepf', form.current, 'dzP0Ro4FNAcStE6in')
      
    e.target.reset()
  };

  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>thakshak120@gmail.com</h5>
            <a href="mailto:thakshak120@gmail.com" target="_blank">Send Email</a>
          </article>
          <article className="contact__option">
            <SiTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>Thaku_Bhai</h5>
            <a href="https://t.me/Thaku_Bhai" target="_blank">Send Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=+6587790329" target="_blank">Send Message</a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact