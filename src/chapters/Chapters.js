import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import Footer from '../home-components/footer';
import Font from '../home-components/font';
import Navbar from '../components/Navbar';
import '../Home.css';
import './chapters.css';

const WORLD_GEO = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const CHAPTERS = [
  // ── Washington, USA ──
  {
    name: 'Issaquah High School',
    city: 'Issaquah', state: 'WA', country: 'USA',
    coordinates: [-122.032, 47.530],
    directors: [
      {
        name: 'Ania Awasthi',
        outdoorActivity: 'Hiking',

        photo: require('./Director images/IMG_3613 - Ania Awasthi.jpeg'),
      },
      {
        name: 'Richa Sharma',
        outdoorActivity: 'Hiking and Walking',
        photo: require('./Director images/IMG_2799 - Richa Sharma.jpeg'),
      },
    ],
  },
  {
    name: 'Tesla STEM High School',
    city: 'Sammamish', state: 'WA', country: 'USA',
    coordinates: [-122.039, 47.623],
    directors: [
      {
        name: 'Malhar Pawar',
        outdoorActivity: 'Basketball',
        photo: require('./Director images/Malhar PFP for Resume - Malhar Pawar.jpeg'),
      },
      {
        name: 'Khush Kothari',
        outdoorActivity: 'Pickleball and Volleyball',
        photo: require('./Director images/IMG-20260808-WA0020 - Khush Kothari.jpg'),
      },
    ],
  },
  {
    name: 'Mountain View High School',
    city: 'Vancouver', state: 'WA', country: 'USA',
    coordinates: [-122.621, 45.636],
    directors: [
      { name: 'Victor Simal', outdoorActivity: 'Golfing', photo: require('./Director images/1000007397 - Victor Simal.jpeg'), photoStyle: { transform: 'scale(1.6)', objectPosition: 'center 15%' } },
    ],
  },
  {
    name: 'Mt Si High School',
    city: 'North Bend', state: 'WA', country: 'USA',
    coordinates: [-121.785, 47.490],
    directors: [
      { name: 'Anandi Chaganla', outdoorActivity: 'Camping', photo: require('./Director images/101_1080 - anandi.jpeg') },
    ],
  },
  // ── Other US states ──
  {
    name: 'Dakota Valley High School',
    city: 'North Sioux City', state: 'SD', country: 'USA',
    directors: [
      {
        name: 'Yahya Luqman',
        outdoorActivity: 'Soccer',
        photo: require('./Director images/IMG_4339 - Yahya Luqman.jpeg'),
      },
    ],
  },
  {
    name: 'Lynbrook High School',
    city: 'San Jose', state: 'CA', country: 'USA',
    directors: [
      { name: 'Kushal Dugasani', outdoorActivity: 'Track and Field', photo: require('./Director images/763318221_1519069772820900_1376275498782221526_n - Kushal Dugasani.jpg') },
      { name: 'Devesh Anand', outdoorActivity: 'Basketball', photo: require('./Director images/IMG_4559 - Devesh Anand.jpeg') },
    ],
  },

  // ── International ──
  {
    name: 'Saint Peters International School',
    city: 'Barcelona', state: null, country: 'Spain',
    directors: [
      {
        name: 'Shaurya Agarwal',
        outdoorActivity: 'Hiking and Camping',
        photo: require('./Director images/Confident teen in executive attire - Shaurya Agarwal.png'),
      },
    ],
  },
  {
    name: 'Auckland Grammar School',
    city: 'Auckland', state: null, country: 'New Zealand',
    directors: [
      { name: 'Kelvin Chen', outdoorActivity: 'Basketball', photo: require('./Director images/IMG_20240825_150026 - Klevin Cen.jpg') },
    ],
  },
];

const REGION_GROUPS = [
  {
    label: 'Washington, USA', abbr: 'WA',
    coordinates: [-120.5, 47.5],
    chapters: CHAPTERS.filter(c => c.state === 'WA'),
  },
  {
    label: 'South Dakota, USA', abbr: 'SD',
    coordinates: [-100.35, 44.37],
    chapters: CHAPTERS.filter(c => c.state === 'SD'),
  },
  {
    label: 'California, USA', abbr: 'CA',
    coordinates: [-121.95, 37.31],
    chapters: CHAPTERS.filter(c => c.state === 'CA'),
  },
  {
    label: 'New Zealand', abbr: 'NZ',
    coordinates: [174.762, -36.864],
    chapters: CHAPTERS.filter(c => c.country === 'New Zealand'),
  },
  {
    label: 'Spain', abbr: 'ES',
    coordinates: [2.154, 41.390],
    chapters: CHAPTERS.filter(c => c.country === 'Spain'),
  },
];

