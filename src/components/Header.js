'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';

const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = useMemo(() => [
    { name: 'Home', key: 'home' },
    { name: 'About Us', key: 'about' },
    { name: 'Products', key: 'products' },
    { name: 'Services', key: 'services' },
    { name: 'Brands', key: 'brands' },
    { name: 'Industries', key: 'industries' },
    { name: 'Contact Us', key: 'contact' },
  ], []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClickOutside = (event) => {
      if (!event.target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = useCallback((sectionKey) => {
    setActiveSection(sectionKey);
    setIsMenuOpen(false);
  }, [setActiveSection]);

  const handleQuoteClick = useCallback(() => {
    setActiveSection('quote');
    setIsMenuOpen(false);
  }, [setActiveSection]);

  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 max-w-full ${
          isScrolled
            ? 'bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 shadow-2xl backdrop-blur-lg'
            : 'bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 shadow-lg backdrop-blur-md'
        } ${isScrolled ? 'header-scrolled' : 'header-default'}`}
      >
        <div className="container-responsive">
          <div className="flex justify-between items-center h-12 sm:h-16 lg:h-18 min-w-0">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center min-w-0">
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center gap-2 hover:scale-105 transition-transform focus-ring rounded-xl min-w-0"
                aria-label="Go to homepage"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-br from-blue-700 to-blue-400 rounded-lg"></div>
                  </div>
                </div>
                <div className="hidden xs:block min-w-0">
                  <div className="text-base sm:text-lg lg:text-xl font-extrabold text-white leading-tight drop-shadow-lg break-words tracking-wide">
                    Industrial
                  </div>
                  <div className="text-xs sm:text-sm text-blue-100 font-semibold -mt-1 break-words tracking-wide">
                    Solutions
                  </div>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`relative font-semibold transition-all duration-200 py-2 px-2 focus-ring rounded-lg text-sm tracking-wide ${
                    activeSection === item.key
                      ? 'text-white'
                      : 'text-blue-100 hover:text-white'
                  }`}
                  aria-current={activeSection === item.key ? 'page' : undefined}
                  style={{ letterSpacing: '0.03em' }}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 right-0 -bottom-1 h-1 rounded-full transition-all duration-300 ${
                      activeSection === item.key
                        ? 'bg-white scale-x-100'
                        : 'bg-transparent scale-x-0'
                    }`}
                    style={{ transformOrigin: 'center' }}
                  />
                </button>
              ))}
            </nav>

            {/* CTA Button and Mobile Menu */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={handleQuoteClick}
                className="bg-white text-blue-700 font-bold text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-2 rounded-xl shadow-lg hover:bg-blue-100 transition-all duration-200 focus-ring border-2 border-blue-600"
                aria-label="Request a quote"
              >
                <span className="hidden sm:inline">Request Quote</span>
                <span className="sm:hidden">Quote</span>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-3 rounded-xl text-white hover:text-blue-200 hover:bg-blue-700 transition-colors focus-ring mobile-menu-container shadow-md border border-blue-300"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden mobile-menu-container transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? 'max-h-screen opacity-100 scale-y-100'
              : 'max-h-0 opacity-0 scale-y-0 overflow-hidden'
          }`}
          style={{ transformOrigin: 'top' }}
        >
          <div className="bg-gradient-to-br from-blue-700 via-blue-500 to-blue-300 border-t border-blue-200 shadow-2xl">
            <div className="container-responsive py-6">
              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item.key)}
                    className={`flex w-full text-left px-5 py-3 rounded-xl font-semibold transition-all duration-200 fade-in-up stagger-${index + 1} text-sm tracking-wide shadow-md ${
                      activeSection === item.key
                        ? 'text-white bg-blue-600 border-l-4 border-white'
                        : 'text-blue-100 hover:text-white hover:bg-blue-500'
                    }`}
                    aria-current={activeSection === item.key ? 'page' : undefined}
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-6 border-t border-blue-200 mt-6">
                  <button
                    onClick={handleQuoteClick}
                    className="bg-white text-blue-700 font-bold w-full justify-center px-5 py-3 rounded-xl shadow-lg hover:bg-blue-100 transition-all duration-200 border-2 border-blue-600 text-sm"
                  >
                    Request For Quote
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 lg:hidden animate-fadeIn"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;
