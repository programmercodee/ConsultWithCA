import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    { src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2071&q=80', alt: 'Business and Finance' },
    { src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2070&q=80', alt: 'Modern Office' },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=2071&q=80', alt: 'Business Strategy' },
    { src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2074&q=80', alt: 'Financial Planning' },
    { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2069&q=80', alt: 'Accounting Desk with Laptop' },
    { src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=2069&q=80', alt: 'Calculator and Reports' },
    { src: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=2069&q=80', alt: 'Team Meeting Finance' },
    { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2069&q=80', alt: 'Coworking Office' },
    { src: 'https://images.unsplash.com/photo-1523958203904-cdcb402031fd?auto=format&fit=crop&w=2069&q=80', alt: 'Financial Data and Charts' },
    { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2069&q=80', alt: 'Business Presentation' },
    { src: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=2069&q=80', alt: 'Tax Preparation' },
    { src: 'https://images.unsplash.com/photo-1542223188-3f8f6f7b0f36?auto=format&fit=crop&w=2069&q=80', alt: 'Balance Sheet Analysis' },
    { src: 'https://images.unsplash.com/photo-1551281044-8b72f0b6f4d4?auto=format&fit=crop&w=2069&q=80', alt: 'Budget Planning' },
    { src: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=2069&q=80', alt: 'Analytics Dashboard' },
    { src: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?auto=format&fit=crop&w=2069&q=80', alt: 'Client Consultation' },
    { src: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=2069&q=80', alt: 'Notebook and Financial Notes' },
    { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2069&q=80', alt: 'Teamwork in Office' },
    { src: 'https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&w=2069&q=80', alt: 'Investment Planning' },
    { src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2069&q=80', alt: 'Spreadsheet Work' },
    { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2069&q=80', alt: 'Documents and Calculator' },
    { src: 'https://images.unsplash.com/photo-1518081468390-4793f36f9b85?auto=format&fit=crop&w=2069&q=80', alt: 'Tax Forms and Pen' },
    { src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2069&q=80', alt: 'Laptop with Financial Graphs' },
    { src: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=2069&q=80', alt: 'Savings and Piggy Bank' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 overflow-hidden" role="banner" aria-label="Hero Section">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {backgroundImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 via-blue-50/80 to-indigo-100/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight drop-shadow-sm">
              Expert <span className="text-primary">CA Services</span> for Your Business Growth
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed drop-shadow-sm">
              Professional Chartered Accountant services including Tax Planning, GST Compliance,
              Audit Services, and Financial Consulting. Trusted by 500+ businesses across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="btn-primary shadow-lg" aria-label="Schedule free consultation with our CA experts">
                Schedule Free Consultation
              </a>
              <a href="#services" className="btn-secondary shadow-lg" aria-label="Explore our comprehensive CA services">
                Explore Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8" role="region" aria-label="Trust indicators and company statistics">
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
                <div className="text-3xl font-bold text-primary" aria-label="500 plus happy clients">500+</div>
                <div className="text-gray-700 text-sm font-medium">Happy Clients</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
                <div className="text-3xl font-bold text-primary" aria-label="15 plus years of experience">15+</div>
                <div className="text-gray-700 text-sm font-medium">Years Experience</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
                <div className="text-3xl font-bold text-primary" aria-label="99 percent success rate">99%</div>
                <div className="text-gray-700 text-sm font-medium">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-2xl border border-white/20">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Quick Service Request
              </h2>
              <form className="space-y-4" role="form" aria-label="Quick service request form">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white/80"
                  aria-label="Enter your full name"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white/80"
                  aria-label="Enter your email address"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white/80"
                  aria-label="Enter your phone number"
                  required
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white/80" aria-label="Select the service you need">
                  <option value="">Select Service</option>
                  <option value="tax-planning">Tax Planning</option>
                  <option value="gst-registration">GST Registration</option>
                  <option value="audit-services">Audit Services</option>
                  <option value="roc-compliance">ROC Compliance</option>
                  <option value="other">Other</option>
                </select>
                <button type="submit" className="w-full btn-primary shadow-lg" aria-label="Submit service request for free consultation">
                  Get Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
