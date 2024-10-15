import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import logo from './mainLogo.svg'
import circleLogo from '../circleLogo.svg'
import Footer from '../home-components/footer'
import Font from '../home-components/font';
import styles from'./farmbeat.module.css'
import microbit1 from './farmbeat-pics/microbit-1.jpg'
import farmbeat1 from './farmbeat-pics/farmbeats-1.jpg'

function Home() {
  const [size, setSize] = useState("55px")
  const [opacity, setOpacity] = useState(1)
  const [isTextVisible, setIsTextVisible] = useState(false); // State for dropdown visibility
  const [arrow, setArrow] = useState("↓")
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
    if(arrow.includes("↓")){
      setArrow("↑")
    }
    else{
      setArrow("↓")
    }
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
                <img className={styles.img} src = {microbit1}></img>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.graphicbeat}>
                <img className={styles.img} src = {farmbeat1}></img>
              </div>
              <div className={styles.textTwo}>
                <p className={styles.textTitle}>introducing farmbeat</p>
                <p className={styles.textContent}>the farmbeat is a tool that integrates software and ai with relatively simple hardware to aid data analysis with respect to agriculture. it is also an education initiative designed to teach students the basics of electronics, data construction, and, ultimately, ai.</p>
              </div>
              <div className={styles.graphicMob}>
                <img className={styles.img} src = {farmbeat1}></img>
              </div>
            </div>
            <div className={styles.givecontainer}>
              <div className={styles.text}>
                <p className={styles.textTitle}>
                  <span onClick={toggleTextContent} style = {{cursor : 'pointer'}}>give project instructions {arrow} </span>
                  <a href = "https://docs.google.com/document/d/1QZeToSJ8FswY-0m2fAZPDajzJOOZfMi76fEG_dFxfIM/edit?usp=sharing"  target = "_blank" style = {{color: "#6c584c"}}> google docs link </a>
                </p>
                {isTextVisible && (
                  <p className={styles.giveInstructions} style={{ transition: 'max-height 0.5s ease-in-out', overflow: 'hidden' }}>
                    <iframe src="https://docs.google.com/document/d/1QZeToSJ8FswY-0m2fAZPDajzJOOZfMi76fEG_dFxfIM/edit?embedded=true" width="640" height="718" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                  </p>
                )}
              </div>
              <div className={styles.doc}>
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