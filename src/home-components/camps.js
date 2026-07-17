import React, { useEffect, useRef, useState } from 'react';
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
        if (scrollProgress >= letterProgress * 0.25) {
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
          <p className='cohort-header'>Workshops<br/><span className='notifclick'>returning in August 2026</span></p>
          {/* <a href="https://forms.gle/BgynuhLutzQT2F8A6" className="workshop-signup-btn">Sign Up for Workshops</a>
          <div className="workshop-dropdown-container">
            <select
              className="workshop-dropdown"
              value={selectedWorkshop}
              onChange={e => setSelectedWorkshop(e.target.value)}
            >
              <option value="">select a workshop</option>
              <option value="august 15">August 15, 2025 2-5:30 PM - Smart Farming Workshop</option>
            </select>
          </div> */}
        </div>
      </div>  
      {/* {selectedWorkshop ? (
        <div className="workshop-info-display full-bg">
          <div>
            <h3>{workshopDetails[selectedWorkshop].title}</h3>
            <p><strong>Date:</strong> {workshopDetails[selectedWorkshop].date}</p>
            <p><strong>Location:</strong> {workshopDetails[selectedWorkshop].location}</p>
            <p><strong>Description:</strong> {workshopDetails[selectedWorkshop].description}</p>
          </div>
        </div>
      ) : (
        <div className="workshop-info-display full-bg">
          <div>
            <p style={{color:'#6c584c', fontFamily:'Montserrat, sans-serif', fontSize:'1.08rem', margin:'2.5rem 0'}}>Click dropdown to display info</p>
          </div>
        </div>
      )} */}
    </div>

  );
};
export default Camps;