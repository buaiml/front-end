import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-md py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <button className="bg-accent3 hover:bg-accent3/80 text-white font-bold py-2 px-4 rounded">
            Join our Discord
          </button>
        </div>
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Resources</h3>
            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer">AI/ML Resources</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Boston University</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Follow Us</h3>
            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
