'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Services from '../components/Services';
import Brands from '../components/Brands';
import Industries from '../components/Industries';
import Contact from '../components/Contact';
import Quote from '../components/Quote';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef({});
  const observerRef = useRef(null);
  const isUserNavigating = useRef(false);

  // Handle URL hash changes and initial load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      isUserNavigating.current = true;
      setActiveSection(hash);
      scrollToSection(hash);
      setTimeout(() => {
        isUserNavigating.current = false;
      }, 1000);
    };

    // Set initial section from URL hash
    const initialHash = window.location.hash.replace('#', '') || 'home';
    setActiveSection(initialHash);

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Set up intersection observer for automatic section detection
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.3
    };

    observerRef.current = new IntersectionObserver((entries) => {
      if (isUserNavigating.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId && sectionId !== activeSection) {
            setActiveSection(sectionId);
            window.history.replaceState(null, '', sectionId === 'home' ? '#' : `#${sectionId}`);
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    Object.values(sectionRefs.current).forEach((section) => {
      if (section && observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [activeSection]);

  // Scroll to section with smooth animation
  const scrollToSection = useCallback((sectionKey) => {
    const element = sectionRefs.current[sectionKey];
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  // Enhanced setActiveSection that updates URL hash
  const handleSetActiveSection = useCallback((section) => {
    isUserNavigating.current = true;
    setActiveSection(section);
    window.history.pushState(null, '', section === 'home' ? '#' : `#${section}`);
    scrollToSection(section);
    setTimeout(() => {
      isUserNavigating.current = false;
    }, 1000);
  }, [scrollToSection]);

  // Set ref for section and add to observer
  const setSectionRef = useCallback((sectionKey, element) => {
    sectionRefs.current[sectionKey] = element;
    if (element && observerRef.current) {
      observerRef.current.observe(element);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Header 
        activeSection={activeSection} 
        setActiveSection={handleSetActiveSection} 
      />
      <main>
        {/* Hero Section */}
        <div 
          ref={(el) => setSectionRef('home', el)}
          id="home"
          className="section-container"
        >
          <Hero setActiveSection={handleSetActiveSection} />
        </div>

        {/* About Section */}
        <div 
          ref={(el) => setSectionRef('about', el)}
          id="about"
          className="section-container"
        >
          <About />
        </div>

        {/* Products Section */}
        <div 
          ref={(el) => setSectionRef('products', el)}
          id="products"
          className="section-container"
        >
          <Products />
        </div>

        {/* Services Section */}
        <div 
          ref={(el) => setSectionRef('services', el)}
          id="services"
          className="section-container"
        >
          <Services />
        </div>

        {/* Brands Section */}
        <div 
          ref={(el) => setSectionRef('brands', el)}
          id="brands"
          className="section-container"
        >
          <Brands />
        </div>

        {/* Industries Section */}
        <div 
          ref={(el) => setSectionRef('industries', el)}
          id="industries"
          className="section-container"
        >
          <Industries />
        </div>

        {/* Contact Section */}
        <div 
          ref={(el) => setSectionRef('contact', el)}
          id="contact"
          className="section-container"
        >
          <Contact />
        </div>

        {/* Quote Section */}
        <div 
          ref={(el) => setSectionRef('quote', el)}
          id="quote"
          className="section-container"
        >
          <Quote />
        </div>
      </main>
      <Footer />
    </div>
  );
}
