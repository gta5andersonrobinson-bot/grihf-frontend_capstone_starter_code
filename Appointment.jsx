import React, { useState } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', time: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${formData.name} on ${formData.date} at ${formData.time}`);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', maxWidth: '400px', margin: '20px auto' }}>
      <h3>Book an Appointment</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <input type="time" name="time" onChange={handleChange} required />
        <button type="submit" style={{ background: '#007bff', color: 'white', padding: '10px', border: 'none' }}>Book Now</button>
      </form>
    </div>
  );
};

export default AppointmentForm;