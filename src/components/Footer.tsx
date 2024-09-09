import React from 'react';
import Link from 'next/link';
import SocialButtons from "@/components/SocialButtons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-md py-8">
      <SocialButtons />
      <div className="container mx-auto px-4">
      </div>
    </footer>
  );
};

export default Footer;
