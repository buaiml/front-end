import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollDownArrowProps {
  onScroll: () => void;
}

const ScrollDownArrow: React.FC<ScrollDownArrowProps> = ({ onScroll }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);

    const handleScroll = () => {
      setHasScrolled(true);
      window.removeEventListener('scroll', handleScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    onScroll();
    setHasScrolled(true);
  };

  if (hasScrolled) return null;

  return (
    <div
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ChevronDown
        size={48}
        className={`animate-bounce transition-colors duration-300 ${
          isHovered ? 'text-accent3' : 'text-white'
        }`}
      />
    </div>
  );
};

export default ScrollDownArrow;
