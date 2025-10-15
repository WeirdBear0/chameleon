import React, { useRef, useEffect } from 'react';
import { Gradient } from './gradient';
import './banner.css';

const GradientBanner = ({
  children,
  height = '400px',
  density = [0.06, 0.16],
  colors = ['#9bce7b', '#f0ead1', '#a98367', '#f0ead1'],
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const gradient = new Gradient();
    gradient.el = canvasRef.current;
    gradient.connect().then(() => {
      gradient.conf.density = density;
    });

    return () => {
      gradient.disconnect();
    };
  }, [density]);

  const cssVars = {
    '--gradient-color-1': colors[0],
    '--gradient-color-2': colors[1],
    '--gradient-color-3': colors[2],
    '--gradient-color-4': colors[3],
  };

  return (
    <div
      className="gradient-banner-container"
      style={{ ...cssVars }}
    >
      <canvas
        ref={canvasRef}
        className="gradient-canvas"
      />
      <div className="gradient-content" style={{width:'100%', height:'100%'}}>
        {children}
      </div>
    </div>
  );
};

export default GradientBanner;