const BOARD = [
  { name: 'Ayush',   grade: 12, photo: require('./leads images/ayush.png') },
  { name: 'Andrew',  grade: 12, photo: require('./leads images/andrew.png') },
  { name: 'Kruthik', grade: 12, photo: require('./leads images/kruthik.png') },
  { name: 'Sana',    grade: 11, photo: require('./leads images/sana.png') },
  { name: 'Aarav',   grade: 10, photo: require('./leads images/aarav.png') },
];

const geoStyle = {
  default: { outline: 'none' },
  hover:   { fill: '#c5dba0', outline: 'none' },
  pressed: { outline: 'none' },
};

function Chapters() {
  const [activeRegion,    setActiveRegion]    = useState(null);
  const [expandedChapter, setExpandedChapter] = useState(null);

  return (
    <div className="App chapters-page">
      <Font />
      <Navbar />

      <div className="chapters-hero">
        <h1 className="chapters-hero-title">Our Chapters</h1>
        <p className="chapters-hero-sub">Chameleon chapters are student-led communities bringing hands-on nature science to youth across the world.</p>
      </div>

      {/* ── Map + Accordion ── */}
      <section className="chapters-map-section">
        <h2 className="chapters-section-title">Chapters</h2>
        <p className="chapters-map-subtitle">Hover a marker to explore regions · click a school below to meet the directors</p>

        {/* World Map */}
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

            {REGION_GROUPS.map(rg => (
              <Marker
                key={rg.abbr}
                coordinates={rg.coordinates}
                onMouseEnter={() => setActiveRegion(rg.abbr)}
                onMouseLeave={() => setActiveRegion(null)}
              >
                <circle
                  r={activeRegion === rg.abbr ? 20 : 16}
                  fill={activeRegion === rg.abbr ? '#6c584c' : '#7ba059'}
                  stroke="#fff"
                  strokeWidth={2.5}
                  style={{ transition: 'r 0.2s ease, fill 0.2s ease' }}
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
                  {rg.chapters.length}
                </text>
                {activeRegion === rg.abbr && (
                  <text
                    textAnchor="middle"
                    y={-26}
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '11px',
                      fontWeight: '600',
                      fill: '#4a7c3f',
                      pointerEvents: 'none',
                    }}
                  >
                    {rg.label}
                  </text>
                )}
              </Marker>
            ))}
          </ComposableMap>
        </div>

        {/* Accordion */}
        <div className="chapters-accordion">
          {CHAPTERS.map(ch => {
            const isOpen = expandedChapter === ch.name;
            const location = `${ch.city}${ch.state ? `, ${ch.state}` : ''} · ${ch.country}`;
            return (
              <div key={ch.name} className={`accordion-item${isOpen ? ' open' : ''}`}>
                <button
                  className={`accordion-header${isOpen ? ' open' : ''}`}
                  onClick={() => setExpandedChapter(n => n === ch.name ? null : ch.name)}
                >
                  <div className="accordion-header-text">
                    <span className="accordion-school">{ch.name}</span>
                    <span className="accordion-location">{location}</span>
                  </div>
                  <span className="accordion-arrow">▾</span>
                </button>

                {isOpen && (
                  <div className="accordion-content">
                    {ch.directors.length > 0 ? (
                      <div className="accordion-directors">
                        {ch.directors.map(dir => (
                          <div key={dir.name} className="accordion-director-card">
                            <div className="accordion-director-photo">
                              {dir.photo
                                ? <img src={dir.photo} alt={dir.name} style={dir.photoStyle || {}} />
                                : <span className="accordion-director-initials">{dir.name.split(' ').map(n => n[0]).join('')}</span>
                              }
                            </div>
                            <h3 className="accordion-director-name">{dir.name}</h3>
                            <p className="accordion-director-role">Chapter Director</p>
                            {dir.outdoorActivity && (
                              <div className="accordion-director-activity">
                                <span className="accordion-activity-label">Favorite outdoor activity</span>
                                <span className="accordion-activity-value">{dir.outdoorActivity}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="accordion-no-directors">Directors coming soon</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Board ── */}
      <section className="chapters-board-section">
        <div className="chapters-board-header">
          <h2 className="chapters-board-title">Our Board</h2>
        </div>
        <div className="chapters-board-track">
          {BOARD.map(({ name, grade, photo }) => (
            <div key={name} className="chapters-board-card">
              <div className="chapters-board-photo">
                {photo
                  ? <img src={photo} alt={name} />
                  : <span className="chapters-board-initial">{name[0]}</span>
                }
              </div>
              <div className="chapters-board-info">
                <span className="chapters-board-name">{name}</span>
                <span className="chapters-board-grade">Grade {grade}</span>
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
