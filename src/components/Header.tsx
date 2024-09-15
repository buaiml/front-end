import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import SocialButtons from "@/components/SocialButtons";
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links: { key: string, value: string }[] = [
    {key: "Home", value: "/"},
    {key: "Events", value: "/events"},
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="bg-background/80 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="AI Society Logo" width={40} height={40} className="mr-2"/>
              <span className="text-2xl font-bold sm:inline">AI Society</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {links.map((item) => (
                <Link
                  key={item.key}
                  href={item.value}
                  className="text-white font-mono text-lg transition-all duration-300 ease-in-out
                             hover:text-accent3 relative after:content-[''] after:absolute after:bottom-0 after:left-0
                             after:w-full after:h-0.5 after:bg-accent3
                             after:transform after:scale-x-0 after:transition-transform after:duration-300
                             hover:after:scale-x-100"
                >
                  {item.key}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex">
              <SocialButtons />
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <div className="flex flex-col space-y-4">
                {links.map((item) => (
                  <Link
                    key={item.key}
                    href={item.value}
                    className="text-white font-mono text-lg transition-all duration-300 ease-in-out
                               hover:text-accent3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.key}
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <SocialButtons />
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
