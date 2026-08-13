"use client";

import {
  ClipboardList,
  Route,
  Truck,
  Send,
  MapPinned,
  ClipboardCheck,
  BarChart3,
  BrainCircuit,
  Radio,
  Cloud,
  Target,
  Clock3,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const workflows = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Order / Shipment Creation",
    accent: "blue",
  },
  {
    number: "02",
    icon: Route,
    title: "Route Planning & Optimization",
    accent: "red",
  },
  {
    number: "03",
    icon: Truck,
    title: "Vehicle & Driver Allocation",
    accent: "blue",
  },
  {
    number: "04",
    icon: Send,
    title: "Dispatch Management",
    accent: "red",
  },
  {
    number: "05",
    icon: MapPinned,
    title: "Real-Time Tracking & Monitoring",
    accent: "blue",
  },
  {
    number: "06",
    icon: ClipboardCheck,
    title: "Delivery & e-POD Confirmation",
    accent: "red",
  },
  {
    number: "07",
    icon: BarChart3,
    title: "Analytics & Continuous Optimization",
    accent: "blue",
  },
];

const intelligence = [
  {
    icon: BrainCircuit,
    title: "AI Intelligence",
    description:
      "Predictive and optimization capabilities help transportation teams make faster, data-driven decisions.",
    points: [
      "Predictive ETA",
      "Delay Prediction",
      "Route Optimization",
      "Performance Insights",
    ],
    accent: "red",
  },
  {
    icon: Radio,
    title: "IoT Connectivity",
    description:
      "Connected vehicles, telematics and sensors provide continuous transportation visibility.",
    points: [
      "Live Vehicle Tracking",
      "Telematics Data",
      "Geofencing Alerts",
      "Sensor Monitoring",
    ],
    accent: "blue",
  },
  {
    icon: Cloud,
    title: "Cloud Platform",
    description:
      "A scalable cloud foundation supports secure, reliable and connected transportation operations.",
    points: [
      "Scalable Infrastructure",
      "Secure Data Environment",
      "24 × 7 Availability",
      "Multi-Tenant SaaS",
    ],
    accent: "red",
  },
];

const impacts = [
  {
    icon: Target,
    title: "Improved On-Time Delivery",
  },
  {
    icon: Clock3,
    title: "Reduced Operational Costs",
  },
  {
    icon: ShieldCheck,
    title: "Better Visibility & Control",
  },
  {
    icon: TrendingUp,
    title: "Higher Fleet Productivity",
  },
];

