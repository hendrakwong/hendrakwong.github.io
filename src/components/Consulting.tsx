import React from 'react';
import { LucideCode, Users, Brain, Database, Cloud } from 'lucide-react';

const consultingAreas = [
  {
    title: 'Software/Application Development Strategy',
    description: 'Guidance on architecture, technology selection, and development practices for scalable applications.',
    icon: <LucideCode className="w-10 h-10 text-blue-600 dark:text-blue-400" />
  },
  {
    title: 'Engineering Leadership & Team Building',
    description: 'Strategies for building and managing high-performing engineering teams with strong culture.',
    icon: <Users className="w-10 h-10 text-blue-600 dark:text-blue-400" />
  },
  {
    title: 'Agile Transformation & Coaching',
    description: 'Implementation and optimization of agile methodologies tailored to your organization.',
    icon: <Brain className="w-10 h-10 text-blue-600 dark:text-blue-400" />
  },
  {
    title: 'Technical Mentorship',
    description: 'One-on-one and group mentoring for engineers looking to advance their technical and soft skills.',
    icon: <Brain className="w-10 h-10 text-blue-600 dark:text-blue-400" />
  },
  {
    title: 'Cloud Architecture & Modernization',
    description: 'Guidance on cloud migration, architecture optimization, and leveraging cloud-native services.',
    icon: <Cloud className="w-10 h-10 text-blue-600 dark:text-blue-400" />
  }
];

const Consulting: React.FC = () => {
  return (
    <section id="consulting" className="py-16 md:py-24 bg-blue-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center">
            Consulting & Advisory
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center">
            I'm available for select consulting engagements to help organizations optimize their 
            engineering practices and technology strategies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultingAreas.map((area, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md dark:shadow-gray-900/50 transition-transform hover:-translate-y-1 duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4 mt-1">{area.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{area.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition-colors shadow-md inline-block"
            >
              Let's Connect
            </a>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Let's discuss how I can help your team achieve its goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consulting;