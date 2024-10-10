import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import logo from './mainLogo.svg'
import circleLogo from '../circleLogo.svg'
import Partners from '../home-components/partners';
import Footer from '../home-components/footer'
import Font from '../home-components/font';
import styles from'./farmbeat.module.css'

function Home() {
  const [size, setSize] = useState("55px")
  const [opacity, setOpacity] = useState(1)

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
          {/* <div className={styles.farmbeatContent}>
            <div className={styles.container}>
              <div className={styles.text}>
                <p className={styles.textTitle}>what is a micro:bit?</p>
                <p className={styles.textContent}></p>
              </div>
              <div className={styles.graphic}>
                <img className={styles.img}></img>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.graphic}>
                <img className={styles.img}></img>
              </div>
              <div className={styles.text}>
                <p className={styles.textTitle}>what is a micro:bit?</p>
                <p className={styles.textContent}></p>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.text}>
                <p className={styles.textTitle}>what is a micro:bit?</p>
                <p className={styles.textContent}></p>
              </div>
              <div className={styles.graphic}>
                <img className={styles.img}></img>
              </div>
            </div>
          </div> */}
         <div className='footer' ref = {footerRef}>
          <Footer/>
        </div>
      </div>
  );
}

export default Home;