import React from 'react';
import AnimatedDiv from '@/components/animations/AnimatedDiv';

const SkillsSection: React.FC = () => {
  const skills = [
    'React',
    'TypeScript', 
    'JavaScript',
    'HTML/CSS',
    'React Native',
    'PostgreSQL',
    'Node.js',
    'UI/UX Design',
    'Git',
    'Tailwind CSS',
    'Figma',
    'Agile Methodologies'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedDiv>
          <h2 className="text-3xl font-bold text-center mb-16">My Skills</h2>
        </AnimatedDiv>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <AnimatedDiv key={index} delay={index * 0.05}>
              <div className="bg-primary/10 hover:bg-primary/20 transition-colors duration-300 px-6 py-3 rounded-full">
                <span className="text-primary font-medium">{skill}</span>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;