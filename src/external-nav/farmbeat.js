import React from 'react';
import Footer from '../home-components/footer'
import Font from '../home-components/font';
import Navbar from '../components/Navbar';
import '../Home.css';
import styles from'./farmbeat.module.css'
import microbit1 from './farmbeat-pics/microbit-1.jpg'
import farmbeat1 from './farmbeat-pics/farmbeats-1.jpg'

function Farmbeat() {
  const [isTextVisible, setIsTextVisible] = React.useState(false);
  const [arrow, setArrow] = React.useState("↓")

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
          <Navbar />
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
                <img className={styles.img} src={microbit1} alt="micro:bit device" />
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.graphicbeat}>
                <img className={styles.img} src={farmbeat1} alt="Farmbeat project" />
              </div>
              <div className={styles.textTwo}>
                <p className={styles.textTitle}>introducing farmbeat</p>
                <p className={styles.textContent}>the farmbeat is a tool that integrates software and ai with relatively simple hardware to aid data analysis with respect to agriculture. it is also an education initiative designed to teach students the basics of electronics, data construction, and, ultimately, ai.</p>
              </div>
              <div className={styles.graphicMob}>
                <img className={styles.img} src={farmbeat1} alt="Farmbeat project" />
              </div>
            </div>
            <div className={styles.givecontainer}>
              <div className={styles.text}>
                <p className={styles.textTitle}>
                  <span onClick={toggleTextContent} style = {{cursor : 'pointer'}}>give project instructions {arrow} </span>
                  <a href="https://docs.google.com/document/d/1QZeToSJ8FswY-0m2fAZPDajzJOOZfMi76fEG_dFxfIM/edit?usp=sharing" target="_blank" rel="noreferrer" style={{ color: '#6c584c' }}> google docs link </a>
                </p>
                {isTextVisible && (
                  <p className={styles.giveInstructions} style={{ transition: 'max-height 0.5s ease-in-out', overflow: 'hidden' }}>
                    <iframe title="Farmbeat project instructions (Google Doc)" src="https://docs.google.com/document/d/1QZeToSJ8FswY-0m2fAZPDajzJOOZfMi76fEG_dFxfIM/edit?embedded=true" width="640" height="718" frameBorder="0">Loading…</iframe>
                  </p>
                )}
              </div>
              <div className={styles.doc}>
              </div>
            </div>
          </div>
         <div className='footer'>
          <Footer/>
        </div>
      </div>
  );
}

export default Farmbeat;