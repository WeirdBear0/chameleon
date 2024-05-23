import React, {useState} from 'react';
import './camps.css'

const Camps = () => {
  return (
    <div>
        <h1 className='campsHeader'>
            The secrets of nature <br/>
            Are hidden in plain sight
        </h1>
        <div className='campCards'>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
        </div>
    </div>  
  );
};
export default Camps;