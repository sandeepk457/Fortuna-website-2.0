"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import countryList from "react-select-country-list";

import {
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";

  const Select = dynamic(() => import("react-select"), {
  ssr: false,
});

export default function EnterpriseContactForm() {


    const countries = useMemo(
  () => countryList().getData(),
  []
);


const selectStyles = {
  control: (base, state) => ({
    ...base,
    minHeight: 58,
    borderRadius: 16,
    borderColor: state.isFocused
      ? "#C8102E"
      : "#CBD5E1",
    boxShadow: state.isFocused
      ? "0 0 0 4px rgba(200,16,46,.10)"
      : "none",
    "&:hover": {
      borderColor: "#C8102E",
    },
  }),

  menu: (base) => ({
    ...base,
    borderRadius: 16,
    overflow: "hidden",
    zIndex: 9999,
  }),

  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused
      ? "#F8E9EC"
      : "#fff",
    color: "#1e293b",
    cursor: "pointer",
  }),
};
  const initialForm = {
  fullName: "",
  email: "",
  company: "",
  phoneCode: "+91",
  phone: "",
  industry: "",
  product: "",
  country: "",
  companySize: "",
  message: "",
};

const [formData, setFormData] = useState(initialForm);

const [errors, setErrors] = useState({});
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);
const [showSuccessModal, setShowSuccessModal] = useState(false);
const [serverError, setServerError] = useState("");

 const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]:
      name === "phone"
        ? value.replace(/\D/g, "")
        : value,
  }));

  setErrors((prev) => ({
    ...prev,
    [name]: "",
  }));

  setServerError("");
};

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Business Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company Name is required.";
    }

    if (!formData.phone) {
  newErrors.phone = "Phone Number is required.";
} else if (formData.phone.length < 10) {
  newErrors.phone = "Enter a valid phone number.";
}

    if (!formData.industry) {
      newErrors.industry = "Please select Industry.";
    }

    if (!formData.product) {
      newErrors.product = "Please select Product.";
    }

    if (!formData.country) {
      newErrors.country = "Please select Country.";
    }

    if (!formData.companySize) {
      newErrors.companySize = "Please select Company Size.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your requirements.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setLoading(true);
  setServerError("");

  try {
    // Backend API
    // await axios.post("/api/contact", formData);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSuccess(true);
setShowSuccessModal(true);
setFormData(initialForm);

    

  } catch (err) {
    setServerError(
      "Something went wrong. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="relative overflow-hidden py-32 bg-slate-50">

      {/* Blue Glow */}

      <div className="absolute -left-40 top-0 w-[450px] h-[450px] rounded-full bg-[#005F99]/20 blur-[180px]" />

      {/* Red Glow */}

      <div className="absolute -right-40 bottom-0 w-[450px] h-[450px] rounded-full bg-[#C8102E]/20 blur-[180px]" />

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

        <div
  className="
    mt-24

    rounded-[40px]

    bg-white/85

    border
    border-white/40

    backdrop-blur-xl

    shadow-[0_25px_80px_rgba(0,0,0,0.08)]

    p-12
    lg:p-16
  "
>

<div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16">

          {/* Left Form */}

          <div>

            <form onSubmit={handleSubmit}>

             

{serverError && (
  <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-600">
    {serverError}
  </div>
)}


              <div className="grid md:grid-cols-2 gap-8">

                {/* Full Name */}

                <div>

                  <label className="mb-3 block text-sm font-semibold uppercase tracking-wide text-slate-700">

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

                  {errors.fullName && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.fullName}
                    </p>
                  )}

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

                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}

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

                  {errors.company && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.company}
                    </p>
                  )}

                </div>

                {/* Phone */}

                <div>

                  <label className="block mb-3 font-semibold text-slate-700">

                    Phone Number *

                  </label>

                  <PhoneInput
  country={"in"}
  value={formData.phone}
  onChange={(value, country) => {
    setFormData((prev) => ({
      ...prev,
      phone: value,
      phoneCode: `+${country.dialCode}`,
    }));
  }}
  enableSearch
  countryCodeEditable={false}
  inputStyle={{
    width: "100%",
    height: "58px",
    borderRadius: "16px",
    border: "1px solid #CBD5E1",
    paddingLeft: "58px",
    fontSize: "16px",
  }}
  buttonStyle={{
    borderTopLeftRadius: "16px",
    borderBottomLeftRadius: "16px",
    border: "1px solid #CBD5E1",
    background: "#fff",
  }}
  dropdownStyle={{
    zIndex: 9999,
  }}
