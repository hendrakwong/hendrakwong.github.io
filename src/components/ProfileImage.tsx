import React from 'react';
import profilePhoto from '../assets/images/profile-photo.jpeg';

const ProfileImage: React.FC = () => {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
      <img 
        src={profilePhoto} 
        alt="Hendra Wong" 
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default ProfileImage;