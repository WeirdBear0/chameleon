import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../mainLogo.svg';
import circleLogo from '../circleLogo.svg';
import Donate from '../home-components/donate';

/**
 * Shared navbar used on every page.
 *
 * Props (all optional — omit on non-home pages):
 *   onHomeClick      — scroll to banner on home page
 *   onAboutClick     — scroll to about on home page
 *   onWorkshopsClick — scroll to workshops on home page
 */
const Navbar = ({ onHomeClick, onAboutClick, onWorkshopsClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const projectsRef = useRef(null);
  const dropdownMenuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Track scroll for shadow
  const handleScroll = useCallback(() => setScrolled(window.scrollY > 80), []);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        projectsRef.current && !projectsRef.current.contains(e.target) &&
        dropdownMenuRef.current && !dropdownMenuRef.current.contains(e.target)
      ) setIsDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const close = () => { setIsMobileMenuOpen(false); setIsDropdownOpen(false); };

  // On subpages, section links just navigate home
  const goHome      = () => { close(); onHomeClick      ? onHomeClick()      : navigate('/'); };
  const goAbout     = () => { close(); onAboutClick     ? onAboutClick()     : navigate('/'); };
  const goWorkshops = () => { close(); onWorkshopsClick ? onWorkshopsClick() : navigate('/'); };
  const goChapters  = () => { close(); navigate('/chapters'); };

  return (
    <>
      <div className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
        <div className='navbar-main'>
          <div className='logoContainer'>
            <Link to="/" className="logoLink" onClick={(e) => { e.preventDefault(); goHome(); }}>
              <img src={logo} className="logo" alt="chameleon" />
              <img src={circleLogo} className="mobLogo" alt="chameleon" />
            </Link>
            <div className='hamburger-menu'>
              <button
                className={`hamburger-button ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(v => !v)}
                aria-label="Toggle mobile menu"
              >
                <span></span><span></span><span></span>
              </button>
            </div>
          </div>

          <div className='title-container'>
            <p className='navtitle' style={{ fontSize: '40px' }}>chameleon</p>
          </div>

          <div className='mob-donate'><Donate /></div>

          <div className='links'>
            <button type="button" className='sectionLink' onClick={goHome}>Home</button>
            <button type="button" className='sectionLink' onClick={goAbout}>About</button>
            <button type="button" className='sectionLink' onClick={goWorkshops}>Workshops</button>
            <button type="button" className='sectionLink' onClick={goChapters}>Chapters</button>
            <div className='dropdown' ref={projectsRef}>
              <button
                className='dropdown-toggle'
                onClick={(e) => { e.stopPropagation(); setIsDropdownOpen(v => !v); }}
                aria-expanded={isDropdownOpen}
              >
                Projects
              </button>
              {isDropdownOpen && (
                <div className='dropdown-menu' ref={dropdownMenuRef}>
                  <Link to="/windmill"  className='dropdown-link' onClick={close}>Windmill</Link>
                  <Link to="/hackathon" className='dropdown-link' onClick={close}>Hackathon</Link>
                  <Link to="/farmbeat"  className='dropdown-link' onClick={close}>Farmbeat</Link>
                  <span className='dropdown-link disabled'>Ripple</span>
                  <span className='dropdown-link disabled'>Rover</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className='mobile-menu-overlay'
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <div className='mobile-menu' onClick={(e) => { if (e.target === e.currentTarget) e.stopPropagation(); }}>
            <div className='mobile-menu-header'>
              <button className='close-mobile-menu' onClick={close}>
                <span></span><span></span>
              </button>
            </div>
            <div className='mobile-menu-links'>
              <button type="button" className='mobile-section-link' onClick={goHome}>Home</button>
              <button type="button" className='mobile-section-link' onClick={goAbout}>About</button>
              <button type="button" className='mobile-section-link' onClick={goWorkshops}>Workshops</button>
              <button type="button" className='mobile-section-link' onClick={goChapters}>Chapters</button>
              <div className='mobile-projects-section'>
                <div className='mobile-projects-label'>Projects</div>
                <button type="button" className='mobile-project-link' onClick={() => { navigate('/windmill');  close(); }}>Windmill</button>
                <button type="button" className='mobile-project-link' onClick={() => { navigate('/hackathon'); close(); }}>Hackathon</button>
                <button type="button" className='mobile-project-link' onClick={() => { navigate('/farmbeat');  close(); }}>Farmbeat</button>
                <span className='mobile-project-link disabled'>Ripple</span>
                <span className='mobile-project-link disabled'>Rover</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
