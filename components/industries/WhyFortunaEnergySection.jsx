"use client";

import Link from "next/link";

import {
  Wrench,
  BatteryCharging,
  BrainCircuit,
  Boxes,
  Network,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Asset & Spare Parts Management",
    description:
      "Manage critical assets, spare parts and maintenance inventory through one intelligent enterprise platform.",
    icon: Wrench,
    color: "red",
  },
  {
    title: "Renewable Energy Operations",
    description:
      "Support solar, wind and renewable energy facilities with real-time inventory visibility and operational control.",
    icon: BatteryCharging,
    color: "blue",
  },
  {
    title: "AI Predictive Intelligence",
    description:
      "Leverage AI to forecast inventory demand, optimize maintenance schedules and improve operational reliability.",
    icon: BrainCircuit,
    color: "red",
  },
  {
    title: "Inventory Visibility",
    description:
      "Gain complete visibility across warehouses, substations and field inventory through intelligent supply chain management.",
    icon: Boxes,
    color: "blue",
  },
  {
    title: "Enterprise Integration",
    description:
      "Connect ERP, EAM, CMMS, IoT devices and operational systems through secure enterprise integration.",
    icon: Network,
    color: "red",
  },
  {
    title: "Enterprise Security",
    description:
      "Protect critical infrastructure with enterprise-grade security, audit trails and role-based access management.",
    icon: ShieldCheck,
    color: "blue",
  },
];

export default function WhyFortunaEnergySection() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/industries/Grid/Energy2.png')",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#001827]/75 via-[#001827]/45 to-black/20" />

      {/* Blue Glow */}

      <div className="absolute -left-40 top-0 w-[450px] h-[450px] rounded-full bg-[#005F99]/10 blur-[180px]" />

      {/* Red Glow */}

      <div className="absolute -right-40 bottom-0 w-[450px] h-[450px] rounded-full bg-[#C8102E]/15 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[5px] font-semibold text-[#C8102E]">

            WHY FORTUNA

          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black leading-tight">

            <span className="text-white">

              Why Energy Leaders Choose

            </span>

            <span className="block text-[#C8102E]">

              FORTUNA

            </span>

            <span className="block text-white">

              Digital Energy Platform

            </span>

          </h2>

          <div className="mx-auto mt-8 h-1 w-44 rounded-full bg-gradient-to-r from-[#005F99] to-[#C8102E]" />

          <p className="mt-10 text-xl leading-9 text-white/90 max-w-4xl mx-auto">

            Fortuna empowers Energy & Utility organizations with intelligent
            asset management, AI-driven maintenance planning, inventory
            visibility, renewable energy support and enterprise-wide
            supply chain optimization through one unified digital platform.

          </p>

        </div>

        {/* Feature Cards */}

        <div className="mt-24 grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {features.map((item, index) => {

            const Icon = item.icon;
            const isRed = item.color === "red";

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
                  shadow-xl

                  transition-all
                  duration-500

                  hover:-translate-y-3
                  hover:scale-[1.02]
                  hover:border-[#C8102E]/30
                  hover:shadow-[0_35px_70px_rgba(0,0,0,0.25)]
                "
              >

                <div
                  className={`
                    mb-7

                    w-16
                    h-16

                    rounded-3xl

                    flex
                    items-center
                    justify-center

                    transition-all
                    duration-500

                    group-hover:scale-110
                    group-hover:rotate-6

                    ${
                      isRed
                        ? "bg-[#C8102E]/10 text-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white"
                        : "bg-[#005F99]/10 text-[#005F99] group-hover:bg-[#005F99] group-hover:text-white"
                    }
                  `}
                >

                  <Icon size={30} />

                </div>

                <h3 className="text-2xl font-bold text-slate-900">

                  {item.title}

                </h3>

                <p className="mt-5 text-slate-600 leading-8 min-h-[96px]">

                  {item.description}

                </p>

                <div className="mt-8 w-20 h-[3px] rounded-full bg-gradient-to-r from-[#005F99] to-[#C8102E]" />

                <Link
                  href="/contact"
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-3

                    font-semibold

                    text-[#005F99]

                    transition-all
                    duration-500

                    group-hover:text-[#C8102E]
                  "
                >

                  Learn More

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-2 transition-all"
                  />

                </Link>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}