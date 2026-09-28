import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sign_Up from './components/Sign_Up';
import Login from './components/Login';
import FindDoctorSearch from './components/FindDoctorSearch';
import AppointmentFormIC from './components/AppointmentFormIC';
import GiveReviews from './components/GiveReviews';

const Home = () => <div style={{ padding: '20px' }}><h2>Home Page</h2></div>;
const Appointments = () => <div style={{ padding: '20px' }}><h2>Appointments</h2></div>;

function App() {
  const [showNotification, setShowNotification] = useState(true);

  return (
    <BrowserRouter>
      <div className="app-container">
        {showNotification && (
          <div className="notification-banner" style={{ background: '#e0f7fa', padding: '10px', textAlign: 'center', borderBottom: '1px solid #b2ebf2' }}>
            <span>Welcome to StayHealthy! Check out our new doctor search feature.</span>
            <button onClick={() => setShowNotification(false)} style={{ marginLeft: '15px', padding: '2px 8px', cursor: 'pointer' }}>Close</button>
          </div>
        )}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Sign_Up />} />
          <Route path="/find-doctor" element={<FindDoctorSearch />} />
          <Route path="/book-appointment" element={<AppointmentFormIC />} />
          <Route path="/reviews" element={<GiveReviews />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;