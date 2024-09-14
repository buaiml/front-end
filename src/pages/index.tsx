import React from 'react';
import Layout from '../components/Layout';
import FadeInSection from '../components/FadeInSection';
import Link from "next/link";
import EventsList from '../components/EventsList';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-8 py-24 space-y-16">
        <FadeInSection>
          <h1 className="text-4xl font-mono font-extrabold mb-8 text-white text-center">
            Boston University AI/ML Club
          </h1>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-8">
          <FadeInSection>
            <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-white">About Us</h2>
              <p className="text-gray-300 mb-4">
                The Boston University AI/ML Club is a student-run organization dedicated to teaching the BU community
                to build their own models and projects. Join our discord to get involved!
              </p>
              <Link
                href="https://discord.gg/8Gf3vJ7"
                className="text-blue-300 hover:text-blue-100 transition duration-300"
              >
                Join our Discord →
              </Link>
            </div>
          </FadeInSection>

          <FadeInSection>
            <EventsList/>
          </FadeInSection>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
