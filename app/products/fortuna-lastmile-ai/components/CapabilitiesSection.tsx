"use client";

import { motion } from "framer-motion";
import {
  Route,
  CalendarClock,
  Truck,
  ClipboardCheck,
  Sparkles,
  ArrowUpRight,
  MapPinned,
  Clock3,
  CircleCheck,
} from "lucide-react";

const capabilities = [
  {
    icon: Route,
    number: "01",
    title: "AI Route Optimization",
    description:
      "Optimize delivery routes using intelligent sequencing to improve route efficiency, reduce unnecessary travel and support cost-aware last-mile execution.",
    points: [
      "Intelligent route sequencing",
      "Multi-stop delivery optimization",
      "Distance and travel efficiency",
    ],
    accent: "red",
  },
  {
    icon: CalendarClock,
    number: "02",
    title: "Delivery Planning",
    description:
      "Plan delivery activities with greater coordination across orders, destinations, vehicles and operational priorities.",
    points: [
      "Delivery planning and scheduling",
      "Order-to-route coordination",
      "Priority-based execution",
    ],
    accent: "blue",
  },
  {
    icon: Truck,
    number: "03",
    title: "Driver Tracking & Visibility",
    description:
      "Bring driver and delivery execution visibility together so operations teams can understand progress and respond faster to changing situations.",
    points: [
      "Driver movement visibility",
      "Delivery status tracking",
      "Operational monitoring",
    ],
    accent: "blue",
  },
  {
    icon: ClipboardCheck,
    number: "04",
    title: "Proof of Delivery",
    description:
      "Capture delivery completion information digitally to create a more traceable and accountable last-mile execution process.",
    points: [
      "Digital delivery confirmation",
      "Execution traceability",
      "Improved delivery accountability",
    ],
    accent: "red",
  },
  {
    icon: Sparkles,
    number: "05",
    title: "AI Delivery Insights",
    description:
      "Turn delivery execution data into actionable intelligence that helps teams understand performance, identify exceptions and continuously improve operations.",
    points: [
      "AI-powered delivery insights",
      "Exception visibility",
      "Performance-driven decisions",
    ],
    accent: "blue",
  },
];

