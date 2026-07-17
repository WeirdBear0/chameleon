import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import Footer from '../home-components/footer';
import Font from '../home-components/font';
import Navbar from '../components/Navbar';
import '../Home.css';
import './chapters.css';

const WA_GEO   = 'https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json';
const WORLD_GEO = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const SCHOOLS = [
  { name: 'Skyline High School', city: 'Sammamish', state: 'WA', coordinates: [-122.028, 47.598] },
];

const STATE_CHAPTERS = [
  { state: 'Washington', abbr: 'WA', coordinates: [-120.5, 47.5], schools: SCHOOLS },
];

const BOARD = [
  { name: 'Ayush',   grade: '12', role: 'Board Member' },
  { name: 'Andrew',  grade: '12', role: 'Board Member' },
  { name: 'Sana',    grade: '11', role: 'Board Member' },
  { name: 'Kruthik', grade: '12', role: 'Board Member' },
  { name: 'Aarav',   grade: '10', role: 'Board Member' },
];

const geoStyle = {
  default: { outline: 'none' },
  hover:   { fill: '#c5dba0', outline: 'none' },
  pressed: { outline: 'none' },
};

function Chapters() {
  const [activeSchool,  setActiveSchool]  = useState(null);
  const [expandedState, setExpandedState] = useState(null);

  return (
    <div className="App chapters-page">
      <Font />
      <Navbar />

      <div className="chapters-hero">
        <h1 className="chapters-hero-title">Our Chapters</h1>
        <p className="chapters-hero-sub">Chameleon chapters are student-led communities bringing hands-on nature science to youth across the country.</p>
      </div>

      {/* ── Washington State Map ── */}
      <section className="chapters-map-section">
        <h2 className="chapters-section-title">Chapters</h2>
        <p className="chapters-map-subtitle">{SCHOOLS.length} member schools across the Puget Sound region</p>
        <div className="chapters-map-container chapters-wa-map-container">
          <ComposableMap
            width={860}
            height={460}
            projection="geoMercator"
            projectionConfig={{ scale: 4200, center: [-120.8, 47.0] }}
            style={{ width: '100%', height: '100%' }}
          >
            <Geographies geography={WA_GEO}>
              {({ geographies }) =>
                geographies
                  .filter(geo => geo.id.startsWith('53'))
                  .map(geo => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#d4e6b5"
                      stroke="#b5c99a"
                      strokeWidth={0.5}
                      style={geoStyle}
                    />
                  ))
              }
            </Geographies>

            {SCHOOLS.map(school => (
              <Marker
                key={school.name}
                coordinates={school.coordinates}
                onMouseEnter={() => setActiveSchool(school.name)}
                onMouseLeave={() => setActiveSchool(null)}
              >
                <circle
                  r={activeSchool === school.name ? 9 : 7}
                  fill={activeSchool === school.name ? '#6c584c' : '#7ba059'}
                  stroke="#fff"
                  strokeWidth={2}
                  style={{ cursor: 'pointer', transition: 'r 0.2s ease, fill 0.2s ease' }}
                />
                {activeSchool === school.name && (
                  <text
                    textAnchor="middle"
                    y={-14}
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '11px',
                      fontWeight: '600',
                      fill: '#4a7c3f',
                      pointerEvents: 'none',
                    }}
                  >
                    {school.name}
                  </text>
                )}
              </Marker>
            ))}
          </ComposableMap>
        </div>

        <div className="chapters-pills">
          {SCHOOLS.map(({ name, city }) => (
            <span key={name} className="chapter-pill">{name} · {city}</span>
          ))}
          <span className="chapter-pill chapter-pill-soon">🌱 Expanding Soon</span>
        </div>
      </section>

      {/* ── World Map ── */}
      <section className="chapters-map-section chapters-world-section">
        <p className="chapters-map-subtitle">Click a marker to see chapter details</p>
        <div className="chapters-map-container">
          <ComposableMap
            width={800}
            height={400}
            projection="geoNaturalEarth1"
            projectionConfig={{ scale: 153 }}
            style={{ width: '100%', height: '100%' }}
          >
            <Geographies geography={WORLD_GEO}>
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#d4e6b5"
                    stroke="#b5c99a"
                    strokeWidth={0.3}
                    style={geoStyle}
                  />
                ))
              }
            </Geographies>

            {STATE_CHAPTERS.map(sc => (
              <Marker
                key={sc.abbr}
                coordinates={sc.coordinates}
                onClick={() => setExpandedState(s => s === sc.abbr ? null : sc.abbr)}
              >
                <circle
                  r={expandedState === sc.abbr ? 20 : 16}
                  fill={expandedState === sc.abbr ? '#6c584c' : '#7ba059'}
                  stroke="#fff"
                  strokeWidth={2.5}
                  style={{ cursor: 'pointer', transition: 'r 0.2s ease, fill 0.2s ease' }}
                />
                <text
                  textAnchor="middle"
                  dy="0.35em"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '13px',
                    fontWeight: '700',
                    fill: '#fff',
                    pointerEvents: 'none',
                  }}
                >
                  {sc.schools.length}
                </text>
              </Marker>
            ))}
          </ComposableMap>
        </div>

        {expandedState && (() => {
          const sg = STATE_CHAPTERS.find(s => s.abbr === expandedState);
          if (!sg) return null;
          return (
            <div className="world-detail-panel">
              <div className="world-detail-header">
                <h3 className="world-detail-title">{sg.state}</h3>
                <span className="world-detail-badge">{sg.schools.length} schools</span>
                <button
                  className="world-detail-close"
                  onClick={() => setExpandedState(null)}
                  aria-label="Close"
                >✕</button>
              </div>
              <ul className="world-detail-list">
                {sg.schools.map(school => (
                  <li key={school.name} className="world-detail-item">
                    <span className="world-detail-dot" />
                    <span className="world-detail-school">{school.name}</span>
                    <span className="world-detail-city">{school.city}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })()}
      </section>

      {/* ── Board Members ── */}
      <section className="chapters-board-section" style={{ display: 'none' }}>
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

      {/* ── Interest Form ── */}
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
