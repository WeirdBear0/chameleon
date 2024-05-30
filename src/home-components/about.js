import React, {useState} from 'react';
import about from './kiwi.png'
import './about.css'

const About = () => {
  return (
    <div>
        <div className='aboutContainer'>
              <div className='team'>
                <h1 className='title'>Our Team</h1>
                <p className='desc'>
                  ---------------------------------------------
                </p>
              </div>
              <span className='statement'>
                <p>"A nation that destroys its soil destroys itself." - Franklin Delano Roosevelt</p>
              </span>
              <div className='cause'>
                <h1 className='title'>Our Cause</h1>
                  <p className='desc'>
                    ---------------------------------------------
                  </p>
              </div>
            </div>
    </div>
  );
};
export default About;
