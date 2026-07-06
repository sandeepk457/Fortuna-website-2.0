"use client";

import { CheckCircle2 } from "lucide-react";

const challenges = [
  {
    title: "Manual Procurement Processes",
    description:
      "Paper-based approvals and disconnected purchasing workflows slow procurement cycles and reduce operational efficiency.",
  },
  {
    title: "Inventory Inaccuracy",
    description:
      "Limited inventory visibility leads to stock discrepancies, shortages, excess inventory and delayed replenishment.",
  },
  {
    title: "Warehouse Inefficiencies",
    description:
      "Manual warehouse operations reduce productivity across receiving, putaway, picking, packing and dispatch.",
  },
  {
    title: "Disconnected Business Systems",
    description:
      "Independent applications create data silos, duplicate information and inconsistent reporting across departments.",
  },
  {
    title: "Limited Operational Visibility",
    description:
      "Business leaders struggle to gain real-time visibility into procurement, inventory and warehouse performance.",
  },
  {
    title: "Lack of Mobile Execution",
    description:
      "Warehouse teams require mobile-first tools for barcode scanning, task execution and real-time inventory updates.",
  },
];

export default function ChallengesSection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C8102E]">
            BUSINESS CHALLENGES
          </p>

         <h2 className="mt-8 text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-[#C8102E] md:text-7xl">
  Modern Supply Chains
            <span className="block text-[#005F99]">
              Demand Intelligent Operations
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-600">
            Traditional supply chain operations often rely on disconnected
            systems, manual workflows and delayed decision making. Fortuna SIMS
            connects procurement, inventory, warehouse execution, mobile
            operations and AI-driven intelligence into one unified enterprise
            platform.
          </p>

        </div>

        {/* Content */}

        <div className="mt-24 grid items-start gap-16 lg:grid-cols-[1.2fr_1fr]">

          {/* Left Image */}

            <div className="sticky top-28 self-start">

            {/* Blue Glow */}

            <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-[#005F99]/10 blur-[100px]" />

            {/* Red Glow */}

            <div className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-[#C8102E]/10 blur-[100px]" />

            <img
  src="/images/products/warehousechallanges.png"
  alt="Business Challenges"
  className="
    relative
    w-full
    max-w-[760px]
    rounded-[32px]
    border
    border-slate-200
    shadow-[0_35px_80px_rgba(0,0,0,0.18)]
    transition-all
    duration-500
    hover:scale-[1.02]
  "
/>

          </div>

          {/* Right Side */}

          <div className="space-y-6">

            {challenges.map((item) => (
              <div
                key={item.title}
                className="group flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#C8102E] hover:bg-gradient-to-r hover:from-red-50 hover:via-white hover:to-blue-50 hover:shadow-[0_20px_50px_rgba(200,16,46,0.18)]"
              >

                {/* Icon */}

                <div className="mt-1">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C8102E]/10 transition-all duration-300 group-hover:bg-[#C8102E]">

                    <CheckCircle2 className="h-5 w-5 text-[#C8102E] group-hover:text-white" />

                  </div>

                </div>

                {/* Text */}

                <div>

                  <h3 className="text-xl font-bold text-[#005F99]">
                    {item.title}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom Premium Card */}

        <div className="relative mx-auto mt-24 max-w-6xl overflow-hidden rounded-[36px] border border-white/20 bg-gradient-to-r from-[#005F99] via-[#5C5575] to-[#C8102E] px-12 py-16 shadow-[0_35px_90px_rgba(200,16,46,0.25)]">

          {/* Gloss */}

          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/20 to-transparent" />

          {/* Left Glow */}

          <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#005F99]/20 blur-[100px]" />

          {/* Right Glow */}

          <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#C8102E]/20 blur-[100px]" />

          <div className="relative z-10 text-center">

            <h3 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Transform Challenges into Competitive Advantage
            </h3>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-white/80" />

            <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-white/90">
              Fortuna SIMS transforms fragmented supply chain operations into
              one connected enterprise platform—empowering organizations with
              real-time visibility, intelligent automation, mobile execution
              and AI-driven decision making across procurement, inventory and
              warehouse management.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}