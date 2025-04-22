import React, { useState } from 'react';
import Button from './Button';
import { MessageSquare, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const HealthAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I am your wellness assistant. How can I help you today?',
      sender: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const toggleAssistant = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate assistant response
    setTimeout(() => {
      const responses = [
        "I understand how you're feeling. Let's work through this together.",
        "That's a common concern. Have you tried deep breathing exercises?",
        "I'm here to support you. Can you tell me more about what you're experiencing?",
        "Remember that progress takes time. Be patient with yourself.",
        "It sounds like you're taking positive steps. That's wonderful to hear!"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const assistantMessage: Message = {
        id: Date.now().toString(),
        text: randomResponse,
        sender: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={toggleAssistant}
        className="fixed bottom-6 right-6 bg-teal-500 hover:bg-teal-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Health Assistant"
      >
        <MessageSquare size={24} />
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-sm bg-white rounded-lg shadow-xl overflow-hidden z-50 border border-gray-200 animate-slide-up">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Health Assistant</h3>
              <button 
                onClick={toggleAssistant}
                className="text-white/80 hover:text-white"
                aria-label="Close assistant"
              >
                &times;
              </button>
            </div>
          </div>
          
          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-teal-500 text-white rounded-tr-none'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
                  }`}
                >
                  {message.text}
                </div>
                <div
                  className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-gray-500' : 'text-gray-500'
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="text-left mb-4">
                <div className="inline-block px-4 py-2 rounded-lg bg-white text-gray-800 border border-gray-200 rounded-tl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-r-md transition-colors"
              disabled={!input.trim()}
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default HealthAssistant;