/>

{errors.phone && (
  <p className="mt-2 text-sm text-red-600">
    {errors.phone}
  </p>
)}

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

                  {errors.industry && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.industry}
                    </p>
                  )}

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

                  {errors.product && (
  <p className="mt-2 text-sm text-red-600">
    {errors.product}
  </p>
)}

                </div>

                {/* Country */}

              

<div>

  <label className="block mb-3 font-semibold text-slate-700">
    Country *
  </label>

  <Select
  instanceId="country-select"
  inputId="country-select"
  options={countries}
  styles={selectStyles}
    placeholder="Search & Select Country"
    value={
      countries.find(
        (country) => country.value === formData.country
      ) || null
    }
    onChange={(selectedOption) => {
      setFormData((prev) => ({
        ...prev,
        country: selectedOption
          ? selectedOption.value
          : "",
      }));

      setErrors((prev) => ({
        ...prev,
        country: "",
      }));
    }}
    isClearable
    isSearchable
  />


  {errors.message && (
  <p className="mt-2 text-sm text-red-600">
    {errors.message}
  </p>
)}

  {errors.country && (
    <p className="mt-2 text-sm text-red-600">
      {errors.country}
    </p>
  )}

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
                disabled={loading}
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
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Request Personalized Demo
                  </>
                )}
              </button>

            </form>

          </div>

          </div>

          {/* Right Side */}

          <div>

            {/* <span className="uppercase tracking-[4px] text-[#C8102E] font-semibold">

              WHY FORTUNA

            </span> */}

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


                    bg-white/70

                    p-8

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

                        rounded-3xl

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

       {/* Success Modal */}

      {showSuccessModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md">

          <div
            className="
              relative
              w-full
              max-w-lg
              mx-6
              rounded-[32px]
              bg-white
              shadow-[0_30px_80px_rgba(0,0,0,.35)]
              overflow-hidden
              animate-[fadeIn_.35s_ease]
            "
          >

            {/* Top Gradient */}

            <div className="h-2 bg-gradient-to-r from-[#005F99] via-[#C8102E] to-[#005F99]" />

            <div className="px-10 py-10 text-center">

              {/* Fortuna Logo */}

              <div className="flex justify-center">

                <Image
                  src="/images/logos/New logo2.0.png"
                  alt="Fortuna Logo"
                  width={90}
                  height={90}
                  className="object-contain"
                />

              </div>

              {/* Success Icon */}

              <div className="mt-6 flex justify-center">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">

                  <CheckCircle2
                    className="text-green-600"
                    size={44}
                  />

                </div>

              </div>

              {/* Heading */}

              <h2 className="mt-8 text-3xl font-black text-slate-900">

                Thank You!

              </h2>

              {/* Message */}

              <p className="mt-5 text-lg leading-8 text-slate-600">

                Your request has been submitted successfully.

              </p>

              <p className="mt-2 text-slate-500">

                Our Fortuna experts will connect with you shortly.

              </p>

              {/* Buttons */}

              <div className="mt-10 flex flex-col gap-4">

                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="
                    rounded-xl
                    bg-[#C8102E]
                    py-4
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#a60d27]
                  "
                >
                  Close
                </button>

              </div>

            </div>

          </div>

        </div>
      )}

    </section>

  );

}
           