import React, { useState, useEffect } from 'react';
import './stats.css';

const Stats = ({ onProjectsClick }) => {
  const [daysActive, setDaysActive] = useState(0);

  useEffect(() => {
    // Calculate days since 4/19/2024
    const startDate = new Date('2024-04-19');
    startDate.setHours(0, 0, 0, 0);
    
    const calculateDays = () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const diffTime = today - startDate;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      setDaysActive(diffDays);
    };
    
    // Calculate immediately
    calculateDays();
    
    // Update daily at midnight
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const msUntilMidnight = tomorrow - now;
    
    let intervalId = null;
    
    const timeoutId = setTimeout(() => {
      calculateDays();
      
      // Set up interval to update every 24 hours
      intervalId = setInterval(() => {
        calculateDays();
      }, 24 * 60 * 60 * 1000);
    }, msUntilMidnight);
    
    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  const handleProjectsClick = (e) => {
    e.preventDefault();
    if (onProjectsClick) {
      onProjectsClick();
    }
  };

  return (
    <div className="stats-section">
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-value">2000+</div>
          <div className="stat-label">Kids Reached</div>
        </div>
        <div className="stat-card stat-card-link" onClick={handleProjectsClick}>
          <div className="stat-value">5</div>
          <div className="stat-label">Projects Made</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{daysActive}</div>
          <div className="stat-label">Days Active</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">$20k</div>
          <div className="stat-label">Money Raised</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

