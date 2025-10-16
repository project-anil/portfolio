'use client'
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const predefinedResponses: { [key: string]: string } = {
  hello: "Hi there! 👋 I'm here to help you learn more about this portfolio. Feel free to ask me anything!",
  hi: "Hello! 👋 How can I assist you today?",
  help: "I can help you with information about:\n• Skills and expertise\n• Projects and portfolio\n• Work experience\n• Contact information\n• Technologies used\n\nWhat would you like to know?",
  skills: "The portfolio showcases expertise in:\n• React & Next.js\n• TypeScript & JavaScript\n• Node.js & Python\n• UI/UX Design\n• Cloud Services (AWS, Azure)\n• Database Management\n\nAnd many more technologies! Check out the Technologies section for the full list.",
  projects: "You can explore various projects in the Portfolio section above, including web applications, mobile apps, and design work. Each project showcases different skills and technologies!",
  portfolio: "The Portfolio section features a collection of completed projects. Hover over each card to see more details and click to view the full project!",
  contact: "You can get in touch through:\n• Email: contact@example.com\n• Phone: +1 234 567 890\n• LinkedIn, GitHub, and Twitter\n\nOr simply fill out the contact form in the Contact section!",
  experience: "Check out the Resume section to see detailed work experience, education, and professional achievements. It includes timeline of positions and key accomplishments!",
  technologies: "The Technologies section showcases 15+ cutting-edge technologies including React, TypeScript, Python, AWS, Docker, and more. Each technology is actively used in projects!",
  services: "Services offered include:\n• Web Development\n• Mobile App Development\n• UI/UX Design\n• Cloud Solutions\n• Technical Consulting\n\nVisit the Services section for more details!",
  about: "This portfolio belongs to a passionate software developer with expertise in full-stack development, cloud architecture, and modern web technologies. Check the About section to learn more!",
  thanks: "You're welcome! Feel free to ask if you have any other questions! 😊",
  thank: "Happy to help! Let me know if there's anything else you'd like to know! 😊",
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! 👋 I'm your Chatbot assistant. Ask me anything about skills, projects, experience, or how to get in touch!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase().trim();
    
    // Check for exact matches first
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    // Default response
    return "That's an interesting question! While I'm a simple bot, you can find detailed information in the different sections of this portfolio. Try asking about skills, projects, experience, services, or contact information!";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#FFB400] to-[#ff8c00] text-[#0a0f1e] p-4 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(255,180,0,0.5)] transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? { scale: 0 } : { scale: 1 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] bg-[#0f1629] rounded-2xl shadow-2xl border border-[#1a2332] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#FFB400] to-[#ff8c00] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#0a0f1e] p-2 rounded-full">
                  <Bot className="w-5 h-5 text-[#FFB400]" />
                </div>
                <div>
                  <h3 className="text-[#0a0f1e]">Portfolio Assistant</h3>
                  <p className="text-xs text-[#0a0f1e]/80">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#0a0f1e] hover:bg-[#0a0f1e]/10 p-2 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-[#FFB400] to-[#ff8c00] text-[#0a0f1e]'
                        : 'bg-[#1a2332] text-gray-300'
                    }`}
                  >
                    <p className="whitespace-pre-wrap text-sm">{message.text}</p>
                    <span className={`text-xs mt-1 block ${
                      message.sender === 'user' ? 'text-[#0a0f1e]/70' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-[#1a2332] p-3 rounded-2xl">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-[#FFB400] rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-[#FFB400] rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-[#FFB400] rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-[#1a2332] border-t border-[#2a3442]">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-[#0f1629] text-gray-300 px-4 py-3 rounded-xl border border-[#2a3442] focus:outline-none focus:border-[#FFB400] transition-colors placeholder:text-gray-600"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-to-r from-[#FFB400] to-[#ff8c00] text-[#0a0f1e] p-3 rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,180,0,0.4)]"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
