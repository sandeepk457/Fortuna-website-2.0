"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function EnterpriseContactForm() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    product: "",
    country: "",
    companySize: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <section className="relative overflow-hidden py-32 bg-slate-50">

      {/* Blue Glow */}

      <div className="absolute -left-40 top-0 w-[450px] h-[450px] rounded-full bg-[#005F99]/5 blur-[180px]" />

      {/* Red Glow */}

      <div className="absolute -right-40 bottom-0 w-[450px] h-[450px] rounded-full bg-[#C8102E]/5 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[5px] text-[#C8102E] font-semibold">

            START YOUR DIGITAL TRANSFORMATION

          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black leading-tight">

            <span className="text-[#005F99]">

              Connect With

            </span>

            <span className="block text-[#C8102E]">

              Fortuna Experts

            </span>

          </h2>

          <div className="mx-auto mt-8 h-1 w-40 rounded-full bg-gradient-to-r from-[#005F99] to-[#C8102E]" />

          <p className="mt-10 text-xl leading-9 text-slate-600 max-w-4xl mx-auto">

            Tell us about your business requirements and our experts
            will connect with you to design the right supply chain
            solution for your organization.

          </p>

        </div>

        {/* Main Layout */}

        <div className="mt-24 grid lg:grid-cols-2 gap-16">

          {/* Left Form */}

          <div>

            <form onSubmit={handleSubmit}>

              <div className="grid md:grid-cols-2 gap-6">

                {/* Full Name */}

                <div>

                  <label className="block mb-3 font-semibold text-slate-700">

                    Full Name *

                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="
                      w-full

                      rounded-2xl

                      border
                      border-slate-300

                      px-5
                      py-4

                      outline-none

                      transition-all

                      focus:border-[#C8102E]
                      focus:ring-4
                      focus:ring-[#C8102E]/10
                    "
                  />

                </div>

                {/* Email */}

                <div>

                  <label className="block mb-3 font-semibold text-slate-700">

                    Business Email *

                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter business email"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-300
                      px-5
                      py-4
                      outline-none
                      transition-all
                      focus:border-[#C8102E]
                      focus:ring-4
                      focus:ring-[#C8102E]/10
                    "
                  />

                </div>

                {/* Company */}

                <div>

                  <label className="block mb-3 font-semibold text-slate-700">

                    Company Name *

                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-300
                      px-5
                      py-4
                      outline-none
                      transition-all
                      focus:border-[#C8102E]
                      focus:ring-4
                      focus:ring-[#C8102E]/10
                    "
                  />

                </div>

                {/* Phone */}

                <div>

                  <label className="block mb-3 font-semibold text-slate-700">

                    Phone Number *

                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-300
                      px-5
                      py-4
                      outline-none
                      transition-all
                      focus:border-[#C8102E]
                      focus:ring-4
                      focus:ring-[#C8102E]/10
                    "
                  />

                </div>

                                {/* Industry */}

                <div>

                  <label className="block mb-3 font-semibold text-slate-700">

                    Industry *

                  </label>

                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-300
                      px-5
                      py-4
                      outline-none
                      transition-all
                      focus:border-[#C8102E]
                      focus:ring-4
                      focus:ring-[#C8102E]/10
                    "
                  >

                    <option value="">Select Industry</option>

                    <option>Manufacturing</option>

                    <option>Logistics</option>

                    <option>Retail</option>

                    <option>Healthcare</option>

                    <option>Automotive</option>

                    <option>Warehousing</option>

                    <option>Consumer Goods</option>

                    <option>Energy & Utilities</option>

                    <option>Other</option>

                  </select>

                </div>

                {/* Product */}

                <div>

                  <label className="block mb-3 font-semibold text-slate-700">

                    Interested Product *

                  </label>

                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-300
                      px-5
                      py-4
                      outline-none
                      transition-all
                      focus:border-[#C8102E]
                      focus:ring-4
                      focus:ring-[#C8102E]/10
                    "
                  >

                    <option value="">Select Product</option>

                    <option>All</option>

                    <option>Fortuna SIMS</option>

                    <option>Fortuna Intelli AI</option>

                    <option>Fortuna DemandSense</option>

                    <option>Fortuna Lastmile AI</option>

                    <option>Fortuna Connect Hub</option>

                    <option>Fortuna YardSync</option>

                    <option>Fortuna Plan Copilot</option>

                    <option>Fortuna EAM</option>

                  </select>

                </div>

                {/* Country */}

                <div>

                  <label className="block mb-3 font-semibold text-slate-700">

                    Country *

                  </label>

                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Country"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-300
                      px-5
                      py-4
                      outline-none
                      transition-all
                      focus:border-[#C8102E]
                      focus:ring-4
                      focus:ring-[#C8102E]/10
                    "
                  />

                </div>

                {/* Company Size */}

                <div>

                  <label className="block mb-3 font-semibold text-slate-700">

                    Company Size *

                  </label>

                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-300
                      px-5
                      py-4
                      outline-none
                      transition-all
                      focus:border-[#C8102E]
                      focus:ring-4
                      focus:ring-[#C8102E]/10
                    "
                  >

                    <option value="">Select Company Size</option>

                    <option>1 - 50 Employees</option>

                    <option>51 - 200 Employees</option>

                    <option>201 - 500 Employees</option>

                    <option>501 - 1000 Employees</option>

                    <option>1000+ Employees</option>

                  </select>

                </div>

              </div>

              {/* Message */}

              <div className="mt-8">

                <label className="block mb-3 font-semibold text-slate-700">

                  Tell Us About Your Requirements

                </label>

                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your business challenges, project goals or supply chain requirements..."
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-300
                    px-5
                    py-4
                    outline-none
                    transition-all
                    resize-none
                    focus:border-[#C8102E]
                    focus:ring-4
                    focus:ring-[#C8102E]/10
                  "
                />

              </div>

              {/* Submit */}

              <button
                type="submit"
                className="
                  mt-10

                  inline-flex
                  items-center
                  gap-3

                  rounded-full

                  bg-[#C8102E]

                  px-8
                  py-4

                  text-white
                  font-semibold

                  transition-all
                  duration-300

                  hover:bg-[#a60d27]
                  hover:scale-105
                "
              >

                <Send size={18} />

                Request Personalized Demo

              </button>

            </form>

          </div>

          {/* Right Side */}

          <div>

            <span className="uppercase tracking-[4px] text-[#C8102E] font-semibold">

              WHY FORTUNA

            </span>

            <h3 className="mt-5 text-4xl font-black leading-tight">

              <span className="text-[#005F99]">

                Why Enterprises

              </span>

              <span className="block text-[#C8102E]">

                Choose Fortuna

              </span>

            </h3>

            <p className="mt-8 text-lg leading-8 text-slate-600">

              We combine AI, Supply Chain expertise and enterprise-grade
              technology to help organizations build resilient,
              intelligent and future-ready operations.

            </p>

            <div className="mt-12 space-y-6">



                              {[
                {
                  title: "AI-Powered Supply Chain",
                  description:
                    "Leverage AI-driven planning, forecasting and operational intelligence to optimize your supply chain.",
                },
                {
                  title: "Enterprise Ready",
                  description:
                    "Scalable architecture designed for organizations of every size with enterprise-grade reliability.",
                },
                {
                  title: "Cloud & On-Premise",
                  description:
                    "Deploy Fortuna in Cloud, On-Premise or Hybrid environments based on your business needs.",
                },
                {
                  title: "Enterprise Security",
                  description:
                    "Built with role-based access, audit trails and enterprise-level security best practices.",
                },
                {
                  title: "Industry Specialists",
                  description:
                    "Purpose-built solutions for Manufacturing, Logistics, Retail, Healthcare and more.",
                },
                {
                  title: "Customer Success",
                  description:
                    "From implementation to continuous optimization, our experts work with you every step of the journey.",
                },
              ].map((item, index) => (

                <div
                  key={index}
                  className="
                    group

                    rounded-3xl

                    border
                    border-slate-200

                    bg-white

                    p-6

                    shadow-lg

                    transition-all
                    duration-500

                    hover:-translate-y-2
                    hover:border-[#C8102E]/30
                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                  "
                >

                  <div className="flex gap-5">

                    <div
                      className="
                        flex

                        h-14
                        w-14

                        items-center
                        justify-center

                        rounded-2xl

                        bg-gradient-to-br
                        from-[#005F99]
                        to-[#C8102E]

                        text-white

                        font-bold
                        text-lg

                        transition-all
                        duration-500

                        group-hover:scale-110
                        group-hover:rotate-6
                      "
                    >

                      {index + 1}

                    </div>

                    <div>

                      <h4 className="text-xl font-bold text-slate-900">

                        {item.title}

                      </h4>

                      <p className="mt-3 leading-7 text-slate-600">

                        {item.description}

                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}
           