'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, MessageSquare, Phone, Mail, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

type ChatMode = 'categories' | 'whatsapp' | 'phone' | 'email';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMode, setChatMode] = useState<ChatMode>('categories');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleCategorySelect = (mode: ChatMode, title: string) => {
    if (mode === 'whatsapp') {
      // Show chat interface for WhatsApp
      setChatMode('whatsapp');
    } else if (mode === 'phone') {
      // Directly open phone dialer
      window.open('tel:+919876543210');
    } else if (mode === 'email') {
      // Directly open email
      window.open('mailto:dishimpex@gmail.com');
    }
  };

  const handleStartChat = () => {
    setChatMode('whatsapp');
    setMessages([
      {
        id: '1',
        text: 'Hello! Welcome to Stones Gallery. How can I help you today?',
        sender: 'bot',
        timestamp: new Date(),
      },
    ]);
  };

  const handleBackToCategories = () => {
    setChatMode('categories');
    setMessages([]);
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return 'Hello! Welcome to Stones Gallery. How can I assist you with our stone collections today?';
    }

    if (message.includes('marble') || message.includes('granite') || message.includes('stone')) {
      return 'We offer a wide variety of premium natural stones including marble, granite, limestone, and more. Each piece is carefully selected for quality. Would you like to know about our current collections or pricing?';
    }

    if (message.includes('price') || message.includes('cost') || message.includes('expensive')) {
      return 'Our prices are competitive and depend on the type of stone, size, and finish. We offer various quality grades to suit different budgets. Would you like me to connect you with our sales team for a personalized quote?';
    }

    if (message.includes('location') || message.includes('address') || message.includes('visit')) {
      return 'You can visit our showroom at [Your Address Here]. We\'re open Monday to Saturday, 9 AM to 7 PM. Would you like directions or to schedule an appointment?';
    }

    if (message.includes('contact') || message.includes('phone') || message.includes('email')) {
      return 'You can reach us at:\n📞 Phone: [Your Phone Number]\n📧 Email: dishimpex@gmail.com\n🌐 Website: stonesgallery.in\n\nOur team will be happy to assist you!';
    }

    if (message.includes('project') || message.includes('construction') || message.includes('building')) {
      return 'We provide stones for residential and commercial projects. Our experts can help you choose the right stones for your specific needs. Tell me more about your project!';
    }

    if (message.includes('quality') || message.includes('warranty') || message.includes('guarantee')) {
      return 'All our stones come with quality assurance. We source from trusted quarries and provide proper documentation. We also offer installation guidance and after-sales support.';
    }

    if (message.includes('thank') || message.includes('thanks')) {
      return 'You\'re welcome! It was my pleasure to assist you. Feel free to ask if you have any more questions about our stone collections.';
    }

    return 'I\'m here to help you with information about our stone collections, pricing, projects, or any other questions you might have. What would you like to know?';
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Open WhatsApp with the typed message
    const encodedMessage = encodeURIComponent(inputValue);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank');
    
    // Reset input
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-stone-800 hover:bg-stone-700 shadow-lg transition-all duration-300 hover:scale-110"
          size="icon"
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-md bg-white rounded-2xl shadow-2xl border border-stone-200 z-40 flex flex-col overflow-hidden max-h-[600px]">
          {/* Header with background image */}
          <div className="relative h-40 bg-gradient-to-r from-stone-800 to-stone-700 rounded-t-2xl overflow-hidden">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
            
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full transition"
            >
              <X className="h-5 w-5 text-white" />
            </button>

            {/* Content */}
            {chatMode === 'categories' ? (
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                <h2 className="text-2xl font-bold mb-2">How can we help you today?</h2>
                <p className="text-sm text-stone-200">Select a category so we can serve you better.</p>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <button
                  onClick={handleBackToCategories}
                  className="text-white hover:bg-white/20 p-2 rounded-full transition"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="text-white text-center flex-1">
                  <h3 className="font-semibold">Stones Gallery</h3>
                  <p className="text-xs text-stone-200">Online • Typically replies instantly</p>
                </div>
                <div className="w-10"></div>
              </div>
            )}
          </div>

          {/* Content Area */}
          {chatMode === 'categories' ? (
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {/* Chat with us */}
              <button
                onClick={() => handleCategorySelect('whatsapp', 'Chat with us')}
                className="w-full flex items-center gap-4 p-4 border border-stone-200 rounded-xl hover:border-stone-800 hover:bg-stone-50 transition group"
              >
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 transition">
                  <MessageSquare className="h-7 w-7 text-red-500" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-stone-900">Chat with us</h4>
                  <p className="text-sm text-stone-600 leading-snug">Have all your queries conveniently answered by our customer support executives via WhatsApp chat!</p>
                </div>
                <ChevronRight className="h-5 w-5 text-stone-400 flex-shrink-0" />
              </button>

              {/* Talk to us */}
              <button
                onClick={() => handleCategorySelect('phone', 'Talk to us')}
                className="w-full flex items-center gap-4 p-4 border border-stone-200 rounded-xl hover:border-stone-800 hover:bg-stone-50 transition group"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition">
                  <Phone className="h-7 w-7 text-amber-500" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-stone-900">Talk to us</h4>
                  <p className="text-sm text-stone-600 leading-snug">Give us a quick ring via Phone Call to have all your queries answered by our customer support team!</p>
                </div>
                <ChevronRight className="h-5 w-5 text-stone-400 flex-shrink-0" />
              </button>

              {/* Write to us */}
              <button
                onClick={() => handleCategorySelect('email', 'Write to us')}
                className="w-full flex items-center gap-4 p-4 border border-stone-200 rounded-xl hover:border-stone-800 hover:bg-stone-50 transition group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition">
                  <Mail className="h-7 w-7 text-blue-500" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-stone-900">Write to us</h4>
                  <p className="text-sm text-stone-600 leading-snug">Get in touch with us via E-mail and we'll get back to you.</p>
                </div>
                <ChevronRight className="h-5 w-5 text-stone-400 flex-shrink-0" />
              </button>
            </div>
          ) : (
            <>
              {/* WhatsApp Input */}
              <div className="flex-1 p-6 flex flex-col justify-center items-center text-center">
                <MessageSquare className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold text-stone-900 mb-2">Start WhatsApp Chat</h3>
                <p className="text-sm text-stone-600 mb-6">Type your message below and we'll open WhatsApp for you to continue the conversation.</p>
              </div>

              {/* Input */}
              <div className="p-4 border-t border-stone-200">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 text-sm"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    size="sm"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;