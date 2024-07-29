import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import Logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


const Navbar = () => {
const [menu,setMenu]=useState("shop")
const {cartTotal,setCartitem}=useContext(ShopContext)
const menuRef=useRef()

const navigate = useNavigate()
// const dropdown_toggle=(e)=>{
//    menuRef.current.classList.toggle("nav-menu-visible")
//    e.target.classList.toggle('open')
// }



  return (
    <div className='navbar'>
     <div className='Nav-logo'>
        <img src={Logo} alt="" />
        <p>COLOR VINE</p>
     </div>
     {/* <img onClick={dropdown_toggle()} src={Logo} alt="" /> */}
     <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>setMenu("shop")}><Link style={{textDecoration:"none"}} to="/">shop</Link>{menu==="shop"? <hr />:<></>}</li>
        <li onClick={()=>setMenu("men`s")}><Link style={{textDecoration:"none"}}  to="/mens">men</Link>{menu==="men`s"? <hr />:<></>}</li>
        <li onClick={()=>setMenu("women`s")}><Link style={{textDecoration:"none"}}  to="/womens">womens</Link>{menu==="women`s"? <hr />:<></>}</li>
        <li onClick={()=>setMenu("kid`s")}><Link style={{textDecoration:"none"}}  to="/kids">kids</Link>{menu==="kid`s"? <hr />:<></>}</li>
        <li onClick={()=>setMenu("AS Your Choice")}><Link style={{textDecoration:"none"}}  to="/Choice">Choice</Link>{menu==="AS Your Choice"? <hr />:<></>}</li>
     </ul>
     <div className="login-cart">
      {localStorage.getItem("auth-token")?<button onClick={()=>{ localStorage.removeItem("auth-token"); setCartitem({}); navigate('/')}}>Logout</button>
      :<Link to="/Login"><button>Login</button></Link>}
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{cartTotal()}</div>
     </div>
      
    </div>
  )
}

export default Navbar
