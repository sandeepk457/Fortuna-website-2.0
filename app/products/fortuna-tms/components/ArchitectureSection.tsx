"use client";

import {
  BrainCircuit,
  Cpu,
  Cloud,
  Database,
  Smartphone,
  Radio,
  BarChart3,
  ShieldCheck,
  ArrowDown,
} from "lucide-react";

const intelligenceItems = [
  "Predictive Analytics",
  "Route Optimization",
  "Performance Insights",
  "Exception Detection",
];

const iotItems = [
  "GPS & Telematics",
  "Real-Time Vehicle Tracking",
  "Sensor-Based Alerts",
  "IoT Device Connectivity",
];

const cloudItems = [
  "SaaS Multi-Tenant Platform",
  "Scalable Cloud Infrastructure",
  "24 × 7 Availability",
  "Secure Data Environment",
];

const applicationItems = [
  {
    icon: BarChart3,
    title: "User Dashboards",
    description:
      "Operational dashboards provide visibility across transportation performance and execution.",
  },
  {
    icon: Smartphone,
    title: "Driver App",
    description:
      "Connected driver workflows support trip execution, updates and delivery operations.",
  },
  {
    icon: Radio,
    title: "Control Tower",
    description:
      "Centralized transportation visibility enables teams to monitor and manage operations.",
  },
];

