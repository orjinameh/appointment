import React from 'react'
import "./index.css"
import ContactComp from'./contactComp'

const Contact = () => {
  return (
    <div className='contact-div'>
      <div className="contact-text">
        <h4>Contact Us</h4>
        <h1>Get In Touch With Us</h1>
        <ContactComp text='address' title='Our Location' svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
        </svg>}/>
        <ContactComp text='phone' title='Phone Number' svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"/>
        </svg>}/>
        <ContactComp text='email' title='Email Address' svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/>
        </svg>}/>
      </div>
      <div className="contact-form">
        <form action="submit">
          <input type="text" placeholder='Your name'/>
          <input type="text" placeholder='Your email'/>
          <input type="text" placeholder='Your phone number'/>
          <input type="text" placeholder='message'/>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact