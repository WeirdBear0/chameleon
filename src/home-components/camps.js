import React, {useState} from 'react';
import { Outlet, Link } from 'react-router-dom';
import './camps.css'

const Camps = () => {
  return (
    <div className='ovr'>
      <div className='campsContainer'>
          <div className='title'>
              <p className='campsHeader'>
                  <span className='plain'>The secrets of nature <br/></span>
                  <span className='hide'>Are hidden in plain sight</span>
              </p>
          </div>
          <p className='cohort-header'>SUMMER CAMPS - CLICK TO LEARN MORE!</p>
          <div className='campCards'>
            <Link to = "/" className='card'>
                <p className='card-title'>Week 1: Week Of Water</p>
                <p className='desc'>
                  The most necessary thing for life to exist: water. This week focuses on how water interacts with the environment, planet,
                 and people, and how a better understanding of water can lead to a more sustainable and efficient society.
                </p>
            </Link>
            <Link to = "/energies" className='card'>
                <p className='card-title'>Week 2: Clean Energies</p>
                <p className='desc'>
                  Clean energy becomes more prominent day by day, showing through forms such as wind, solar, and hydropower energy. 
                  Learning how these systems work and about the significance of their engineering will open minds to their endless 
                  possibilities!
                </p>
            </Link>
            <Link to = "/ecology" className='card'>
                <p className='card-title'>Week 3: Ecology and Technology</p>
                <p className='desc'>
                    With technology rapidly expanding in our modern world, many of us feel as if the concept of ecology is pointless. In
                    reality, with the help of technological integration into ecology, the hybrid between natural learning and STEM will
                    carry on into the future.
                </p>
            </Link>
          </div>
      </div>  
      <Outlet/>
    </div>

  );
};
export default Camps;