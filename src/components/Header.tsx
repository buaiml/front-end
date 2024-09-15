import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import SocialButtons from "@/components/SocialButtons";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links: { key: string, value: string }[] = [
    {key: "Home", value: "/"},
    {key: "Events", value: "/events"},
    {key: "Discord", value: "https://discord.gg/TyubkeGSXj"},
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="bg-background/80 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4 flex items-center">
          <div className="flex-1">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="AI Society Logo" width={40} height={40} className="mr-2"/>
              <span className="text-2xl font-bold">AI Society</span>
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <ul className="flex space-x-8">
              {links.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.value}
                    className="text-white font-mono text-xl transition-all duration-300 ease-in-out
                               hover:text-accent3
                               relative after:content-[''] after:absolute after:bottom-0 after:left-0
                               after:w-full after:h-0.5 after:bg-accent3
                               after:transform after:scale-x-0 after:transition-transform after:duration-300
                               hover:after:scale-x-100"
                  >
                    {item.key}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex justify-end">
            <SocialButtons />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
