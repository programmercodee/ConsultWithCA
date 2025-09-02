import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'GST', href: '#gst' },
    { name: 'Knowledge Bank', href: '#knowledge' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      {/* Announcement Bar */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-4">
            <span>Free Consultation • Mon - Sat: 9:00 AM - 7:00 PM</span>
            <span className="hidden md:inline">All India Service</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/918407981114?text=Hi%20ConsultWithCA,%20I%20need%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-3 py-1 rounded"
            >
              WhatsApp
            </a>
            <a
              href="tel:+918407981114"
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-3 py-1 rounded"
            >
              Call
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              ConsultWithCA
            </div>
            <div className="ml-2 text-sm text-secondary">.com</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#contact" className="btn-secondary text-sm">
              Free Consultation
            </a>
            <a href="#contact" className="btn-primary text-sm">
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 mt-4">
                <a href="#contact" className="btn-secondary text-center">
                  Free Consultation
                </a>
                <a href="#contact" className="btn-primary text-center">
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
