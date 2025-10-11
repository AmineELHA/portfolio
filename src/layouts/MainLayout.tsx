import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import FloatingButtonChat from '@/components/chatbot/FloatingButtonChat';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Amine's Portfolio</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#home" className="transition-colors hover:text-primary text-foreground">Home</a>
            <a href="#about" className="transition-colors hover:text-primary/80 text-foreground/70">About</a>
            <a href="#projects" className="transition-colors hover:text-primary/80 text-foreground/70">Projects</a>
            <a href="#skills" className="transition-colors hover:text-primary/80 text-foreground/70">Skills</a>
            <a href="#contact" className="transition-colors hover:text-primary/80 text-foreground/70">Contact</a>
          </nav>
          
          {/* Mobile Navigation */}
          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/95 backdrop-blur">
                <div className="flex flex-col space-y-6 mt-8">
                  <a href="#home" className="text-lg font-medium py-2 border-b border-border/30">Home</a>
                  <a href="#about" className="text-lg font-medium py-2 border-b border-border/30">About</a>
                  <a href="#projects" className="text-lg font-medium py-2 border-b border-border/30">Projects</a>
                  <a href="#skills" className="text-lg font-medium py-2 border-b border-border/30">Skills</a>
                  <a href="#contact" className="text-lg font-medium py-2 border-b border-border/30">Contact</a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      
      <main>{children}</main>
      
      <footer className="py-6 border-t">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Amine El Hammouti. All rights reserved.
        </div>
      </footer>
      
      {/* Floating Chatbot Button */}
      <FloatingButtonChat />
    </div>
  );
};

export default MainLayout;