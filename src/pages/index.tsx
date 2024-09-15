import React from 'react';
import Layout from '../components/Layout';
import FadeInSection from '../components/FadeInSection';
import Link from "next/link";
import EventSection from '../components/EventSection';
import SnapScroll from '../components/SnapScroll';

const Home: React.FC = () => {
  return (
    <Layout>
      <div style={{
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth'
      }}>
        <SnapScroll>
          <div className="relative min-h-200vh">
            <div className="container mx-auto px-8 py-24 min-h-screen flex flex-col justify-center items-center">
              <FadeInSection>
                <h1 className="text-6xl font-mono font-extrabold mb-8 text-white text-center">
                  Boston University AI/ML Club
                </h1>
              </FadeInSection>

              <FadeInSection>
                <div
                  className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg max-w-2xl">
                  <h2 className="text-3xl font-bold mb-6 text-white">About Us</h2>
                  <p className="text-gray-300 mb-6 text-lg">
                    The Boston University AI/ML Club is a student-run organization dedicated to teaching the BU
                    community
                    to build their own models and projects. Join our community to explore the fascinating world of AI
                    and machine learning!
                  </p>
                  <Link
                    href="https://discord.gg/8Gf3vJ7"
                    className="text-blue-300 hover:text-blue-100 transition duration-300 text-lg"
                  >
                    Join our Discord →
                  </Link>
                </div>
              </FadeInSection>
            </div>
          </div>

          <div className="relative min-h-screen bg-white">
            <EventSection/>
          </div>
          <div className="relative min-h-screen bg-accent1"/>
          <div className="relative min-h-screen bg-accent2"/>
        </SnapScroll>
      </div>
    </Layout>
  );
};

export default Home;
