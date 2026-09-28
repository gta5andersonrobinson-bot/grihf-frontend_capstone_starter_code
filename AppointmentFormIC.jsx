import React, { useState } from 'react';

const AppointmentFormIC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment booked successfully!');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column' }}>
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            style={{ padding: '8px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column' }}>
          <label>Phone Number:</label>
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
            style={{ padding: '8px', marginTop: '5px' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Book Now
        </button>
      </form>
    </div>
  );
};

export default AppointmentFormIC;