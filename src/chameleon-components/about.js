import React, {useState} from 'react';
import about from './kiwi.png'
import './about.css'

const About = () => {
  return (
    <div>
        <div className='aboutContainer'>
          <img className='abtImg' src = {about}></img>
          <div className='abtContent'>
            <h1 className='title'>How We Began</h1>
            <p className='desc'>
              -------------------------------------------------
              <br/>-------------------------------------------------
              <br/>-------------------------------------------------
              <br/>-------------------------------------------------
              <br/>-------------------------------------------------
              <br/>-------------------------------------------------
              <br/>-------------------------------------------------
            </p>
          </div>
        </div>
    </div>
  );
};
export default About;
