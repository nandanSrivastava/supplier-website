"use client";

import { useState, memo } from "react";

const Contact = memo(() => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-3 sm:py-4">
      {/* Enhanced Hero */}
      <div className="py-8 text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 sm:py-12">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <h1 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
            Contact Our Experts
          </h1>
          <p className="text-base sm:text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team for personalized industrial solutions
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl px-4 mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                  Get in Touch
                </h2>
                <p className="text-gray-600 text-lg">
                  Ready to discuss your industrial needs? Contact us today!
                </p>
              </div>

              <div className="space-y-6">
                {/* Contact Numbers */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h3 className="flex items-center mb-4 text-lg font-bold text-gray-900">
                    📞 Contact Numbers
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+919555413550"
                      className="block w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-center hover:bg-blue-700 transition-all duration-300 hover:shadow-lg text-base"
                    >
                      📱 +91 9555413550
                    </a>
                    <a
                      href="tel:+919968123147"
                      className="block w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-center hover:bg-blue-700 transition-all duration-300 hover:shadow-lg text-base"
                    >
                      📱 +91 9968123147
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h3 className="flex items-center mb-4 text-lg font-bold text-gray-900">
                    💬 WhatsApp
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="https://wa.me/919555413550"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-green-600 text-white px-6 py-3 rounded-xl font-semibold text-center hover:bg-green-700 transition-all duration-300 hover:shadow-lg text-base"
                    >
                      WhatsApp: +91 9555413550
                    </a>
                    <a
                      href="https://wa.me/919968123147"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-green-600 text-white px-6 py-3 rounded-xl font-semibold text-center hover:bg-green-700 transition-all duration-300 hover:shadow-lg text-base"
                    >
                      WhatsApp: +91 9968123147
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h3 className="flex items-center mb-4 text-lg font-bold text-gray-900">
                    📧 Email
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:Info@IndustrialSparesMarketplace.com"
                      className="block w-full border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold text-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg text-base break-all"
                    >
                      Info@IndustrialSparesMarketplace.com
                    </a>
                    <a
                      href="mailto:IndustrialSparesMarketplace@gmail.com"
                      className="block w-full border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold text-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg text-base break-all"
                    >
                      IndustrialSparesMarketplace@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h3 className="flex items-center mb-4 text-lg font-bold text-gray-900">
                    📍 Visit Our Office
                  </h3>
                  <div className="p-4 text-gray-700 border-2 border-gray-200 rounded-xl bg-gradient-to-br from-gray-50 to-white">
                    <p className="font-bold text-gray-900 text-lg mb-2">
                      Industrial Spares Marketplace
                    </p>
                    <p className="text-base mb-1">88, Safdarjung Enclave, Humayanpur,</p>
                    <p className="text-base mb-3">New Delhi, Delhi, India - 110029</p>
                    <p className="font-semibold text-blue-600 text-base">
                      Let&apos;s have a Cup of Tea/Coffee! ☕
                    </p>
                  </div>
                </div>

                {/* Quick Quote Button */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <button
                    onClick={() =>
                      window.dispatchEvent(
                        new CustomEvent("showSection", { detail: "quote" })
                      )
                    }
                    className="w-full px-6 py-4 text-lg font-bold text-center text-white transition-all duration-300 bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl hover:from-orange-700 hover:to-orange-800 hover:shadow-lg hover:-translate-y-1"
                  >
                    🚀 Request Quick Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
