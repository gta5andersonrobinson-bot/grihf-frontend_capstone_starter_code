import React, { useState, useEffect } from 'react';

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: 'Anderson Robinson',
    email: 'anderson@example.com',
    phone: '123-456-7890'
  });

  useEffect(() => {
    // Load existing user data from session storage if available
    const storedName = sessionStorage.getItem('name');
    const storedEmail = sessionStorage.getItem('email');
    const storedPhone = sessionStorage.getItem('phone');
    
    if (storedName) setUserDetails(prev => ({ ...prev, name: storedName }));
    if (storedEmail) setUserDetails(prev => ({ ...prev, email: storedEmail }));
    if (storedPhone) setUserDetails(prev => ({ ...prev, phone: storedPhone }));
  }, []);

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save updated details
    sessionStorage.setItem('name', userDetails.name);
    sessionStorage.setItem('email', userDetails.email);
    sessionStorage.setItem('phone', userDetails.phone);
    setIsEditing(false); // Switch back to view mode
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '2rem', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>User Profile</h2>
      
      {isEditing ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label>Name: </label>
            <input type="text" name="name" value={userDetails.name} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
          </div>
          <div>
            <label>Email: </label>
            <input type="email" name="email" value={userDetails.email} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
          </div>
          <div>
            <label>Phone: </label>
            <input type="tel" name="phone" value={userDetails.phone} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
          </div>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button type="submit" style={{ flex: 1, padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Save Changes</button>
            <button type="button" onClick={() => setIsEditing(false)} style={{ flex: 1, padding: '10px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
          </div>
        </form>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p style={{ margin: 0 }}><strong>Name:</strong> {userDetails.name}</p>
          <p style={{ margin: 0 }}><strong>Email:</strong> {userDetails.email}</p>
          <p style={{ margin: 0 }}><strong>Phone:</strong> {userDetails.phone}</p>
          <button onClick={() => setIsEditing(true)} style={{ marginTop: '15px', padding: '10px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;