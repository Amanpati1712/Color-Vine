import React from 'react'
import './Offer.css'
import Exclusive_image from '../Assets/exclusive_image.png'
import arrow_icon from '../Assets/arrow.png'

const Offer = () => {
  return (
    <div>
       <div data-aos="zoom-in"
    // data-aos-offset="200"
    data-aos-delay="20"
    data-aos-duration="900"
    data-aos-easing="ease-in-out"
    // data-aos-mirror="true"
    // data-aos-once="false"
    className="div_1  ">
       <div className="Offer">
            <div className="offer-left">
                <h1>Exclusive</h1>
                <h1>Offer for you</h1>
                <p>ONLY ON BEST SELLER PRODUCT</p>
                <button>CHECK NOW <img src={arrow_icon} alt="" /></button>

            </div>
            <div className="offer-right">
            <img src={Exclusive_image} alt="" />

            </div>
        </div>
       </div>
      
    </div>
  )
}

export default Offer
