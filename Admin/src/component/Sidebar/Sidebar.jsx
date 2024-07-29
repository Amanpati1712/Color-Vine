import React from 'react'
import './Sidebar.css' 
import  {Link} from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'
import  product_list_icon from '../../assets/Product_list_icon.svg'
const Sidebar = () => {
  return (
    <div className='sidebar'>
   <Link to={'/addproduct'} style={{textDecoration:"none"}}>
    <div className="sidebar-item">
       <p>Add-product</p>
        <img src={add_product_icon} alt="" />
    </div>
   </Link>
   <Link to={'/listproduct'} style={{textDecoration:"none"}}>
   <div className='sidebar-item'>
    <p>List-product</p>
      <img src={product_list_icon} alt="" />
    </div>
   </Link>
      
    </div>
  )
}

export default Sidebar
