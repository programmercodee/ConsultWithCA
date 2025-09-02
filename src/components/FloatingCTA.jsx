import React, { useEffect, useState } from 'react';

const FloatingCTA = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-4 bottom-20 md:bottom-4 z-60 flex flex-col gap-3">
      <a
        href="https://wa.me/918329202035?text=Hi%20ConsultWithCA,%20I%20need%20assistance%20with%20tax/GST/audit."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white w-12 h-12 flex items-center justify-center"
      >
        <span className="text-xl">💬</span>
      </a>

      <a
        href="tel:+918329202035"
        aria-label="Call now"
        className="rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 flex items-center justify-center"
      >
        <span className="text-xl">📞</span>
      </a>

      {showTop && (
        <button
          onClick={handleScrollTop}
          aria-label="Scroll to top"
          className="rounded-full shadow-lg bg-gray-800 hover:bg-gray-900 text-white w-12 h-12 flex items-center justify-center"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default FloatingCTA;


