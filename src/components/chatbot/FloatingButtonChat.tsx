import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const FloatingButtonChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Amine's portfolio assistant. How can I help you?",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to get Chatbase API response via proxy
  const getChatbaseResponse = async (userInput: string): Promise<string> => {
    try {
      const response = await fetch('/api/chatbase/v1/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'user',
              content: userInput
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      return data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process your request. Could you try again?";
    } catch (error) {
      console.error('Error calling Chatbase API:', error);
      // Return a fallback response
      return getSimulatedResponse(userInput);
    }
  };

  // Fallback function with simulated responses
  const getSimulatedResponse = (userInput: string): string => {
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

  const handleSendMessage = async () => {
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
    setIsLoading(true);

    try {
      // Try to get response from Chatbase API
      const botText = await getChatbaseResponse(inputText);
      
      // Add bot response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error in handleSendMessage:', error);
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
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
        <div className="w-80 bg-background rounded-xl shadow-lg border flex flex-col max-h-[500px] overflow-hidden backdrop-blur-sm">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-4 rounded-t-xl flex justify-between items-center">
            <h3 className="font-semibold">Portfolio Assistant</h3>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="text-primary-foreground hover:text-white h-8 w-8 p-0"
            >
              ×
            </Button>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-muted/10">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-xl ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-none'
                        : 'bg-secondary text-secondary-foreground rounded-bl-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] px-4 py-2 rounded-xl bg-secondary text-secondary-foreground rounded-bl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* Chat Input */}
          <div className="p-3 border-t bg-muted/10">
            <div className="flex space-x-2">
              <input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-input rounded-lg focus:outline-none focus:ring-1 focus:ring-primary bg-background"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                className="bg-primary hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <span className="h-2 w-2 bg-white rounded-full mr-1 animate-pulse"></span>
                    <span className="h-2 w-2 bg-white rounded-full mr-1 animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                    <span className="h-2 w-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                  </span>
                ) : 'Send'}
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 flex items-center justify-center shadow-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 fixed bottom-6 right-6"
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

export default FloatingButtonChat;