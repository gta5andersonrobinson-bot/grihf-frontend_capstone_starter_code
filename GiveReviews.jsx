import React, { useState } from 'react';

const GiveReviews = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: '5'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2>Give Your Review</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column' }}>
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            disabled={submitted} 
            required 
            style={{ padding: '8px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column' }}>
          <label>Review:</label>
          <textarea 
            name="review" 
            value={formData.review} 
            onChange={handleChange} 
            disabled={submitted} 
            required 
            style={{ padding: '8px', marginTop: '5px', height: '80px' }}
          />
        </div>
        <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column' }}>
          <label>Rating:</label>
          <select 
            name="rating" 
            value={formData.rating} 
            onChange={handleChange} 
            disabled={submitted} 
            style={{ padding: '8px', marginTop: '5px' }}
          >
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Good</option>
            <option value="3">3 - Average</option>
            <option value="2">2 - Poor</option>
            <option value="1">1 - Terrible</option>
          </select>
        </div>
        <button 
          type="submit" 
          disabled={submitted} 
          style={{ width: '100%', padding: '10px', background: submitted ? '#ccc' : '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: submitted ? 'not-allowed' : 'pointer' }}
        >
          {submitted ? 'Submitted' : 'Submit Review'}
        </button>
      </form>
      {submitted && <p style={{ marginTop: '1rem', color: 'green', textAlign: 'center' }}>Thank you for your review!</p>}
    </div>
  );
};

export default GiveReviews;