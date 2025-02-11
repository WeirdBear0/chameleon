import React, {useState} from 'react';
import { Outlet, Link } from 'react-router-dom';
import './partners.css'
import republic from "./republic.jpg"
import give from "./msft_give.png"
import fm from "./future-martians.webp"

const Partners = () => {
  return (
    <div className='partners'>
        <p className='partnerHeader'>Proudly Partnered With:</p>
        <img className = "republic" src = {republic}></img>
        <img className = "give" src = {give}></img>
        <img className = "fm" src = {fm}></img>
    </div>

  );
};
export default Partners;