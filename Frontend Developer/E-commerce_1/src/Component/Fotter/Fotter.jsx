import React from 'react'
import './Fotter.css'
import Logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsaap_icon from  '../Assets/whatsapp_icon.png'
// import { useNavigate } from 'react-router-dom'

const Fotter = () => {
  // const navigate = useNavigate()

  // if(localStorage.getItem('auth-token')){
    return (
      <div>
        <div className="Fotter">
          <div className="Logo-img">
              <img src={Logo} alt="" />
              <p data-aos="fade-left
              " >COLOR VINE</p>
          </div>
        <ul>
          <li>Company</li>
          <li>product</li>
          <li>offices</li>
          <li>about</li>
          <li>contact</li>
        </ul>
        <div className="icons">
          <img src={instagram_icon} alt="" />
           
          <img src={pintester_icon} alt="" />
          <img src={whatsaap_icon} alt="" />
  
        </div>
        <hr />
        <p>Copyright @ 2023 - All Right Reserved </p>
        </div>
      </div>
    )
  }
//   else{
//     navigate('/login')
//   }
// }

export default Fotter
