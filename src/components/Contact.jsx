import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section id="contact" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Expert CA Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to streamline your business compliance? Contact our expert chartered
            accountants for personalized solutions and free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Schedule Your Free Consultation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select Service Required</option>
                <option value="tax-planning">Tax Planning & Filing</option>
                <option value="gst">GST Services</option>
                <option value="audit">Audit & Assurance</option>
                <option value="company-formation">Company Formation</option>
                <option value="accounting">Accounting Services</option>
                <option value="legal">Legal & Compliance</option>
                <option value="other">Other</option>
              </select>

              <textarea
                name="message"
                placeholder="Describe your requirements..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              ></textarea>

              <button type="submit" className="w-full btn-primary">
                Schedule Free Consultation
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-primary text-black p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-xl mr-4">📧</span>
                  <div>
                    <div className="font-medium text-black">Email</div>
                    <div className="text-blue-500">consultwithcaa@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-xl mr-4">📱</span>
                  <div>
                    <div className="font-medium text-black">Phone</div>
                    <div className="text-blue-500">+91 84079 81114</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-xl mr-4">📍</span>
                  <div>
                    <div className="font-medium text-black">Office</div>
                    <div className="text-blue-500">FP No. 37/B1+B2, Abhinav Kala Mahavidyalaya Chowk, CTS No 431/195, Tilak Rd, Dadawadi, Shukrawar Peth, Pune, Maharashtra 411002</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-xl mr-4">⏰</span>
                  <div>
                    <div className="font-medium text-black">Business Hours</div>
                    <div className="text-blue-500">Mon - Sat: 9:00 AM - 7:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-green-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-gray-600">Emergency Support</div>
              </div>
              <div className="text-center bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary">Same Day</div>
                <div className="text-gray-600">Response Time</div>
              </div>
            </div>

            <div className="bg-gold text-white p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">🎯 Why Choose ConsultWithCA?</h4>
              <ul className="space-y-2 text-sm">
                <li>• 15+ Years of Experience</li>
                <li>• 500+ Satisfied Clients</li>
                <li>• All India Service Coverage</li>
                <li>• Expert Team of Qualified CAs</li>
                <li>• Competitive & Transparent Pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
