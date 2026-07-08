import React from 'react';
import './partners.css';
import republic from "./republicclear.png";
import give from "./msft_give.png";
import fm from "./fm.png";
import fish from "./FISH.png";
import cornell from "./CORNELL.webp";
import rev from "./REV.png";

const Partners = () => {
  const partners = [
    { image: republic, link: 'https://www.republicservices.com' },
    { image: give, link: 'https://www.microsoft.com/en-us/corporate-responsibility/philanthropies/employee-engagement' },
    { image: fm, link: 'https://futuremartians.org' },
    { image: cornell, name: 'Cornell University', link: 'https://www.cornell.edu' },
    { image: rev, name: 'REV Ithaca', link: 'https://www.revithaca.com' },
    { image: fish, name: 'Issaquah Salmon Hatchery', link: 'https://issaquahfish.org' },
  ];

  return (
    <div className='partners-section'>
      <h2 className='partner-header'>Proudly Partnered With</h2>
      <div className='partners-grid'>
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className='partner-card'
          >
            {partner.image ? (
              <div className='partner-image-container'>
                <img
                  src={partner.image}
                  alt={partner.name || 'Partner logo'}
                  className='partner-image'
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className='partner-name-container' style={{ display: 'none' }}>
                  <p className='partner-name'>{partner.name}</p>
                </div>
              </div>
            ) : (
              <div className='partner-name-container'>
                <p className='partner-name'>{partner.name}</p>
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Partners;