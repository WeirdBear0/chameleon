import React, {useState, useRef} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './mainLogo.svg'
import Banner from './home-components/banner'
import About from './home-components/about'
import Camps from './home-components/camps';
import Footer from './home-components/footer'
import Font from './home-components/font';
import './Home.css'

function Home() {
  const [size, setSize] = useState("55px")
  const [opacity, setOpacity] = useState(1)

  const bannerRef = useRef(0)
  const scrollBanner = () => window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })

  const abtRef = useRef(0)
  const scrollabt = () => window.scrollTo({
    top: bannerRef.current.getBoundingClientRect().height,
    left: 0,
    behavior: 'smooth'
  })

  const campRef = useRef(0)
  const scrollcamp = () => window.scrollTo({
    top: 2*(bannerRef.current.getBoundingClientRect().height),
    left: 0,
    behavior: 'smooth'
  })

  const footerRef = useRef(0)

  function changeNav()   {
    if (window.scrollY > 80 || window.scrollY > 80) {
      setSize("34px");
      setOpacity(0.85)
    } else {
      setSize("55px");
      setOpacity(1)
    }
  }
  window.onscroll = () => {
    changeNav();
  };
  return (
        <div className="App">
          <Font/>
          {/* <div className='cover'> */}
            <div className = 'navbar' style = {{background: `rgba(226, 218, 201, ${opacity})`}}>
              <div className='logoContainer'>
                <a href = "#" className='logoLink' onClick={() => {scrollBanner()}}>
                    <img src = {logo} className='logo' alt = 'chameleon'></img>
                </a>
              </div>
              <p className='title' style = {{fontSize: size}}>chameleon <br/> <p className='interest'>Interested? Fill out <a target = "__blank" href = "https://forms.gle/mKfSr3a5i8tzVoXZ7">this form!</a></p></p>
              <div className='links'>
                  <a className='sectionLink' onClick={() => {scrollBanner()}}>Home</a>
                  <a className='sectionLink' onClick={() => {scrollabt()}}>About</a>
                  <a className='sectionLink' onClick={() => {scrollcamp()}}>Camps</a>
              </div>
            </div>
            {/* <div>
              Interested?
            </div> */}
          {/* </div> */}
          <div className='banner' ref = {bannerRef}>
            <Banner/>
          </div>
          <div className='abt' ref = {abtRef}>
            <About/>
          </div>
          <div className='camps' ref = {campRef}>
            <Camps/>
          </div>
          <div className='footer' ref = {footerRef}>
            <Footer/>
          </div>
        </div>
  );
}

export default Home;