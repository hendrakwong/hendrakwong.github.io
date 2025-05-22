import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Global Benefits Platform',
    description: 'Spearheaded the design and development of a global benefits platform from ground up for global employment service enabling 78% customer attached rate.',
    technologies: ['TypeScript', 'NodeJs', 'React', 'AWS Lambda', 'SQS', 'SNS', 'Microservice', 'PostgreSQL', 'Pendo', 'DataDog']
  },
  {
    title: 'Enterprise Customer Migration',
    description: 'Led a cross-functional team to migrate 75K+ enterprise customers to a new platform in 6 months, generating over $120M of revenue and achieving over 65% customer conversion rate.',
    technologies: ['C#', 'NET Core', 'Ruby', 'Sinatra', 'AWS Lambda', 'SQS', 'SNS', 'Microservice', 'REST API', 'PostgreSQL', 'Okta', 'Looker', 'Amplitude', 'DataDog']
  },
  {
    title: 'Monolith to Microservices Migration',
    description: 'Architected and executed a monolith to microservices migration strategy for processing background check data provider retrieval, enabling continuous delivery production deployment and observability.',
    technologies: ['.NET Core', 'C#', 'AWS Lambda', 'PostgreSQL', 'DataDog', 'Feature Flagging', 'Microservice', 'CI/CD', 'Agile', 'Scrum']
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
          Project Achievements
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;