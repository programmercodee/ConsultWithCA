import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 overflow-hidden" role="banner" aria-label="Hero Section">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Professional business and finance background representing ConsultWithCA services"
          className="w-full h-full object-cover opacity-100"
        />
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
