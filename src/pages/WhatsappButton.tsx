import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <a
        href="https://wa.me/237673398046"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 sm:space-x-3 bg-green-500 text-white px-3 py-3 sm:px-4 sm:py-3 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 elevation-high"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className={`font-medium transition-all duration-300 text-sm sm:text-base ${
          isHovered ? 'opacity-100 w-auto max-w-20 sm:max-w-24' : 'opacity-0 w-0 max-w-0'
        } overflow-hidden whitespace-nowrap`}>
          WhatsApp
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;