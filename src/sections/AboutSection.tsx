import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedDiv from '@/components/animations/AnimatedDiv';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedDiv>
          <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
        </AnimatedDiv>
        
        <div className="max-w-3xl mx-auto">
          <AnimatedDiv delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle>My Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">
                I'm a 5th-year Software Engineering student at EMSI, passionate about building modern, scalable, and user-friendly applications. My main focus is on web and mobile development, with hands-on experience in React.js, React Native, and PostgreSQL.
              </p>
              <p className="text-lg">
                I enjoy turning ideas into functional solutions, from intuitive user interfaces to robust back-end systems. Alongside my technical skills, I'm motivated to keep learning, improving, and contributing to innovative projects in the software industry.
              </p>
              </CardContent>
            </Card>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;