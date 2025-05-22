import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Hendra Wong</p>
            <p className="text-gray-400">Software Engineer & Engineering Leader</p>
          </div>
          
          <div className="text-gray-400 text-sm">
            © {currentYear} Hendra Wong. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;