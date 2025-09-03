import React from 'react';

const CaseStudyModal = ({ isOpen, onClose, caseStudy }) => {
  if (!isOpen || !caseStudy) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 animate-fade-in">
          {/* Custom Scrollbar */}
          <style jsx>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: #f1f5f9;
              border-radius: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #3b82f6;
              border-radius: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #2563eb;
            }
          `}</style>

          <div className="custom-scrollbar">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r bg-blue-500 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{caseStudy.icon}</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {caseStudy.badge}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold">{caseStudy.title}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:text-gray-200 text-3xl font-bold transition-colors duration-200 hover:scale-110 transform"
                  aria-label="Close case study"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Executive Summary */}
              <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-primary">📊</span>
                  Executive Summary
                </h3>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-gray-700 leading-relaxed">{caseStudy.summary}</p>
                </div>
              </div>

              {/* Client Background */}
              <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-primary">🏢</span>
                  Client Background
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Company Profile</h4>
                    <p className="text-gray-600 text-sm">{caseStudy.clientProfile}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Industry</h4>
                    <p className="text-gray-600 text-sm">{caseStudy.industry}</p>
                  </div>
                </div>
              </div>

              {/* Challenges */}
              <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-primary">⚠️</span>
                  Challenges Faced
                </h3>
                <div className="space-y-3">
                  {caseStudy.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      <p className="text-gray-700">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions Implemented */}
              <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-primary">💡</span>
                  Solutions Implemented
                </h3>
                <div className="space-y-4">
                  {caseStudy.solutions.map((solution, index) => (
                    <div key={index} className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-gray-900 mb-2">{solution.title}</h4>
                      <p className="text-gray-700 text-sm">{solution.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results & Impact */}
              <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-primary">🎯</span>
                  Results & Impact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="bg-primary text-black p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold mb-1">{result.value}</div>
                      <div className="text-sm opacity-90">{result.label}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Key Achievements</h4>
                  <ul className="space-y-2 text-green-700">
                    {caseStudy.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline */}
              <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-primary">📅</span>
                  Project Timeline
                </h3>
                <div className="space-y-4">
                  {caseStudy.timeline.map((phase, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{phase.title}</h4>
                        <p className="text-gray-600 text-sm">{phase.description}</p>
                        <p className="text-primary text-sm font-medium">{phase.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-primary">💬</span>
                  Client Testimonial
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                  <blockquote className="text-gray-700 italic mb-4">
                    "{caseStudy.testimonial}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {caseStudy.clientInitials}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{caseStudy.clientName}</div>
                      <div className="text-gray-600 text-sm">{caseStudy.clientPosition}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 rounded-lg text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <h3 className="text-xl font-bold mb-3">Ready to Achieve Similar Results?</h3>
                <p className="text-blue-100 mb-4">
                  Let our expert CA team help your business optimize taxes and improve compliance.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="#contact"
                    className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition duration-200 hover:scale-105 transform"
                    onClick={onClose}
                  >
                    Schedule Free Consultation
                  </a>
                  <a
                    href="https://wa.me/918407981114?text=Hi%20ConsultWithCA,%20I%20want%20to%20discuss%20similar%20case%20study%20for%20my%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 hover:scale-105 transform"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyModal;
