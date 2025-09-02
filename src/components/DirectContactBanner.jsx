import React from 'react';

const DirectContactBanner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Talk to a Chartered Accountant Now
            </h3>
            <p className="text-gray-600">
              Get instant guidance on Tax, GST, Audit or Compliance. No wait time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/918407981114?text=Hi%20ConsultWithCA,%20I%20need%20assistance%20with%20tax/GST/audit."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              💬 WhatsApp Now
            </a>
            <a href="tel:+918407981114" className="btn-primary">
              📞 Call Now
            </a>
            <a href="mailto:consultwithcaa@gmail.com" className="btn-secondary">
              ✉️ Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectContactBanner;


