import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md dark:shadow-gray-900/50 overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-900/70 h-full flex flex-col">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{title}</h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-700/50 px-6 py-4 border-t border-gray-200 dark:border-gray-700">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-1.5">
          {technologies.slice(0, 6).map((tech, index) => (
            <span 
              key={index} 
              className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 6 && (
            <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium">
              +{technologies.length - 6} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;