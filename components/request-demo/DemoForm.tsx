"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import countryList from "react-select-country-list";

import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const Select = dynamic(() => import("react-select"), {
  ssr: false,
});

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

export default function DemoForm() {
  const countries = useMemo(
    () => countryList().getData(),
    []
  );

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Business Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.email
      )
    ) {
      newErrors.email = "Enter a valid business email.";
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
      newErrors.message =
        "Please tell us about your requirements.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  if (!validateForm()) return;

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        enquiryType: "DEMO_REQUEST",
        ...formData,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Something went wrong."
      );
    }

    console.log("DEMO REQUEST SUCCESS:", data);

    alert(
      `Demo request submitted successfully. Enquiry ID: ${data.enquiryId}`
    );

    setFormData(initialForm);
    setErrors({});

  } catch (error) {
    console.error("DEMO REQUEST ERROR:", error);

    alert(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  }
};

  return (
    <section
      id="demo-form"
      className="relative overflow-hidden bg-slate-50 py-24 md:py-28"
    >

      {/* Background Glows */}

      <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#005F99]/10 blur-[170px]" />

      <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#C8102E]/10 blur-[170px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6">

        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">

          {/* LEFT */}

          <div className="lg:sticky lg:top-24 lg:self-start">

            <span className="text-sm font-semibold uppercase tracking-[4px] text-[#C8102E]">
              PERSONALIZED DEMONSTRATION
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">

              <span className="text-[#005F99]">
                Request Your
              </span>

              <span className="block text-[#C8102E]">
                Fortuna Demo
              </span>

            </h2>

            <div className="mt-7 h-1 w-32 rounded-full bg-gradient-to-r from-[#005F99] to-[#C8102E]" />

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Tell us about your organization and the supply chain
              challenges you want to address. Our experts will
              tailor the demonstration around your business needs.
            </p>

            {/* Demo Points */}

            <div className="mt-10 space-y-5">

              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#005F99]/10 text-[#005F99]">
                  <Sparkles size={21} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Personalized Walkthrough
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Explore the Fortuna capabilities relevant to
                    your organization.
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C8102E]/10 text-[#C8102E]">
                  <Workflow size={21} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Real Supply Chain Workflows
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Understand how intelligent planning and
                    execution can work together.
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#005F99]/10 text-[#005F99]">
                  <ShieldCheck size={21} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Enterprise Discussion
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Discuss deployment, integration and
                    implementation possibilities.
                  </p>
                </div>

              </div>

            </div>

            {/* Trust line */}

            <div className="mt-10 flex items-center gap-3 text-sm text-slate-500">

              <CheckCircle2
                size={18}
                className="text-green-600"
              />

              <span>
                Your information is handled securely.
              </span>

            </div>

          </div>

          {/* RIGHT FORM */}

          <div
            className="
              rounded-[36px]
              border
              border-white/60
              bg-white/90
              p-8
              shadow-[0_25px_80px_rgba(0,0,0,0.08)]
              backdrop-blur-xl
              md:p-10
              lg:p-12
            "
          >

            <div className="mb-10">

              <p className="text-sm font-semibold uppercase tracking-[3px] text-[#C8102E]">
                LET'S GET STARTED
              </p>

              <h3 className="mt-3 text-3xl font-black text-[#005F99]">
                Tell Us About Your Requirements
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Complete the form below and our team will get in
                touch with you.
              </p>

            </div>

            <form onSubmit={handleSubmit}>

              <div className="grid gap-7 md:grid-cols-2">

                {/* Full Name */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
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
                      bg-white
                      px-5
                      py-4
                      outline-none
                      transition
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

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Business Email *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-300
                      bg-white
                      px-5
                      py-4
                      outline-none
                      transition
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

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
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
                      bg-white
                      px-5
                      py-4
                      outline-none
                      transition
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

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Phone Number *
                  </label>

                  <PhoneInput
                    country="in"
                    value={formData.phone}
                    onChange={(value, country: { dialCode: string }) => {
  setFormData((prev) => ({
    ...prev,
    phone: value,
    phoneCode: `+${country.dialCode}`,
  }));

  setErrors((prev) => ({
    ...prev,
    phone: "",
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

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
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
                      bg-white
                      px-5
                      py-4
                      outline-none
                      transition
                      focus:border-[#C8102E]
                      focus:ring-4
                      focus:ring-[#C8102E]/10
                    "
                  >
                    <option value="">
                      Select Industry
                    </option>

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

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
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
                      bg-white
                      px-5
                      py-4
                      outline-none
                      transition
                      focus:border-[#C8102E]
                      focus:ring-4
                      focus:ring-[#C8102E]/10
                    "
                  >
                    <option value="">
                      Select Product
                    </option>

                    <option>Fortuna SIMS</option>
                    <option>Fortuna Intelli AI</option>
                    <option>Fortuna DemandSense</option>
                    <option>Fortuna Lastmile AI</option>
                    <option>Fortuna Connect Hub</option>
                    <option>Fortuna YardSync</option>
                    <option>Fortuna Plan Copilot</option>
                    <option>Fortuna EAM</option>
                    <option>Complete Fortuna Platform</option>
                  </select>

                  {errors.product && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.product}
                    </p>
                  )}

                </div>

                {/* Country */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Country *
                  </label>

                  <Select
                    instanceId="demo-country-select"
                    inputId="demo-country-select"
                    options={countries}
                    placeholder="Search & Select Country"
                    isClearable
                    isSearchable
                    value={
                      countries.find(
                        (country) =>
                          country.value === formData.country
                      ) || null
                    }
                    onChange={(selectedOption: any) => {
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
                    styles={{
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
                    }}
                  />

                  {errors.country && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.country}
                    </p>
                  )}

                </div>

                {/* Company Size */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
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
                      bg-white
                      px-5
                      py-4
                      outline-none
                      transition
                      focus:border-[#C8102E]
                      focus:ring-4
                      focus:ring-[#C8102E]/10
                    "
                  >
                    <option value="">
                      Select Company Size
                    </option>

                    <option>1 - 50 Employees</option>
                    <option>51 - 200 Employees</option>
                    <option>201 - 500 Employees</option>
                    <option>501 - 1000 Employees</option>
                    <option>1000+ Employees</option>
                  </select>

                  {errors.companySize && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.companySize}
                    </p>
                  )}

                </div>

              </div>

              {/* Requirements */}

              <div className="mt-7">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Tell Us About Your Requirements *
                </label>

                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your current processes, business challenges or supply chain requirements..."
                  className="
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-slate-300
                    bg-white
                    px-5
                    py-4
                    outline-none
                    transition
                    focus:border-[#C8102E]
                    focus:ring-4
                    focus:ring-[#C8102E]/10
                  "
                />

                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.message}
                  </p>
                )}

              </div>

              {/* Submit */}

              <button
                type="submit"
                className="
                  mt-8
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#C8102E]
                  px-8
                  py-4
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-[#C8102E]/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#a60d27]
                  hover:shadow-xl
                "
              >
                Request Demo
                <ArrowRight size={19} />
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                By submitting this form, you agree to be contacted
                by Fortuna Global Supply Chain Systems regarding
                your enquiry.
              </p>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}