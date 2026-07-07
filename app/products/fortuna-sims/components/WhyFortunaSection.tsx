"use client";

import {
  Building2,
  BrainCircuit,
  MonitorSmartphone,
  CloudCog,
  Eye,
  Network,
} from "lucide-react";

const advantages = [
  {
    icon: Building2,
    title: "Enterprise Ready",
    description:
      "Built for multi-company, multi-location and enterprise-scale supply chain operations with configurable workflows.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Intelligence",
    description:
      "Leverage predictive analytics, demand forecasting and intelligent recommendations to improve operational decisions.",
  },
  {
    icon: MonitorSmartphone,
    title: "Unified Web + Mobile",
    description:
      "Empower management through the web platform while enabling warehouse teams with mobile execution and barcode workflows.",
  },
  {
    icon: Eye,
    title: "Real-Time Visibility",
    description:
      "Monitor procurement, inventory, warehouse operations and executive KPIs from a single connected platform.",
  },
  {
    icon: CloudCog,
    title: "Cloud Native Platform",
    description:
      "Designed for modern deployments with secure APIs, scalable architecture and cloud-ready infrastructure.",
  },
  {
    icon: Network,
    title: "Connected Enterprise",
    description:
      "Connect procurement, inventory, warehouse, analytics and AI into one intelligent operational ecosystem.",
  },
];

export default function WhyFortunaSection() {
  return (
<section className="relative overflow-hidden py-32">

  {/* Background Image */}

  <div
    className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-35"
    style={{
      backgroundImage: "url('/images/products/why-fortuna-bg.png')",
    }}
  />

  {/* White Overlay */}

    <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/45 to-slate-50/65" />

      {/* Background Glow */}

      <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-[#005F99]/5 blur-[140px]" />

      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-[#C8102E]/5 blur-[140px]" />

    <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Heading */}

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C8102E]">
            WHY FORTUNA SIMS
          </p>

          <h2 className="mt-8 text-5xl font-bold leading-[1.02] tracking-[-0.04em] md:text-7xl">

            <span className="block text-[#C8102E]">
              Designed for Modern Enterprises
            </span>

            <span className="mt-2 block text-[#005F99]">
              Built for Supply Chain Excellence
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-600">
            Fortuna SIMS empowers organizations with one intelligent enterprise
            platform that unifies procurement, inventory, warehouse execution,
            AI-driven intelligence and mobile operations—enabling greater
            visibility, automation and operational excellence across the entire
            supply chain.
          </p>

        </div>

        {/* Premium Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                      {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-slate-200
                  bg-white
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#C8102E]
                  hover:bg-gradient-to-br
                  hover:from-[#C8102E]/5
                  hover:via-white
                  hover:to-[#005F99]/5
                  hover:shadow-[0_30px_80px_rgba(200,16,46,0.18)]
                "
              >

                {/* Glossy Shine */}

                <div
                  className="
                    absolute
                    -left-40
                    top-0
                    h-full
                    w-28
                    -skew-x-12
                    bg-white/30
                    blur-xl
                    transition-all
                    duration-1000
                    group-hover:left-[130%]
                  "
                />

                {/* Icon */}

                <div
                  className="
                    relative
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#C8102E]
                    to-[#005F99]
                    shadow-lg
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:rotate-3
                  "
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-[#005F99] transition-colors duration-300 group-hover:text-[#C8102E]">
                  {item.title}
                </h3>

                {/* Divider */}

                <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#C8102E] to-[#005F99]" />

                {/* Description */}

                <p className="mt-6 leading-8 text-slate-600">
                  {item.description}
                </p>

              </div>
            );
          })}
        </div>

        {/* Enterprise Statement */}

        <div className="relative mx-auto mt-28 max-w-6xl overflow-hidden rounded-[40px] border border-white/20 bg-gradient-to-r from-[#005F99] via-[#5C5575] to-[#C8102E] px-12 py-16 shadow-[0_35px_90px_rgba(200,16,46,0.25)]">

          {/* Gloss */}

          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/25 to-transparent" />

          {/* Blue Glow */}

          <div className="absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#005F99]/25 blur-[120px]" />

          {/* Red Glow */}

          <div className="absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#C8102E]/25 blur-[120px]" />

          <div className="relative z-10 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-white/80">
              THE FORTUNA ADVANTAGE
            </p>

            <h3 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl">

              One Platform.

              <span className="block">
                One Source of Truth.
              </span>

              <span className="block">
                Unlimited Supply Chain Visibility.
              </span>

            </h3>

            <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-white/80" />

            <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-white/90">
              Fortuna SIMS brings procurement, inventory, warehouse execution,
              mobile workforce, AI intelligence and enterprise analytics
              together into one connected ecosystem—helping organizations
              simplify operations, improve visibility and make faster,
              data-driven decisions across the entire supply chain.
            </p>

          </div>

        </div>
          
      </div>
    </section>
  );
}
        