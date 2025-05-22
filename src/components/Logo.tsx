import React from 'react';
import logo from '../assets/images/logo.png';

const Logo: React.FC = () => {
  return (
    <img
      src={logo}
      alt="Hendra Wong Logo"
      className="w-8 h-8 mr-3 rounded-lg" // Added rounded-lg class
      loading="lazy"
    />
  );
};

export default Logo;