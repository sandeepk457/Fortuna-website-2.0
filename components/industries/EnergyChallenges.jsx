"use client";

import {
  Wrench,
  BatteryCharging,
  Boxes,
  Truck,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

const challenges = [
  {
    title: "Critical Asset Availability",
    description:
      "Ensure continuous availability of spare parts, equipment and maintenance inventory to prevent operational downtime.",
    icon: Wrench,
    color: "red",
  },
  {
    title: "Renewable Energy Operations",
    description:
      "Manage inventory and logistics across solar, wind and renewable energy sites while maintaining operational efficiency.",
    icon: BatteryCharging,
    color: "blue",
  },
  {
    title: "Inventory Visibility",
    description:
      "Gain real-time visibility into inventory across warehouses, substations and field locations to improve decision making.",
    icon: Boxes,
    color: "red",
  },
  {
    title: "Field Service Logistics",
    description:
      "Optimize transportation, technician dispatch and material movement for faster maintenance and service execution.",
    icon: Truck,
    color: "blue",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Maintain complete traceability, audit trails and compliance for critical assets and operational processes.",
    icon: ShieldCheck,
    color: "red",
  },
  {
    title: "AI Predictive Intelligence",
    description:
      "Use AI-powered insights to forecast inventory demand, optimize maintenance planning and improve asset reliability.",
    icon: BrainCircuit,
    color: "blue",
  },
];

export default function EnergyChallenges() {
  return (
    <section className="relative overflow-hidden py-32">

        {/* Background Image */}

<div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('/images/industries/Grid/Energy1.png')",
  }}
/>

{/* Dark Overlay */}

<div className="absolute inset-0 bg-gradient-to-b from-[#071521]/45 via-[#071521]/25 to-[#071521]/45" />

{/* Blue Glow */}

<div className="absolute -left-40 top-0 w-[450px] h-[450px] rounded-full bg-[#005F99]/10 blur-[180px]" />

{/* Red Glow */}

<div className="absolute -right-40 bottom-0 w-[450px] h-[450px] rounded-full bg-[#C8102E]/15 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[4px] text-[#C8102E] font-semibold">

            INDUSTRY CHALLENGES

          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight">

            <span className="text-white">

              Energy Challenges

            </span>

            <span className="block text-[#C8102E]">

              Require Intelligent Solutions

            </span>

          </h2>

          <p className="mt-8 text-xl leading-relaxed text-white/90">

            Energy and Utility organizations must maintain critical
            infrastructure, optimize field operations, ensure spare
            parts availability and improve operational resilience while
            supporting sustainable energy initiatives.

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