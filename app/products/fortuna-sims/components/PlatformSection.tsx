"use client";

import {
  ShoppingCart,
  Boxes,
  Warehouse,
  Smartphone,
  BrainCircuit,
  BarChart3,
  ShieldCheck,
  Cable,
} from "lucide-react";

const platformFeatures = [
  {
    icon: ShoppingCart,
    title: "Strategic Procurement",
    desc: "Digitize sourcing, approvals, RFQs, purchase orders and supplier collaboration.",
  },
  {
    icon: Boxes,
    title: "Inventory Intelligence",
    titleColor: "#005F99",
    desc: "Gain real-time inventory visibility with stock tracking, transfers and replenishment.",
  },
  {
    icon: Warehouse,
    title: "Warehouse Execution",
    titleColor: "#005F99",

    desc: "Optimize receiving, putaway, picking, packing, dispatch and barcode operations.",
  },
  {
    icon: Smartphone,
    title: "Mobile Workforce",
    titleColor: "#005F99",
    desc: "Empower warehouse teams with Android-based execution and offline capabilities.",
  },
  {
    icon: BrainCircuit,
    title: "AI Decision Support",
    titleColor: "#005F99",
    desc: "Forecast demand, detect exceptions and optimize inventory using AI insights.",
  },
  {
    icon: BarChart3,
    title: "Executive Analytics",
    titleColor: "#005F99",
    desc: "Real-time dashboards and KPIs for operational and executive decision making.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    titleColor: "#005F99",
    desc: "Role-based access, audit logs, workflow approvals and secure authentication.",
  },
  {
    icon: Cable,
    title: "Open Integrations",
    titleColor: "#005F99",
    desc: "Connect with ERP, accounting systems, APIs, barcode devices and IoT platforms.",
  },
];

export default function PlatformSection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C8102E]">
    ENTERPRISE PLATFORM
  </span>

          <h2 className="mx-auto max-w-5xl text-[44px] leading-[1.05] font-bold tracking-[-0.03em] text-slate-900 md:text-[72px]">
            
            <span className="text-[#C8102E]">
            FOR MODEREN
            </span>
            <br />
            <span className="text-[#005F99]">
            'SCM Operations'
            </span>
          </h2>

          

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Fortuna SIMS unifies procurement, inventory, warehouse operations,
            mobile execution, AI-powered intelligence and enterprise analytics
            into one connected platform—eliminating disconnected systems and
            enabling complete operational visibility across your supply chain.
          </p>

        </div>

        {/* Enterprise Platform Diagram */}

        <div className="mt-24">

          <div className="relative mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-12 shadow-xl">

            {/* Center */}

            <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-700 text-center shadow-2xl">

              <div>

                <div className="text-2xl font-bold text-white">
                  FORTUNA
                </div>

                <div className="text-sm tracking-[4px] text-red-100">
                  SIMS
                </div>

              </div>

            </div>

            {/* Top */}

            <div className="mt-14 grid gap-8 md:grid-cols-4">

              {platformFeatures.slice(0, 4).map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-xl"
                  >
                    <Icon className="mb-4 h-10 w-10 text-red-600" />

                    <h3 className="text-lg font-bold leading-snug text-[#005F99]">
  {item.title}
</h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                );
              })}

            </div>

            {/* Bottom */}

            <div className="mt-8 grid gap-8 md:grid-cols-4">

              {platformFeatures.slice(4).map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-xl"
                  >
                    <Icon className="mb-4 h-10 w-10 text-red-600" />

                    <h3 className="text-lg font-bold leading-snug text-[#005F99]">
                    {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                );
              })}

            </div>

          </div>

        </div>

        {/* Bottom Statement */}

       

<div className="relative mx-auto mt-24 max-w-5xl overflow-hidden rounded-[36px] border border-white/20 bg-gradient-to-r from-[#005F99] via-[#6B4D73] to-[#C8102E] px-12 py-16 text-center shadow-[0_30px_80px_rgba(200,16,46,0.25)]">

  {/* Glossy Top Reflection */}
  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/25 to-transparent" />

  {/* Left Glow */}
  <div className="absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#005F99]/30 blur-[90px]" />

  {/* Right Glow */}
  <div className="absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#C8102E]/30 blur-[90px]" />

  {/* Shine Effect */}
  <div className="absolute -left-40 top-0 h-full w-40 -skew-x-12 bg-white/10 blur-2xl transition-all duration-1000 hover:left-[120%]" />

  {/* Content */}

  <div className="relative z-10">

    <h3 className="text-4xl font-extrabold tracking-[-0.03em] text-white md:text-5xl">
      Built for Enterprise Operations
    </h3>

    <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-white/80" />

    <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-white/90">
      From procurement and supplier collaboration to inventory intelligence,
      warehouse execution, mobile workforce, AI-driven insights and executive
      analytics, <span className="font-semibold text-white">Fortuna SIMS</span>
      delivers one intelligent enterprise platform that transforms complex
      supply chain operations into connected, automated and data-driven
      business processes.
    </p>

  </div>

</div>

      </div>
    </section>
  );
}