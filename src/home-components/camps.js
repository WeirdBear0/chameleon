import React, { useEffect, useRef, useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import './camps.css'
import Carousel from './campsgallery';

const Camps = () => {
  const hiddenTextRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (hiddenTextRef.current) {
      const text = hiddenTextRef.current.textContent;
      hiddenTextRef.current.innerHTML = text.split('').map(char => 
        char === ' ' ? ' ' : `<span class="fade-letter">${char}</span>`
      ).join('');
      observer.observe(hiddenTextRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const handleScroll = () => {
      const rect = hiddenTextRef.current.getBoundingClientRect();
      const scrollProgress = 1 - (rect.bottom / window.innerHeight);
      
      hiddenTextRef.current.querySelectorAll('.fade-letter').forEach((letter, index) => {
        const letterProgress = (index + 1) / hiddenTextRef.current.querySelectorAll('.fade-letter').length;
        if (scrollProgress >= letterProgress * 0.6) {
          letter.style.opacity = '1';
        } else {
          letter.style.opacity = '0';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInView]);

  const handleCampClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (

    // <div style={{ height: '600px', position: 'relative' }}>
    //   <Carousel
    //     baseWidth={300}
    //     autoplay={true}
    //     autoplayDelay={3000}
    //     pauseOnHover={true}
    //     loop={true}
    //     round={false}
    //   />
    // </div>
    <div className='ovr'>
      <div className='campsContainer'>
        <div className="sectionHeader">
          <div className='title'>
            <p className='campsHeader'>
              <span className='plain'>The secrets of nature <br/></span>
              <span className='hide' ref={hiddenTextRef}>Are hidden in plain sight</span>
            </p>
          </div>
          <p className='cohort-header'>Future Projects - 2025 <br/><span className='notifclick'>click to learn more — view info below!</span></p>
        </div>
        <div className='campCards'>
          <Link to="/" className='card' onClick={(e) => handleCampClick(e, '/')}>
            <p className='card-title'>Project Water</p>
            <p className='card-desc'>Explore water's journey and importance.</p>
          </Link>
          <Link to="/energies" className='card' onClick={(e) => handleCampClick(e, '/energies')}>
            <p className='card-title'>Clean Energies</p>
            <p className='card-desc'>Discover sustainable power solutions.</p>
          </Link>
          <Link to="/ecology" className='card' onClick={(e) => handleCampClick(e, '/ecology')}>
            <p className='card-title'>Eco-Tech</p>
            <p className='card-desc'>Innovate for a greener tomorrow.</p>
          </Link>
        </div>
      </div>  
      <Outlet/>
    </div>

  );
};
export default Camps;