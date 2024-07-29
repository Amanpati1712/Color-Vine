import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
     <div className="Hero-section">
     <div className="Hero-left">
      <h4>New Arrival only</h4>
      <div>
      <div className="Hand-logo">
        <p>New</p>
        <img src={hand_icon} alt="" />
      </div>
      <p>collection</p>
      <p>For Everyone</p>
      </div>
      <div className="hero-latest-button">
      <div>Latest Collection</div>
        <img src={arrow_icon} alt="" />
      </div>
      
    </div>
    <div className="Hero-Right">
        <img src={hero_image} alt="" />
    </div>
     </div>

    </div>
  )
}

export default Hero
