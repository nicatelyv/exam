import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'

function Navbar() {
  return (
    <nav>
        <div className='topnav'>
            <img alt='navfoto' src='https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png.webp'/>
            <i id='hamburgermenu' className="fa-solid fa-bars"></i>
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/addpage'}>Add</NavLink></li>
                <li><NavLink to={'/'}>About</NavLink></li>
                <li><NavLink to={'/'}>Services</NavLink></li>
                <li><NavLink to={'/'}>Blog</NavLink></li>
                <li><NavLink to={'/'}>Contact</NavLink></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar