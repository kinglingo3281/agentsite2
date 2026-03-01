'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { siteConfig } from '@/lib/siteConfig';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-safe-top ${
        scrolled
          ? 'bg-white/20 dark:bg-gray-900/30 backdrop-blur-xl shadow-md'
          : 'bg-transparent'
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
      }}
    >
      <nav className="relative w-full px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link
            href="/"
            className={`flex items-center gap-3 text-xl sm:text-2xl font-serif font-bold transition-colors ${
              scrolled
                ? 'text-coastal-blue dark:text-white hover:text-coastal-seafoam'
                : 'text-white hover:text-blue-200'
            }`}
          >
            <img 
              src="/equal-housing.svg" 
              alt="Logo" 
              className="h-12 w-12 sm:h-14 sm:w-14"
            />
            {siteConfig.agentName}
          </Link>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/areas"
              className={`transition-colors font-medium ${
                scrolled
                  ? 'text-coastal-slate dark:text-gray-300 hover:text-coastal-blue'
                  : 'text-white hover:text-blue-200'
              }`}
            >
              Areas
            </Link>
            <Link
              href="/listings"
              className={`transition-colors font-medium ${
                scrolled
                  ? 'text-coastal-slate dark:text-gray-300 hover:text-coastal-blue'
                  : 'text-white hover:text-blue-200'
              }`}
            >
              Listings
            </Link>
            <Link
              href="/live"
              className={`transition-colors font-medium ${
                scrolled
                  ? 'text-coastal-slate dark:text-gray-300 hover:text-coastal-blue'
                  : 'text-white hover:text-blue-200'
              }`}
            >
              Beach Views
            </Link>
            <Link
              href="/buy"
              className={`transition-colors font-medium ${
                scrolled
                  ? 'text-coastal-slate dark:text-gray-300 hover:text-coastal-blue'
                  : 'text-white hover:text-blue-200'
              }`}
            >
              Buy
            </Link>
            <Link
              href="/sell"
              className={`transition-colors font-medium ${
                scrolled
                  ? 'text-coastal-slate dark:text-gray-300 hover:text-coastal-blue'
                  : 'text-white hover:text-blue-200'
              }`}
            >
              Sell
            </Link>
            <Link
              href="/how-i-work"
              className={`transition-colors font-medium ${
                scrolled
                  ? 'text-coastal-slate dark:text-gray-300 hover:text-coastal-blue'
                  : 'text-white hover:text-blue-200'
              }`}
            >
              How I Work
            </Link>
            <Link
              href="/team"
              className={`transition-colors font-medium ${
                scrolled
                  ? 'text-coastal-slate dark:text-gray-300 hover:text-coastal-blue'
                  : 'text-white hover:text-blue-200'
              }`}
            >
              Team
            </Link>
            <Link
              href="/about"
              className={`transition-colors font-medium ${
                scrolled
                  ? 'text-coastal-slate dark:text-gray-300 hover:text-coastal-blue'
                  : 'text-white hover:text-blue-200'
              }`}
            >
              About
            </Link>
            <Link
              href="/insights"
              className={`transition-colors font-medium ${
                scrolled
                  ? 'text-coastal-slate dark:text-gray-300 hover:text-coastal-blue'
                  : 'text-white hover:text-blue-200'
              }`}
            >
              Insights
            </Link>
            <Link
              href="/contact"
              className={`transition-colors font-medium ${
                scrolled
                  ? 'text-coastal-slate dark:text-gray-300 hover:text-coastal-blue'
                  : 'text-white hover:text-blue-200'
              }`}
            >
              Contact
            </Link>
          </div>
            
          {/* Right Side Controls - Social, Dark Mode, Ask Question */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                scrolled
                  ? 'text-coastal-slate dark:text-gray-300 hover:text-coastal-blue'
                  : 'text-white hover:text-blue-200'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                scrolled
                  ? 'text-coastal-slate dark:text-gray-300 hover:text-coastal-blue'
                  : 'text-white hover:text-blue-200'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            <DarkModeToggle />
            
            <a
              href={siteConfig.primaryCtas.text.href}
              className={`px-3 py-2 rounded-lg font-medium transition-all text-sm ${
                scrolled
                  ? 'bg-coastal-blue text-white hover:bg-coastal-slate'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              Ask Question
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <DarkModeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6 text-gray-900 dark:text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div 
            className="md:hidden absolute right-0 top-full mt-2 mr-1 sm:mr-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border-2 border-coastal-blue/20 dark:border-coastal-seafoam/30 py-3 min-w-[220px] z-50"
            style={{
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            }}
          >
            <div className="px-3 pb-2 mb-2 border-b border-coastal-sand/50 dark:border-gray-700">
              <p className="text-xs font-semibold text-coastal-blue dark:text-coastal-seafoam uppercase tracking-wide">Menu</p>
            </div>
            <Link
              href="/areas"
              className="block px-4 py-2.5 mx-2 text-coastal-slate dark:text-gray-300 hover:bg-gradient-to-r hover:from-coastal-blue/10 hover:to-coastal-seafoam/10 dark:hover:from-coastal-blue/20 dark:hover:to-coastal-seafoam/20 rounded-xl transition-all font-medium text-sm hover:text-coastal-blue dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Areas
            </Link>
            <Link
              href="/listings"
              className="block px-4 py-2.5 mx-2 text-coastal-slate dark:text-gray-300 hover:bg-gradient-to-r hover:from-coastal-blue/10 hover:to-coastal-seafoam/10 dark:hover:from-coastal-blue/20 dark:hover:to-coastal-seafoam/20 rounded-xl transition-all font-medium text-sm hover:text-coastal-blue dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Listings
            </Link>
            <Link
              href="/live"
              className="block px-4 py-2.5 mx-2 text-coastal-slate dark:text-gray-300 hover:bg-gradient-to-r hover:from-coastal-blue/10 hover:to-coastal-seafoam/10 dark:hover:from-coastal-blue/20 dark:hover:to-coastal-seafoam/20 rounded-xl transition-all font-medium text-sm hover:text-coastal-blue dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Beach Views
            </Link>
            <Link
              href="/buy"
              className="block px-4 py-2.5 mx-2 text-coastal-slate dark:text-gray-300 hover:bg-gradient-to-r hover:from-coastal-blue/10 hover:to-coastal-seafoam/10 dark:hover:from-coastal-blue/20 dark:hover:to-coastal-seafoam/20 rounded-xl transition-all font-medium text-sm hover:text-coastal-blue dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Buy
            </Link>
            <Link
              href="/sell"
              className="block px-4 py-2.5 mx-2 text-coastal-slate dark:text-gray-300 hover:bg-gradient-to-r hover:from-coastal-blue/10 hover:to-coastal-seafoam/10 dark:hover:from-coastal-blue/20 dark:hover:to-coastal-seafoam/20 rounded-xl transition-all font-medium text-sm hover:text-coastal-blue dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sell
            </Link>
            <Link
              href="/how-i-work"
              className="block px-4 py-2.5 mx-2 text-coastal-slate dark:text-gray-300 hover:bg-gradient-to-r hover:from-coastal-blue/10 hover:to-coastal-seafoam/10 dark:hover:from-coastal-blue/20 dark:hover:to-coastal-seafoam/20 rounded-xl transition-all font-medium text-sm hover:text-coastal-blue dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              How I Work
            </Link>
            <Link
              href="/team"
              className="block px-4 py-2.5 mx-2 text-coastal-slate dark:text-gray-300 hover:bg-gradient-to-r hover:from-coastal-blue/10 hover:to-coastal-seafoam/10 dark:hover:from-coastal-blue/20 dark:hover:to-coastal-seafoam/20 rounded-xl transition-all font-medium text-sm hover:text-coastal-blue dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2.5 mx-2 text-coastal-slate dark:text-gray-300 hover:bg-gradient-to-r hover:from-coastal-blue/10 hover:to-coastal-seafoam/10 dark:hover:from-coastal-blue/20 dark:hover:to-coastal-seafoam/20 rounded-xl transition-all font-medium text-sm hover:text-coastal-blue dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2.5 mx-2 text-coastal-blue dark:text-coastal-seafoam hover:bg-gradient-to-r hover:from-coastal-blue/10 hover:to-coastal-seafoam/10 dark:hover:from-coastal-blue/20 dark:hover:to-coastal-seafoam/20 rounded-xl transition-all font-semibold text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/insights"
              className="block px-4 py-2.5 mx-2 text-coastal-slate dark:text-gray-300 hover:bg-gradient-to-r hover:from-coastal-blue/10 hover:to-coastal-seafoam/10 dark:hover:from-coastal-blue/20 dark:hover:to-coastal-seafoam/20 rounded-xl transition-all font-medium text-sm hover:text-coastal-blue dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Insights
            </Link>
            
            <div className="my-2 mx-4 border-t border-coastal-sand/50 dark:border-gray-700"></div>
            
            <div className="px-4 py-2 mx-2">
              <p className="text-xs font-semibold text-coastal-slate dark:text-gray-400 mb-2">Follow Me</p>
              <div className="flex gap-3">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white rounded-lg hover:scale-110 transition-transform"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 bg-blue-600 text-white rounded-lg hover:scale-110 transition-transform"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
