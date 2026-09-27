import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../home-components/footer';
import Font from '../home-components/font';
import Navbar from '../components/Navbar';
import '../Home.css';
import './aboutPage.css';

const HIGHLIGHTS = [
  { value: '2,000+', label: 'kids reached' },
  { value: '$20k', label: 'raised for education' },
  { value: '2024', label: 'founded in Sammamish' },
];

const HISTORY = [
  { when: 'April 2024', what: 'Founded by high school students in Sammamish, WA.' },
  { when: 'June 2024', what: 'Recognized by the IRS as a 501(c)(3) nonprofit.' },
  { when: 'Summer 2025', what: 'Hosted our first wind turbine workshop, where students built and programmed working turbines.' },
  { when: 'August 2025', what: 'Ran our first Envirotech Hackathon at KCLS Sammamish: 28 students, 12 teams, $700 in prizes.' },
  { when: 'Today', what: 'Bringing Farmbeat to classrooms and preparing our next round of workshops.' },
];

function AboutPage() {
  return (
    <div className="App about-page">
      <Font />
      <Navbar />

      <header className="ap-hero">
        <h1 className="ap-hero-title">About Chameleon</h1>
        <p className="ap-hero-sub">
          A student-led 501(c)(3) nonprofit teaching environmental science through hands-on projects.
        </p>
      </header>

      <section className="ap-stats">
        {HIGHLIGHTS.map((h) => (
          <div key={h.label} className="ap-stat">
            <span className="ap-stat-value">{h.value}</span>
            <span className="ap-stat-label">{h.label}</span>
          </div>
        ))}
      </section>

      <main className="ap-body">
        <div className="ap-grid">
        <section className="ap-block">
          <h2>Our mission</h2>
          <ul className="ap-list">
            <li>Give every student a real connection to the environment.</li>
            <li>Teach environmental science through STEM, art, and building things by hand.</li>
            <li>Make learning tactile and outdoors, not just another coding class.</li>
          </ul>
        </section>

        <section className="ap-block ap-featured">
          <span className="ap-tag">Current program</span>
          <h2>Farmbeat</h2>
          <ul className="ap-list">
            <li>Students wire a micro:bit to a soil-moisture sensor.</li>
            <li>They learn electronics, data collection, and how technology supports agriculture.</li>
            <li>Free step-by-step instructions are available for any classroom.</li>
          </ul>
          <Link to="/farmbeat" className="ap-button">Explore Farmbeat</Link>
        </section>

        <section className="ap-block">
          <h2>Our story</h2>
          <ol className="ap-timeline">
            {HISTORY.map((item) => (
              <li key={item.when}>
                <span className="ap-when">{item.when}</span>
                <span className="ap-what">{item.what}</span>
              </li>
            ))}
          </ol>
          <p className="ap-more">
            See past projects: <Link to="/windmill">Wind turbine</Link> · <Link to="/hackathon">Hackathon</Link>
          </p>
        </section>

        <section className="ap-block ap-org">
          <h2>Organization</h2>
          <ul className="ap-list">
            <li>Chameleon Camps is a 501(c)(3) nonprofit, <span className="ap-nowrap">EIN 99-3456787</span>. Donations are tax-deductible.</li>
            <li>Based in Sammamish, Washington.</li>
            <li>Reach us at <a href="mailto:info@chameleoncamps.org">info@chameleoncamps.org</a>.</li>
          </ul>
        </section>
        </div>
      </main>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
