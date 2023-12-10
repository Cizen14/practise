import React from 'react'
import './navbar.css'
import logo from '../../cizen.png'


const Navbar = () => {
  return (
   <nav className='navbar'>
    <img src={logo} alt='Logo' className='logo' />
    <div className='desktopMenu'>
        <nav>
            HOme
            ABout
            Portfolio

        
        </nav>

    </div>
    <button className='desktopMenubtn'>
        <img src='' alt=''className='desktopMenuImg' />Contact Me </button>
 
   </nav>
  )
}

export default Navbar