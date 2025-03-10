'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = [
    { name: 'Etusivu', href: '/' },
    { name: 'Työmaa-assistentti', href: '/playground' },
    { name: 'Blogi', href: 'https://testing-1.ai-studio-art-bachmann.fi' },
    { name: 'Yhteystiedot', href: '/yhteystiedot' },
    { name: 'Test', href: '/test' },
  ];

  return (
    <header className="relative header-bg shadow-md">
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-white">AI Studio Art Bachmann</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="header-link"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/yhteystiedot" className="bg-[#d66204] text-white hover:bg-[#c05a04] transition-colors px-4 py-2 rounded-md" style={{ fontSize: '1.5rem' }}>
            Ota yhteyttä
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-white rounded-md md:hidden hover:text-gray-200 hover:bg-opacity-75"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Avaa valikko</span>
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute z-10 w-full header-bg shadow-lg md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-white rounded-md hover:text-gray-200 hover:bg-opacity-75"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/yhteystiedot"
              className="block px-3 py-2 text-base font-medium text-white bg-[#d66204] hover:bg-[#c05a04] rounded-md" 
              style={{ fontSize: '1.5rem' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Ota yhteyttä
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
