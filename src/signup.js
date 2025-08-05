import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './mainLogo.svg';
import circleLogo from './circleLogo.svg';
import Font from './home-components/font';
import './signup.css';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    grade: '',
    workshop: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCheckmark, setShowCheckmark] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create form data object
      const formDataToSend = {
        ...formData,
        timestamp: new Date().toISOString()
      };

      // Send data to Google Sheets
      const response = await fetch('https://script.google.com/macros/s/AKfycbx-MHk7DvNkuqRXpS9b6inJ0xdIHZnrhhgo9VSZ-TUOc1MLhPtVuWw02SHe9D_8rFE/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend)
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        grade: '',
        workshop: ''
      });

      // Show checkmark
      setShowCheckmark(true);

      // Hide checkmark after animation
      setTimeout(() => {
        setShowCheckmark(false);
      }, 2000);

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="signup-page">
      <Font />
      <a href="https://forms.gle/BgynuhLutzQT2F8A6" className='signup-redirect'>Please visit this Google Form to sign up for workshops :)</a>
      {/* <div className="signup-container">
        <Link to="/" className='logoLink'>
            <img src={logo} className='logo' alt='chameleon'></img>
        </Link>
        <div className="signup-form-container">
            <Link to="/" className='logoLink'>
                <img src={circleLogo} className='mobLogo' alt='chameleon'></img>
            </Link>
          <div className="signup-header">
            <h1>Workshop Sign Up</h1>
          </div>
          <p className="form-description">Join us for an exciting workshop experience!</p>
          <p className="home-message">Click the logo to go home ;)</p>
          
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="grade">Grade *</label>
              <select
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                required
              >
                <option value="">Select your grade</option>
                <option value="6">6th Grade</option>
                <option value="7">7th Grade</option>
                <option value="8">8th Grade</option>
                <option value="9">9th Grade</option>
                <option value="10">10th Grade</option>
                <option value="11">11th Grade</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="workshop">Workshop Date *</label>
              <select
                id="workshop"
                name="workshop"
                value={formData.workshop}
                onChange={handleChange}
                required
              >
                <option value="">Select a workshop</option>
                <option value="august 15">August 15, 2025 2-5:30 PM - Smart Farming Workshop</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>

      {showCheckmark && (
        <div className="checkmark-container">
          <p className="thank-you-message">Thank you for signing up!</p>
        </div>
      )} */}
    </div>
  );
}

export default SignUp; 