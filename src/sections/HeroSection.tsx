import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedDiv from '@/components/animations/AnimatedDiv';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <AnimatedDiv delay={0.1} className="mb-6">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 ring-4 ring-primary/10">
                <img
                  src="/AmineElHammoutii.jpeg"
                  alt="Amine El Hammouti"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </AnimatedDiv>
        <AnimatedDiv delay={0.2}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Amine El Hammouti</span>
          </h1>
        </AnimatedDiv>
        <AnimatedDiv delay={0.3}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Frontend Developer & UI/UX Designer passionate about creating
            beautiful, functional web experiences.
          </p>
        </AnimatedDiv>
        <AnimatedDiv delay={0.4} className="flex justify-center gap-4">
          <Button size="lg" onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Get In Touch
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://github.com/assimelha', '_blank');
            }}
          >
            View Projects
          </Button>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default HeroSection;
