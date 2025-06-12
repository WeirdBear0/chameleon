import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from './mainLogo.svg'
import circleLogo from './circleLogo.svg'
import Banner from './home-components/banner'
import About from './home-components/about'
import Camps from './home-components/camps';
import Partners from './home-components/partners';
import Footer from './home-components/footer'
import Font from './home-components/font';
import Donate  from './home-components/donate'
import './Home.css'

function Home() {
  const [navStyle, setNavStyle] = useState({ size: "55px", opacity: 1 });
  const bannerRef = useRef(null);
  const abtRef = useRef(null);
  const campRef = useRef(null);
  const partnerRef = useRef(null);
  const footerRef = useRef(null);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const projectsRef = useRef(null);

  const scrollToSection = useCallback((ref) => {
    if (!ref.current) return;
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  const handleNavChange = useCallback(() => {
    const scrollY = window.scrollY;
    if (scrollY > 80) {
      setNavStyle({ size: "34px", opacity: 0.85 });
    } else {
      setNavStyle({ size: "55px", opacity: 1 });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleNavChange);
    return () => window.removeEventListener('scroll', handleNavChange);
  }, [handleNavChange]);

  const handleDropdownClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setProjectsOpen(false);
      setIsClosing(false);
    }, 200); // Match this with the animation duration
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (projectsRef.current && !projectsRef.current.contains(event.target)) {
        handleDropdownClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="App">
      <Font/>
      <div className='navbar'>
        <div className='navbar-main'>
          <div className='logoContainer'>
            <Link to = "/">
              <a href = "#" className='logoLink' onClick={() => {scrollToSection(bannerRef)}}>
                  <img src = {logo} className='logo' alt = 'chameleon'></img>
                  <img src = {circleLogo} className='mobLogo' alt = 'chameleon'></img>
              </a>
            </Link>
          </div>
          <div className='title-container'>
            <p className='title' style = {{fontSize: '40px'}}>chameleon</p>
          </div>
          <div className='mob-donate'><Donate/></div>
          <div className='links'>
              <a className='sectionLink' onClick={() => {scrollToSection(bannerRef)}}>Home</a>
              <a className='sectionLink' onClick={() => {scrollToSection(abtRef)}}>About</a>
              <a className='sectionLink' onClick={() => {scrollToSection(campRef)}}>Camps</a>
              <div className='dropdown' ref={projectsRef}>
                <button 
                  className='dropdown-toggle' 
                  onClick={() => {
                    if (projectsOpen) {
                      handleDropdownClose();
                    } else {
                      setProjectsOpen(true);
                    }
                  }}
                  aria-expanded={projectsOpen}
                >
                  Projects
                </button>
                {(projectsOpen || isClosing) && (
                  <div className={`dropdown-menu ${isClosing ? 'closing' : ''}`}>
                    <Link to="/farmbeat" className='dropdown-link' onClick={handleDropdownClose}>Farmbeat</Link>
                    <span className='dropdown-link disabled'>Ripple</span>
                    <span className='dropdown-link disabled'>Turbine</span>
                    <span className='dropdown-link disabled'>Rover</span>
                  </div>
                )}
              </div>
          </div>
        </div>
        <div className='navbar-announcement'>
          <Link to="/signup" className='signup-button'>Sign Up for Workshops</Link>
        </div>
      </div>
      <div className='banner' ref = {bannerRef}>
        <Banner/>
      </div>
      <div className='abt' ref = {abtRef}>
        <About/>
      </div>
      <div className='camps' ref = {campRef}>
        <Camps/>
      </div>
      <div className='partners' ref = {partnerRef}>
        <Partners/>
      </div>
      <div className='footer' ref = {footerRef}>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;