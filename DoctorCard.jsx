import React, { useState } from 'react';

const DoctorCard = () => {
  const [isBooked, setIsBooked] = useState(true);

  const handleCancel = () => {
    setIsBooked(false);
    alert('Your appointment has been successfully canceled.');
  };

  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '300px', margin: '20px auto', textAlign: 'center' }}>
      <h3>Dr. Sarah Jenkins</h3>
      <p>Specialty: Cardiology</p>
      
      {isBooked ? (
        <div>
          <p style={{ color: 'green' }}><strong>Status: Appointment Confirmed</strong></p>
          <button onClick={handleCancel} style={{ background: '#dc3545', color: 'white', padding: '8px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Cancel Appointment
          </button>
        </div>
      ) : (
        <p style={{ color: '#666' }}>No active appointments.</p>
      )}
    </div>
  );
};

export default DoctorCard;