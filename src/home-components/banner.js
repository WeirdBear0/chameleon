import React, {useState} from 'react';
import './banner.css'

const Banner = () => {
  return (
    <div className = 'banner'>
      <div className='title-container'>
        <p className='title'>A Breath of Fresh Air</p>
        <p className='description'>Innovative camps with hands-on learning</p>
        <p className='specs'> EST. 2024 | Sammamish, WA <br/> All profits donated to the <a className = "amazonLink" href = 'https://tinyurl.com/5de3jwx4' target='__blank'> Brazilian Amazon Fund</a></p>
      </div>
    </div>
  );
};
export default Banner;
