import React, {useState} from 'react';
import logo from './logoClear.svg'
import Font from './font';
import './navbar.css'

const Navbar = () => {
  return (
    <div className = 'navbar'>
        <a href = "#" className='logoLink'>
            <img src = {logo} className='logo' alt = 'chameleon'></img>
        </a>
        <p className='title'>chameleon</p>
        <div className='links'>
            <a className='sectionLink'>Home</a>
            <a className='sectionLink'>About</a>
            <a className='sectionLink'>Camps</a>
        </div>
    </div>
  );
};

export default Navbar;
