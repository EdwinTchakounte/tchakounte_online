import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
  images: string[];
  autoSlide?: boolean;
  slideInterval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ 
  images, 
  autoSlide = true, 
  slideInterval = 4000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, slideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, slideInterval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-full overflow-hidden lg:rounded-lg bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Images Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex]}
              alt={`Profile ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:from-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/90 transition-all duration-300 shadow-lg z-10"
      >
        <ChevronLeft className="h-5 w-5 text-gray-700" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/90 transition-all duration-300 shadow-lg z-10"
      >
        <ChevronRight className="h-5 w-5 text-gray-700" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-blue-500 scale-110'
                : 'bg-white/60 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Overlay géométrique décoratif */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/20 rounded-tr-full hidden lg:block" />
      
      {/* Logo/Initiales au centre */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-24 h-24 lg:w-32 lg:h-32 border-2 border-white/80 backdrop-blur-sm flex items-center justify-center rounded-full bg-white/20"
        >
          <span className="text-2xl lg:text-3xl font-light text-white drop-shadow-lg">ET</span>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageSlider;