import React, {useState} from 'react';
import { Outlet, Link } from 'react-router-dom';
import './camps.css'

const Camps = () => {
  return (
    <div className='ovr'>
      <div className='campsContainer'>
        <div className = "sectionHeader">
          <div className='title'>
              <p className='campsHeader'>
                  <span className='plain'>The secrets of nature <br/></span>
                  <span className='hide'>Are hidden in plain sight</span>
              </p>
          </div>
          <p className='cohort-header'>WINTER CAMPS - 2024</p>
        </div>
          <div className='campCards'>
            <Link to = "/" className='card'>
                <p className='card-title'>Week 1: Week Of Water</p>
            </Link>
            <Link to = "/energies" className='card'>
                <p className='card-title'>Week 2: Clean Energies</p>
            </Link>
            <Link to = "/ecology" className='card'>
                <p className='card-title'>Week 3: Ecology and Technology</p>
            </Link>
          </div>
      </div>  
      <Outlet/>
    </div>

  );
};
export default Camps;