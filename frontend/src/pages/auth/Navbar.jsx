// src/Navbar.js

import React, { useState } from 'react';
import libraryLogo from './library-logo.png';
import './Navbar.css';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Import the AccountCircleIcon from Material-UI

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={libraryLogo} alt="Library Logo" className="logo-img" />
      </div>
      <div className="profile" onClick={toggleDropdown}>
        {/* <AccountCircleIcon /> */}
        <span className='profile-name'>User</span>
        {dropdownVisible && (
          <div className="dropdown-menu">
            <ul>
              <li><a href="#profile">User Profile</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
