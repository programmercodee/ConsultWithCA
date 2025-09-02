import React, { useState } from 'react';

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState('all');

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'Managing Director',
      company: 'Kumar Industries Pvt. Ltd.',
      industry: 'manufacturing',
      image: 'https://avatar.iran.liara.run/public/8',
      rating: 5,
      testimonial: 'ConsultWithCA has been instrumental in managing our complex GST compliance requirements. Their expertise in manufacturing sector taxation helped us save ₹2.5 lakhs annually through proper input tax credit optimization.',
      service: 'GST Compliance & Tax Planning',
      location: 'Mumbai, Maharashtra'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Founder & CEO',
      company: 'TechStart Solutions',
      industry: 'it',
      image: 'https://avatar.iran.liara.run/public/8',
      rating: 5,
      testimonial: 'As a startup, we needed comprehensive CA services from company incorporation to ongoing compliance. Their team guided us through every step, from Private Limited registration to obtaining all necessary licenses. Highly professional!',
      service: 'Company Formation & Startup Services',
      location: 'Bangalore, Karnataka'
    },
    {
      id: 3,
      name: 'Dr. Amit Patel',
      position: 'Hospital Administrator',
      company: 'Patel Healthcare Group',
      industry: 'healthcare',
      image: 'https://avatar.iran.liara.run/public/8',
      rating: 5,
      testimonial: 'The audit services provided by ConsultWithCA are exceptional. They completed our statutory audit efficiently and provided valuable insights for improving our financial controls. Their healthcare sector expertise is evident.',
      service: 'Statutory Audit & Internal Controls',
      location: 'Ahmedabad, Gujarat'
    },
    {
      id: 4,
      name: 'Suresh Agarwal',
      position: 'Proprietor',
      company: 'Agarwal Trading Company',
      industry: 'trading',
      image: 'https://avatar.iran.liara.run/public/8',
      rating: 5,
      testimonial: 'Excellent service for our multi-state trading business. They handled our GST registrations across 8 states and continue to manage our monthly returns flawlessly. Very responsive and knowledgeable team.',
      service: 'Multi-State GST Management',
      location: 'Delhi'
    },
    {
      id: 5,
      name: 'Mrs. Kavita Jain',
      position: 'Partner',
      company: 'Jain & Associates Law Firm',
      industry: 'professional',
      image: 'https://avatar.iran.liara.run/public/8',
      rating: 5,
      testimonial: 'ConsultWithCA understands the unique requirements of professional service firms. They manage our partnership compliance, professional tax, and TDS matters efficiently. Great support for fellow professionals!',
      service: 'Professional Services Compliance',
      location: 'Pune, Maharashtra'
    },
    {
      id: 6,
      name: 'Vikram Singh',
      position: 'Director',
      company: 'Singh Construction Ltd.',
      industry: 'construction',
      image: 'https://avatar.iran.liara.run/public/8',
      rating: 5,
      testimonial: 'Their expertise in construction sector taxation is remarkable. They helped us navigate complex GST rules for under-construction properties and saved us from potential penalties. Truly reliable partners.',
      service: 'Construction Industry GST & Compliance',
      location: 'Jaipur, Rajasthan'
    }
  ];

  const industryFilters = [
    { key: 'all', label: 'All Industries', count: testimonials.length },
    { key: 'manufacturing', label: 'Manufacturing', count: testimonials.filter(t => t.industry === 'manufacturing').length },
    { key: 'it', label: 'IT & Software', count: testimonials.filter(t => t.industry === 'it').length },
    { key: 'healthcare', label: 'Healthcare', count: testimonials.filter(t => t.industry === 'healthcare').length },
    { key: 'trading', label: 'Trading', count: testimonials.filter(t => t.industry === 'trading').length },
    { key: 'professional', label: 'Professional Services', count: testimonials.filter(t => t.industry === 'professional').length },
    { key: 'construction', label: 'Construction', count: testimonials.filter(t => t.industry === 'construction').length }
  ];

  const filteredTestimonials = activeTab === 'all'
    ? testimonials
    : testimonials.filter(testimonial => testimonial.industry === activeTab);

  const renderStars = (rating) => {
    return Array(rating).fill(0).map((_, i) => (
      <span key={i} className="text-yellow-400 text-lg">★</span>
    ));
  };

  const clientStats = [
    { number: '98%', label: 'Client Retention Rate' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '24hrs', label: 'Average Response Time' },
    { number: '500+', label: 'Success Stories' }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients across
            different industries have to say about our professional CA services.
          </p>
        </div>

        {/* Client Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {clientStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Industry Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industryFilters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveTab(filter.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${activeTab === filter.key
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg shadow-md card-hover">
              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
                <span className="ml-2 text-gray-600 text-sm">({testimonial.rating}/5)</span>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.testimonial}"
              </p>

              {/* Service Type */}
              <div className="bg-blue-100 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                {testimonial.service}
              </div>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  <div className="text-xs text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials Section */}
        <div className="bg-gradient-to-r from-primary to-blue-700 text-white rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Video Testimonials</h3>
            <p className="text-blue-50 text-lg">
              Hear directly from our clients about their experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🎥</div>
              <h4 className="font-semibold mb-2">Manufacturing Client</h4>
              <p className="text-sm text-blue-500 mb-4">GST Compliance Success Story</p>
              <button className="bg-white text-primary hover:bg-gray-100 px-4 py-2 rounded text-sm font-medium transition duration-300">
                Watch Video
              </button>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🎥</div>
              <h4 className="font-semibold mb-2">Startup Founder</h4>
              <p className="text-sm text-blue-500 mb-4">Complete Business Setup</p>
              <button className="bg-white text-primary hover:bg-gray-100 px-4 py-2 rounded text-sm font-medium transition duration-300">
                Watch Video
              </button>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🎥</div>
              <h4 className="font-semibold mb-2">Healthcare Group</h4>
              <p className="text-sm text-blue-500 mb-4">Audit & Compliance Excellence</p>
              <button className="bg-white text-primary hover:bg-gray-100 px-4 py-2 rounded text-sm font-medium transition duration-300">
                Watch Video
              </button>
            </div>
          </div>
        </div>

        {/* Case Studies Preview */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Success Stories & Case Studies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                ₹2.5L Annual Savings
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Manufacturing Company GST Optimization
              </h4>
              <p className="text-gray-600 mb-4">
                How we helped a mid-size manufacturing company optimize their GST structure
                and reduce annual tax liability by ₹2.5 lakhs through proper input tax credit management.
              </p>
              <a href="#contact" className="text-primary font-medium hover:underline">
                Read Full Case Study →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                30-Day Setup
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Tech Startup Complete Business Setup
              </h4>
              <p className="text-gray-600 mb-4">
                Complete business incorporation and compliance setup for a tech startup,
                including Pvt. Ltd. registration, all licenses, and ongoing support.
              </p>
              <a href="#contact" className="text-primary font-medium hover:underline">
                Read Full Case Study →
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Trusted by Businesses Across India
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-4xl">🏭</div>
            <div className="text-4xl">🏥</div>
            <div className="text-4xl">💻</div>
            <div className="text-4xl">🏪</div>
            <div className="text-4xl">🏗️</div>
            <div className="text-4xl">⚖️</div>
          </div>
          <p className="text-gray-600 mt-4">
            Manufacturing • Healthcare • IT • Trading • Construction • Professional Services
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 bg-accent text-black p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-black mb-6 text-lg">
            Experience the same level of professional service that our clients rave about.
          </p>
          <a href="#contact" className="bg-white text-accent hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300">
            Start Your Success Story Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
