import React from 'react';
import { Github, Linkedin, Rss } from 'lucide-react';
import ProfileImage from './ProfileImage';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/3 flex justify-center">
            <ProfileImage />
          </div>
          
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
              Human Leadership Engineering
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Software Engineer & Engineering Leader | Advancing Human Productivity Through Technology | Passionate Coach & Mentor
            </h2>
            
            <div className="flex justify-center md:justify-start space-x-6 mb-8">
              <a 
                href="https://www.linkedin.com/in/hendrawong" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href="https://github.com/hendrakwong" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={28} />
              </a>
              <a 
                href="https://techblog.hendrawong.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                aria-label="Tech Blog"
              >
                <Rss size={28} />
              </a>
            </div>
            
            <div className="flex justify-center md:justify-start">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors shadow-md"
              >
                Get In Touch
              </a>
              <a 
                href="#about" 
                className="ml-4 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-medium py-3 px-6 rounded-md border border-gray-300 dark:border-gray-600 transition-colors shadow-sm"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;