import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navprofile from '../../assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className='Navbar '>
      <img src={navlogo} alt="" className='Nav-logo' />
      <img src={navprofile} alt=""  className='Nav-profile' />
    </div>
  )
}

export default Navbar
