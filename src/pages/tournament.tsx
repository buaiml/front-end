import React, { useEffect, useRef, useState } from 'react';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';
import { Award } from 'lucide-react';

interface PrizeInfo {
  id: string;
  place: string;
  prize: string;
}

const PrizeItem: React.FC<{ prizeInfo: PrizeInfo }> = ({ prizeInfo }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-4 flex flex-col items-center">
      <Award className="text-yellow-400 w-8 h-8 mb-2" />
      <h3 className="text-lg font-semibold text-white">{prizeInfo.place}</h3>
      <p className="text-gray-300 text-sm">{prizeInfo.prize}</p>
    </div>
  );
};

const Tournament: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [prizes] = useState<PrizeInfo[]>([
    { id: '1', place: '1st Place', prize: '$1000' },
    { id: '2', place: '2nd Place', prize: '$500' },
    { id: '3', place: '3rd Place', prize: '$250' },
  ]);

  useEffect(() => {
    const handleResize = () => {
      if (iframeRef.current) {
        iframeRef.current.style.width = `${window.innerWidth}px`;
        iframeRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Layout>
      <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900">
        <iframe
          ref={iframeRef}
          src="/pacman/index.html"
          className="absolute top-0 left-0 w-full h-full border-0 pointer-events-none"
          title="Pacman Game Background"
        />
        <div className="relative z-10 h-full flex flex-col justify-center items-center p-4">
          <FadeInSection>
            <h1 className="text-white text-center font-mono font-extrabold mb-4 w-full px-4" style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: '1.1'
            }}>
              Pacman AI Tournament
            </h1>
          </FadeInSection>

          <FadeInSection>
            <p className="text-gray-300 text-center text-sm sm:text-base font-mono mb-6 max-w-2xl">
              Join us for an exciting day of AI-powered Pacman battles! Showcase your reinforcement learning skills and compete for amazing prizes.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {prizes.map((prize) => (
                <PrizeItem key={prize.id} prizeInfo={prize} />
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-4 mb-6 max-w-2xl w-full">
              <h2 className="text-xl font-semibold text-white mb-2 font-mono">Event Details</h2>
              <ul className="text-gray-300 text-sm space-y-1 font-mono">
                <li><strong>Date & Time:</strong> October 26th, 2024, 10:00 AM - All Day</li>
                <li><strong>Location:</strong> Boston University, CAS 522</li>
                <li><strong>Format:</strong> Reinforcement learning Pacman AI agents</li>
                <li><strong>Equipment:</strong> Bring your own laptop</li>
                <li><strong>Eligibility:</strong> Open to all BU students and faculty</li>
              </ul>
            </div>
          </FadeInSection>

          <FadeInSection>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 font-mono text-sm">
              Register Now
            </button>
          </FadeInSection>
        </div>
      </div>
    </Layout>
  );
};

export default Tournament;
