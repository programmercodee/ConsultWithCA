import React from 'react';

const MobileStickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="mx-auto max-w-7xl">
        <div className="m-3 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-2">
          <a
            href="https://wa.me/918407981114?text=Hi%20ConsultWithCA,%20I%20need%20assistance."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 text-center"
          >
            💬 WhatsApp
          </a>
          <a
            href="tel:+918407981114"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 text-center"
          >
            📞 Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileStickyBar;


