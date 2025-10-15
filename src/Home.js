import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
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
  const dropdownMenuRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  const scrollToSection = useCallback((ref) => {
    if (!ref.current) return;
    window.scrollTo({
      top: ref.current.offsetTop - 160,
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

  const toggleDropdown = (e) => {
    // Only toggle if clicking the button itself
    if (e.target.closest('.dropdown-button')) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside button and menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (projectsRef.current && !projectsRef.current.contains(event.target) &&
          dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Effect to close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

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
              <a className='sectionLink' onClick={() => {scrollToSection(campRef)}}>Workshops</a>
              <div className='dropdown' ref={projectsRef}>
                <button 
                  className='dropdown-toggle' 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  aria-expanded={isDropdownOpen}
                >
                  Projects
                </button>
                {isDropdownOpen && (
                  <div className='dropdown-menu' ref={dropdownMenuRef}>
                    <Link to="/farmbeat" className='dropdown-link'>Farmbeat</Link>
                    <span className='dropdown-link disabled' onClick={() => setIsDropdownOpen(false)}>Ripple</span>
                    <Link to="/windmill" className='dropdown-link'>Windmill</Link>
                    <span className='dropdown-link disabled' onClick={() => setIsDropdownOpen(false)}>Rover</span>
                  </div>
                )}
              </div>
          </div>
          <div className='hamburger-menu'>
            <button 
              className={`hamburger-button ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <div className='navbar-announcement'>
          <a href="https://forms.gle/BgynuhLutzQT2F8A6" className='signup-button'>Sign Up for Workshops</a>
          {/* <FlowingMenu items={demoItems} /> */}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className='mobile-menu-overlay'>
          <div className='mobile-menu'>
            <div className='mobile-menu-header'>
              <button className='close-mobile-menu' onClick={closeMobileMenu}>
                <span></span>
                <span></span>
              </button>
            </div>
            <div className='mobile-menu-links'>
              <a className='mobile-section-link' onClick={() => {scrollToSection(bannerRef); closeMobileMenu();}}>Home</a>
              <a className='mobile-section-link' onClick={() => {scrollToSection(abtRef); closeMobileMenu();}}>About</a>
              <a className='mobile-section-link' onClick={() => {scrollToSection(campRef); closeMobileMenu();}}>Workshops</a>
              <div className='mobile-dropdown'>
                <button 
                  className='mobile-dropdown-toggle' 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  aria-expanded={isDropdownOpen}
                >
                  Projects
                  <span className='mobile-dropdown-arrow'></span>
                </button>
                {isDropdownOpen && (
                  <div className='mobile-dropdown-menu'>
                    <Link to="/farmbeat" className='mobile-dropdown-link' onClick={closeMobileMenu}>Farmbeat</Link>
                    <span className='mobile-dropdown-link disabled'>Ripple</span>
                    <Link to="/windmill" className='mobile-dropdown-link' onClick={closeMobileMenu}>Windmill</Link>
                    <span className='mobile-dropdown-link disabled'>Rover</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

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