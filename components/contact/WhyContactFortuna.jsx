"use client";

import {
  BrainCircuit,
  Building2,
  ShieldCheck,
  Cloud,
  Users,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    title: "AI-Powered Supply Chain",
    description:
      "Leverage AI-driven planning, forecasting and operational intelligence to make faster and smarter business decisions.",
    icon: BrainCircuit,
    color: "red",
  },
  {
    title: "Enterprise Ready",
    description:
      "Designed for organizations requiring scalable, secure and high-performance supply chain management solutions.",
    icon: Building2,
    color: "blue",
  },
  {
    title: "Enterprise Security",
    description:
      "Protect your operations with role-based access, audit trails and enterprise-grade security standards.",
    icon: ShieldCheck,
    color: "red",
  },
  {
    title: "Cloud & On-Premise",
    description:
      "Deploy Fortuna in the cloud, on-premise or hybrid environments to match your IT strategy.",
    icon: Cloud,
    color: "blue",
  },
  {
    title: "Industry Specialists",
    description:
      "Purpose-built solutions for Manufacturing, Logistics, Retail, Healthcare, Automotive and more.",
    icon: Users,
    color: "red",
  },
  {
    title: "Customer Success",
    description:
      "From implementation to continuous optimization, our experts work alongside your team for long-term success.",
    icon: Headphones,
    color: "blue",
  },
];

export default function WhyContactFortuna() {
  return (
    <section className="relative overflow-hidden py-32 bg-white">

      {/* Background Glow */}

      <div className="absolute -left-40 top-0 w-[450px] h-[450px] rounded-full bg-[#005F99]/5 blur-[180px]" />

      <div className="absolute -right-40 bottom-0 w-[450px] h-[450px] rounded-full bg-[#C8102E]/5 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[5px] text-[#C8102E] font-semibold">

            WHY CHOOSE FORTUNA

          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black leading-tight">

            <span className="text-[#005F99]">

              Trusted Partner

            </span>

            <span className="block text-[#C8102E]">

              For Digital Supply Chains

            </span>

          </h2>

          <div className="mx-auto mt-8 h-1 w-44 rounded-full bg-gradient-to-r from-[#005F99] to-[#C8102E]" />

          <p className="mt-10 text-xl leading-9 text-slate-600 max-w-4xl mx-auto">

            Fortuna helps organizations modernize procurement,
            inventory, warehousing, logistics and supply chain
            operations through intelligent enterprise solutions
            powered by AI and real-time operational visibility.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-24 grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {reasons.map((item, index) => {

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

                  shadow-lg

                  transition-all
                  duration-500

                  hover:-translate-y-3
                  hover:scale-[1.02]
                  hover:border-[#C8102E]/30
                  hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)]
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
                      isRed
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