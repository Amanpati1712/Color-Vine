import React, { useContext, useState } from 'react'
import './Cartitem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import { Link } from 'react-router-dom'
const Cartitem = () => {
    const {all_product,cartitem,removeTocart,getTotal,code,size}=useContext(ShopContext)

    const [promocode,setPromocode]=useState("")
    
  return (
    
    <div>
        <div className="cart-item">
            <div className="cart-item-name">
                <p>Products</p>
                {/* <p>Title</p> */}
                <p>Price</p>
                <p>Size</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {
               all_product.map((e)=>{
                if(cartitem[e.id]>0){
                    return(
                        <React.Fragment key={e.id} >
                        <div className="cart-final-item">
                           <img className='p-image' src={e.image} alt="" />
                           {/* <p className='cart-product-name'>{e.name}</p> */}

                           <p className='product-price'>${e.new_price}</p>
                           <p>{size}</p>
                           <button className='cart-button'>{cartitem[e.id]}</button>
                           <p>{e.new_price*cartitem[e.id]}</p>
                           <img src={remove_icon} alt="" onClick={()=>removeTocart(e.id)} />
                        </div>
                        <hr />
                       
                       
                       </React.Fragment>
                    )
                }
                return null

               })
            }
        </div>
        <div className="cart-delivery">
            <div className="cart-totals">
                <h1>Cart Totals</h1>
                <div className="subtotal">
                    <p>subtotal</p>
                    <p>$0</p>
                </div>
                <hr />
                <div className="shipping">
                    <p>shipping fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="Total">
                    <p><b>Total</b></p>
                    <p><b>${getTotal()}</b></p>
                </div>
                <Link to="/checkout" ><button className='proceed'>PROCEED TO CHECKOUT</button></Link>

            </div>
            <div className="promo-code">
                  <p>if you have promo code , Enter it here</p>
                  <div className="promo-input">
                    <input type="text" placeholder='Promo code' name='code'  onChange={(e)=>{setPromocode(e.target.value)}}/>
                    <button onClick={()=>{code(promocode)}} >Submit</button>
                  </div>
            </div>
            
            </div>
        </div>
      
    
  )
}

export default Cartitem


