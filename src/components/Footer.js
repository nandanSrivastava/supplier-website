'use client';

import { memo } from 'react';

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Products', href: '#products' },
        { name: 'Services', href: '#services' },
        { name: 'Brands', href: '#brands' },
        { name: 'Industries', href: '#industries' },
        { name: 'Contact Us', href: '#contact' }
      ]
    },
    {
      title: 'Products',
      links: [
        { name: 'Pumps & Spares', href: '#products' },
        { name: 'Gearboxes & Spares', href: '#products' },
        { name: 'Motors & Spares', href: '#products' },
        { name: 'Valves & Spares', href: '#products' },
        { name: 'Electrical Spares', href: '#products' },
        { name: 'Mechanical Spares', href: '#products' },
        { name: 'I&C Spares', href: '#products' },
        { name: 'Other Spare Parts', href: '#products' }
      ]
    },
    {
      title: 'Our Services',
      links: [
        { name: 'Cost Saving', href: '#services' },
        { name: 'Fast Delivery', href: '#services' },
        { name: 'Risk Free', href: '#services' },
        { name: 'Quality Assurance', href: '#services' }
      ]
    }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: '#', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    { 
      name: 'WhatsApp', 
      href: 'https://wa.me/919555413550', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
        </svg>
      )
    },
    { 
      name: 'Phone', 
      href: 'tel:+919555413550', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      )
    },
    { 
      name: 'Email', 
      href: 'mailto:Info@IndustrialSparesMarketplace.com', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    }
  ];

  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      const sectionKey = href.substring(1);
      window.dispatchEvent(new CustomEvent('showSection', { detail: sectionKey }));
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="py-8">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-4">Industrial Spares Marketplace</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Your trusted partner for global industrial procurement solutions with end-to-end logistics support.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target={social.name === 'LinkedIn' ? '_blank' : undefined}
                      rel={social.name === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 bg-gray-800">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              © {currentYear} <span className="text-yellow-400 font-semibold">Industrial Spares Marketplace</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
