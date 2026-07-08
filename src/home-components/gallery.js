import React, { useState } from 'react';
import allPhotos from './photosList';
import './gallery.css';

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  const prev = () => setLightbox(i => (i - 1 + allPhotos.length) % allPhotos.length);
  const next = () => setLightbox(i => (i + 1) % allPhotos.length);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {allPhotos.map((src, i) => (
          <div key={i} className="gallery-item" onClick={() => setLightbox(i)}>
            <img src={src} alt="" className="gallery-img" />
          </div>
        ))}
      </div>

      {lightbox !== null && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <button className="lb-btn lb-prev" onClick={e => { e.stopPropagation(); prev(); }}>&#8249;</button>
          <img
            src={allPhotos[lightbox]}
            alt=""
            className="lb-img"
            onClick={e => e.stopPropagation()}
          />
          <button className="lb-btn lb-next" onClick={e => { e.stopPropagation(); next(); }}>&#8250;</button>
          <button className="lb-close" onClick={() => setLightbox(null)}>&#x2715;</button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
