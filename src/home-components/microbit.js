import React, {useState} from "react";
import styles from './microbit.module.css'

function Microbit() {
  return (
    <div className="sketchfab-embed-wrapper"> 
        <iframe title="Micro:Bit" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/b453f11ad77a4545a33b3e0ecfba6fc5/embed">
        </iframe> 
    </div>
  );
}

export default Microbit;
