import React from 'react'
import {Link} from "react-router-dom"
import Logo from '../blogimg/logo.png'
import { HiMenu } from "react-icons/hi";
import { HiMenuAlt2 } from "react-icons/hi";



const Header = () => {
  return (
    <nav>
      <div className='container nav__container'>   
        <Link to="/" className='nav_logo'>
          <img src={Logo} alt="Navbar Logo"/>
        </Link>
        <ul className='nav__menu'>
          <li><Link to="/profile/sdfsdf">poorva shinde</Link></li>
          <li><Link to='/create'>Create Posts</Link></li>
          <li><Link to='/authors'>Authors</Link></li>
          <li><Link to='/logout'>Logout</Link></li>
        </ul>
        <button className='nav__toggle-btn'>
          <HiMenu />
        
        </button>

      </div>
    </nav>
  )
}

export default Header