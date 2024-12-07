import React from 'react';
import Layout from '../components/Layout';
import FadeInSection from '../components/FadeInSection';

interface TeamMember {
  name: string;
  photo: string; 
  linkedin: string; 
}

interface TeamCategory {
  title: string;
  members: TeamMember[];
}

const teamData: TeamCategory[] = [
  {
    title: 'Presidents',
    members: [
      { name: 'Alan Nguyen', photo: '/images/alan-pic.png', linkedin: 'https://linkedin.com/in/nguyendesu' },
      { name: 'Collin Barber', photo: '/images/collin-pic.png', linkedin: 'https://linkedin.com/in/collin-barber-14489524a' },
    ],
  },
  {
    title: 'Officers',
    members: [
      { name: 'Anagha Nair', photo: '/images/anagha-pic.png', linkedin: 'https://linkedin.com/in/anagha-nair-152794200' },
      { name: 'Baiwen Zheng', photo: '/images/baiwen-pic.png', linkedin: 'https://linkedin.com/in/baiwenzheng' },
      { name: 'Danai Cabero', photo: '/images/danai-pic.png', linkedin: 'https://linkedin.com/in/danaicabero' },
      { name: 'Denali Schlesinger', photo: '/images/denali-pic.jpeg', linkedin: 'https://linkedin.com/in/denalischlesinger' },
      { name: 'Felix Fan', photo: '/images/felix-pic.png', linkedin: 'https://linkedin.com/in/felix-fan-055115173' },
      { name: 'Irene Deng', photo: '/images/irene-pic.png', linkedin: 'https://linkedin.com/in/irene-d-38551a219' },
      { name: 'Sabine Ambrosi', photo: '/images/sabine-pic.png', linkedin: 'https://linkedin.com/in/sabine-ambrosi' },
      { name: 'Varsha Athreya', photo: '/images/varsha-pic.png', linkedin: 'https://linkedin.com/in/varsha-athreya' },
      { name: 'Wes Jorgensen', photo: '/images/wes-pic.png', linkedin: 'https://linkedin.com/in/wes-jorgensen-b5530a20b' },
    ],
  },
  {
    title: 'Helpers',
    members: [
      { name: 'Amanda Eng', photo: '/images/amanda-pic.jpeg', linkedin: 'https://linkedin.com/in/amanda-k-eng' },
      { name: 'Dylan Lee', photo: '/images/dylan-pic.png', linkedin: 'https://linkedin.com/in/dylan-jae-lee' },
      { name: 'Ivan Khramtchenko', photo: '/images/ivan-pic.png', linkedin: 'https://linkedin.com/in/ivan-khr' }
    ],
  },
];


const Team: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-b from-indigo-900 to-purple-900 px-4 sm:px-6 lg:px-8">
        {/* Meet the Team */}
        <FadeInSection>
          <h1
            className="text-white text-center font-mono font-extrabold mb-16 w-full"
            style={{
              fontSize: 'clamp(3.5rem, 7vw, 5rem)', 
              lineHeight: '1.1',
              marginTop: '6rem', // lower
            }}
          >
            Meet the Team
          </h1>
        </FadeInSection>

        {/* Categories */}
        {teamData.map((category, index) => (
          <FadeInSection key={index} delay={index * 300}>
            <div className="w-full max-w-4xl mx-auto mb-12 text-center">
              {/* Title */}
              <h2
                className="text-2xl sm:text-3xl font-bold text-white mb-8 font-mono"
                style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', // Smaller
                }}
              >
                {category.title}
              </h2>
              {/* Members */}
              <div className="flex flex-wrap justify-center gap-8">
                {category.members.map((member, idx) => (
                  <div
                    key={idx}
                    className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg overflow-hidden p-6 w-64 text-center"
                  >
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full object-cover shadow-lg"
                    />
                    <h3
                      className="text-lg sm:text-xl font-medium text-white mt-4 font-mono"
                      style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', 
                      }}
                    >
                      {member.name}
                    </h3>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline text-sm sm:text-base"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </Layout>
  );
};

export default Team;