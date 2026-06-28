"use client";

import {
  Pill,
  Snowflake,
  Boxes,
  ClipboardCheck,
  TrendingUp,
  HeartPulse,
} from "lucide-react";

const challenges = [
  {
    title: "Medicine Availability",
    description:
      "Ensure uninterrupted availability of medicines, vaccines and critical medical supplies across healthcare facilities.",
    icon: Pill,
    color: "red",
  },
  {
    title: "Cold Chain Compliance",
    description:
      "Maintain temperature-controlled storage and transportation for vaccines, biologics and temperature-sensitive products.",
    icon: Snowflake,
    color: "blue",
  },
  {
    title: "Inventory Traceability",
    description:
      "Track medical inventory with complete lot, batch and expiry traceability for improved patient safety.",
    icon: Boxes,
    color: "red",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Comply with healthcare regulations through accurate documentation, audit trails and controlled inventory processes.",
    icon: ClipboardCheck,
    color: "blue",
  },
  {
    title: "Demand Forecasting",
    description:
      "Predict healthcare demand to ensure optimal inventory levels while minimizing shortages and wastage.",
    icon: TrendingUp,
    color: "red",
  },
  {
    title: "Patient Safety",
    description:
      "Support better patient outcomes through accurate inventory management, traceability and timely product availability.",
    icon: HeartPulse,
    color: "blue",
  },
];

export default function HealthcareChallenges() {
  return (
    <section className="relative overflow-hidden py-32">

        {/* Background Image */}

<div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('/images/industries/Grid/healthcare1.png')",
  }}
/>

{/* Dark Overlay */}

<div className="absolute inset-0 bg-[#001827]/70" />

{/* Blue Glow */}

<div className="absolute -left-40 top-0 w-[450px] h-[450px] rounded-full bg-[#005F99]/10 blur-[180px]" />

{/* Red Glow */}

<div className="absolute -right-40 bottom-0 w-[450px] h-[450px] rounded-full bg-[#C8102E]/10 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[4px] text-[#C8102E] font-semibold">

            INDUSTRY CHALLENGES

          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight">

            <span className="text-white">

              Healthcare Challenges

            </span>

            <span className="block text-[#C8102E]">

              Require Intelligent Solutions

            </span>

          </h2>

          <p className="mt-8 text-xl leading-relaxed text-white/90">

            Healthcare organizations must maintain uninterrupted medicine
            availability, ensure regulatory compliance and optimize
            healthcare supply chains while improving patient care and
            operational efficiency.

          </p>

        </div>

        {/* Challenge Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {challenges.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="
                  group
                  rounded-[30px]
                  bg-white
                  border
                  border-slate-200
                  p-8
                  shadow-lg

                  transition-all
                  duration-500

                  hover:-translate-y-3
                  hover:scale-[1.02]
                  hover:border-[#C8102E]/30
                  hover:shadow-[0_30px_70px_rgba(0,0,0,0.15)]
                "
              >

                {/* Icon */}

                <div
                  className={`
                    w-16
                    h-16

                    rounded-3xl

                    flex
                    items-center
                    justify-center

                    mb-7

                    transition-all
                    duration-500

                    group-hover:scale-110
                    group-hover:rotate-6

                    ${
                      item.color === "red"
                        ? "bg-[#C8102E]/10 text-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white"
                        : "bg-[#005F99]/10 text-[#005F99] group-hover:bg-[#005F99] group-hover:text-white"
                    }
                  `}
                >

                  <Icon size={30} />

                </div>

                {/* Title */}

                <h3 className="text-2xl font-bold text-slate-900">

                  {item.title}

                </h3>

                {/* Description */}

                <p className="mt-5 text-slate-600 leading-8 min-h-[96px]">

                  {item.description}

                </p>

                {/* Divider */}

                <div className="mt-8 w-20 h-[3px] rounded-full bg-gradient-to-r from-[#005F99] to-[#C8102E]" />

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}