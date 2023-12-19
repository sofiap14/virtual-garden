// Logout.js
import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    fetch('/logout') // This requests your backend to initiate the logout process
      .then((response) => {
        if (response.status === 200) {
          // The response may indicate a successful logout
          console.log('Logout initiated');
        }
      });
  };

  return (
    <div>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Logout;
