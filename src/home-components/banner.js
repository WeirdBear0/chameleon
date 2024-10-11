import React, {useState} from 'react';
import './banner.css'

const Banner = () => {
  return (
    <div className = 'banner'>
      <div className='title-container'>
        <p className='title'>A Breath of Fresh Air</p>
        <p className='description'>Innovative camps with hands-on learning</p>
        <p className='specs'> EST. 2024 | Sammamish, WA </p>
        <p><a href = "https://docs.google.com/forms/d/e/1FAIpQLScxWFGRNo3n2V6pBgutWGnjz5vggMSH0j4fvQf2y49_Y2vIgA/viewform" style = {{textDecoration: 'none', color: "#6c584c", fontFamily : 'Montserrat'}}>Interested? Let us know!</a></p>
      </div>
    </div>
  );
};
export default Banner;
