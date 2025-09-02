import React from 'react';

const MidContactBanner = ({
  title = 'Need quick advice from a CA?',
  subtitle = 'Get expert guidance on Tax, GST, Audit & Compliance today.',
}) => {
  return (
    <section className="section-padding bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 md:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
              <p className="text-blue-50">{subtitle}</p>
            </div>
            <div className="flex flex-col sm:flex-row md:justify-end gap-3">
              <a
                href="https://wa.me/918407981114?text=Hi%20ConsultWithCA,%20I%20need%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-5 rounded-lg text-center transition"
              >
                💬 WhatsApp
              </a>
              <a href="tel:+918407981114" className="btn-primary text-center">📞 Call</a>
              <a href="#contact" className="btn-secondary text-center">📅 Book Free Call</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidContactBanner;


