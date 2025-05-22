import React from 'react';

const ProfileImage: React.FC = () => {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center">
        <span className="text-blue-500 dark:text-blue-300 font-medium text-sm">Profile Photo</span>
      </div>
      {/* Replace this div with an actual image tag when you have a photo */}
      {/* <img src="your-image-url.jpg" alt="Hendra Wong" className="w-full h-full object-cover" /> */}
    </div>
  );
};

export default ProfileImage;