import React, { useState, useEffect } from 'react';
import { quotes } from './quotes';
import './about.css'

const About = () => {
  const [randomQuote, setRandomQuote] = useState(quotes[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, []);

  return (
    <div>
        <div className='aboutContainer'>
              <div className='webcontainer'>
                <div className='team'>
                  <h1 className='title'>Our Story</h1>
                  <p className='desc'>
                    In a world flooded with endless entertainment, internet and social media, we realized that there was a lack of genuine
                    experiences in our community. At Chameleon Camps, we create engaging projects and lessons that are designed 
                    to bring youth into the moment and spark ideas and wonder!
                  </p>
                </div>
                <span className='statementweb'>
                  <p>"{randomQuote.text}" - {randomQuote.author}</p>
                </span>
                <div className='cause'>
                  <h1 className='title'>Our Goal</h1>
                    <p className='desc'>
                      We believe that everyone needs to have a real connection to their environment, and deserve to be taught that
                      in an engaging, unique way, different from your average coding class.
                    </p>
                </div>
              </div>
              <span className='statementmobile'>
                <p>"{randomQuote.text}" - {randomQuote.author}</p>
              </span>
            </div>
    </div>
  );
};
export default About;
