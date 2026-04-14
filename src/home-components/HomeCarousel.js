import React, { useState, useEffect } from 'react';
import img1 from './carousel-pics/IMG_1956.webp';
import img2 from './carousel-pics/IMG_2235.webp';
import img3 from './carousel-pics/IMG_2256.webp';
import img4 from './carousel-pics/IMG_7223.webp';
import img5 from './carousel-pics/IMG_8066.webp';

const images = [
  { src: img1, alt: 'Chameleon' },
  { src: img2, alt: 'Chameleon' },
  { src: img3, alt: 'Chameleon' },
  { src: img4, alt: 'Chameleon' },
  { src: img5, alt: 'Chameleon', position: 'center bottom' },
];

export default function HomeCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = React.useRef(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const prev = () => { setCurrent(prev => (prev - 1 + images.length) % images.length); resetTimer(); };
  const next = () => { setCurrent(prev => (prev + 1) % images.length); resetTimer(); };

  return (
    <div className="home-carousel-section">
      <div className="home-carousel-container">
        <div className="home-carousel-image-wrap">
          <img
            key={current}
            src={images[current].src}
            alt={images[current].alt}
            className="home-carousel-image"
            style={images[current].position ? { objectPosition: images[current].position } : undefined}
          />
          <button className="home-carousel-btn home-carousel-btn-prev" onClick={prev} aria-label="Previous">&#8249;</button>
          <button className="home-carousel-btn home-carousel-btn-next" onClick={next} aria-label="Next">&#8250;</button>
          <div className="home-carousel-indicators">
            {images.map((_, i) => (
              <button
                key={i}
                className={`home-carousel-dot ${i === current ? 'active' : ''}`}
                onClick={() => { setCurrent(i); resetTimer(); }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