export function ArchitectureSection() {
  return (
    <section className="relative overflow-hidden bg-white py-32">

      {/* =====================================================
          SUBTLE BACKGROUND GLOWS
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#005F99]/5 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#C8102E]/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C8102E]">
            ARCHITECTURE & TECHNOLOGY
          </p>

          <h2 className="mt-7 text-5xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">

            <span className="block text-[#005F99]">
              Built on Intelligent
            </span>

            <span className="mt-2 block text-[#C8102E]">
              Cloud Infrastructure
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-600">
            Fortuna TMS combines AI intelligence, IoT connectivity and
            cloud infrastructure to create a connected transportation
            technology framework.
          </p>

        </div>

        {/* =====================================================
            INTELLIGENT CLOUD FRAMEWORK
        ====================================================== */}

        <div className="mx-auto mt-20 max-w-6xl">

          {/* Framework Label */}

          <div className="mb-10 text-center">

            <span
              className="
                inline-flex
                rounded-full
                border
                border-[#C8102E]/25
                bg-[#C8102E]/5
                px-5
                py-2
                text-sm
                font-semibold
                text-[#C8102E]
              "
            >
              Fortuna Intelligent Cloud Framework
            </span>

          </div>

          {/* =====================================================
              AI / IoT / CLOUD
          ====================================================== */}

          <div className="grid gap-6 lg:grid-cols-3">

            {/* =================================================
                AI INTELLIGENCE
            ================================================= */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-red-200
                bg-gradient-to-br
                from-red-50
                via-white
                to-white
                p-8
                shadow-[0_15px_45px_rgba(200,16,46,0.08)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#C8102E]/40
                hover:shadow-[0_25px_70px_rgba(200,16,46,0.16)]
              "
            >

              {/* Decorative Glow */}

              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#C8102E]/10 blur-3xl transition-all duration-500 group-hover:bg-[#C8102E]/20" />

              <div className="relative">

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
                    to-[#8F3152]
                    shadow-lg
                  "
                >
                  <BrainCircuit className="h-7 w-7 text-white" />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
                  Intelligence Layer
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  AI Intelligence
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Intelligent analytics and optimization capabilities help
                  transportation teams make faster and more informed
                  decisions.
                </p>

                <div className="mt-7 space-y-3">

                  {intelligenceItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-700"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#C8102E]" />
                      {item}
                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* =================================================
                IOT CONNECTIVITY
            ================================================= */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-blue-200
                bg-gradient-to-br
                from-blue-50
                via-white
                to-white
                p-8
                shadow-[0_15px_45px_rgba(0,95,153,0.08)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#005F99]/40
                hover:shadow-[0_25px_70px_rgba(0,95,153,0.16)]
              "
            >

              {/* Decorative Glow */}

              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#005F99]/10 blur-3xl transition-all duration-500 group-hover:bg-[#005F99]/20" />

              <div className="relative">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#005F99]
                    to-[#4FA3D1]
                    shadow-lg
                  "
                >
                  <Radio className="h-7 w-7 text-white" />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#005F99]">
                  Connectivity Layer
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  IoT Connectivity
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Connected vehicles, telematics and IoT devices provide
                  real-time transportation data and operational visibility.
                </p>

                <div className="mt-7 space-y-3">

                  {iotItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-700"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#005F99]" />
                      {item}
                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* =================================================
                CLOUD PLATFORM
            ================================================= */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-slate-200
                bg-gradient-to-br
                from-slate-50
                via-white
                to-blue-50
                p-8
                shadow-[0_15px_45px_rgba(0,95,153,0.07)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#005F99]/40
                hover:shadow-[0_25px_70px_rgba(0,95,153,0.15)]
              "
            >

              {/* Decorative Glow */}

              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#005F99]/10 blur-3xl transition-all duration-500 group-hover:bg-[#005F99]/20" />

              <div className="relative">

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
                  "
                >
                  <Cloud className="h-7 w-7 text-white" />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#005F99]">
                  Infrastructure Layer
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  Cloud Platform
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  A scalable cloud foundation supports secure, reliable and
                  continuously available transportation operations.
                </p>

                <div className="mt-7 space-y-3">

                  {cloudItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-700"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#005F99]" />
                      {item}
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

          {/* =====================================================
              FLOW CONNECTOR
          ====================================================== */}

          <div className="flex justify-center py-10">

            <div className="flex flex-col items-center">

              <div className="h-10 w-px bg-gradient-to-b from-[#C8102E] to-[#005F99]" />

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                "
              >
                <ArrowDown className="h-5 w-5 text-[#005F99]" />
              </div>

              <div className="h-10 w-px bg-gradient-to-b from-[#005F99] to-[#C8102E]" />

            </div>

          </div>

   {/* =====================================================
      APPLICATION LAYER
  ====================================================== */}

<div
  className="
    relative
    overflow-hidden
    rounded-[32px]
    border
    border-white/20
    bg-gradient-to-br
    from-[#C8102E]
    via-[#8F3152]
    to-[#005F99]
    p-8
    shadow-[0_25px_70px_rgba(0,95,153,0.22)]
    md:p-10
  "
>
  {/* Soft Fortuna Glows */}

  <div
    className="
      pointer-events-none
      absolute
      -left-24
      -top-24
      h-72
      w-72
      rounded-full
      bg-white/10
      blur-3xl
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -bottom-32
      -right-24
      h-80
      w-80
      rounded-full
      bg-[#005F99]/30
      blur-3xl
    "
  />

  <div className="relative z-10">

    {/* Header */}

    <div className="flex flex-col gap-3 text-center">

      <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/80">
        Application Layer
      </p>

      <h3 className="text-3xl font-bold text-white">
        Connected Transportation Experience
      </h3>

      <p className="mx-auto max-w-3xl leading-7 text-white/80">
        Business workflows, dashboards and connected applications
        turn transportation data into actionable operational
        visibility.
      </p>

    </div>

    {/* Application Cards */}

    <div className="mt-10 grid gap-5 md:grid-cols-3">

      {applicationItems.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              group
              rounded-2xl
              border
              border-white/20
              bg-white/10
              p-6
              shadow-[0_10px_30px_rgba(0,0,0,0.12)]
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-2
              hover:bg-white/15
              hover:border-white/40
              hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)]
            "
          >

            {/* Icon */}

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-white/15
                shadow-md
                ring-1
                ring-white/20
                backdrop-blur-md
                transition-transform
                duration-300
                group-hover:scale-110
                group-hover:rotate-3
              "
            >
              <Icon className="h-6 w-6 text-white" />
            </div>

            {/* Title */}

            <h4 className="mt-5 text-lg font-bold text-white">
              {item.title}
            </h4>

            {/* Description */}

            <p className="mt-2 text-sm leading-6 text-white/75">
              {item.description}
            </p>

          </div>
        );
      })}

    </div>

  </div>
</div>

          {/* =====================================================
              ARCHITECTURE FOUNDATION
          ====================================================== */}

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            {/* Data */}

            <div
              className="
                group
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#005F99]/30
                hover:shadow-[0_15px_35px_rgba(0,95,153,0.10)]
              "
            >

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <Database className="h-6 w-6 text-[#005F99]" />
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  Data Infrastructure
                </p>

                <p className="text-xs text-slate-600">
                  Connected operational data
                </p>
              </div>

            </div>

            {/* Processing */}

            <div
              className="
                group
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#C8102E]/30
                hover:shadow-[0_15px_35px_rgba(200,16,46,0.10)]
              "
            >

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50">
                <Cpu className="h-6 w-6 text-[#C8102E]" />
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  Intelligent Processing
                </p>

                <p className="text-xs text-slate-600">
                  AI-driven decision support
                </p>
              </div>

            </div>

            {/* Security */}

            <div
              className="
                group
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#005F99]/30
                hover:shadow-[0_15px_35px_rgba(0,95,153,0.10)]
              "
            >

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <ShieldCheck className="h-6 w-6 text-[#005F99]" />
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  Secure Foundation
                </p>

                <p className="text-xs text-slate-600">
                  Enterprise-ready environment
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div className="mx-auto mt-20 max-w-4xl text-center">

          <p className="text-lg font-bold leading-8 text-[#005F99] md:text-xl">
            Connect vehicles, data, intelligence and cloud technology
            through one unified transportation architecture.
          </p>

        </div>

      </div>
    </section>
  );
}