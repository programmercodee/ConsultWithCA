import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    {
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      alt: "Business and Finance"
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Modern Office"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      alt: "Business Strategy"
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      alt: "Financial Planning"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
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
              <a href="#contact" className="btn-primary shadow-lg">
                Schedule Free Consultation
              </a>
              <a href="#services" className="btn-secondary shadow-lg">
                Explore Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-gray-700 text-sm font-medium">Happy Clients</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-gray-700 text-sm font-medium">Years Experience</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
                <div className="text-3xl font-bold text-primary">99%</div>
                <div className="text-gray-700 text-sm font-medium">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-2xl border border-white/20">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Quick Service Request
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white/80"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white/80"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white/80"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white/80">
                  <option>Select Service</option>
                  <option>Tax Planning</option>
                  <option>GST Registration</option>
                  <option>Audit Services</option>
                  <option>ROC Compliance</option>
                  <option>Other</option>
                </select>
                <button type="submit" className="w-full btn-primary shadow-lg">
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
