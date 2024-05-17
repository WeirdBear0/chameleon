import React, {useState} from 'react';
import './navbar.css'
import logo from './logoClear.svg'

const Navbar = () => {
  return (
    <div className = 'navbar'>
        <a href = "#" className='logoLink'>
            <img src = {logo} className='logo' alt = 'chameleon'></img>
        </a>
        <div className='links'>
            <a className='sectionLink'>Home</a>
            <a className='sectionLink'>About</a>
            <a className='sectionLink'>Camps</a>
        </div>
    </div>
  );
};

export default Navbar;
