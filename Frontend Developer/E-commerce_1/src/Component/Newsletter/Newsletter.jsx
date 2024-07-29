import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='News'>
      <div data-aos="flip-up"
      //  data-aos-delay=""
       data-aos-duration="500"
       data-aos-easing="ease-in-out" className="newsletter">
        <h1>Get Exclusive Offer On your Email</h1>

        <p>Subscribe To Our newsletter and stay updated</p>
      
      <div>
        <input type="email" name="" id="" placeholder='Your Email id'/>
        <button>Subscribe</button>
      </div>
      </div>
    </div>
  )
}

export default Newsletter
