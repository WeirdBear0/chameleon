import React, {useState, useRef} from 'react';
import logo from './logoClear.svg'
import Banner from './chameleon-components/banner'
import About from './chameleon-components/about'
import Camps from './chameleon-components/camps';
import Font from './chameleon-components/font';
import './App.css'

function App() {
  const [size, setSize] = useState("55px")
  const [opacity, setOpacity] = useState(1)
  const bannerRef = useRef(null)
  const bannerScroll = () => bannerRef.current.scrollIntoView(true)
  const abtRef = useRef(null);
  const abtScroll = () => abtRef.current.scrollIntoView(true)
  const campRef = useRef(null);
  const campScroll = () => campRef.current.scrollIntoView(true)
  function changeNav() {
    if (window.scrollY > 80 || window.scrollY > 80) {
      setSize("34px");
      setOpacity(0.73)
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
      <div className = 'navbar' style = {{background: `rgba(226, 218, 201, ${opacity})`}}>
        <a href = "#" className='logoLink'>
            <img src = {logo} className='logo' alt = 'chameleon'></img>
        </a>
        <p className='title' style = {{fontSize: size}}>chameleon</p>
        <div className='links'>
            <a className='sectionLink' onClick={() => {bannerScroll()}}>Home</a>
            <a className='sectionLink' onClick={() => {abtScroll()}}>About</a>
            <a className='sectionLink' onClick={() => {campScroll()}}>Camps</a>
        </div>
      </div>
      <div ref={bannerRef}>
        <Banner/>
      </div>
      <div ref={abtRef}>
        <About/>
      </div>
      <div ref={campRef}>
        <Camps/>
      </div>
    </div>
  );
}

export default App;