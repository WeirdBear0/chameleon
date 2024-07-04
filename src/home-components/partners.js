import React, {useState} from 'react';
import { Outlet, Link } from 'react-router-dom';
import './partners.css'
import republic from "./republic.jpg"

const Partners = () => {
  return (
    <div className='partners'>
        <p className='partnerHeader'>Our Partners</p>
        <div className='imgContainer'>
            <img className = "republic" src = {republic}></img>
        </div>
    </div>

  );
};
export default Partners;