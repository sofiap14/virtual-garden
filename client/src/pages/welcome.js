// components/Welcome.js
import React from 'react';
import LoginButton from '../components/Login.js';
import LogoutButton from '../components/Logout.js';

const Welcome = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
        <p className="text-gray-600 mb-8">Please sign up or log in to continue.</p>
        <div className="space-x-4">
          <LoginButton />
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
