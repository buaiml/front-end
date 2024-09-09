import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <AnimatedBackground />
      <Header />
        <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;