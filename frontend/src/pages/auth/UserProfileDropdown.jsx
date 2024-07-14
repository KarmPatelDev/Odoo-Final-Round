import {React} from 'react';

const UserProfileDropdown = () => {
  const handleLogout = () => {
    // Handle logout logic
  };

  return (
    <div className="dropdown">
      <button className="profile-button">User Profile</button>
      <div className="dropdown-content">
        <a href="#">User Profile</a>
        <a href="#">Login</a>
        <a href="#" onClick={handleLogout}>Logout</a>
      </div>
    </div>
  );
};

export default UserProfileDropdown;
