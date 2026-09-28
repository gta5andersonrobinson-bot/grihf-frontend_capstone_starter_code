import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user details exist in local storage to manage state
    const storedUsername = sessionStorage.getItem('name') || localStorage.getItem('name');
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    setIsLoggedIn(false);
    setUsername('');
    navigate('/');
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <h2>StayHealthy <span className="text-primary">+</span></h2>
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        
        {isLoggedIn ? (
          <>
            <li className="welcome-user">Welcome, {username}</li>
            <li>
              <button onClick={handleLogout} className="btn-logout">Logout</button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/signup" className="btn-signup">Sign Up</Link></li>
            <li><Link to="/login" className="btn-login">Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;