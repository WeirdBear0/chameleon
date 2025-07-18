import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from './mainLogo.svg';
import circleLogo from '../circleLogo.svg';
import Footer from '../home-components/footer';
import Font from '../home-components/font';
import styles from './windmill.module.css';

// List of images and step blurbs
const steps = [
  { img: require('./windmill-pics/pic1.png'), blurb: 'Gather all your windmill parts.' },
  { img: require('./windmill-pics/IMG_0271.jpg'), blurb: 'Assemble triangular blade holders as shown in the picture. Make sure all slits for blade attachment are facing the same direction.' },
  {
    imgs: [
      { img: require('./windmill-pics/placeglue.png'), blurb: 'Place superglue lightly onto the parts shown.' },
      { img: require('./windmill-pics/IMG_0273.jpg'), blurb: 'Attach motor to the motor holder. Motor wires will be pre-soldered to the motor.' },
    ]
  },
  { img: require('./windmill-pics/IMG_0278.jpg'), blurb: 'Assemble windmill base (nacelle)' },
  { img: require('./windmill-pics/IMG_0279.jpg'), blurb: 'Place motor inside the nacelle, then superglue all joints together. Be careful to not touch soldered wires.' },
  { img: require('./windmill-pics/IMG_0280.jpg'), blurb: 'Attach microcontroller expansion board to short wooden plank, with white port facing outwards.' },
  { img: require('./windmill-pics/IMG_0283.jpg'), blurb: 'Connect ESP32C3 microcontroller to computer via USB-C cable.' },
  { img: require('./windmill-pics/IMG_0284.jpg'), blurb: 'Plug ESP32C3 microcontroller into the open green ports on the expansion board.' },
  { blurb: 'Download Arduino IDE from link: https://www.arduino.cc/en/software/' },
  { img: require('./windmill-pics/boardselect.png'), blurb: 'Make sure the the board on the dropdown is set to ESP32C3 Dev Module (Tools -> Board -> ESP32C3 Dev Module)' },
  { blurb: 'Paste the code into the Arduino IDE and upload it to the Arduino board.' },
  { img: require('./windmill-pics/IMG_0285.jpg'), blurb: 'Superglue triangular blade holder together and screw it onto the threaded motor shaft.' },
  { img: require('./windmill-pics/IMG_0286.jpg'), blurb: 'Add blades into the triangular blade holder. Lightly superglue until blades hold.' },
  { img: require('./windmill-pics/IMG_0288.jpg'), blurb: 'Attach wooden plank holding the expansion board to the nacelle from the bottom. Plug one motor wire into the blue 5V port on the expansion board, and one onto the black ground port.' },
  { img: require('./windmill-pics/IMG_0289.jpg'), blurb: 'Next, plug the long end of the LED into a short wire which is plugged into the yellow pin labeled 4, and plug the short end into the black ground port on the expansion board.' },
  { img: require('./windmill-pics/IMG_0292.jpg'), blurb: 'Next, move the motor wire that is plugged into the blue port to the yellow port labeled 0.' },
];

const arduinoCode = `// Pin definitions
const int motorSensePin = 0;  // GPIO0 / A0 for motor voltage sensing
const int ledPin = 4;         // LED connected to GPIO4
// Threshold voltage (0 - 4095 for ESP32 ADC)
const int speedThreshold = 2000;  // Adjust this based on testing
void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);  // For seeing voltage values
}
void loop() {
  int motorVoltage = analogRead(motorSensePin);  // Read analog voltage
  Serial.print("Motor voltage (raw ADC): ");
  Serial.println(motorVoltage);
  if (motorVoltage < speedThreshold) {
    digitalWrite(ledPin, LOW);  // Turn LED on if motor spinning fast
  } else {
    digitalWrite(ledPin, HIGH);   // Otherwise keep LED off
  }
  delay(100);  // Short delay to stabilize readings
}`;

function Windmill() {
  const footerRef = useRef(0);

  return (
    <div className="App">
      <Font />
      <div className="navbar">
        <div className="navbar-main">
          <div className="logoContainer">
            <Link to="/">
              <a href="#" className="logoLink">
                <img src={logo} className="logo" alt="chameleon" />
                <img src={circleLogo} className="mobLogo" alt="chameleon" />
              </a>
            </Link>
          </div>
          <div className="title-container">
            <p className="title" style={{ fontSize: '40px' }}>chameleon</p>
          </div>
          <div className="mob-donate" style={{ display: 'none' }}></div>
          <div className="links">
            <Link to="/">
              <a className="sectionLink">Home</a>
            </Link>
          </div>
        </div>
        <div className="navbar-announcement">
          {/* Optionally add a signup button or announcement here */}
        </div>
      </div>
      <div className={styles.windmillContent}>
        <h2 className={styles.pageTitle}>Wind Turbine Project: Step-by-Step Guide</h2>
        <div className={styles.stepsList}>
          {steps.map((step, idx) => (
            <div className={styles.stepRow} key={idx}>
              {/* Handle step with multiple images/blurbs (step 3) */}
              {step.imgs ? (
                <div className={styles.multiStepImgs}>
                  {step.imgs.map((item, i) => (
                    <div className={styles.stepImgBlurb} key={i}>
                      <div className={styles.stepImgWrap}>
                        <img src={item.img} alt={`Step ${idx + 1}.${i + 1}`} className={styles.stepImg} />
                      </div>
                      <div className={styles.stepBlurb}>
                        <h3 className={styles.stepTitle}>Step {idx + 1}.{i + 1}</h3>
                        <p>{item.blurb}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {step.img && (
                    <div className={styles.stepImgWrap}>
                      <img src={step.img} alt={`Step ${idx + 1}`} className={styles.stepImg} />
                    </div>
                  )}
                  <div className={styles.stepBlurb}>
                    <h3 className={styles.stepTitle}>Step {idx + 1}</h3>
                    {idx === 10 ? (
                      <>
                        <p>{step.blurb}</p>
                        <pre style={{background:'#f0ead2', padding:'1em', borderRadius:'8px', overflowX:'auto'}}>
<code>{arduinoCode}</code>
                        </pre>
                      </>
                    ) : (
                      <p>{step.blurb}</p>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className={styles.windmillNote}>Congrats on your completed windmill! Things to note: When the motor wire is in yellow port 0, hand-spinning the windmill will turn on the LED. When the motor wire is plugged into blue port 5V, it will spin quickly on its own. For this to work, the microcontroller MUST be connected to power using a USB-C cable.</p>
      </div>
      <div className="footer" ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default Windmill;
