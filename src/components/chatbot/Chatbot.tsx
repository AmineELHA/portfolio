import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your portfolio assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate bot response after a delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello there! How can I assist you with Amine's portfolio?";
    } else if (input.includes('project') || input.includes('work')) {
      return 'Amine has worked on various projects including web applications, mobile apps, and UI/UX designs. Check out the projects section to see more details!';
    } else if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
      return 'You can contact Amine through the contact form on this page, or via email at amine.elhammouti@example.com.';
    } else if (input.includes('skill') || input.includes('technology')) {
      return 'Amine is skilled in React, TypeScript, TailwindCSS, and various other modern web technologies. See the skills section for a complete list!';
    } else if (input.includes('about') || input.includes('who')) {
      return 'Amine El Hammouti is a Frontend Developer & UI/UX Designer passionate about creating beautiful, functional web experiences.';
    } else if (input.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with?";
    } else {
      return "Thanks for your message! Amine is a skilled Frontend Developer & UI/UX Designer. Feel free to ask me anything about his work, projects, or skills.";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <Card className="w-80 h-[500px] flex flex-col border-primary/30 shadow-lg">
          <CardHeader className="bg-primary/10 rounded-t-lg p-4">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Portfolio Assistant</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0"
              >
                ×
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-4 bg-muted/10">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="p-3 border-t bg-muted/10 rounded-b-lg">
            <div className="flex w-full space-x-2">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 min-h-[60px] p-2 border rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-primary"
                rows={2}
              />
              <Button
                onClick={handleSendMessage}
                className="self-end h-[60px] bg-primary hover:bg-primary/90"
              >
                Send
              </Button>
            </div>
          </CardFooter>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 flex items-center justify-center shadow-lg bg-primary hover:bg-primary/90"
          aria-label="Open chatbot"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </Button>
      )}
    </div>
  );
};

export default Chatbot;