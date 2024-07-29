import React, { useContext } from 'react'
import './Productdisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const Productdisplay = (props) => {
    const {product}=props
    const {addTocart,setSize}=useContext(ShopContext)

const sizechange=(size)=>{
    setSize(size)
}


  return (
    <div>
      <div className="Display">
        <div className="display-left">
            <div className="image-sec">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="image-section">
                <img src={product.image} alt="" />
            </div>

        </div>
        <div className="display-right">
            <h5>{product.name}</h5>
            <div className="star-rating">
                <div className="star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                </div>
                <div className="number">
                    <h5>(122)</h5>
                </div>
            </div>
            <div className="price">
                <h4>&{product.new_price}</h4>
                <h5>& <del>{product.old_price}</del></h5>
            </div>
            <div className="about_cloth">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt fugit animi odio odit officiis sit, soluta a illum corporis ullam aliquid officia laudantium vero sunt expedita, commodi distinctio quod culpa.
            </div>
            <div className="size">
            <div onClick={()=>{sizechange("S")}}  className="div">S</div>
                <div  onClick={()=>{sizechange("M")}} className="div">M</div>
                <div onClick={()=>{sizechange("L")}} className="div">L</div>
                <div onClick={()=>{sizechange("XL")}} className="div">XL</div>
                <div onClick={()=>{sizechange("XXl")}} className="div">XXL</div>
                
            </div>

            <div className="display-btn">
                <button onClick={()=>addTocart(product.id)}>ADD TO CART</button>
            </div>
            <div className="display-category">
                <p><span>Category : </span>Women , T-shirt , Crop Top</p>
                <p><span>Tags : </span>Modern , Latest</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Productdisplay