const stats = [
  {
    icon: MapPinned,
    value: "Smarter",
    label: "Route Intelligence",
  },
  {
    icon: Clock3,
    value: "Real-Time",
    label: "Execution Visibility",
  },
  {
    icon: CircleCheck,
    value: "Traceable",
    label: "Delivery Execution",
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND IMAGE + OVERLAY
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/products/capabilities-bg.png')",
          }}
        />

        
        {/* Fortuna red atmospheric glow */}
        <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[#C8102E]/10 blur-[140px]" />

        {/* Fine Fortuna grid */}
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,95,153,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,95,153,0.08) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* =======================================================
            SECTION HEADER
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#005F99]/20 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-md">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C8102E] text-white">
              <Sparkles size={15} strokeWidth={2.4} />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#005F99] sm:text-xs">
              Intelligent Last-Mile Execution
            </span>
          </div>

          {/* =====================================================
              MAIN HEADING
              Fortuna Red instead of Black
          ====================================================== */}

          <h2 className="text-4xl font-black tracking-tight text-[#C8102E] sm:text-5xl lg:text-6xl">
            Intelligence Behind
            <span className="block text-[#005F99]">
              Every Delivery.
            </span>
          </h2>

          {/* Red / Blue divider */}

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-1 w-16 rounded-full bg-[#C8102E]" />
            <span className="h-1 w-8 rounded-full bg-[#005F99]" />
          </div>
          
        </motion.div>

        {/* =======================================================
            TOP STAT STRIP
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-1 overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:grid-cols-3"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`relative flex items-center justify-center gap-4 px-6 py-6 ${
                  index !== stats.length - 1
                    ? "border-b border-slate-200 sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#005F99]/10 text-[#005F99]">
                  <Icon size={21} />
                </div>

                <div>
                  {/* Fortuna Blue instead of black */}
                  <p className="text-lg font-extrabold text-[#005F99]">
                    {stat.value}
                  </p>

                  <p className="text-xs font-medium text-slate-500">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* =======================================================
            CAPABILITY GRID
        ======================================================== */}

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            const isRed = capability.accent === "red";

            return (
              <motion.article
                key={capability.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-[28px] border bg-white/85 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_25px_80px_rgba(15,23,42,0.13)] sm:p-8 ${
                  isRed
                    ? "border-[#C8102E]/15"
                    : "border-[#005F99]/15"
                } ${
                  index === 4
                    ? "lg:col-span-2 lg:mx-auto lg:w-[calc(50%-10px)]"
                    : ""
                }`}
              >
                {/* Decorative glow */}

                <div
                  className={`absolute -right-20 -top-20 h-44 w-44 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
                    isRed
                      ? "bg-[#C8102E]/10"
                      : "bg-[#005F99]/10"
                  }`}
                />

                {/* Top line */}

                <div
                  className={`absolute left-0 top-0 h-1 w-0 transition-all duration-500 group-hover:w-full ${
                    isRed ? "bg-[#C8102E]" : "bg-[#005F99]"
                  }`}
                />

                <div className="relative z-10">
                  {/* Icon + Number */}

                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                        isRed
                          ? "bg-[#C8102E]/10 text-[#C8102E]"
                          : "bg-[#005F99]/10 text-[#005F99]"
                      }`}
                    >
                      <Icon size={26} strokeWidth={2} />
                    </div>

                    <span className="text-sm font-black tracking-[0.18em] text-[#005F99]/25">
                      {capability.number}
                    </span>
                  </div>

                  {/* =================================================
                      CAPABILITY TITLE
                      No black headings
                  ================================================== */}

                  <div className="mt-6 flex items-start justify-between gap-5">
                    <h3
                      className={`text-2xl font-extrabold tracking-tight sm:text-[26px] ${
                        isRed
                          ? "text-[#C8102E]"
                          : "text-[#005F99]"
                      }`}
                    >
                      {capability.title}
                    </h3>

                    <div
                      className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 ${
                        isRed
                          ? "border-[#C8102E]/20 text-[#C8102E]"
                          : "border-[#005F99]/20 text-[#005F99]"
                      }`}
                    >
                      <ArrowUpRight size={17} />
                    </div>
                  </div>

                  {/* Description */}

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    {capability.description}
                  </p>

                  {/* Capability points */}

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {capability.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <span
                          className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                            isRed
                              ? "bg-[#C8102E]/10 text-[#C8102E]"
                              : "bg-[#005F99]/10 text-[#005F99]"
                          }`}
                        >
                          <CircleCheck
                            size={11}
                            strokeWidth={2.5}
                          />
                        </span>

                        <span className="leading-5">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom accent */}

                  <div className="mt-7 flex items-center gap-3">
                    <div
                      className={`h-px flex-1 ${
                        isRed
                          ? "bg-[#C8102E]/15"
                          : "bg-[#005F99]/15"
                      }`}
                    />

                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                        isRed
                          ? "text-[#C8102E]"
                          : "text-[#005F99]"
                      }`}
                    >
                      LastMile AI
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =======================================================
            BOTTOM INTELLIGENCE BANNER
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-8 overflow-hidden rounded-[30px] border border-[#005F99]/15 bg-white/85 p-7 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-9"
        >
          {/* Background glow */}

          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#005F99]/10 blur-[90px]" />

          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#C8102E]/10 blur-[90px]" />

          <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              {/* Label */}

              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#C8102E]" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#005F99]">
                  One Intelligent Platform
                </span>
              </div>

              {/* Bottom heading */}

              <h3 className="text-2xl font-extrabold tracking-tight text-[#005F99] sm:text-3xl">
                From route planning to delivery completion,
                <span className="text-[#C8102E]">
                  {" "}connect every mile.
                </span>
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Give operations teams a connected view of last-mile
                execution while using AI-driven intelligence to improve
                planning, visibility and delivery performance.
              </p>
            </div>

            {/* CTA */}

            <a
              href="#business-impact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#C8102E] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(200,16,46,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a90d27] hover:shadow-[0_16px_40px_rgba(200,16,46,0.3)]"
            >
              See Business Impact

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}