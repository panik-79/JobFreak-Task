import React from 'react'
import Figrid from '../images/FiGrid.png'

const Navbar = ({currTab}) => {
  return (
    <div className='navbar'>
        <div className="navbar-head">
            <img src={Figrid} alt="" />
            <span>{currTab}</span>
        </div>
    </div>
  )
}

export default Navbar;