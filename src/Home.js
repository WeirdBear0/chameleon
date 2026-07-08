import React, { useRef, useCallback } from 'react';
import Banner from './home-components/banner'
import Stats from './home-components/stats'
import About from './home-components/about'
import Camps from './home-components/camps';
import Partners from './home-components/partners';
import Footer from './home-components/footer'
import Font from './home-components/font';
import Navbar from './components/Navbar';
import './Home.css'

function Home() {
  const bannerRef = useRef(null);
  const abtRef = useRef(null);
  const campRef = useRef(null);
  const partnerRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = useCallback((ref) => {
    if (!ref.current) return;
    window.scrollTo({ top: ref.current.offsetTop - 80, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="App">
      <Font/>
      <Navbar
        onHomeClick={() => scrollToSection(bannerRef)}
        onAboutClick={() => scrollToSection(abtRef)}
        onWorkshopsClick={() => scrollToSection(campRef)}
      />

      <div className='banner' ref={bannerRef}>
        <Banner/>
      </div>
      <div className='stats'>
        <Stats onProjectsClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      </div>
      <div className='abt' ref={abtRef}>
        <About/>
      </div>
      <div className='camps' ref={campRef}>
        <Camps/>
      </div>
      <div className='partners' ref={partnerRef}>
        <Partners/>
      </div>
      <div className='footer' ref={footerRef}>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
