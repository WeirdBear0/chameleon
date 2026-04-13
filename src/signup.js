import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './mainLogo.svg';
import Font from './home-components/font';
import './signup.css';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    numberOfGuests: 1,
    email: '',
    photoConsent: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Google Apps Script Web App URL
  // Replace this with your deployed Google Apps Script URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxuqDMgKLu81ntOLwXIyYE3JqSteCu5tEf6eLhIZv_hgnJu8VfQvsWvFjyc5Fj8U5hI/exec" || '';

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.numberOfGuests < 1) {
      newErrors.numberOfGuests = 'Number of guests must be at least 1';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    
    if (validateForm()) {
      // If Google Script URL is not configured, just show success (for testing)
      if (!GOOGLE_SCRIPT_URL) {
        console.log('Form submitted (Google Sheets not configured):', formData);
        setSubmitted(true);
        return;
      }

      setIsSubmitting(true);
      
      try {
        // Prepare data for Google Sheets
        const submissionData = {
          name: formData.name,
          numberOfGuests: formData.numberOfGuests,
          email: formData.email,
          photoConsent: formData.photoConsent ? 'Yes' : 'No',
          timestamp: new Date().toISOString()
        };

        // Send to Google Apps Script
        // Using no-cors mode because Google Apps Script doesn't support CORS headers
        // The data will be sent, but we can't read the response
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', // Required to bypass CORS restrictions
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData)
        });

        // With no-cors mode, we can't read the response, but if no error was thrown,
        // the request was sent successfully. Wait a moment for it to complete.
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Show success - the data should be in the sheet
        setSubmitted(true);
        console.log('RSVP submitted successfully:', submissionData);
        
      } catch (error) {
        console.error('Error submitting RSVP:', error);
        console.error('Error details:', {
          message: error.message,
          stack: error.stack,
          name: error.name
        });
        setSubmitError('Failed to submit RSVP. Please check your connection and try again, or contact us directly.');
        setIsSubmitting(false);
      }
    }
  };

  if (submitted) {
    return (
      <div className="signup-page">
        <Font />
        <div className="signup-container">
          <Link to="/">
            <img src={logo} className='logosignup' alt='chameleon' />
          </Link>
          <div className="success-message">
            <h2>Thank you for RSVPing!</h2>
            <p>We've received your RSVP for the Annual Celebration.</p>
            <p>We look forward to seeing you on Sunday, December 7th from 3-5:30 PM!</p>
            <Link to="/" className="back-link">Return to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="signup-page">
      <Font />
      <div className="signup-container">
        <Link to="/">
          <img src={logo} className='logo' alt='chameleon' />
      </Link>
        <div className="signup-form-container">
          <h1 className="signup-title">RSVP to Annual Celebration</h1>
          <p className="signup-subtitle">Sunday, December 7th • 3:00 PM - 5:30 PM</p>
          
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label htmlFor="name">Name of Attendee *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                placeholder="Enter your name"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="numberOfGuests">Number of Attendees (including yourself) *</label>
              <input
                type="number"
                id="numberOfGuests"
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleChange}
                min="1"
                className={errors.numberOfGuests ? 'error' : ''}
              />
              {errors.numberOfGuests && <span className="error-message">{errors.numberOfGuests}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="your.email@example.com"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="photoConsent"
                  checked={formData.photoConsent}
                  onChange={handleChange}
                />
                <span>I consent to photos/videos being taken for social media</span>
              </label>
            </div>

            {submitError && (
              <div className="error-message" style={{ marginTop: '0.5rem', textAlign: 'center', fontSize: '1rem' }}>
                {submitError}
              </div>
            )}

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting || !GOOGLE_SCRIPT_URL}
            >
              {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
            </button>

            {!GOOGLE_SCRIPT_URL && (
              <div className="error-message" style={{ marginTop: '0.5rem', textAlign: 'center', fontSize: '0.9rem', color: '#6c584c' }}>
                Note: Google Sheets integration not configured. Please set REACT_APP_GOOGLE_SCRIPT_URL environment variable.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp; 
