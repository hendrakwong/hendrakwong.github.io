import React from 'react';
import SkillCategory from './SkillCategory';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Go', 'C#']
  },
  {
    title: 'Frameworks/Libraries',
    skills: ['React', 'Node.js', 'Angular', 'Vue.js', 'Spring Boot', 'Django', '.NET']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis']
  },
  {
    title: 'Cloud Platforms',
    skills: ['AWS', 'Azure', 'GCP']
  },
  {
    title: 'Tools/Methodologies',
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'Agile', 'Scrum', 'Git']
  },
  {
    title: 'Leadership & Management',
    skills: ['Team Leadership', 'Project Management', 'Agile Coaching', 'Mentorship', 'Strategic Planning']
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index} 
              title={category.title} 
              skills={category.skills} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;