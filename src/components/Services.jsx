import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Tax Planning & Filing',
      description: 'Complete income tax solutions for individuals and businesses',
      icon: '📊',
      features: ['ITR Filing', 'Tax Planning', 'TDS Returns', 'Appeals & Notices'],
      popular: true
    },
    {
      title: 'GST Services',
      description: 'End-to-end GST compliance and consultation services',
      icon: '📋',
      features: ['GST Registration', 'Monthly Returns', 'GST Audit', 'Refund Claims']
    },
    {
      title: 'Audit & Assurance',
      description: 'Professional audit services for compliance and growth',
      icon: '🔍',
      features: ['Statutory Audit', 'Internal Audit', 'Tax Audit', 'Bank Audit']
    },
    {
      title: 'Company Formation',
      description: 'Complete business incorporation and setup services',
      icon: '🏢',
      features: ['Private Limited', 'LLP Formation', 'Partnership', 'ROC Compliance']
    },
    {
      title: 'Accounting Services',
      description: 'Professional bookkeeping and financial management',
      icon: '💰',
      features: ['Books Maintenance', 'Financial Statements', 'MIS Reports', 'Payroll']
    },
    {
      title: 'Legal & Compliance',
      description: 'Legal documentation and regulatory compliance',
      icon: '⚖️',
      features: ['Legal Drafting', 'Contract Review', 'Compliance Check', 'Due Diligence']
    }
  ];

  return (
    <section id="services" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive CA Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From tax planning to business compliance, we provide complete chartered accountant 
            services to help your business thrive in today's competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`relative bg-gray-50 p-8 rounded-lg card-hover ${service.popular ? 'ring-2 ring-gold' : ''}`}>
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="text-accent mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary w-full text-center block">
                Get Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
