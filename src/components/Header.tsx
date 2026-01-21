import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from "next/image";
import SocialButtons from "@/components/SocialButtons";
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  const links = [
    { key: "Home", value: "/" },
    { key: "Events", value: "/events" },
    { key: "Team", value: "/team" },
    { key: "Resources", value: "/resources" },
    { key: "Gallery", value: "/gallery" },
    { key: "Contact Us", value: "/contact" },
  ];

  // A reduced set of links for medium-sized screens
  const reducedLinks = links.filter(link => ["Home", "Events", "Contact Us"].includes(link.key));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="bg-background/80 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="AI Society Logo" width={40} height={40} className="mr-2"/>
              <span className="text-2xl font-bold sm:inline">AI Society</span>
            </Link>

            {/* Full menu on lg and above */}
            <div className="hidden lg:flex items-center space-x-8">
              {links.map((item) => (
                <Link
                  key={item.key}
                  href={item.value}
                  className={`font-mono text-lg transition-all duration-300 ease-in-out
                             relative after:content-[''] after:absolute after:bottom-0 after:left-0
                             after:w-full after:h-0.5 after:bg-accent3
                             after:transition-transform after:duration-300
                             ${isActive(item.value)
                               ? 'text-accent3 after:scale-x-100'
                               : 'text-white hover:text-accent3 after:scale-x-0 hover:after:scale-x-100'
                             }`}
                >
                  {item.key}
                </Link>
              ))}
            </div>

            {/* Reduced menu on md to lg (hidden on lg, shown on md and above) */}
            <div className="hidden md:flex lg:hidden items-center space-x-8">
              {reducedLinks.map((item) => (
                <Link
                  key={item.key}
                  href={item.value}
                  className={`font-mono text-lg transition-all duration-300 ease-in-out
                             relative after:content-[''] after:absolute after:bottom-0 after:left-0
                             after:w-full after:h-0.5 after:bg-accent3
                             after:transition-transform after:duration-300
                             ${isActive(item.value)
                               ? 'text-accent3 after:scale-x-100'
                               : 'text-white hover:text-accent3 after:scale-x-0 hover:after:scale-x-100'
                             }`}
                >
                  {item.key}
                </Link>
              ))}
            </div>

            {/* Social buttons only show on lg and above */}
            <div className="hidden lg:flex">
              <SocialButtons />
            </div>

            {/* Mobile menu button (visible below md) */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <div className="flex flex-col space-y-4">
                {links.map((item) => (
                  <Link
                    key={item.key}
                    href={item.value}
                    className={`font-mono text-lg transition-all duration-300 ease-in-out
                               ${isActive(item.value) ? 'text-accent3' : 'text-white hover:text-accent3'}`}
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
