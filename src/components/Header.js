"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Image from "next/image";

// Throttle utility function
const throttle = (func, delay) => {
  let timeoutId;
  let lastExecTime = 0;
  return function (...args) {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = useMemo(
    () => [
      { name: "Home", key: "home" },
      { name: "About Us", key: "about" },
      { name: "Products", key: "products" },
      { name: "Services", key: "services" },
      { name: "Brands", key: "brands" },
      { name: "Industries", key: "industries" },
      { name: "Contact Us", key: "contact" },
    ],
    []
  );

  // Handle scroll effect with throttling
  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 20);
    }, 16); // ~60fps
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClickOutside = (event) => {
      if (!event.target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Close mobile menu with Escape key for accessibility
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = useCallback(
    (sectionKey) => {
      setActiveSection(sectionKey);
      setIsMenuOpen(false);
    },
    [setActiveSection]
  );

  const handleQuoteClick = useCallback(() => {
    setActiveSection("quote");
    setIsMenuOpen(false);
  }, [setActiveSection]);

  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 max-w-full bg-transparent ${
          isScrolled
            ? "sm:bg-blue-700 sm:shadow-2xl"
            : "sm:bg-blue-600 sm:shadow-lg"
        } ${isScrolled ? "header-scrolled" : "header-default"}`}
      >
        <div className="container-responsive">
          <div className="flex items-center justify-between h-12 min-w-0 sm:h-16">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 min-w-0">
              <button
                onClick={() => handleNavClick("home")}
                className="flex items-center min-w-0 gap-2 transition-transform hover:scale-105 focus-ring rounded-xl"
                aria-label="Go to homepage"
              >
                <Image
                  src={"/logo.png"}
                  alt="Industrial Solutions logo"
                  width={52}
                  height={52}
                  className="object-contain rounded-md max-h-10 sm:max-h-12 lg:max-h-14"
                  style={{ width: "auto" }}
                />
                <div className="hidden min-w-0 ml-2 xs:block">
                  <div className="text-base font-extrabold leading-tight tracking-wide text-white break-words sm:text-lg lg:text-xl drop-shadow-lg">
                    Industrial
                  </div>
                  <div className="-mt-1 text-xs font-semibold tracking-wide text-blue-100 break-words sm:text-sm">
                    Solutions
                  </div>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav
              className="items-center hidden space-x-8 lg:flex xl:space-x-12"
              aria-label="Primary Navigation"
            >
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`relative font-semibold transition-all duration-200 py-2 px-2 focus-ring rounded-lg text-sm tracking-wide ${
                    activeSection === item.key
                      ? "text-white"
                      : "text-blue-100 hover:text-white"
                  }`}
                  aria-current={activeSection === item.key ? "page" : undefined}
                  style={{ letterSpacing: "0.03em" }}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 right-0 -bottom-1 h-1 rounded-full transition-all duration-300 ${
                      activeSection === item.key
                        ? "bg-white scale-x-100"
                        : "bg-transparent scale-x-0"
                    }`}
                    style={{ transformOrigin: "center" }}
                  />
                </button>
              ))}
            </nav>

            {/* CTA Button and Mobile Menu */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={handleQuoteClick}
                className="items-center justify-center hidden px-4 py-2 text-sm font-bold text-blue-700 transition-all duration-200 bg-white border-2 border-blue-600 shadow-lg sm:flex rounded-xl hover:bg-blue-100 focus-ring"
                aria-label="Request a quote"
                style={{ lineHeight: 1 }}
              >
                <span>Request Quote</span>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="flex items-center justify-center p-1 text-white transition-all duration-300 border border-white/30 rounded-xl w-9 h-9 lg:hidden hover:text-white hover:bg-black/20 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 mobile-menu-trigger sm:p-2 sm:w-auto sm:h-auto backdrop-blur-lg bg-black/20"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden mobile-menu-container transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100 scale-y-100"
              : "max-h-0 opacity-0 scale-y-0 overflow-hidden"
          }`}
          style={{ transformOrigin: "top" }}
        >
          <div className="bg-gray-900/95 backdrop-blur-md shadow-xl border-t border-gray-700/20">
            <div className="py-6 container-responsive">
              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item.key)}
                    className={`flex w-full text-left px-5 py-3 rounded-xl font-semibold transition-all duration-200 fade-in-up stagger-${
                      index + 1
                    } text-sm tracking-wide shadow-md ${
                      activeSection === item.key
                        ? "text-white bg-gray-800/80 border-l-4 border-white backdrop-blur-sm"
                        : "text-gray-300 hover:text-white hover:bg-gray-700/60 bg-transparent backdrop-blur-sm"
                    }`}
                    aria-current={
                      activeSection === item.key ? "page" : undefined
                    }
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-6 mt-6">
                  <button
                    onClick={handleQuoteClick}
                    className="justify-center w-full px-5 py-3 text-sm font-bold text-gray-900 transition-all duration-200 bg-white/95 backdrop-blur-sm border-2 border-gray-300 shadow-lg rounded-xl hover:bg-white hover:shadow-xl"
                  >
                    Request For Quote
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay with enhanced blur */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-lg lg:hidden animate-fadeIn"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;
