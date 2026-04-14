import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './mainLogo.svg'
import circleLogo from '../circleLogo.svg'
import Footer from '../home-components/footer'
import Font from '../home-components/font';
import '../Home.css';
import styles from './hackathon.module.css'
import hackathon1 from './hackathon-pics/hackathon-1.jpg'
import hackathon2 from './hackathon-pics/hackathon-2.png'
import hackathon3 from './hackathon-pics/hackathon-3.jpg'
import hackathon4 from './hackathon-pics/hackathon-4.jpg'
import hackathon5 from './hackathon-pics/hackathon-5.png'
import hackathon6 from './hackathon-pics/hackathon-6.png'
import hackathonMain from './hackathon-pics/hackathon-main.jpg'

function Hackathon() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  // Hackathon carousel images - replace these files in hackathon-pics folder with your actual images
  const carouselImages = [
    { src: hackathon1, alt: "" },
    { src: hackathon2, alt: "" },
    { src: hackathon3, alt: "" },
    { src: hackathon4, alt: "" },
    { src: hackathon5, alt: "" },
    { src: hackathon6, alt: "" }
  ]

  // Carousel functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
        <div className="App">
          <Font/>
          <div className="navbar">
            <div className="navbar-main">
              <div className="logoContainer">
                <Link to="/" className="logoLink">
                    <img src={logo} className="logo" alt="chameleon" />
                    <img src={circleLogo} className="mobLogo" alt="chameleon" />
              </Link>
              <div className="hamburger-menu">
                <button
                  className={`hamburger-button ${isMobileMenuOpen ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(v => !v)}
                  aria-label="Toggle mobile menu"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
              <div className="title-container">
                <p className="external-nav-title" style={{ fontSize: '40px' }}>chameleon</p>
              </div>
              <div className="mob-donate" style={{ display: 'none' }}></div>
              <div className="links">
                <Link to="/" className="sectionLink">Home</Link>
              </div>
            </div>
            <div className="navbar-announcement">
              {/* Optionally add a signup button or announcement here */}
            </div>
          </div>
          {isMobileMenuOpen && (
            <div
              className="mobile-menu-overlay"
              onClick={e => { if (e.target === e.currentTarget) setIsMobileMenuOpen(false); }}
            >
              <div className="mobile-menu" onClick={e => { if (e.target === e.currentTarget) e.stopPropagation(); }}>
                <div className="mobile-menu-header">
                  <button className="close-mobile-menu" onClick={() => setIsMobileMenuOpen(false)}>
                    <span></span>
                    <span></span>
                  </button>
                </div>
                <div className="mobile-menu-links">
                  <button type="button" className="mobile-section-link" onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }}>Home</button>
                  <button type="button" className="mobile-section-link" onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }}>About</button>
                  <button type="button" className="mobile-section-link" onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }}>Workshops</button>
                  <div className="mobile-projects-section">
                    <div className="mobile-projects-label">Projects</div>
                    <button type="button" className="mobile-project-link" onClick={() => { navigate('/windmill'); setIsMobileMenuOpen(false); }}>Windmill</button>
                    <button type="button" className="mobile-project-link" onClick={() => { navigate('/hackathon'); setIsMobileMenuOpen(false); }}>Hackathon</button>
                    <button type="button" className="mobile-project-link" onClick={() => { navigate('/farmbeat'); setIsMobileMenuOpen(false); }}>Farmbeat</button>
                    <span className="mobile-project-link disabled">Ripple</span>
                    <span className="mobile-project-link disabled">Rover</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className={styles.hackathonContent}>
            <h2 className={styles.pageTitle}>Chameleon Hackathon 2025</h2>
            <div className={styles.carouselSection}>
              <div className={styles.carouselContainer}>
                <div className={styles.carouselImageContainer}>
                  <img 
                    src={carouselImages[currentImageIndex].src}
                    alt={carouselImages[currentImageIndex].alt}
                    className={styles.carouselImage}
                  />
                  <button 
                    className={styles.carouselBtn + ' ' + styles.carouselBtnPrev}
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    &#8249;
                  </button>
                  <button 
                    className={styles.carouselBtn + ' ' + styles.carouselBtnNext}
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    &#8250;
                  </button>
                </div>
                <div className={styles.carouselIndicators}>
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.carouselIndicator} ${
                        index === currentImageIndex ? styles.carouselIndicatorActive : ''
                      }`}
                      onClick={() => goToImage(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.graphicbeat}>
                <img className={styles.img} src={hackathonMain} alt="" />
              </div>
              <div className={styles.textTwo}>
                <p className={styles.textTitle}>chameleon hackathon</p>
                <p className={styles.textContent}>
                Chameleon successfully hosted its first Envirotech Hackathon, where teams built six innovative 
                prototypes combining hardware and software to tackle environmental challenges such as water quality, runoff, 
                and opium farming. The event was made possible through support from KCLS Sammamish and the dedication of all 
                participating teams.
                </p>
              </div>
              <div className={styles.graphicMob}>
                <img className={styles.img} src={hackathonMain} alt="" />
              </div>
            </div>
            <div className={styles.givecontainer}>
              <div className={styles.text}>
                <div className={styles.hackathonDetails} style={{ transition: 'max-height 0.5s ease-in-out', overflow: 'hidden' }}>
                  <div className={styles.detailSection}>
                    <h3>Event Details</h3>
                    <p><strong>Date:</strong> August 15, 2025</p>
                    <p><strong>Location:</strong> KCLS Sammamish</p>
                    <p><strong>Theme:</strong> Sustainable Innovation</p>
                  </div>
                  <div className={styles.detailSection}>
                    <h3>Quick Recap</h3>
                    <ul>
                      <li>$700 given away in cash prizes</li>
                      <li>28 Student Competitors</li>
                      <li>12 Teams</li>
                    </ul>
                  </div>
                </div>
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

export default Hackathon;

