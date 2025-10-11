import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AnimatedDiv from '@/components/animations/AnimatedDiv';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedDiv>
          <h2 className="text-3xl font-bold text-center mb-16">My Projects</h2>
        </AnimatedDiv>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <Card>
            <CardHeader>
              <CardTitle>Pigier</CardTitle>
              <CardDescription>React & Node.js</CardDescription>
            </CardHeader>
            <CardContent>
              <p>E-commerce application built with React and Node.js. A comprehensive platform for managing products, orders, and customers with a focus on user experience.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={(e) => {
                e.preventDefault();
                window.open('https://github.com/assimelha/pigier', '_blank');
              }}>
                View Project
              </Button>
            </CardFooter>
          </Card>
          
          {/* Project 2 */}
          <Card>
            <CardHeader>
              <CardTitle>Task Management App</CardTitle>
              <CardDescription>React & Firebase</CardDescription>
            </CardHeader>
            <CardContent>
              <p>A collaborative task management application with real-time updates and team features.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={(e) => {
                e.preventDefault();
                window.open('https://github.com/assimelha/task-management', '_blank');
              }}>
                View Project
              </Button>
            </CardFooter>
          </Card>
          
          {/* Project 3 */}
          <Card>
            <CardHeader>
              <CardTitle>Weather Dashboard</CardTitle>
              <CardDescription>React & API Integration</CardDescription>
            </CardHeader>
            <CardContent>
              <p>A responsive weather application with forecasts, maps, and location-based services.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={(e) => {
                e.preventDefault();
                window.open('https://github.com/assimelha/weather-dashboard', '_blank');
              }}>
                View Project
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;