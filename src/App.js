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

  const bannerRef = useRef(0)
  const scrollBanner = () => window.scrollTo(0, 0)

  const abtRef = useRef(0)
  const scrollabt = () => window.scrollTo(0, 0+bannerRef.current.getBoundingClientRect().height)

  const campRef = useRef(0)
  const scrollcamp = () => window.scrollTo(0, 0+bannerRef.current.getBoundingClientRect().height + abtRef.current.getBoundingClientRect().height)

  // const bannerScroll = () => window.scrollTo(0, bannerRef.current)
  // const abtRef = useRef(0);
  // const abtScroll = () => abtRef.current.scrollIntoView()
  // const campRef = useRef(0);
  // const campScroll = () => window.scrollTo(0, campRef.current)

  function changeNav()   {
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
            <a className='sectionLink' onClick={() => {scrollBanner()}}>Home</a>
            <a className='sectionLink' onClick={() => {scrollabt()}}>About</a>
            <a className='sectionLink' onClick={() => {scrollcamp()}}>Camps</a>
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
    </div>
  );
}

export default App;