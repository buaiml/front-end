import React from 'react';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';

interface ResourceCategory {
  title: string; 
  links: { name: string; url: string }[]; 
}

interface ResourceItem {
  title: string; 
  categories: ResourceCategory[];
}

const resources: ResourceItem[] = [
  {
    title: 'Deep Learning',
    categories: [
      {
        title: 'Code',
        links: [
            { name: 'Neural networks from scratch', url: 'https://github.com/buaiml/NeuralNetworksFromScratch' },
            { name: 'Snake', url: 'https://github.com/buaiml/Snake4Neat' },
            { name: 'Python Intro', url: 'https://colab.research.google.com/drive/1osQazDmdVf8HsCACOQUma6EORo07o1g2?usp=sharing' },
        ],
      },
      {
        title: 'Slides',
        links: [
          { name: 'Artificial Neural Networks', url: 'https://docs.google.com/presentation/d/1B_oRw8HvR425OCjllCO_4hMacEQ5hDab/edit?usp=sharing&ouid=111860343331968100995&rtpof=true&sd=true'},
          { name: 'Intro', url: 'https://docs.google.com/presentation/d/1wE2ZoodhhC7ZxuyP0UScniav-FyDJh_6LF0bM9JRT8k/edit?usp=sharing' },
          { name: 'What is a Neural Network', url: 'https://docs.google.com/presentation/d/1QGXX61Jr8A0m2FFiI2a-wpRMn70O48kHPPbhJahOd2o/edit?usp=sharing'},
          { name: 'Neural Networks from scratch', url: 'https://docs.google.com/document/d/1s5TtpFIGqU_u_wgWib9xjhd3ADWbwFkgSea9VECi3ho/edit?usp=sharing' },
          { name: 'Evolving Neural Networks', url: 'https://docs.google.com/presentation/d/1arAxYO94sDOkMPFPvT4vOa1dbRLVayqN4zd0PQdlMzo/edit?usp=sharing' },
          { name: 'Protecting Innovation through Speciation', url: 'https://docs.google.com/presentation/d/1cxRkXM4oOSXEYvgEBHb5jNmEeWQrDRzk-YAF0h3wkAc/edit?usp=sharing' },
          { name: 'Playing Snake', url: 'https://docs.google.com/presentation/d/1vibLcTLtCu8Ml3NqWPbrN4wxcFE5YWt5--Po3FpwHvQ/edit?usp=sharing' },
          { name: 'Intro to Computer Vision', url: 'https://docs.google.com/presentation/d/1rC_EwIXJAsFOlKQZmJvSklpDdSqR-tCQ/edit?usp=share_link&ouid=111860343331968100995&rtpof=true&sd=true' },
        ],
      },
      {
        title: 'Videos',
        links: [
          { name: 'How to solve XOR', url: 'https://youtu.be/0-XZOinTUYI?si=_5mkJdfhuFd3iXhP'},
          { name: 'Writing the data Structure', url: 'https://youtu.be/WYqFIJARnSw?si=0nt3emhpdef_EIJJ'},
        ],
      },
      {
        title: 'Labs',
        links: [
          { name: 'Intro to Perceptrons and ANNs', url: 'https://drive.google.com/file/d/1U6OzVB8xJDy5o6pMaQAjrsFuQbQFvLcZ/view?usp=sharing'},
          { name: 'MLP with Python', url: 'https://drive.google.com/file/d/1rPIWxKUs8LlkJMGlhSW7G8kslx1XS4Wc/view?usp=sharing' },
        ]
      },
      {
        title: 'Paper Reading',
        links: [
          { name: 'Augmenting Topologiea', url: 'https://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf'},
        ]
      },
      {
        title: 'Shared on Discord',
        links: [
          { name: 'OpenAI recommended papers', url: 'https://spinningup.openai.com/en/latest/spinningup/keypapers.html'},
          { name: 'Jetbrains Free Educational License', url: 'https://www.jetbrains.com/community/education/#students'},
          { name: 'Github Student Developer Pack', url: 'https://education.github.com/pack'},
          { name: 'Pytorch Tutorials', url: 'https://pytorch.org/tutorials/'},
          { name: 'How to Create a Neural Network', url: 'https://youtu.be/hfMk-kjRv4c?si=TGyFKCkzuDVEQ4FM'},
          { name: 'Liner.ai', url: 'https://liner.ai'},
          { name: 'NEAT Intro', url: 'https://youtu.be/VMQOa4-rVxE?si=xFUHnbZaZPL9puOa' },
          { name: 'Tensorflow - Neural Network Playground', url: 'https://playground.tensorflow.org/' },
          { name: 'Trending Research', url: 'https://paperswithcode.com'},
        ],
      },
    ],
  },
  {
    title: 'Pacathon',
    categories: [
      {
        title: 'Code',
        links: [
          { name: 'Pacathon Repository', url: 'https://github.com/nn/basics' },
        ],
      },
      {
        title: 'Videos',
        links: [
          { name: 'Getting Started', url: 'https://youtu.be/L6oWLffBQmA?si=HwBXCkdWMrfT76Pr'},
          { name: 'Training your Neural Network', url: 'https://youtu.be/QRUsuvQZHrE?si=RlaTexmtgvZv0FEe'},
          { name: 'Pretraining your Models', url: 'https://youtu.be/2mkhrvVbZsI?si=DdDW3NosXcVVz-P5'},
          { name: 'Submitting your Final Network', url: 'https://youtu.be/mvRI4aAv8d8?si=2huQ6FgByYb4DDz_'},
        ]
      },
      {
        title: 'Info',
        links: [
          { name: 'Flyer', url: 'https://drive.google.com/file/d/118LzEnC1WeGVtinfh8GK68m1M7nLK4Mi/view?usp=sharing' },
          { name: 'Schedule', url: 'https://drive.google.com/file/d/1wtejpDXpMTWatB6Y0g_f7ao9DFirdA30/view?usp=sharing' },
        ],
      },
    ],
  },
];

const ResourceItem: React.FC<{ resource: ResourceItem }> = ({ resource }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <div className="bg-black bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-mono font-bold text-white mb-4">
            {resource.title}
          </h3>
          {resource.categories.map((category, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-lg sm:text-xl text-white font-mono font-bold">
                {category.title}
              </h4>
              <ul className="list-disc list-inside text-gray-300">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline font-mono"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Resources: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900">
        <div className="pt-24 pb-16">
          <FadeInSection>
            <h1
              className="text-white text-center font-mono font-extrabold mb-12 w-full px-4"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                lineHeight: '1.1',
              }}
            >
              Resources
            </h1>
          </FadeInSection>
          {resources.map((resource, index) => (
            <FadeInSection key={index} delay={index * 200}>
              <ResourceItem resource={resource} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Resources;