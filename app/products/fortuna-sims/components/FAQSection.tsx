"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How quickly can Fortuna SIMS be implemented?",
    answer:
      "Implementation timelines vary based on your business size and project scope. Fortuna follows a structured deployment approach to ensure a smooth, efficient, and scalable rollout.",
  },
  {
    question:
      "Can Fortuna SIMS integrate with our existing ERP and business applications?",
    answer:
      "Yes. Fortuna SIMS supports secure API-based integrations with ERP, CRM, finance systems, analytics platforms, and other enterprise applications.",
  },
  {
    question:
      "Is Fortuna SIMS suitable for multiple warehouses and business locations?",
    answer:
      "Absolutely. Fortuna SIMS is designed for multi-warehouse, multi-location, and enterprise-scale supply chain operations through a unified platform.",
  },
  {
    question: "How does Fortuna SIMS ensure enterprise-grade security?",
    answer:
      "The platform provides role-based access control, encrypted communications, audit trails, continuous monitoring, and secure cloud infrastructure to protect business-critical data.",
  },
  {
    question:
      "Can workflows and approval processes be customized for our business?",
    answer:
      "Yes. Fortuna SIMS offers configurable workflows, approval hierarchies, and business rules that can be adapted to your operational requirements.",
  },
  {
    question:
      "Does Fortuna SIMS support mobile warehouse execution?",
    answer:
      "Yes. Mobile capabilities enable real-time execution of inbound, outbound, inventory, cycle count, and warehouse operations directly from handheld devices.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#005F9908,transparent_35%),radial-gradient(circle_at_bottom_right,#C8102E08,transparent_35%)]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-[#C8102E]/20 bg-red-50 px-4 py-2 text-sm font-semibold text-[#C8102E]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
  <span className="text-[#C8102E]">
    Everything You Need to Know About
  </span>
  <span className="text-[#005F99]">
    {" "}Fortuna SIMS
  </span>
</h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Find answers to the most common questions about implementation,
            integrations, security, scalability, and enterprise capabilities.
          </p>
        </motion.div>

        {/* FAQ Accordion */}

        <div className="space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-3xl border border-[#005F99]/15 bg-white shadow-lg transition-all duration-300 hover:border-[#C8102E]/25"
              >

                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-6 text-left"
                >

                  <h3 className="pr-6 text-lg font-semibold text-[#005F99] transition-colors duration-300 group-hover:text-[#C8102E]">
  {faq.question}
</h3>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#005F99]/10 text-[#005F99]"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>

                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="overflow-hidden"
                >

                  <div className="border-t border-slate-200 px-8 py-6">

                    <p className="leading-8 text-slate-600">
                      {faq.answer}
                    </p>

                  </div>

                </motion.div>

              </motion.div>

            );

          })}

                  {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center rounded-3xl border border-[#005F99]/15 bg-[#005F99]/5 px-10 py-8">

            <h3 className="text-2xl font-bold text-[#C8102E]">
  Still have questions?
</h3>

            <p className="mt-3 max-w-2xl text-slate-600">
              Our supply chain experts are ready to help you understand how
              Fortuna SIMS can streamline procurement, inventory, warehouse,
              and enterprise operations for your organization.
            </p>

            <div className="mt-6 inline-flex rounded-full bg-[#C8102E]/10 px-5 py-2 text-sm font-semibold text-[#C8102E]">
              Let's discuss your requirements →
            </div>

          </div>
        </motion.div>

      </div>
    </div>
    </section>
  );
}

       