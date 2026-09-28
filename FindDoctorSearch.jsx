import React, { useState } from 'react';
import './FindDoctorSearch.css';

const FindDoctorSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [speciality, setSpeciality] = useState('');

  // Sample mock doctor data for the search
  const doctors = [
    { id: 1, name: 'Dr. John Doe', speciality: 'Cardiology', rating: '4.9' },
    { id: 2, name: 'Dr. Jane Smith', speciality: 'Dermatology', rating: '4.8' },
    { id: 3, name: 'Dr. Robert Brown', speciality: 'Pediatrics', rating: '4.7' },
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesName = doctor.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpeciality = speciality === '' || doctor.speciality === speciality;
    return matchesName && matchesSpeciality;
  });

  return (
    <div className="find-doctor-container">
      <h2>Find a Doctor</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by doctor name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select value={speciality} onChange={(e) => setSpeciality(e.target.value)}>
          <option value="">Select Speciality</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Dermatology">Dermatology</option>
          <option value="Pediatrics">Pediatrics</option>
        </select>
      </div>

      <div className="doctor-list">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc) => (
            <div key={doc.id} className="doctor-card">
              <h3>{doc.name}</h3>
              <p>Speciality: {doc.speciality}</p>
              <p>Rating: {doc.rating} ⭐</p>
              <button className="btn-book">Book Appointment</button>
            </div>
          ))
        ) : (
          <p>No doctors found.</p>
        )}
      </div>
    </div>
  );
};

export default FindDoctorSearch;