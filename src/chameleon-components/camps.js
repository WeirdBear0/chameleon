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
        <div className='campCards'>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
        </div>
    </div>  
  );
};
export default Camps;