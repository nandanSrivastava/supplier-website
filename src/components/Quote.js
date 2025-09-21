"use client";

import { useState, useMemo, useCallback } from "react";

const Quote = () => {
  const [formData, setFormData] = useState({
    // Company Information
    companyName: "",
    industry: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",

    // Project Details
    projectType: "",
    productCategory: "",
    quantity: "",
    targetPrice: "",
    timeline: "",
    description: "",

    // Additional Requirements
    qualityCertifications: [],
    deliveryLocation: "",
    paymentTerms: "",
    additionalServices: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const industries = useMemo(
    () => [
      "Oil & Gas",
      "Manufacturing",
      "Mining",
      "Chemical",
      "Power & Energy",
      "Construction",
      "Automotive",
      "Aerospace",
    ],
    []
  );

  const productCategories = useMemo(
    () => [
      "Industrial Equipment",
      "Machinery",
      "Safety Equipment",
      "Tools & Instruments",
      "Raw Materials",
      "Electronic Components",
      "Pipes & Fittings",
      "Valves & Controls",
    ],
    []
  );

  const qualityCerts = useMemo(
    () => [
      "ISO 9001",
      "ISO 14001",
      "API Certification",
      "CE Marking",
      "ASME Certification",
      "UL Listed",
      "ATEX Certified",
    ],
    []
  );

  const additionalServicesOptions = useMemo(
    () => [
      "Quality Inspection",
      "Logistics Management",
      "Installation Support",
      "Training Services",
      "Maintenance Support",
      "Documentation Services",
    ],
    []
  );

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleCheckboxChange = useCallback((name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter((item) => item !== value)
        : [...prev[name], value],
    }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      // Reset form after successful submission
      setFormData({
        companyName: "",
        industry: "",
        contactPerson: "",
        email: "",
        phone: "",
        country: "",
        projectType: "",
        productCategory: "",
        quantity: "",
        targetPrice: "",
        timeline: "",
        description: "",
        qualityCertifications: [],
        deliveryLocation: "",
        paymentTerms: "",
        additionalServices: [],
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  if (submitStatus === "success") {
    return (
      <div className="max-w-3xl mx-auto px-3 py-4 text-center min-h-screen flex flex-col justify-center">
        <div className="bg-green-100 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-gray-900 mb-2">
          Quote Request Submitted!
        </h1>
        <p className="text-sm text-gray-600 mb-4">
          Thank you for your interest. Our team will review your requirements
          and get back to you within 24 hours with a detailed quote.
        </p>
        <div className="bg-gray-50 rounded-lg p-3 mb-4">
          <h2 className="text-base font-semibold text-gray-900 mb-2">
            What happens next?
          </h2>
          <div className="grid md:grid-cols-3 gap-2 text-left">
            <div>
              <div className="text-lg text-blue-600 mb-1">1</div>
              <h3 className="font-semibold mb-1 text-xs">Review & Analysis</h3>
              <p className="text-gray-600 text-xs">
                Our experts analyze your requirements and identify optimal
                solutions.
              </p>
            </div>
            <div>
              <div className="text-lg text-blue-600 mb-1">2</div>
              <h3 className="font-semibold mb-1 text-xs">Sourcing & Pricing</h3>
              <p className="text-gray-600 text-xs">
                We source from our global network and negotiate competitive
                prices.
              </p>
            </div>
            <div>
              <div className="text-lg text-blue-600 mb-1">3</div>
              <h3 className="font-semibold mb-1 text-xs">Detailed Proposal</h3>
              <p className="text-gray-600 text-xs">
                You receive a comprehensive quote with timeline and terms.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <button
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent("showSection", { detail: "home" })
              )
            }
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-sm"
          >
            Return to Home
          </button>
          <button
            onClick={() => setSubmitStatus("")}
            className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 text-sm"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3">
        <div className="max-w-6xl mx-auto px-3 text-center">
          <h1 className="text-lg font-bold mb-1">Request a Quote</h1>
          <p className="text-sm max-w-2xl mx-auto">
            Get a customized quote for your industrial procurement needs. Our
            experts will analyze your requirements and provide competitive
            pricing.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="flex-1 py-3">
        <div className="max-w-4xl mx-auto px-3">
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Company Information */}
            <div className="bg-gray-50 rounded-lg p-3">
              <h2 className="text-base font-bold text-gray-900 mb-2">
                Company Information
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Industry *
                  </label>
                  <select
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  >
                    <option value="">Select Industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    required
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <h2 className="text-base font-bold text-gray-900 mb-2">
                Project Details
              </h2>
              <div className="grid md:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  >
                    <option value="">Select Project Type</option>
                    <option value="new-procurement">New Procurement</option>
                    <option value="replacement">Equipment Replacement</option>
                    <option value="expansion">Facility Expansion</option>
                    <option value="maintenance">Maintenance & Repair</option>
                    <option value="upgrade">System Upgrade</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Product Category *
                  </label>
                  <select
                    name="productCategory"
                    required
                    value={formData.productCategory}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  >
                    <option value="">Select Category</option>
                    {productCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Quantity/Volume *
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    required
                    value={formData.quantity}
                    onChange={handleInputChange}
                    placeholder="e.g., 50 units, 1000 kg, etc."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Required Timeline *
                  </label>
                  <select
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  >
                    <option value="">Select Timeline</option>
                    <option value="urgent">Urgent (1-2 weeks)</option>
                    <option value="fast">Fast Track (3-4 weeks)</option>
                    <option value="standard">Standard (1-2 months)</option>
                    <option value="flexible">Flexible (2+ months)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Detailed Description *
                </label>
                <textarea
                  name="description"
                  required
                  rows={3}
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Please provide detailed specifications, requirements, and any special considerations..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white px-8 py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isSubmitting ? "Submitting..." : "Submit Quote Request"}
              </button>
              <p className="text-gray-600 mt-2 text-xs">
                * Required fields. We will respond within 24 hours.
              </p>
            </div>

            {submitStatus === "error" && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded-lg text-sm">
                There was an error submitting your request. Please try again or
                contact us directly.
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Quote;
