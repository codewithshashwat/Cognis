'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Features', href: '/features' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
      style={{
        backgroundColor: isScrolled ? 'rgba(10, 10, 15, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(232, 76, 43, 0.1)' : 'none',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative group"
          >
            <span
              className="text-3xl font-bold tracking-wider transition-all flex justify-center items-center duration-300"
              style={{ color: '#e84c2b' }}
            >
              <Image src="/logo.ico" alt="Cognis Logo" width="32" height="32" />
              ognis
            </span>
            <span
              className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
              style={{ backgroundColor: '#e84c2b' }}
            />
            <span
              className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-all duration-300"
              style={{ backgroundColor: '#e84c2b' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative py-2 text-sm font-medium tracking-wide transition-all duration-300 group"
                style={{ color: '#f2f2f2' }}
              >
                <span className="relative z-10 group-hover:scale-110 inline-block transition-transform duration-300">
                  {link.name}
                </span>
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full"
                  style={{ backgroundColor: '#e84c2b' }}
                />
                <span
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 blur-sm transition-opacity duration-300"
                  style={{ backgroundColor: '#e84c2b' }}
                />
              </Link>
            ))}
            {/* CTA Button */}
            <Link
              href="/contact"
              className="relative px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide overflow-hidden group"
              style={{ backgroundColor: '#e84c2b', color: '#f2f2f2' }}
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Get Started
              </span>
              <span
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"
              />
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"
                style={{ backgroundColor: '#e84c2b' }}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden relative p-2 rounded-lg overflow-hidden group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              style={{ backgroundColor: '#e84c2b' }}
            />
            <svg
              className="h-7 w-7 relative z-10 transition-all duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ color: '#f2f2f2' }}
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                  className="transition-all duration-300"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                  className="transition-all duration-300 group-hover:scale-110"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ backgroundColor: 'rgba(10, 10, 15, 0.98)' }}
      >
        <div className="px-6 py-6 space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative block px-5 py-4 rounded-xl font-medium tracking-wide overflow-hidden group transform transition-all duration-300 hover:translate-x-2"
              style={{
                color: '#f2f2f2',
                animationDelay: `${index * 75}ms`,
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">{link.name}</span>
              <span
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 blur-md transition-all duration-300"
                style={{ backgroundColor: '#e84c2b' }}
              />
              <span
                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 rounded-full group-hover:h-8 transition-all duration-300"
                style={{ backgroundColor: '#e84c2b' }}
              />
              <span
                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2.5 group-hover:translate-x-0"
                style={{ color: '#e84c2b' }}
              >
                →
              </span>
            </Link>
          ))}
          {/* Mobile CTA */}
          <Link
            href="/contact"
            className="relative block px-5 py-4 rounded-xl font-bold tracking-wide text-center overflow-hidden group mt-4"
            style={{ backgroundColor: '#e84c2b', color: '#f2f2f2' }}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="relative z-10">Get Started</span>
            <span
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"
              style={{ backgroundColor: '#ff5a36' }}
            />
            <span
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"
            />
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </nav>
  );
}