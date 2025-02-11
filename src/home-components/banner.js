import React, {useState} from 'react';
import './banner.css'
import Donate  from './donate'

const Banner = () => {
  return (
    <div className = 'banner'>
      <div className='title-container'>
        <p className='title'>A Breath of Fresh Air</p>
        <p className='description'>Innovative camps with hands-on learning</p>
        <p className='specs'> EST. 2024 | Sammamish, WA </p>
        <br></br>
        <span className='donate-banner'><Donate/></span>
      </div>
    </div>
  );
};
export default Banner;
