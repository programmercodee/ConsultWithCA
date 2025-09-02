import React from 'react';

const MidContactBanner = ({
  title = 'Need quick advice from a CA?',
  subtitle = 'Get expert guidance on Tax, GST, Audit & Compliance today.',
}) => {
  return (
    <section className="section-padding bg-gradient-to-r from-blue-400 to-indigo-300">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 md:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
            <div className="md:col-span-2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
              <p className="text-blue-50">{subtitle}</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-3">
              <a
                href="https://wa.me/918407981114?text=Hi%20ConsultWithCA,%20I%20need%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-5 rounded-lg text-center transition w-full sm:w-auto sm:min-w-[160px]"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5" aria-hidden="true">
                    <path fill="currentColor" d="M16.001 3.2c-7.063 0-12.8 5.736-12.8 12.8 0 2.257.592 4.441 1.72 6.368L3.2 28.8l6.6-1.689A12.73 12.73 0 0016 28.8c7.063 0 12.8-5.736 12.8-12.8 0-7.063-5.737-12.8-12.799-12.8zm7.49 18.476c-.324.912-1.9 1.74-2.652 1.795-.68.048-1.543.069-2.488-.159-.572-.139-1.307-.425-2.262-.897-3.982-1.93-6.57-6.31-6.77-6.606-.2-.296-1.62-2.156-1.62-4.118 0-1.962 1.031-2.927 1.397-3.33.367-.403.8-.503 1.064-.503.264 0 .532.003.767.014.246.011.585-.094.916.698.324.777 1.1 2.688 1.198 2.882.098.194.162.42.03.676-.132.257-.198.419-.39.644-.19.225-.41.504-.586.678-.19.19-.388.397-.166.779.223.382.993 1.631 2.135 2.64 1.47 1.262 2.705 1.653 3.087 1.843.382.19.607.166.83-.1.223-.264.955-1.113 1.21-1.497.257-.382.515-.318.86-.19.346.128 2.186 1.031 2.56 1.216.374.186.62.276.712.426.09.15.09.87-.234 1.782z" />
                  </svg>
                  WhatsApp
                </span>
              </a>
              <a href="tel:+918407981114" className="btn-primary text-center w-full sm:w-auto sm:min-w-[160px]">📞 Call</a>
              <a href="#contact" className="btn-secondary text-center w-full sm:w-auto sm:min-w-[160px]">📅 Book Free Call</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidContactBanner;


