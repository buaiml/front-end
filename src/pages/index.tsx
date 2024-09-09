import React from 'react';
import Layout from '../components/Layout';
import FadeInSection from '../components/FadeInSection';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 space-y-16">
        <FadeInSection>
          <h1 className="text-4xl font-bold mb-8 text-white">Welcome to BU AI/ML Club</h1>
        </FadeInSection>
        <FadeInSection>
          <p className="text-xl mb-8 text-white">Exploring the frontiers of Artificial Intelligence and Machine Learning</p>
        </FadeInSection>
        <FadeInSection>
          <div className="bg-accent3/20 backdrop-blur-sm p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
            <p className="text-white">To foster a community of AI and ML enthusiasts, promoting learning and innovation in the field.</p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="bg-fuchsia-900/30 backdrop-blur-sm p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Upcoming Events</h2>
            <ul className="list-disc list-inside text-white">
              <li>AI Ethics Workshop - May 15th</li>
              <li>Machine Learning Hackathon - June 1st-3rd</li>
              <li>Guest Lecture: Deep Learning in Computer Vision - June 20th</li>
            </ul>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="bg-accent3/20 backdrop-blur-sm p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Join Us</h2>
            <p className="text-white">Interested in AI and ML? Join our Discord server to connect with other members and stay updated on our events!</p>
            <button className="bg-accent3 hover:bg-accent3/80 text-white font-bold py-2 px-4 rounded mt-4">Join our Discord</button>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="bg-fuchsia-900/30 backdrop-blur-sm p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
            <p className="text-white">Have questions or want to get involved? Send us an email at
              <a href="mailto:nerd@bu.edu" className="text-accent3">
                {' '}
              </a>
            </p>
          </div>
        </FadeInSection>
      </div>
    </Layout>
  );
};

export default Home;