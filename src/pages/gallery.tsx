import React, { useState, useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';

const Gallery: React.FC = () => {
  const sections = [
    {
      title: 'General Meeting',
      images: [
        { src: '/images/9_13.jpg', alt: 'General Meeting 1 - Collin' },
        { src: '/images/9_13-2.jpg', alt: 'General Meeting 1 - Collin' },
        { src: '/images/9_13-3.jpg', alt: 'General Meeting 1 - Collin' },
        { src: '/images/9_20.jpeg', alt: 'General Meeting 2 - Collin' },
        { src: '/images/9_20-2.jpeg', alt: 'General Meeting 2 - Collin' },
        { src: '/images/9_20-3.jpeg', alt: 'General Meeting 2 - Collin' },
        { src: '/images/9_20-4.jpeg', alt: 'General Meeting 2 - Collin' },
        { src: '/images/9_20-5.jpeg', alt: 'General Meeting 2 - Collin' },
        { src: '/images/9_27.jpeg', alt: 'General Meeting 3 - Collin' },
        { src: '/images/9_27-2.jpeg', alt: 'General Meeting 3 - Collin' },
        { src: '/images/10_4.jpeg', alt: 'General Meeting 4 - Alan' },
        { src: '/images/10_4-2.jpeg', alt: 'General Meeting 4 - Alan' },
        { src: '/images/10_4-3.jpeg', alt: 'General Meeting 4 - Alan' },
        { src: '/images/10_11-2.jpeg', alt: 'General Meeting 5 - Collin' },
        { src: '/images/10_18.jpeg', alt: 'General Meeting 6 - Collin' },
        { src: '/images/10_18-2.jpeg', alt: 'General Meeting 6 - Collin' },
        { src: '/images/10_18-3.jpeg', alt: 'General Meeting 6 - Collin' },
        { src: '/images/10_18-5.jpeg', alt: 'General Meeting 6 - Collin' },
        { src: '/images/10_18-6.jpeg', alt: 'General Meeting 6 - Collin' },
        { src: '/images/11_1.jpeg', alt: 'General Meeting 7 - Alan' },
        { src: '/images/11_1-3.jpeg', alt: 'General Meeting 7 - Alan' },
        { src: '/images/11_8.jpeg', alt: 'General Meeting 8 - Alan' },
      ],
    },
    {
      title: 'Paper Reading',
      images: [
        { src: '/images/9_19.jpeg', alt: 'Guest Speaker 1 - Shaunak' },
        { src: '/images/9_19-2.jpeg', alt: 'Guest Speaker 1 - Shaunak' },
        { src: '/images/10_19.jpeg', alt: 'Paper reading 1 - Collin' },
        { src: '/images/10_19-2.jpeg', alt: 'Paper reading 1 - Collin' },
        { src: '/images/10_19-3.jpeg', alt: 'Paper reading 1 - Collin' },
        { src: '/images/10_19-4.jpeg', alt: 'Paper reading 1 - Collin' },
      ],
    },
    {
      title: 'Pacathon',
      images: [
        { src: '/images/10_25.jpeg', alt: 'Office hours' },
        { src: '/images/10_25-2.jpeg', alt: 'Office hours' },
        { src: '/images/10_25-3.jpeg', alt: 'Office hours' },
        { src: '/images/10_25-5.jpeg', alt: 'Office hours' },
        { src: '/images/10_25-6.jpeg', alt: 'Office hours' },
        { src: '/images/10_25-7.jpeg', alt: 'Office hours' },
        { src: '/images/10_25-9.jpeg', alt: 'Office hours' },
        { src: '/images/10_26-2 2.jpeg', alt: 'Pacathon' },
        { src: '/images/10_26-3 2.jpeg', alt: 'Pacathon' },
        { src: '/images/10_26-2.jpeg', alt: 'Pacathon' },
        { src: '/images/10_26-3.jpeg', alt: 'Pacathon' },
        { src: '/images/10_26.jpg', alt: 'Pacathon' },
        { src: '/images/10_26-4.jpeg', alt: 'Pacathon' },
        { src: '/images/10_26-5.jpeg', alt: 'Pacathon' },
        { src: '/images/10_26-6.jpeg', alt: 'Pacathon' },
        { src: '/images/10_26-7.jpeg', alt: 'Pacathon' },
        { src: '/images/10_26-8.jpeg', alt: 'Pacathon' },
        { src: '/images/10_26-9.jpeg', alt: 'Pacathon' },
        { src: '/images/10_26-10.jpeg', alt: 'Pacathon' },
        { src: '/images/10_26-11.jpeg', alt: 'Pacathon' },
        { src: '/images/10_26-12.jpeg', alt: 'Pacathon' },
        { src: '/images/10_26-13.jpeg', alt: 'Pacathon' },
        { src: '/images/10_26-14.jpeg', alt: 'Pacathon' },
        { src: '/images/10_26-15.jpeg', alt: 'Pacathon' },
        { src: '/images/11_2-4.jpeg', alt: 'Winners' },
        { src: '/images/11_2-2.jpeg', alt: 'Winners' },
      ],
    },
    {
      title: 'Favorites',
      images: [
        { src: '/images/9_28-2.jpeg', alt: 'Terminator' },
        { src: '/images/9_28-3.jpeg', alt: 'Terminator' },
        { src: '/images/9_28.jpeg', alt: 'Terminator' },
        { src: '/images/9_27-3.jpeg', alt: 'Collin teaching' },
        { src: '/images/9_25.jpeg', alt: 'Collin at marci' },
        { src: '/images/10_5.jpeg', alt: 'Alan at STEM Splash' },
        { src: '/images/10_7.jpeg', alt: 'Collin and Alan' },
        { src: '/images/10_7-2.jpeg', alt: 'Collin and Dylan' },
        { src: '/images/10_11.jpeg', alt: 'Reel' },
        { src: '/images/10_18-4.jpeg', alt: 'Snake' },
        { src: '/images/10_25-4.jpeg', alt: 'Meeting pic' },
        { src: '/images/10_25-8.jpeg', alt: 'Collin' },
        { src: '/images/10_25-10.jpeg', alt: 'Dylan' },
        { src: '/images/11_2-3.jpeg', alt: 'Winners' },
      ],
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 flex flex-col items-center px-4 py-12">
        <h1 className="text-5xl sm:text-7xl font-extrabold text-white font-mono mb-12 text-center pt-20">
          Gallery
        </h1>
        {sections.map((section, index) => (
          <ImageCarousel key={index} section={section} />
        ))}
      </div>
    </Layout>
  );
};

const ImageCarousel: React.FC<{ section: { title: string; images: { src: string; alt: string }[] } }> = ({ section }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? section.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === section.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Jump to a specific image when clicking the dot
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [section.images.length]);

  return (
    <div
      className="w-full max-w-4xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 mb-16"
      ref={containerRef}
      style={{ position: 'relative' }}
    >
      <FadeInSection>
        <h2 className="text-3xl font-bold text-white font-mono mb-6 text-center">
          {section.title}
        </h2>
      </FadeInSection>
      <div className="relative flex flex-col items-center">
        {/* Fixed height/width container to prevent layout shift */}
        <div
          className="relative flex justify-center items-center overflow-hidden"
          style={{ width: '100%', height: '500px', maxHeight: '500px' }} // Adjust as needed
        >
          {/* Image */}
          <img
            src={section.images[currentIndex].src}
            alt={section.images[currentIndex].alt}
            className="rounded-lg shadow-lg object-contain w-full h-full"
          />

          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-900 p-2 rounded-full hover:bg-opacity-70 transition"
          >
            &#8249;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-900 p-2 rounded-full hover:bg-opacity-70 transition"
          >
            &#8250;
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4">
          {section.images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 mx-1 rounded-full focus:outline-none ${
                index === currentIndex
                  ? 'bg-white'
                  : 'bg-gray-400 bg-opacity-50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
