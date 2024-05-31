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
                  <h1 className='title'>Our Story</h1>
                  <p className='desc'>
                    In a world flooded with endless entertainment, internet and connection, we realized that there was a lack of genuine
                    experiences in our community. At Chameleon Camps, we create engaging projects and lessons that are designed 
                    to bring youth into the moment and spark ideas and wonder! <br/><br/>At Chameleon Camps, we strive to build
                    curiosity with engaging environmental lessons, for a future with clear skies and a green Earth.
                  </p>
                </div>
                <span className='statementweb'>
                  <p>"A nation that destroys its soil destroys itself." - Franklin Delano Roosevelt</p>
                </span>
                <div className='cause'>
                  <h1 className='title'>Our Goal</h1>
                    <p className='desc'>
                      As students who use technology every day, we have firsthand experience with both the pros and cons of constant screen
                      use. We hope to help kids learn skills that are more than just STEM, and give others a real connection to
                      their environment. As a nonprofit, all our proceeds will go to the <a className = "amazonLink" href = 'https://tinyurl.com/5de3jwx4' target='__blank'>Brazilian Amazon Fund</a>, an organization dedicated to
                      slowing deforestation.
                      <br/><br/> Through Chameleon Camps, we wish to impart vital knowledge about resources and energy on 
                      our awesome Earth!
                    </p>
                </div>
              </div>
            </div>
    </div>
  );
};
export default About;
