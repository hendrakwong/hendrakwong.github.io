import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              I am a seasoned software engineer and engineering leader driven by the power of technology 
              to enhance human productivity. With a strong background in full-stack development and cloud 
              architectures, I thrive on building innovative solutions and fostering high-performing, 
              collaborative teams. My leadership philosophy is rooted in coaching and mentoring, empowering 
              engineers to achieve their full potential while delivering impactful results.
            </p>
            
            <p>
              Throughout my career, I've successfully led engineering teams across diverse industries, 
              implementing strategic technical initiatives that align with business objectives. I believe 
              in a hands-on leadership approach, staying technically sharp while providing clear direction, 
              removing obstacles, and creating environments where engineers can do their best work.
            </p>
            
            <p>
              My passion lies at the intersection of technology and human potential. I'm constantly exploring 
              new ways to leverage emerging technologies to solve complex problems, while simultaneously 
              helping others grow their technical and leadership capabilities. This dual focus on technical 
              excellence and people development has been the cornerstone of my career success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;