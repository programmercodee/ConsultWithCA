import React from 'react';

const Industries = () => {
  const industries = [
    {
      name: 'Manufacturing',
      icon: '🏭',
      description: 'Complete tax and compliance solutions for manufacturing businesses',
      services: ['GST Optimization', 'Excise Management', 'Working Capital', 'Export Benefits']
    },
    {
      name: 'Real Estate',
      icon: '🏘️',
      description: 'Specialized services for real estate developers and investors',
      services: ['RERA Compliance', 'GST on Construction', 'Joint Ventures', 'Capital Gains']
    },
    {
      name: 'Healthcare',
      icon: '🏥',
      description: 'Tailored solutions for hospitals, clinics, and healthcare providers',
      services: ['Medical Equipment', 'Service Tax', 'Import Duties', 'Charitable Trust']
    },
    {
      name: 'IT & Software',
      icon: '💻',
      description: 'Expert guidance for IT companies and software businesses',
      services: ['Export Benefits', 'SEZ Operations', 'Transfer Pricing', 'R&D Credits']
    },
    {
      name: 'Trading',
      icon: '🏪',
      description: 'Comprehensive solutions for trading and distribution businesses',
      services: ['Inventory Management', 'Multi-state GST', 'E-commerce', 'Supply Chain']
    },
    {
      name: 'Professional Services',
      icon: '💼',
      description: 'Specialized support for consultants and service providers',
      services: ['Service Tax', 'Professional Tax', 'Partnership', 'LLP Formation']
    }
  ];

  return (
    <section id="industries" className="bg-gray-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With deep industry expertise, we provide specialized CA services 
            tailored to meet the unique requirements of different business sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md card-hover">
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {industry.name}
              </h3>
              <p className="text-gray-600 mb-6">
                {industry.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-sm">Key Services:</h4>
                <div className="flex flex-wrap gap-2">
                  {industry.services.map((service, idx) => (
                    <span key={idx} className="bg-blue-100 text-primary text-xs px-3 py-1 rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Discuss Your Industry Needs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Industries;
