import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Get In Touch
          </h2>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-gray-900/50 p-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 text-center">
              I'm always open to discussing new projects, opportunities, or how I can help your team succeed.
            </p>
            
            <div className="flex justify-center">
              <a 
                href="mailto:hendrakwong@gmail.com" 
                className="flex items-center justify-center p-4 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-lg transition-colors"
              >
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-gray-800 dark:text-white font-medium">hendrakwong@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;