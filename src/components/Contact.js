import React from 'react'

function Contact() {
  return (
    <div className='body-wrapper'>
      <div className='res-section'>
        <div className='contact-card'>
          <div className='contact-card-wrapper'>
            <h2>Contact</h2>
            <p>Looking forward to hearing from you</p>

            <h4>Phone</h4>
            <p>+91 8500033154</p>

            <h4>Email</h4>
            <p>hajimalungbaba.786@gmail.com</p>
          </div>
        </div>
        <div className='contact-form'>
          <div className='input-card'>
            <label>First Name</label>
            <input type="text" placeholder='First Name' />
          </div>

          <div className='input-card'>
            <label>Last Name</label>
            <input type="text" placeholder='Last Name' />
          </div>

          <div className='input-card'>
            <label>Email</label>
            <input type="email" placeholder='email' />
          </div>

          <div className='input-card'>
            <label>Subject</label>
            <input type="text" placeholder='Subject' />
          </div>

          <div className='input-card'>
            <label>Message</label>
            <textarea rows={6} placeholder='Messafe' />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Contact