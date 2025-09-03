import React, { useEffect, useState } from 'react';

const FloatingCTA = () => {
  const [showTop, setShowTop] = useState(false);
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Show typing animation every 5 seconds
    const typingInterval = setInterval(() => {
      setShowWhatsAppPopup(true);

      // Hide after 2 seconds
      setTimeout(() => {
        setShowWhatsAppPopup(false);
      }, 2000);
    }, 5000);

    return () => clearInterval(typingInterval);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-4 bottom-20 md:bottom-4 z-60 flex flex-col gap-3">
      {/* WhatsApp Button with Typing Popup */}
      <div className="relative">
        <a
          href="https://wa.me/918329202035?text=Hi%20ConsultWithCA,%20I%20need%20assistance%20with%20tax/GST/audit."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white w-12 h-12 flex items-center justify-center transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6" aria-hidden="true">
            <path fill="currentColor" d="M16.001 3.2c-7.063 0-12.8 5.736-12.8 12.8 0 2.257.592 4.441 1.72 6.368L3.2 28.8l6.6-1.689A12.73 12.73 0 0016 28.8c7.063 0 12.8-5.736 12.8-12.8 0-7.063-5.737-12.8-12.799-12.8zm7.49 18.476c-.324.912-1.9 1.74-2.652 1.795-.68.048-1.543.069-2.488-.159-.572-.139-1.307-.425-2.262-.897-3.982-1.93-6.57-6.31-6.77-6.606-.2-.296-1.62-2.156-1.62-4.118 0-1.962 1.031-2.927 1.397-3.33.367-.403.8-.503 1.064-.503.264 0 .532.003.767.014.246.011.585-.094.916.698.324.777 1.1 2.688 1.198 2.882.098.194.162.42.03.676-.132.257-.198.419-.39.644-.19.225-.41.504-.586.678-.19.19-.388.397-.166.779.223.382.993 1.631 2.135 2.64 1.47 1.262 2.705 1.653 3.087 1.843.382.19.607.166.83-.1.223-.264.955-1.113 1.21-1.497.257-.382.515-.318.86-.19.346.128 2.186 1.031 2.56 1.216.374.186.62.276.712.426.09.15.09.87-.234 1.782z" />
          </svg>
        </a>

        {/* Typing Indicator Popup */}
        {showWhatsAppPopup && (
          <div className="absolute right-16 top-0 bg-white rounded-lg shadow-lg p-3 whitespace-nowrap border border-gray-200 animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <span className="text-sm text-gray-700 font-medium">Typing...</span>
            </div>
            <div className="absolute right-0 top-1/2 transform translate-y-[-50%] translate-x-1 w-2 h-2 bg-white border-r border-b border-gray-200 rotate-45"></div>
          </div>
        )}
      </div>

      {/* Call Button with Shake Animation */}
      <a
        href="tel:+918329202035"
        aria-label="Call now"
        className="rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 flex items-center justify-center animate-pulse hover:animate-none hover:animate-shake"
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


