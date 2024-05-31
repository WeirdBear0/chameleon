import React, {useState} from 'react';
import './about.css'

const About = () => {
  return (
    <div>
        <div className='aboutContainer'>
              <span className='statementmobile'>
                <p>"A nation that destroys its soil destroys itself." - Franklin Delano Roosevelt</p>
              </span>
              <div className='webcontainer'>
                <div className='team'>
                  <h1 className='title'>Our Team</h1>
                  <p className='desc'>
                    ---------------------------------------------
                  </p>
                </div>
                <span className='statementweb'>
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
    </div>
  );
};
export default About;
