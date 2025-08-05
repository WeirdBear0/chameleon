import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './mainLogo.svg';
import circleLogo from './circleLogo.svg';
import Font from './home-components/font';
import './signup.css';

function SignUp() {
  return (
    <div className="signup-page">
      <Font />
      <Link to = "/">
          <img src = {logo} className='logo' alt = 'chameleon'></img>
      </Link>
      <a href="https://forms.gle/BgynuhLutzQT2F8A6" className='signup-redirect'>Click here to sign up for workshops :)</a>
    </div>
  );
}

export default SignUp; 