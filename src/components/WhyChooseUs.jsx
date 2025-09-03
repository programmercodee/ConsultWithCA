import React from 'react';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: '🎓',
      title: 'Qualified & Experienced Team',
      description: 'Our team consists of qualified Chartered Accountants with 15+ years of combined experience in taxation, audit, and compliance.',
      stats: '15+ Years Experience'
    },
    {
      icon: '🏆',
      title: 'Proven Track Record',
      description: 'Successfully served 500+ clients across various industries with 99% satisfaction rate and zero compliance failures.',
      stats: '500+ Happy Clients'
    },
    {
      icon: '💡',
      title: 'Personalized Solutions',
      description: 'We understand that every business is unique. Our solutions are tailored to meet your specific industry requirements and business goals.',
      stats: 'Customized Approach'
    },
    {
      icon: '⚡',
      title: 'Quick Turnaround',
      description: 'Fast and efficient service delivery without compromising on quality. Most queries resolved within 24 hours.',
      stats: '24hr Response Time'
    },
    {
      icon: '🔒',
      title: 'Data Security & Confidentiality',
      description: 'Your financial data is completely secure with us. We follow strict confidentiality protocols and use encrypted systems.',
      stats: '100% Secure'
    },
    {
      icon: '📞',
      title: '24/7 Support',
      description: 'Round-the-clock support for urgent matters. Our experts are always available when you need professional guidance.',
      stats: 'Always Available'
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No hidden charges or surprise fees. Our pricing is upfront, competitive, and provides excellent value for money.',
      stats: 'No Hidden Costs'
    },
    {
      icon: '🌐',
      title: 'All India Service',
      description: 'We serve clients across India with our comprehensive CA services. Physical location is no barrier to our expertise.',
      stats: 'Pan India Coverage'
    }
  ];

  const certifications = [
    { name: 'Institute of Chartered Accountants of India (ICAI)', logo: '🏛️' },
    { name: 'Goods & Services Tax Practitioner', logo: '📋' },
    { name: 'Income Tax Practitioner', logo: '📊' },
    { name: 'Company Law Board Certified', logo: '⚖️' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Free consultation to understand your requirements and business needs.'
    },
    {
      step: '02',
      title: 'Customized Proposal',
      description: 'Detailed proposal with timeline, deliverables, and transparent pricing.'
    },
    {
      step: '03',
      title: 'Service Execution',
      description: 'Professional execution of services with regular updates and communication.'
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'Continuous support and guidance to ensure compliance and growth.'
    }
  ];

  return (
    <section id="about" className="bg-gray-50 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose ConsultWithCA?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With a perfect blend of expertise, technology, and personalized service,
            we are your ideal partner for all chartered accountant services.
          </p>
        </div>

        {/* Key Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md card-hover text-center">
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {advantage.description}
              </p>
              <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                {advantage.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Our Process */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Simple 4-Step Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-primary text-black w-12 h-12 rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {process.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {process.description}
                </p>
                {/* Arrow for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 -right-4 text-primary text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Credentials */}
        <div className="bg-gradient-to-r from-primary to-blue-700 text-white rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Professional Credentials</h3>
            <p className="text-blue-100 text-lg">
              Certified and authorized by leading professional bodies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center bg-white bg-opacity-10 p-4 rounded-lg">
                <div className="text-3xl mb-2">{cert.logo}</div>
                <div className="text-sm font-medium text-black">{cert.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics & Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600">Clients Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">99%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-accent text-black p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h3>
          <p className="text-emerald-500 mb-6 text-lg">
            Join hundreds of satisfied clients who trust ConsultWithCA for their business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-accent hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300">
              Schedule Free Consultation
            </a>
            <a href="tel:+918407981114" className="border-2 border-white text-black hover:bg-gray-100 hover:text-accent font-semibold py-3 px-8 rounded-lg transition duration-300">
              Call Now: +91 84079 81114
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
