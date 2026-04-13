import React from 'react';
import './banner.css'
import Donate  from './donate'
import GradientBanner from './gradientbanner';

const Banner = () => {
  return (
      <GradientBanner>
        <div className = 'banner'>
          <div className='title-container'>
            <p className='title-banner'>
              <span className='title-line-1'>A Breath of </span>
              <span className='title-line-2-mobile'><br/></span>
              <span className='title-line-2'>Fresh Air</span>
            </p>
            <p className='description'>Innovative camps with hands-on learning</p>
            <p className='specs'> EST. 2024 | Sammamish, WA </p>
            <br></br>
            <span className='donate-banner'><Donate/></span>
          </div>
        </div>
      </GradientBanner>
  );
};
export default Banner;
