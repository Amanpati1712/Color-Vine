import React, { useContext } from 'react'
import './CSS/ShopCategory.css'

import { ShopContext } from '../Context/ShopContext'
import Item from '../Component/Item/Item'
import dropdown_icon from '../Component/Assets/dropdown_icon.png'
// import { useNavigate } from 'react-router-dom'

const ShopCategory = (props) => {
const {all_product}=useContext(ShopContext)
//  const navigate = useNavigate()
  return (
    <div>
      <div  data-aos="fade-right"
      // data-aos-delay=""
    data-aos-duration="900"
    data-aos-easing="ease-in-out" className="banner">
        <img src={props.banner} alt="" />
      </div>
      <div className="index-short">
        <p>Showing 1-12 <span>out of 36 products </span></p>
        <div className="sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="all_products">
        {
          all_product.map((item,i)=>{
            if(props.category===item.category){
              return <Item  key={i} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image} />
            }
            else{
              return null;
            }
          })
        }
      </div>
      <div className="explore-button">
        <button>Explore More</button>
      </div>
    </div>
  )
}



export default ShopCategory