export default function WorkflowSection() {
  return (
    <section className="relative z-20 isolate overflow-hidden bg-white py-24">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[#C8102E]/5 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#005F99]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ========================================================= */}
        {/* SECTION HEADER */}
        {/* ========================================================= */}

        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#C8102E]/20 bg-[#C8102E]/5 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-[#C8102E]" />

            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C8102E]">
              Functional Workflows
            </span>

            <span className="h-2 w-2 rounded-full bg-[#005F99]" />
          </div>

            <h2 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-[#005F99] md:text-5xl lg:text-6xl">
  Intelligent Workflows.
  <span className="block text-[#C8102E]">
    Seamless Transportation Execution.
  </span>
</h2>

          <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 text-slate-600">
            Fortuna TMS connects the complete transportation lifecycle —
            from shipment creation and route planning to dispatch, tracking,
            delivery confirmation and continuous optimization.
          </p>
        </div>

        {/* ========================================================= */}
        {/* WORKFLOW LINE */}
        {/* ========================================================= */}

        <div className="relative mt-16">
          {/* Desktop connecting line */}
          <div className="absolute left-[7%] right-[7%] top-[88px] hidden h-px bg-gradient-to-r from-[#005F99]/20 via-[#C8102E] to-[#005F99]/20 lg:block" />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-7">
            {workflows.map((item, index) => {
              const Icon = item.icon;

              const isRed = item.accent === "red";

              return (
                <div
                  key={item.number}
                  className="group relative"
                >
                  {/* Number */}
                  <div className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#005F99] to-[#003F66] text-xs font-bold text-white shadow-lg ring-4 ring-white">
                    {item.number}
                  </div>

                  {/* Card */}
                  <div
                    className={`
                      mt-5
                      min-h-[220px]
                      rounded-[24px]
                      border
                      bg-white
                      p-5
                      shadow-[0_15px_45px_rgba(15,23,42,0.07)]
                      transition-all
                      duration-500
                      group-hover:-translate-y-2
                      ${
                        isRed
                          ? "border-[#C8102E]/20 group-hover:border-[#C8102E]/50 group-hover:shadow-[0_25px_55px_rgba(200,16,46,0.14)]"
                          : "border-[#005F99]/20 group-hover:border-[#005F99]/50 group-hover:shadow-[0_25px_55px_rgba(0,95,153,0.14)]"
                      }
                    `}
                  >
                    {/* Icon */}
                    <div
                      className={`
                        mx-auto
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        shadow-lg
                        transition-all
                        duration-300
                        group-hover:scale-110
                        ${
                          isRed
                            ? "from-[#C8102E] to-[#8F3152]"
                            : "from-[#005F99] to-[#174A72]"
                        }
                      `}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3
                      className={`
                        mt-5
                        text-center
                        text-base
                        font-bold
                        leading-6
                        ${
                          isRed
                            ? "text-[#C8102E]"
                            : "text-[#005F99]"
                        }
                      `}
                    >
                      {item.title}
                    </h3>
                    
                  </div>

                  {/* Mobile arrow */}
                  {index < workflows.length - 1 && (
                    <div className="my-3 flex justify-center lg:hidden">
                      <ArrowRight className="h-5 w-5 rotate-90 text-[#C8102E]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>


{/* ========================================================= */}
{/* TRANSPORTATION JOURNEY */}
{/* ========================================================= */}

<div className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-[30px] border border-white/20 bg-gradient-to-br from-[#C8102E] via-[#8F3152] to-[#005F99] px-8 py-10 shadow-[0_25px_70px_rgba(0,95,153,0.25)]">

  {/* Soft Glow */}
  <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#005F99]/30 blur-3xl" />

  {/* Route Line */}
  <div className="absolute left-[12%] right-[12%] top-[53%] hidden h-[2px] bg-gradient-to-r from-white/40 via-white to-white/40 md:block" />

  {/* Moving Route Dots */}
  <div className="absolute left-[25%] top-[53%] hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)] md:block" />

  <div className="absolute left-[50%] top-[53%] hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#C8102E] ring-2 ring-white/60 shadow-[0_0_15px_rgba(200,16,46,0.9)] md:block" />

  <div className="absolute left-[75%] top-[53%] hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)] md:block" />

  <div className="relative z-10">

    {/* Origin / Journey / Destination */}

    <div className="mb-8 flex w-full items-center justify-between text-sm font-semibold">

      <div className="flex items-center gap-2 text-white">
        <MapPinned className="h-5 w-5" />
        Origin
      </div>

      <div className="rounded-full border border-white/30 bg-white/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white shadow-lg backdrop-blur-md">
        Fortuna TMS Transportation Journey
      </div>

      <div className="flex items-center gap-2 text-white">
        Destination
        <MapPinned className="h-5 w-5" />
      </div>

    </div>

    {/* Truck */}

    <div className="relative flex h-28 w-full items-center justify-center">

      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.25)] ring-8 ring-white/20 backdrop-blur-md">

        <Truck className="h-10 w-10 text-white" />

      </div>

    </div>

    {/* Journey Labels */}

    <div className="mt-6 grid w-full grid-cols-3 text-center text-xs">

      <div>
        <p className="font-bold text-white">
          Planned
        </p>

        <p className="mt-1 text-white/70">
          Route & Vehicle
        </p>
      </div>

      <div>
        <p className="font-bold text-white">
          In Transit
        </p>

        <p className="mt-1 text-white/70">
          Live Tracking
        </p>
      </div>

      <div>
        <p className="font-bold text-white">
          Delivered
        </p>

        <p className="mt-1 text-white/70">
          Proof of Delivery
        </p>
      </div>

    </div>

  </div>
</div>




        {/* ========================================================= */}
        {/* INTELLIGENCE IN ACTION */}
        {/* ========================================================= */}

        <div className="mt-24">
          <div className="mb-10 flex items-center justify-center">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#005F99]" />

            <div className="mx-5 flex items-center gap-3 rounded-full bg-gradient-to-r from-[#005F99] to-[#173F68] px-6 py-3 text-white shadow-lg">
              <BrainCircuit className="h-5 w-5" />

              <span className="text-sm font-bold uppercase tracking-[0.25em]">
                Intelligence in Action
              </span>
            </div>

            <div className="h-px w-16 bg-gradient-to-r from-[#C8102E] to-transparent" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {intelligence.map((item) => {
              const Icon = item.icon;
              const isRed = item.accent === "red";

              return (
                <div
                  key={item.title}
                  className={`
                    group
                    rounded-[26px]
                    border
                    bg-white
                    p-7
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    ${
                      isRed
                        ? "border-[#C8102E]/20 hover:border-[#C8102E]/40 hover:shadow-[0_25px_60px_rgba(200,16,46,0.12)]"
                        : "border-[#005F99]/20 hover:border-[#005F99]/40 hover:shadow-[0_25px_60px_rgba(0,95,153,0.12)]"
                    }
                  `}
                >
                  <div className="flex items-center gap-5">
                    <div
                      className={`
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        ${
                          isRed
                            ? "bg-[#C8102E]/10"
                            : "bg-[#005F99]/10"
                        }
                      `}
                    >
                      <Icon
                        className={`h-7 w-7 ${
                          isRed
                            ? "text-[#C8102E]"
                            : "text-[#005F99]"
                        }`}
                      />
                    </div>

                    <h3
                      className={`text-xl font-bold ${
                        isRed
                          ? "text-[#C8102E]"
                          : "text-[#005F99]"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-6 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 text-sm text-slate-700"
                      >
                        <span
                          className={`h-2 w-2 shrink-0 rounded-full ${
                            isRed
                              ? "bg-[#C8102E]"
                              : "bg-[#005F99]"
                          }`}
                        />

                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* BUSINESS IMPACT */}
        {/* ========================================================= */}

        <div className="mt-16 overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 shadow-[0_15px_45px_rgba(15,23,42,0.06)]">
          <div className="grid md:grid-cols-5">
            {/* Label */}
            <div className="flex items-center gap-4 border-b border-slate-200 p-6 md:border-b-0 md:border-r">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#005F99] to-[#C8102E]">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
                  Business
                </p>

                <p className="font-bold text-[#005F99]">
                  Impact
                </p>
              </div>
            </div>

            {/* Impact Items */}
            {impacts.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3 border-b border-slate-200 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <Icon className="h-6 w-6 shrink-0 text-[#005F99]" />

                  <span className="text-sm font-semibold leading-5 text-slate-700">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM STATEMENT */}
        {/* ========================================================= */}

        <div className="mx-auto mt-16 max-w-4xl text-center">
          <p className="text-lg font-bold leading-8 text-[#005F99] md:text-xl">
            From shipment creation to final delivery, Fortuna TMS
            transforms transportation execution into one connected,
            intelligent flow.
          </p>
        </div>
      </div>
    </section>
  );
}