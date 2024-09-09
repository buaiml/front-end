import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from "next/image";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className={`${scrolled ? 'bg-background/80 backdrop-blur-md' : ''}`}>
          <nav className={`container mx-auto px-4 py-4 flex justify-between items-center`}>
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="AI/ML Club Logo" width={40} height={40} className="mr-2"/>
              <span className="text-2xl font-bold">AI/ML Club</span>
            </Link>
            <ul className="flex space-x-4">
              {['Home', 'Events'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-white transition-all duration-300 ease-in-out
                               hover:text-accent3 hover:underline
                               relative after:content-[''] after:absolute after:bottom-0 after:left-0
                               after:w-full after:h-0.5 after:bg-accent3
                               after:transform after:scale-x-0 after:transition-transform after:duration-300
                               hover:after:scale-x-100"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div
          className={`h-4 bg-gradient-to-b from-background/80 to-transparent ${scrolled ? 'opacity-100' : 'opacity-0'}`}/>
      </header>
    </>
  );
};

export default Header;