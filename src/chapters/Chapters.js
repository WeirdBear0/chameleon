import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import logo from '../mainLogo.svg';
import circleLogo from '../circleLogo.svg';
import Footer from '../home-components/footer';
import Font from '../home-components/font';
import '../Home.css';
import './chapters.css';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const CHAPTERS = [
  { name: 'South Dakota', coordinates: [-100.35, 44.37] },
  { name: 'Virginia', coordinates: [-78.70, 37.78] },
  { name: 'West Virginia', coordinates: [-80.45, 38.67] },
  { name: 'New Jersey', coordinates: [-74.41, 40.06] },
  { name: 'Sammamish, WA', coordinates: [-122.04, 47.62] },
  { name: 'Vancouver, WA', coordinates: [-122.67, 45.64] },
  { name: 'Austin, TX', coordinates: [-97.74, 30.27] },
  { name: 'Kansas', coordinates: [-98.48, 38.51] },
];

const BOARD = [
  { name: 'Ayush', grade: '12', role: 'Board Member' },
  { name: 'Andrew', grade: '12', role: 'Board Member' },
  { name: 'Sana', grade: '11', role: 'Board Member' },
  { name: 'Kruthik', grade: '12', role: 'Board Member' },
];

function Chapters() {
  const [activeChapter, setActiveChapter] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="App chapters-page">
      <Font />

      {/* Navbar */}
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
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <span></span><span></span><span></span>
              </button>
            </div>
          </div>
          <div className="title-container">
            <p className="navtitle" style={{ fontSize: '40px' }}>chameleon</p>
          </div>
          <div className="links">
            <button type="button" className="sectionLink" onClick={() => navigate('/')}>Home</button>
            <button type="button" className="sectionLink chapters-active">Chapters</button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={(e) => { if (e.target === e.currentTarget) setIsMobileMenuOpen(false); }}>
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <button className="close-mobile-menu" onClick={() => setIsMobileMenuOpen(false)}>
                <span></span><span></span>
              </button>
            </div>
            <div className="mobile-menu-links">
              <button type="button" className="mobile-section-link" onClick={() => { setIsMobileMenuOpen(false); navigate('/'); }}>Home</button>
              <button type="button" className="mobile-section-link chapters-active" onClick={() => setIsMobileMenuOpen(false)}>Chapters</button>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <div className="chapters-hero">
        <h1 className="chapters-hero-title">Our Chapters</h1>
        <p className="chapters-hero-sub">Chameleon chapters are student-led communities bringing hands-on nature science to youth across the country.</p>
      </div>

      {/* Map Section */}
      <section className="chapters-map-section">
        <h2 className="chapters-section-title">Where We Are</h2>
        <div className="chapters-map-container">
          <ComposableMap
            projection="geoAlbersUsa"
            style={{ width: '100%', height: '100%' }}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#d4e6b5"
                    stroke="#b5c99a"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: 'none' },
                      hover: { fill: '#c5dba0', outline: 'none' },
                      pressed: { outline: 'none' },
                    }}
                  />
                ))
              }
            </Geographies>
            {CHAPTERS.map(({ name, coordinates }) => (
              <Marker
                key={name}
                coordinates={coordinates}
                onMouseEnter={() => setActiveChapter(name)}
                onMouseLeave={() => setActiveChapter(null)}
              >
                <circle
                  r={activeChapter === name ? 9 : 7}
                  fill={activeChapter === name ? '#6c584c' : '#7ba059'}
                  stroke="#fff"
                  strokeWidth={2}
                  style={{ cursor: 'pointer', transition: 'r 0.2s ease, fill 0.2s ease' }}
                />
                {activeChapter === name && (
                  <text
                    textAnchor="middle"
                    y={-14}
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '11px',
                      fontWeight: '600',
                      fill: '#6c584c',
                      pointerEvents: 'none',
                    }}
                  >
                    {name}
                  </text>
                )}
              </Marker>
            ))}
          </ComposableMap>
        </div>

        {/* Chapter pills */}
        <div className="chapters-pills">
          {CHAPTERS.map(({ name }) => (
            <span key={name} className="chapter-pill">{name}</span>
          ))}
        </div>
      </section>

      {/* Board Members */}
      <section className="chapters-board-section">
        <h2 className="chapters-section-title">Our Board</h2>
        <div className="board-grid">
          {BOARD.map(({ name, grade, role }) => (
            <div key={name} className="board-card">
              <div className="board-photo-placeholder">
                <span className="board-initials">{name[0]}</span>
              </div>
              <div className="board-info">
                <h3 className="board-name">{name}</h3>
                <p className="board-role">{role}</p>
                <p className="board-grade">Grade {grade}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interest Form */}
      <section className="chapters-form-section">
        <div className="chapters-form-card">
          <h2 className="chapters-form-title">Start a Chapter</h2>
          <p className="chapters-form-desc">
            Interested in bringing Chameleon to your community? Fill out our Chapter Director Interest Form and we'll be in touch.
          </p>
          <a
            href="https://forms.gle/NYThghefXy3XG4Mh7"
            target="_blank"
            rel="noopener noreferrer"
            className="chapters-form-btn"
          >
            Chapter Director Interest Form
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Chapters;
