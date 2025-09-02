import React from 'react';

const KnowledgeBank = () => {
  const resources = [
    {
      category: 'Income Tax',
      items: [
        'Income Tax Act 1961',
        'Tax Slabs FY 2024-25',
        'Section 80C Deductions',
        'ITR Forms & Guidelines'
      ]
    },
    {
      category: 'GST Resources',
      items: [
        'GST Rates & HSN Codes',
        'GSTR Forms Guide',
        'Input Tax Credit Rules',
        'GST Notifications'
      ]
    },
    {
      category: 'Corporate Laws',
      items: [
        'Companies Act 2013',
        'ROC Compliance',
        'Board Resolutions',
        'Annual Filing Guide'
      ]
    },
    {
      category: 'Calculators',
      items: [
        'Income Tax Calculator',
        'GST Calculator',
        'TDS Calculator',
        'EMI Calculator'
      ]
    }
  ];

  const latestUpdates = [
    {
      title: 'New GST Rates Effective from October 2025',
      date: '02 Oct 2025',
      category: 'GST Update'
    },
    {
      title: 'Income Tax Return Filing Deadline Extended',
      date: '28 Sep 2025',
      category: 'Tax Update'
    },
    {
      title: 'New Compliance Requirements for Private Limited Companies',
      date: '25 Sep 2025',
      category: 'Corporate Law'
    }
  ];

  return (
    <section id="knowledge" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Knowledge Bank
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access comprehensive resources, latest updates, and useful tools 
            to stay informed about tax laws and compliance requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Resources & Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-primary mr-2">📚</span>
                    {resource.category}
                  </h4>
                  <ul className="space-y-2">
                    {resource.items.map((item, idx) => (
                      <li key={idx} className="text-gray-600 hover:text-primary cursor-pointer transition duration-300">
                        <span className="text-accent mr-2">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Updates */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Latest Updates</h3>
            <div className="space-y-4">
              {latestUpdates.map((update, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg border-l-4 border-primary">
                  <div className="text-xs text-primary font-semibold mb-1">{update.category}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{update.title}</h4>
                  <div className="text-sm text-gray-600">{update.date}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-primary to-blue-700 text-white p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Get Expert Consultation</h4>
              <p className="text-sm mb-4">
                Need clarification on new rules or regulations? Our expert CAs are here to help.
              </p>
              <a href="#contact" className="bg-white text-primary hover:bg-gray-100 font-semibold py-2 px-4 rounded transition duration-300">
                Ask Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBank;
