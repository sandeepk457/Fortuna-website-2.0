"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does implementation take?",
    answer:
      "Implementation timelines depend on your business processes, deployment model and project scope. Our experts ensure a structured and efficient implementation approach.",
  },
  {
    question: "Can I request a personalized product demonstration?",
    answer:
      "Absolutely. Our team will schedule a personalized demonstration based on your industry, operational requirements and supply chain challenges.",
  },
  {
    question: "Does Fortuna support cloud deployment?",
    answer:
      "Yes. Fortuna supports Cloud, On-Premise and Hybrid deployment models, allowing organizations to choose the architecture that best fits their IT strategy.",
  },
  {
    question: "Which industries does Fortuna support?",
    answer:
      "Fortuna serves Manufacturing, Logistics, Retail, Healthcare, Automotive, Warehousing, Consumer Goods and Energy & Utilities with industry-specific supply chain solutions.",
  },
  {
    question: "Can Fortuna integrate with our ERP or existing systems?",
    answer:
      "Yes. Fortuna provides secure integration capabilities with ERP, WMS, TMS, MES, CRM and third-party enterprise applications through APIs and middleware.",
  },
  {
    question: "Do you provide implementation and post-go-live support?",
    answer:
      "Yes. Fortuna provides implementation consulting, end-user training and continuous post-go-live support to ensure long-term customer success.",
  },
];

export default function ContactFAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden py-32 bg-slate-50">

      {/* Background Glow */}

      <div className="absolute -left-40 top-0 w-[420px] h-[420px] rounded-full bg-[#005F99]/5 blur-[180px]" />

      <div className="absolute -right-40 bottom-0 w-[420px] h-[420px] rounded-full bg-[#C8102E]/5 blur-[180px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[5px] font-semibold text-[#C8102E]">

            FREQUENTLY ASKED QUESTIONS

          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight">

            <span className="text-[#005F99]">

              Have Questions?

            </span>

            <span className="block text-[#C8102E]">

              We've Got Answers

            </span>

          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600 max-w-3xl mx-auto">

            Find answers to the most frequently asked questions about
            Fortuna's Supply Chain Platform, implementation process and
            enterprise services.

          </p>

        </div>

        {/* Accordion */}

        <div className="mt-20 space-y-6">

          {faqs.map((faq, index) => {

            const open = active === index;

            return (

              <div
                key={index}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  shadow-lg
                  overflow-hidden

                  transition-all
                  duration-500

                  hover:border-[#C8102E]/30
                  hover:shadow-xl
                "
              >

                <button
                  onClick={() =>
                    setActive(open ? -1 : index)
                  }
                  className="
                    w-full

                    flex
                    items-center
                    justify-between

                    p-8

                    text-left
                  "
                >

                  <h3 className="text-xl font-bold text-slate-900">

                    {faq.question}

                  </h3>

                  <div
                    className={`
                      w-12
                      h-12

                      rounded-full

                      flex
                      items-center
                      justify-center

                      transition-all

                      ${
                        open
                          ? "bg-[#C8102E] text-white"
                          : "bg-[#005F99]/10 text-[#005F99]"
                      }
                    `}
                  >

                    {open ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}

                  </div>

                </button>

                <div
                  className={`
                    grid
                    transition-all
                    duration-500

                    ${
                      open
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >

                  <div className="overflow-hidden">

                    <p className="px-8 pb-8 text-slate-600 leading-8">

                      {faq.answer}

                    </p>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}