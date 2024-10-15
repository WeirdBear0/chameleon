import React, { useEffect, useRef, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './camps.css'

const Camps = () => {
  const hiddenTextRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

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
        if (scrollProgress >= letterProgress * 0.6) { // The 0.6 is the percentage of the text that is revealed
          letter.style.opacity = '1';
        } else {
          letter.style.opacity = '0';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInView]);

  return (
    <div className='ovr'>
      <div className='campsContainer'>
        <div className="sectionHeader">
          <div className='title'>
            <p className='campsHeader'>
              <span className='plain'>The secrets of nature <br/></span>
              <span className='hide' ref={hiddenTextRef}>Are hidden in plain sight</span>
            </p>
          </div>
          <p className='cohort-header'>Projects - 2024</p>
        </div>
        <div className='campCards'>
          <Link to = "/" className='card'>
              <p className='card-title'>Project Water</p>
          </Link>
          <Link to = "/energies" className='card'>
              <p className='card-title'>Clean Energies</p>
          </Link>
          <Link to = "/ecology" className='card'>
              <p className='card-title'>Ecology and Technology</p>
          </Link>
        </div>
      </div>  
      <Outlet/>
    </div>

  );
};
export default Camps;