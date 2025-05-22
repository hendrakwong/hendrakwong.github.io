import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Global Benefits Platform',
    description: 'Spearheaded the design and development of a global benefits platform from ground up for global employment service enabling 78% customer attached rate.',
    technologies: ['TypeScript', 'NodeJs', 'React', 'AWS Lambda', 'SQS', 'SNS', 'Microservice', 'PostgreSQL', 'Pendo', 'DataDog']
  },
  {
    title: 'Enterprise Data Analytics Platform',
    description: 'Led a cross-functional team to build a scalable data analytics platform that reduced reporting time by 65% and enabled real-time business insights across 12 departments.',
    technologies: ['Python', 'Apache Spark', 'AWS RedShift', 'Tableau', 'React', 'FastAPI', 'Docker', 'Kubernetes']
  },
  {
    title: 'Automated Workflow Engine',
    description: 'Architected and implemented a workflow automation system that streamlined critical business processes, resulting in 40% operational cost reduction and 3x throughput improvement.',
    technologies: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'MongoDB', 'React', 'Docker', 'GitLab CI/CD']
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