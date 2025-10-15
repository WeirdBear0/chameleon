import React from 'react';
import './partners.css';
import republic from "./republicclear.png";
import give from "./msft-give2.png";
import fm from "./future-martians.png";

const Partners = () => {
  const partners = [
    { image: republic, link: 'https://www.republicservices.com' },
    { image: give, link: 'https://www.microsoft.com/en-us/corporate-responsibility/philanthropies/employee-engagement' },
    { image: fm, link: 'https://futuremartians.org' }
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
            <div className='partner-image-container'>
              <img 
                src={partner.image} 
                alt="Partner logo"
                className='partner-image'
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Partners;