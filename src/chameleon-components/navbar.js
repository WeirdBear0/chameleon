import React, {useState} from 'react';
import logo from './logoClear.svg'
import './navbar.css'
import { render } from '@testing-library/react';

const Navbar = () => {
  const [size, setSize] = useState("55px")
  const [opacity, setOpacity] = useState(1)
  function changeNav() {
    if (window.scrollY > 80 || window.scrollY > 80) {
      setSize("34px");
      setOpacity(0.73)
    } else {
      setSize("55px");
      setOpacity(1)
    }
  }
  window.onscroll = () => {
    changeNav()
    console.log(window.scrollY)
  };
  return (
    <div className = 'navbar' style = {{background: `rgba(226, 218, 201, ${opacity})`}}>
        <a href = "#" className='logoLink'>
            <img src = {logo} className='logo' alt = 'chameleon'></img>
        </a>
        <p className='title' style = {{fontSize: size}}>chameleon</p>
        <div className='links'>
            <a className='sectionLink' href=''>Home</a>
            <a className='sectionLink'>About</a>
            <a className='sectionLink'>Camps</a>
        </div>
    </div>
  );
};

export default Navbar;
