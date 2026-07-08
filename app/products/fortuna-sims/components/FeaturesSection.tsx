"use client";

import {
  Workflow,
  ShieldCheck,
  ScanLine,
  Smartphone,
  Building2,
  Warehouse,
  BellRing,
  BarChart3,
  Globe2,
  CloudCog,
  BrainCircuit,
  Link2,
} from "lucide-react";

const capabilities = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Digitize business processes with configurable workflows, approvals and intelligent task orchestration.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Protect business operations through role-based access, secure authentication and complete audit visibility.",
  },
  {
    icon: ScanLine,
    title: "Barcode & QR Operations",
    description:
      "Accelerate warehouse execution using barcode and QR-enabled receiving, picking and inventory transactions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Workforce",
    description:
      "Enable warehouse teams with mobile-first execution, offline operations and real-time synchronization.",
  },
  {
    icon: Warehouse,
    title: "Multi-Warehouse",
    description:
      "Manage inventory across multiple warehouses, locations, zones and storage structures from one platform.",
  },
  {
    icon: Building2,
    title: "Multi-Business Operations",
    description:
      "Support enterprise organizations with configurable business units, locations and operational structures.",
  },
  {
    icon: BellRing,
    title: "Alerts & Notifications",
    description:
      "Receive real-time operational alerts, approval notifications and intelligent exception updates.",
  },
  {
    icon: BarChart3,
    title: "Executive Dashboards",
    description:
      "Monitor enterprise KPIs through interactive dashboards, operational reports and business insights.",
  },
  {
    icon: Globe2,
    title: "Enterprise Connectivity",
    description:
      "Connect business applications, enterprise platforms and external systems through secure integration services.",
  },
  {
    icon: CloudCog,
    title: "Cloud-Ready Platform",
    description:
      "Deploy across modern enterprise environments with scalable, secure and high-performance architecture.",
  },
  {
    icon: BrainCircuit,
    title: "AI Decision Intelligence",
    description:
      "Improve planning and operational decisions using predictive intelligence and AI-driven recommendations.",
  },
  {
    icon: Link2,
    title: "Open Integration Framework",
    description:
      "Exchange information seamlessly across enterprise ecosystems using secure integration capabilities.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-32">

        {/* Enterprise Background Image */}

<div
  className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-[0.10]"
  style={{
    backgroundImage:
      "url('/images/ai/enterprise-capabilities-bg.png')",
  }}
/>

      {/* Background Glow */}

      <div className="absolute -left-20 top-40 h-[450px] w-[450px] rounded-full bg-[#005F99]/5 blur-[150px]" />

      <div className="absolute -right-20 bottom-40 h-[450px] w-[450px] rounded-full bg-[#C8102E]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C8102E]">

            ENTERPRISE CAPABILITIES

          </p>

          <h2 className="mt-8 text-5xl font-bold leading-[1.02] tracking-[-0.04em] md:text-7xl">

            <span className="block text-[#C8102E]">

              Built for Modern

            </span>

            <span className="mt-2 block text-[#005F99]">

              Enterprise Operations

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-600">

            Fortuna SIMS delivers a comprehensive set of enterprise
            capabilities that enable organizations to streamline
            procurement, inventory, warehouse execution, operational
            visibility and intelligent decision-making through one
            connected digital platform.

          </p>

        </div>

        {/* Enterprise Layout */}

        <div className="mt-20">

                    {/* =====================================
            LEFT ENTERPRISE SHOWCASE
        ====================================== */}

        <div className="mb-20">

  <img
    src="/images/ai/enterprise-capabilities.png"
    alt="Enterprise Capabilities"
    className="
      mx-auto
      w-full
      max-w-5xl
      rounded-[36px]
      border
      border-slate-200
      shadow-2xl
    "
  />

</div>

                {/* =====================================
            RIGHT CAPABILITY MATRIX
        ====================================== */}

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#C8102E]">
            ENTERPRISE CAPABILITIES
          </p>

         <h3 className="mt-4 text-4xl font-bold text-[#C8102E]">
            Everything You Need
            <span className="block text-[#005F99]">
              To Run Modern Supply Chains
            </span>
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Fortuna SIMS delivers enterprise-grade capabilities that simplify
            operations, improve collaboration and provide complete visibility
            across procurement, inventory and warehouse management.
          </p>

          {/* Capability Grid */}

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {capabilities.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-slate-200
                    bg-white
                    p-6
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[#C8102E]
                    hover:bg-gradient-to-br
                    hover:from-red-50
                    hover:via-white
                    hover:to-blue-50
                    hover:shadow-[0_25px_70px_rgba(200,16,46,0.18)]
                  "
                >

                  {/* Gloss */}

                  <div
                    className="
                      absolute
                      -left-24
                      top-0
                      h-full
                      w-20
                      -skew-x-12
                      bg-white/40
                      blur-md
                      transition-all
                      duration-700
                      group-hover:left-[120%]
                    "
                  />

                  <div className="relative">

                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-14
                        w-14
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
                        group-hover:rotate-6
                      "
                    >

                      <Icon className="h-7 w-7 text-white" />

                    </div>

                    {/* Title */}

                    <h4
                      className="
                        mt-6
                        text-xl
                        font-bold
                        text-[#005F99]
                        transition-all
                        duration-300
                        group-hover:text-[#C8102E]
                      "
                    >
                      {item.title}
                    </h4>

                    {/* Divider */}

                    <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-[#C8102E] to-[#005F99]" />

                    {/* Description */}

                    <p className="mt-5 leading-7 text-slate-600">
                      {item.description}
                    </p>

                  </div>

                </div>

              );

            })}

          </div>

          {/* Enterprise Highlight */}

          <div
            className="
              mt-10
              rounded-[30px]
              border
              border-[#005F99]/20
              bg-gradient-to-r
              from-[#005F99]/5
              via-white
              to-[#C8102E]/5
              p-8
            "
          >

            <h4 className="text-2xl font-bold text-[#005F99]">

              Enterprise-Ready by Design

            </h4>

            <p className="mt-4 leading-8 text-slate-600">

              Every capability within Fortuna SIMS is designed to work
              together seamlessly, helping organizations standardize
              operations, improve collaboration, automate business
              processes and achieve end-to-end supply chain visibility
              from a single connected enterprise platform.

            </p>

          </div>

        </div>

        </div>

       

        <div className="mt-24 grid gap-6 md:grid-cols-4">

          {[
            {
              value: "Unified",
              label: "Enterprise Platform",
            },
            {
              value: "Real-Time",
              label: "Operational Visibility",
            },
            {
              value: "AI-Driven",
              label: "Decision Intelligence",
            },
            {
              value: "Connected",
              label: "Business Operations",
            },
          ].map((item) => (

            <div
              key={item.label}
              className="
                rounded-[30px]
                border
                border-slate-200
                bg-white
                p-8
                text-center
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#C8102E]
                hover:bg-gradient-to-br
                hover:from-red-50
                hover:via-white
                hover:to-blue-50
                hover:shadow-[0_25px_70px_rgba(200,16,46,0.18)]
              "
            >

              <h4 className="text-3xl font-bold text-[#C8102E]">

                {item.value}

              </h4>

              <p className="mt-4 leading-7 text-[#005F99] font-medium">

                {item.label}

              </p>

            </div>

          ))}

        </div>

        {/* =====================================
            PREMIUM ENTERPRISE STATEMENT
        ====================================== */}

        <div className="relative mx-auto mt-28 max-w-6xl overflow-hidden rounded-[40px] border border-white/20 bg-gradient-to-r from-[#005F99] via-[#5B5676] to-[#C8102E] px-12 py-16 shadow-[0_40px_90px_rgba(200,16,46,0.25)]">

          {/* Gloss */}

          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/20 to-transparent" />

          {/* Left Glow */}

          <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#005F99]/25 blur-[120px]" />

          {/* Right Glow */}

          <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#C8102E]/25 blur-[120px]" />

          <div className="relative z-10 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-white/80">

              BUILT FOR ENTERPRISE EXCELLENCE

            </p>

            <h3 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl">

              Intelligent Capabilities.

              <span className="block">

                Connected Operations.

              </span>

              <span className="block text-[#D8EAFF]">

                Enterprise Performance.

              </span>

            </h3>

            <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-white/80" />

            <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-white/90">

              Fortuna SIMS combines intelligent automation, enterprise
              workflows, operational visibility, AI-powered decision
              intelligence and secure business processes into one
              integrated digital platform that enables organizations
              to transform supply chain operations with confidence.

            </p>

            {/* Capability Tags */}

            <div className="mt-12 flex flex-wrap justify-center gap-4">

              {[
                "Workflow Automation",
                "Enterprise Security",
                "Mobile Operations",
                "AI Intelligence",
                "Cloud Ready",
                "Open Integrations",
              ].map((item) => (

                <div
                  key={item}
                  className="
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    px-6
                    py-3
                    text-sm
                    font-medium
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:bg-white/20
                    hover:scale-105
                  "
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

      