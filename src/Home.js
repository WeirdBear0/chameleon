import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from './mainLogo.svg'
import circleLogo from './circleLogo.svg'
import Banner from './home-components/banner'
import Stats from './home-components/stats'
import About from './home-components/about'
import Camps from './home-components/camps';
import Partners from './home-components/partners';
import Footer from './home-components/footer'
import Font from './home-components/font';
import Donate  from './home-components/donate'
import './Home.css'

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const bannerRef = useRef(null);
  const abtRef = useRef(null);
  const campRef = useRef(null);
  const partnerRef = useRef(null);
  const footerRef = useRef(null);
  const projectsRef = useRef(null);
  const dropdownMenuRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = useCallback((ref) => {
    if (!ref.current) return;
    window.scrollTo({
      top: ref.current.offsetTop - 160,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  const handleNavChange = useCallback(() => {
    setScrolled(window.scrollY > 80);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleNavChange);
    return () => window.removeEventListener('scroll', handleNavChange);
  }, [handleNavChange]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const handleMobileNavClick = (path) => {
    closeMobileMenu();
    navigate(path);
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
      <div className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
        <div className='navbar-main'>
          <div className='logoContainer'>
            <Link
              to="/"
              className="logoLink"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(bannerRef);
              }}
            >
              <img
                src={logo}
                className="logo"
                alt="chameleon"
              />
              <img
                src={circleLogo}
                className="mobLogo"
                alt="chameleon"
              />
            </Link>
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
          <div className='title-container'>
            <p className='navtitle' style = {{fontSize: '40px'}}>chameleon</p>
          </div>
          <div className='mob-donate'><Donate/></div>
          <div className='links'>
              <button type="button" className='sectionLink' onClick={() => scrollToSection(bannerRef)}>Home</button>
              <button type="button" className='sectionLink' onClick={() => scrollToSection(abtRef)}>About</button>
              <button type="button" className='sectionLink' onClick={() => scrollToSection(campRef)}>Workshops</button>
              <button type="button" className='sectionLink' onClick={() => navigate('/chapters')}>Chapters</button>
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
                    <Link to="/windmill" className='dropdown-link'>Windmill</Link>
                    <Link to="/hackathon" className='dropdown-link'>Hackathon</Link>
                    <Link to="/farmbeat" className='dropdown-link'>Farmbeat</Link>
                    <span className='dropdown-link disabled' onClick={() => setIsDropdownOpen(false)}>Ripple</span>
                    <span className='dropdown-link disabled' onClick={() => setIsDropdownOpen(false)}>Rover</span>
                  </div>
                )}
              </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className='mobile-menu-overlay'
          onClick={(e) => {
            // Close menu if clicking on overlay (not on menu itself)
            if (e.target === e.currentTarget) {
              closeMobileMenu();
            }
          }}
        >
          <div className='mobile-menu' onClick={(e) => {
            // Only stop propagation if clicking on the menu container itself, not on links/buttons
            if (e.target === e.currentTarget) {
              e.stopPropagation();
            }
          }}>
            <div className='mobile-menu-header'>
              <button className='close-mobile-menu' onClick={closeMobileMenu}>
                <span></span>
                <span></span>
              </button>
            </div>
            <div className='mobile-menu-links'>
              <button type="button" className='mobile-section-link' onClick={() => { scrollToSection(bannerRef); closeMobileMenu(); }}>Home</button>
              <button type="button" className='mobile-section-link' onClick={() => { scrollToSection(abtRef); closeMobileMenu(); }}>About</button>
              <button type="button" className='mobile-section-link' onClick={() => { scrollToSection(campRef); closeMobileMenu(); }}>Workshops</button>
              <button type="button" className='mobile-section-link' onClick={() => { closeMobileMenu(); navigate('/chapters'); }}>Chapters</button>
              <div className='mobile-projects-section'>
                <div className='mobile-projects-label'>Projects</div>
                <button type="button" className='mobile-project-link' onClick={() => handleMobileNavClick('/windmill')}>Windmill</button>
                <button type="button" className='mobile-project-link' onClick={() => handleMobileNavClick('/hackathon')}>Hackathon</button>
                <button type="button" className='mobile-project-link' onClick={() => handleMobileNavClick('/farmbeat')}>Farmbeat</button>
                <span className='mobile-project-link disabled'>Ripple</span>
                <span className='mobile-project-link disabled'>Rover</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='banner' ref = {bannerRef}>
        <Banner/>
      </div>
      <div className='stats'>
        <Stats onProjectsClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setTimeout(() => { setIsDropdownOpen(true); }, 500);
        }} />
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