'use client';

import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

'use client';

import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) {
      // If no message, open WhatsApp directly
      window.open('https://wa.me/919448987711', '_blank');
    } else {
      // Open WhatsApp with the typed message
      const encodedMessage = encodeURIComponent(inputValue);
      window.open(`https://wa.me/919448987711?text=${encodedMessage}`, '_blank');
    }
    
    // Reset input and close modal
    setInputValue('');
    setIsOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-all duration-300 hover:scale-110"
          size="icon"
          aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <WhatsAppIcon className="h-7 w-7" />
          )}
        </Button>
      </div>

      {/* WhatsApp Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-md bg-white rounded-2xl shadow-2xl border border-stone-200 z-40 flex flex-col overflow-hidden">
          {/* Header with WhatsApp green */}
          <div className="relative h-32 bg-green-500 rounded-t-2xl overflow-hidden">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-10 bg-black/20 hover:bg-black/40 p-2 rounded-full transition"
            >
              <X className="h-5 w-5 text-white" />
            </button>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
              <WhatsAppIcon className="h-12 w-12 mb-3" />
              <h2 className="text-xl font-bold mb-1">Chat with us on WhatsApp</h2>
              <p className="text-sm text-green-50">We'll respond as soon as possible</p>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-6 flex flex-col justify-center items-center text-center">
            <p className="text-sm text-stone-600 mb-6">
              Type your message below or click "Send" to start chatting with us on WhatsApp
            </p>
            
            {/* Quick message suggestions */}
            <div className="w-full space-y-2 mb-6">
              <button
                onClick={() => setInputValue("Hello! I'd like to know more about your stone collections.")}
                className="w-full text-left text-sm p-3 border border-stone-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition"
              >
                💬 Ask about collections
              </button>
              <button
                onClick={() => setInputValue("I need a quote for my project.")}
                className="w-full text-left text-sm p-3 border border-stone-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition"
              >
                💰 Request a quote
              </button>
              <button
                onClick={() => setInputValue("I'd like to visit your store.")}
                className="w-full text-left text-sm p-3 border border-stone-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition"
              >
                📍 Visit store location
              </button>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-stone-200 bg-stone-50">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 text-sm bg-white"
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="bg-green-500 hover:bg-green-600 px-6"
              >
                <Send className="h-4 w-4 mr-1" />
                Send
              </Button>
            </div>
            <p className="text-xs text-stone-500 mt-2 text-center">
              This will open WhatsApp to continue the conversation
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;