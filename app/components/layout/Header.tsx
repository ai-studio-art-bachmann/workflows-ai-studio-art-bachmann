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
    { name: 'Palvelut', href: '/palvelut' },
    { name: 'Chat-assistentti', href: '/chat' },
    { name: 'Blogi', href: '/blog' },
    { name: 'Yhteystiedot', href: '/yhteystiedot' },
    { name: 'Test', href: '/test' },
  ];

  return (
    <header className="relative bg-white shadow-sm dark:bg-dark">
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary-600">AI Studio Art Bachmann</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/yhteystiedot" className="btn btn-primary">
            Ota yhteyttä
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-gray-700 rounded-md md:hidden hover:text-primary-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-800"
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
        <div className="absolute z-10 w-full bg-white shadow-lg md:hidden dark:bg-dark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-primary-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/yhteystiedot"
              className="block px-3 py-2 text-base font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700"
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
