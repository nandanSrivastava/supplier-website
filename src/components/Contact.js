'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '', email: '', company: '', message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-1 sm:py-3">
        <div className="w-full max-w-none mx-auto px-1 sm:px-2 text-center">
          <h1 className="text-xs sm:text-base lg:text-lg font-bold mb-0.5 sm:mb-1 leading-tight">
            Contact Our Experts
          </h1>
          <p className="text-xs sm:text-sm mx-auto leading-tight opacity-90">
            Get in touch today!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-3 sm:py-4">
        <div className="container-responsive">
          <div className="grid lg:grid-cols-2 gap-4">
            
            
            {/* Contact Information */}
            <div className="px-2">
              <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                Get in Touch
              </h2>
              
              <div className="space-y-3">
                {/* Contact Numbers */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                    📞 Contact Numbers
                  </h3>
                  <div className="flex flex-col gap-2">
                    <a
                      href="tel:+919555413550"
                      className="bg-blue-600 text-white px-3 py-1.5 rounded font-semibold text-center hover:bg-blue-700 transition-colors duration-200 text-xs sm:text-sm"
                    >
                      📱 +91 9555413550
                    </a>
                    <a
                      href="tel:+919968123147"
                      className="bg-blue-600 text-white px-3 py-1.5 rounded font-semibold text-center hover:bg-blue-700 transition-colors duration-200 text-xs sm:text-sm"
                    >
                      📱 +91 9968123147
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                    💬 WhatsApp
                  </h3>
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://wa.me/919555413550"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-3 py-1.5 rounded font-semibold text-center hover:bg-green-700 transition-colors duration-200 text-xs sm:text-sm"
                    >
                      WhatsApp: +91 9555413550
                    </a>
                    <a
                      href="https://wa.me/919968123147"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-3 py-1.5 rounded font-semibold text-center hover:bg-green-700 transition-colors duration-200 text-xs sm:text-sm"
                    >
                      WhatsApp: +91 9968123147
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                    📧 Email
                  </h3>
                  <div className="flex flex-col gap-2">
                    <a
                      href="mailto:Info@IndustrialSparesMarketplace.com"
                      className="border border-blue-600 text-blue-600 px-3 py-1.5 rounded font-semibold text-center hover:bg-blue-600 hover:text-white transition-all duration-200 text-xs sm:text-sm break-all"
                    >
                      Info@IndustrialSparesMarketplace.com
                    </a>
                    <a
                      href="mailto:IndustrialSparesMarketplace@Gmail.com"
                      className="border border-blue-600 text-blue-600 px-3 py-1.5 rounded font-semibold text-center hover:bg-blue-600 hover:text-white transition-all duration-200 text-xs sm:text-sm break-all"
                    >
                      IndustrialSparesMarketplace@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                    📍 Visit Our Office
                  </h3>
                  <div className="bg-gray-50 p-3 rounded border text-xs sm:text-sm text-gray-700">
                    <p className="font-medium text-gray-900">Industrial Spares Marketplace</p>
                    <p>Safdarjung Enclave, New Delhi,</p>
                    <p>Delhi, India - 110029</p>
                    <p className="mt-1 text-blue-600 font-medium">Let's have a Cup of Tea/Coffee! ☕</p>
                  </div>
                </div>

                {/* Quick Quote Button */}
                <div className="pt-2">
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('showSection', { detail: 'quote' }))}
                    className="w-full bg-orange-600 text-white px-3 py-2 rounded font-semibold text-center hover:bg-orange-700 transition-all duration-200 text-xs sm:text-sm"
                  >
                    🚀 Request Quick Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
