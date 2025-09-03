import React, { useState, useEffect } from 'react';

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Start animation after a brief delay
      setTimeout(() => setIsAnimating(true), 100);
    }, 10000); //  10000 = 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    // Wait for animation to complete before hiding
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Background Blur Effect */}
      <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/20 pointer-events-none"></div>

      {/* Popup Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        {/* Popup Content */}
        <div
          className={`relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center pointer-events-auto transition-all duration-300 ease-out transform ${isAnimating
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95'
            }`}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold transition-colors duration-200 cursor-pointer"
            aria-label="Close popup"
          >
            ×
          </button>

          {/* Company Logo/Name */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-primary mb-2">
              ConsultWithCA
              <span className="text-sm text-secondary">.com</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Your trusted partner for all Chartered Accountant services.
            Expert tax planning, GST compliance, audit & business solutions across India.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/918407981114?text=Hi%20ConsultWithCA,%20I%20need%20assistance%20with%20tax/GST/audit."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5" aria-hidden="true">
                <path fill="currentColor" d="M16.001 3.2c-7.063 0-12.8 5.736-12.8 12.8 0 2.257.592 4.441 1.72 6.368L3.2 28.8l6.6-1.689A12.73 12.73 0 0016 28.8c7.063 0 12.8-5.736 12.8-12.8 0-7.063-5.737-12.8-12.799-12.8zm7.49 18.476c-.324.912-1.9 1.74-2.652 1.795-.68.048-1.543.069-2.488-.159-.572-.139-1.307-.425-2.262-.897-3.982-1.93-6.57-6.31-6.77-6.606-.2-.296-1.62-2.156-1.62-4.118 0-1.962 1.031-2.927 1.397-3.33.367-.403.8-.503 1.064-.503.264 0 .532.003.767.014.246.011.585-.094.916.698.324.777 1.1 2.688 1.198 2.882.098.194.162.42.03.676-.132.257-.198.419-.39.644-.19.225-.41.504-.586.678-.19.19-.388.397-.166.779.223.382.993 1.631 2.135 2.64 1.47 1.262 2.705 1.653 3.087 1.843.382.19.607.166.83-.1.223-.264.955-1.113 1.21-1.497.257-.382.515-.318.86-.19.346.128 2.186 1.031 2.56 1.216.374.186.62.276.712.426.09.15.09.87-.234 1.782z" />
              </svg>
              WhatsApp Chat
            </a>

            <a
              href="tel:+918407981114"
              className="bg-blue-300 hover:bg-blue-400 text-black font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2"
            >
              <span className="text-xl">📞</span>
              Call Now
            </a>
          </div>

          {/* Footer Text */}
          <p className="text-sm text-gray-500 mt-6">
            Free consultation available • 15+ years experience
          </p>
        </div>
      </div>
    </>
  );
};

export default WelcomePopup;
