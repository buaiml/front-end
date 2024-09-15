import React, { useRef } from 'react';
import Layout from '../components/Layout';
import FadeInSection from '../components/FadeInSection';
import Link from "next/link";
import EventSection from '../components/EventSection';
import SnapScroll from '../components/SnapScroll';
import ScrollDownArrow from '../components/ScrollDownArrow';

const Home: React.FC = () => {
  const snapScrollRef = useRef<{ scrollTo: (index: number) => void } | null>(null);

  const handleScroll = () => {
    if (snapScrollRef.current) {
      snapScrollRef.current.scrollTo(1);
    }
  };

  return (
    <Layout>
      <div style={{
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth'
      }}>
        <SnapScroll ref={snapScrollRef}>
          <div className="relative container mx-auto px-8 min-h-screen flex flex-col">
            <FadeInSection>
              <h1 className="text-white text-center font-mono font-extrabold mt-32 mb-8 w-full" style={{
                fontSize: 'min(10vw, 10rem)',
                lineHeight: '1.1'
              }}>
                AI Society
              </h1>
            </FadeInSection>

            <div className="flex-grow flex items-center justify-center">
              <FadeInSection>
                <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg max-w-2xl">
                  <h2 className="text-3xl font-bold mb-6 text-white">About Us</h2>
                  <p className="text-gray-300 mb-6 text-lg">
                    Boston University's AI Society: A community of students passionate about artificial intelligence and
                    machine learning. We host workshops, events, and projects to help students learn and grow in the field
                    of AI.
                  </p>
                </div>
              </FadeInSection>
            </div>
            <ScrollDownArrow onScroll={handleScroll}/>
          </div>

          <div className="relative min-h-screen bg-accent1">
            <FadeInSection>
              <EventSection/>
            </FadeInSection>
          </div>
          <div className="relative min-h-screen bg-accent2"/>
        </SnapScroll>
      </div>
    </Layout>
  );
};

export default Home;
