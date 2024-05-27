import React, {useState} from 'react';
import './camps.css'

const Camps = () => {
  return (
    <div className='campsContainer'>
        <div className='title'>
            <p className='campsHeader'>
                <span className='plain'>The secrets of nature <br/></span>
                <span className='hide'>Are hidden in plain sight</span>
            </p>
        </div>
        <p className='cohort-header'>SUMMER 2024 CAMPS</p>
        <div className='campCards'>
            <div className='card'>
              <p className='card-title'>Week 1: Week Of Water</p>
              <p className='desc'>
                  ----------------------------------------------
                  <br/>----------------------------------------------
                  <br/>----------------------------------------------
                  <br/>----------------------------------------------
                  <br/>----------------------------------------------
                  <br/>----------------------------------------------
                  <br/>----------------------------------------------
                </p>
            </div>
            <div className='card'>
              <p className='card-title'>Week 2: Clean Energies</p>
              <p className='desc'>
                  ----------------------------------------------
                  <br/>----------------------------------------------
                  <br/>----------------------------------------------
                  <br/>----------------------------------------------
                  <br/>----------------------------------------------
                  <br/>----------------------------------------------
                  <br/>----------------------------------------------
                </p>
            </div>
            <div className='card'>
              <p className='card-title'>Week 3: Ecology and Technology</p>
              <p className='desc'>
                  ----------------------------------------------
                  <br/>----------------------------------------------
                  <br/>----------------------------------------------
                  <br/>----------------------------------------------
                  <br/>----------------------------------------------
                  <br/>----------------------------------------------
                  <br/>----------------------------------------------
                </p>
            </div>
        </div>
    </div>  
  );
};
export default Camps;