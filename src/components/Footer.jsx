import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="text-2xl font-bold mb-4">ConsultWithCA.com</div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted partner for all chartered accountant services. We provide 
              comprehensive tax, audit, and compliance solutions to help your business grow.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">Facebook</a>
            </div>
            <div className="text-sm text-gray-400">
              <p>CA Firm Registration: XXXXXX</p>
              <p>GSTIN: XXXXXXXXXXXXXXX</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition duration-300">Tax Planning & Filing</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">GST Services</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Audit & Assurance</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Company Formation</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Accounting Services</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Legal & Compliance</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-white transition duration-300">Home</a></li>
              <li><a href="#services" className="hover:text-white transition duration-300">Services</a></li>
              <li><a href="#industries" className="hover:text-white transition duration-300">Industries</a></li>
              <li><a href="#knowledge" className="hover:text-white transition duration-300">Knowledge Bank</a></li>
              <li><a href="#contact" className="hover:text-white transition duration-300">Contact</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 ConsultWithCA.com. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Professional CA Services | Tax Planning | GST Compliance | Audit Services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
