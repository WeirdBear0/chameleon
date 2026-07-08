import React, { useState, useEffect } from 'react';
import './banner.css';
import Donate from './donate';
// import GradientBanner from './gradientbanner'; // ← preserved: swap back in to restore gradient

import img1 from './carousel-pics/IMG_1956.webp';
import img2 from './carousel-pics/IMG_2235.webp';
import img3 from './carousel-pics/IMG_2256.webp';
import img4 from './carousel-pics/IMG_7223.webp';
import img5 from './carousel-pics/IMG_8066.webp';

const bgImages = [img1, img2, img3, img4, img5];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % bgImages.length);
        setVisible(true);
      }, 1200);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  /* ── To restore gradient, replace the return below with:
     <GradientBanner>
       <div className='banner'>
         <div className='title-container'>
           <p className='title-banner'>
             <span className='title-line-1'>A Breath of </span>
             <span className='title-line-2-mobile'><br/></span>
             <span className='title-line-2'>Fresh Air</span>
           </p>
           <p className='description'>Innovative camps with hands-on learning</p>
           <p className='specs'> EST. 2024 | Sammamish, WA </p>
           <br/>
           <span className='donate-banner'><Donate/></span>
         </div>
       </div>
     </GradientBanner>
  ── */

  return (
    <div className="gradient-banner-container">
      <img
        src={bgImages[current]}
        alt=""
        className={`gradient-canvas banner-bg-photo${visible ? '' : ' banner-bg-fading'}`}
        style={current === 4 ? { objectPosition: 'center bottom' } : undefined}
      />
      <div className="gradient-content banner-photo-overlay" style={{ width: '100%', height: '100%' }}>
        <div className='banner'>
          <div className='title-container'>
            <p className='title-banner'>
              <span className='title-line-1'>A Breath of </span>
              <span className='title-line-2-mobile'><br/></span>
              <span className='title-line-2'>Fresh Air</span>
            </p>
            <p className='description'>Innovative camps with hands-on learning</p>
            <p className='specs'> EST. 2024 | Sammamish, WA </p>
            <br/>
            <span className='donate-banner'><Donate/></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
