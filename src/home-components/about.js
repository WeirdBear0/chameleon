import React, {useState} from 'react';
import './about.css'

const About = () => {
  return (
    <div>
        <div className='aboutContainer'>
              <div className='webcontainer'>
                <div className='team'>
                  <h1 className='title'>Our Story</h1>
                  <p className='desc'>
                    In a world flooded with endless entertainment, internet and social media, we realized that there was a lack of genuine
                    experiences in our community. At Chameleon Camps, we create engaging projects and lessons that are designed 
                    to bring youth into the moment and spark ideas and wonder!
                  </p>
                </div>
                <span className='statementweb'>
                  <p>"A nation that destroys its soil destroys itself." - Franklin Delano Roosevelt</p>
                </span>
                <div className='cause'>
                  <h1 className='title'>Our Goal</h1>
                    <p className='desc'>
                      We believe that everyone needs to have a real connection to their environment, and deserve to be taught that
                      in an engaging, unique way, different from your average coding class. As a nonprofit, we support the
                      <a className = "amazonLink" href = 'https://tinyurl.com/5de3jwx4' target='__blank'> Brazilian Amazon Fund</a>, 
                      an organization dedicated to slowing deforestation.
                    </p>
                </div>
              </div>
              <span className='statementmobile'>
                <p>"A nation that destroys its soil destroys itself." - Franklin Delano Roosevelt</p>
              </span>
            </div>
    </div>
  );
};
export default About;
