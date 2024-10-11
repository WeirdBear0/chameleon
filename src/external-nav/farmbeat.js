import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import logo from './mainLogo.svg'
import circleLogo from '../circleLogo.svg'
import Footer from '../home-components/footer'
import Font from '../home-components/font';
import styles from'./farmbeat.module.css'
import microbit1 from './farmbeat-pics/microbit-1.jpg'

function Home() {
  const [size, setSize] = useState("55px")
  const [opacity, setOpacity] = useState(1)
  const [isTextVisible, setIsTextVisible] = useState(false); // State for dropdown visibility
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

  const toggleTextContent = () => {
    setIsTextVisible(!isTextVisible); // Toggle visibility
  };

  return (
        <div className="App">
          <Font/>
          <div className = {styles.navbar} style = {{background: `rgba(226, 218, 201, ${opacity})`}}>
            <div className={styles.logoContainer}>
              <Link to = "/">
                <a href = "#" className={styles.logoLink} >
                    <img src = {logo} className={styles.logo} alt = 'chameleon'></img>
                    <img src = {circleLogo} className={styles.mobLogo} alt = 'chameleon'></img>
                </a>
              </Link>
            </div>
            <p className={styles.title} style = {{fontSize: size}}>chameleon </p>
             <div className={styles.links}>
                <Link to = "/">
                  <a>Home</a>
                </Link>
            </div>
          </div>
          <div className={styles.farmbeatContent}>
            <div className={styles.container}>
              <div className={styles.text}>
                <p className={styles.textTitle}>what is a micro:bit?</p>
                <p className={styles.textContent}>
                  micro:bit is a small, programmable device
                  featuring a 5x5 LED matrix for visual output,
                  two programmable buttons,
                  and an accelerometer and compass for motion and orientation sensing. our use case utilizes a soil moisture sensor which triggers visual output on the micro:bit.
                </p>
              </div>
              <div className={styles.graphic}>
              <div className={styles.img}> 
                <iframe title="Micro:Bit" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/b453f11ad77a4545a33b3e0ecfba6fc5/embed">
                </iframe> 
              </div>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.graphic}>
                <img className={styles.img}></img>
              </div>
              <div className={styles.textTwo}>
                <p className={styles.textTitle}>introducing farmbeat</p>
                <p className={styles.textContent}>the farmbeat is a tool that integrates software and ai with relatively simple hardware to aid data analysis with respect to agriculture. it is also an education initiative designed to teach students the basics of electronics, data construction, and, ultimately, ai.</p>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.text}>
                <p className={styles.textTitle} onClick={toggleTextContent} style={{ cursor: 'pointer' }}>
                  give project instructions
                </p>
                {isTextVisible && (
                  <p className={styles.textContent} style={{ transition: 'max-height 0.5s ease-in-out', overflow: 'hidden' }}>
                    {/* Add your project instructions here */}
                    Here are the project instructions that will be revealed when the title is clicked.
                  </p>
                )}
              </div>
              <div className={styles.graphic}>
                <img className={styles.img}></img>
              </div>
            </div>
          </div>
         <div className='footer' ref = {footerRef}>
          <Footer/>
        </div>
      </div>
  );
}

export default Home;