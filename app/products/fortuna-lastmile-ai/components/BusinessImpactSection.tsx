"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  CircleDollarSign,
  Eye,
  Gauge,
  Sparkles,
  TrendingUp,
  Truck,
  Zap,
} from "lucide-react";

const impacts = [
  {
    icon: CircleDollarSign,
    title: "Cost-Aware Delivery",
    description:
      "Support more efficient last-mile execution by optimizing routes, reducing unnecessary travel and improving delivery planning.",
    accent: "red",
  },
  {
    icon: Gauge,
    title: "Faster Execution",
    description:
      "Coordinate delivery activities with intelligent planning and route sequencing to help teams execute with greater efficiency.",
    accent: "blue",
  },
  {
    icon: Eye,
    title: "Complete Visibility",
    description:
      "Connect driver movement, delivery status and execution progress to give operations teams a clearer view of every delivery.",
    accent: "blue",
  },
  {
    icon: CheckCircle2,
    title: "Traceable Deliveries",
    description:
      "Strengthen delivery accountability with digital proof of delivery and a more connected execution trail.",
    accent: "red",
  },
  {
    icon: BrainCircuit,
    title: "AI-Supported Decisions",
    description:
      "Transform delivery execution data into actionable insights that help teams identify exceptions and make informed decisions.",
    accent: "blue",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "Use delivery performance intelligence to understand operational patterns and continuously improve last-mile execution.",
    accent: "red",
  },
];

export default function BusinessImpactSection() {
  return (
    <section
      id="business-impact"
      className="relative isolate overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="absolute inset-0 -z-20">

        {/* Soft Fortuna background */}

        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8FBFD] to-[#FFF8F9]" />

        {/* Blue glow */}

        <div className="absolute -right-40 top-10 h-[600px] w-[600px] rounded-full bg-[#005F99]/8 blur-[140px]" />

        {/* Red glow */}

        <div className="absolute -left-40 bottom-0 h-[520px] w-[520px] rounded-full bg-[#C8102E]/7 blur-[140px]" />

        {/* Subtle grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#005F99 1px, transparent 1px), linear-gradient(90deg, #005F99 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* =======================================================
            HEADER
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >

          {/* Eyebrow */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C8102E]/15 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-md">

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C8102E] text-white">
              <TrendingUp size={15} />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#005F99] sm:text-xs">
              Business Impact
            </span>

          </div>

          {/* Main heading */}

          <h2 className="text-4xl font-black tracking-tight text-[#C8102E] sm:text-5xl lg:text-6xl">

            Turn Every Mile Into

            <span className="block text-[#005F99]">
              Business Advantage.
            </span>

          </h2>

          {/* Accent */}

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">

            <span className="h-1 w-16 rounded-full bg-[#C8102E]" />

            <span className="h-1 w-8 rounded-full bg-[#005F99]" />

          </div>

          {/* Description */}

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#C8102E]/90 sm:text-lg">
            Fortuna LastMile AI helps transform complex delivery operations
            into a more visible, efficient and intelligent execution model.
          </p>

        </motion.div>

        {/* =======================================================
            EXECUTIVE VISUAL
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="mx-auto mt-14 max-w-6xl"
        >

          <div className="relative overflow-hidden rounded-[34px] border border-slate-200/80 bg-white/85 p-5 shadow-[0_30px_90px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:p-7">

            {/* =================================================
                VISUAL HEADER
            ================================================== */}

            <div className="flex flex-col gap-5 border-b border-slate-100 pb-6 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#005F99]/10 text-[#005F99]">
                  <BrainCircuit size={22} />
                </div>

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#005F99]">
                    Last-Mile Intelligence
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#C8102E]">
                    Connected Delivery Operations
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2 rounded-full border border-[#005F99]/10 bg-[#005F99]/5 px-4 py-2">

                <span className="h-2 w-2 animate-pulse rounded-full bg-[#005F99]" />

                <span className="text-xs font-semibold text-[#005F99]">
                  Intelligent Execution
                </span>

              </div>

            </div>

            {/* =================================================
                BUSINESS FLOW VISUAL
            ================================================== */}

            <div className="relative mt-6 min-h-[320px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#F8FBFD] via-white to-[#FFF7F8]">

              {/* Blue glow */}

              <div className="absolute left-[18%] top-[25%] h-40 w-40 rounded-full bg-[#005F99]/10 blur-[70px]" />

              {/* Red glow */}

              <div className="absolute right-[15%] bottom-[20%] h-40 w-40 rounded-full bg-[#C8102E]/10 blur-[70px]" />

              {/* =================================================
                  SUBTLE NETWORK
              ================================================== */}

              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1000 400"
                preserveAspectRatio="none"
              >

                {/* Blue connection */}

                <path
                  d="M120 250 C260 120, 350 310, 500 190 S740 110, 880 240"
                  fill="none"
                  stroke="#005F99"
                  strokeWidth="2"
                  strokeDasharray="7 12"
                  opacity="0.16"
                />

                {/* Red connection */}

                <path
                  d="M120 250 C260 330, 360 120, 500 190 S720 310, 880 240"
                  fill="none"
                  stroke="#C8102E"
                  strokeWidth="2"
                  strokeDasharray="7 14"
                  opacity="0.12"
                />

                {/* Central intelligence rings */}

                <circle
                  cx="500"
                  cy="190"
                  r="82"
                  fill="none"
                  stroke="#005F99"
                  strokeWidth="1.5"
                  strokeDasharray="5 9"
                  opacity="0.22"
                />

                <circle
                  cx="500"
                  cy="190"
                  r="55"
                  fill="none"
                  stroke="#C8102E"
                  strokeWidth="1.5"
                  strokeDasharray="4 8"
                  opacity="0.18"
                />

              </svg>

              {/* =================================================
                  ANIMATED DELIVERY ROAD
              ================================================== */}

              <div className="absolute left-[8%] right-[8%] top-1/2 hidden h-[72px] -translate-y-1/2 sm:block">

                {/* Road shadow */}

                <div className="absolute left-0 right-0 top-1/2 h-[50px] -translate-y-1/2 rounded-full bg-slate-300/35 blur-md" />

                {/* Asphalt */}

                <div className="absolute left-0 right-0 top-1/2 h-[42px] -translate-y-1/2 rounded-full bg-gradient-to-b from-[#475569] via-[#334155] to-[#475569] shadow-[0_10px_25px_rgba(15,23,42,0.16)]" />

                {/* Blue road edge */}

                <div className="absolute left-0 right-0 top-[10px] h-[3px] rounded-full bg-[#005F99]/70" />

                <div className="absolute bottom-[10px] left-0 right-0 h-[3px] rounded-full bg-[#C8102E]/65" />

                {/* White highway lane */}

                <motion.div
                  className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to right, white 0px, white 24px, transparent 24px, transparent 44px)",
                  }}
                  animate={{
                    backgroundPositionX: ["0px", "-44px"],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* =================================================
                    MOVING CARGO TRUCK
                ================================================== */}

                <motion.div
                  className="absolute left-0 top-1/2 z-20 -translate-y-1/2"
                  animate={{
                    left: ["2%", "48%", "96%"],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.48, 1],
                  }}
                >

                  {/* Truck glow */}

                  <motion.div
                    className="absolute -inset-3 rounded-full bg-[#C8102E]/20 blur-md"
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                      scale: [0.9, 1.15, 0.9],
                    }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                    }}
                  />

                  {/* Truck */}

                  <div className="relative flex items-end gap-0.5">

                    {/* Cargo container */}

                    <div className="relative flex h-9 w-12 items-center justify-center rounded-l-md rounded-t-md border border-white/20 bg-gradient-to-br from-[#C8102E] to-[#9F1027] shadow-[0_5px_15px_rgba(200,16,46,0.30)]">

                      <div className="absolute inset-x-2 top-2 h-px bg-white/30" />

                      <div className="absolute inset-x-2 top-4 h-px bg-white/20" />

                      <span className="text-[7px] font-black tracking-[0.08em] text-white/90">
                        FORTUNA
                      </span>

                    </div>

                    {/* Cabin */}

                    <div className="relative h-8 w-7 rounded-r-md rounded-t-md bg-[#005F99] shadow-[0_5px_15px_rgba(0,95,153,0.25)]">

                      {/* Windshield */}

                      <div className="absolute left-1 top-1 h-3 w-5 rounded-sm bg-sky-100/80" />

                    </div>

                    {/* Wheels */}

                    <div className="absolute -bottom-2 left-2 h-4 w-4 rounded-full border-2 border-slate-700 bg-slate-900 shadow-sm">
                      <div className="absolute inset-1 rounded-full bg-slate-400" />
                    </div>

                    <div className="absolute -bottom-2 right-1 h-4 w-4 rounded-full border-2 border-slate-700 bg-slate-900 shadow-sm">
                      <div className="absolute inset-1 rounded-full bg-slate-400" />
                    </div>

                  </div>

                  {/* AI movement trail */}

                  <motion.div
                    className="absolute right-full top-1/2 mr-1 h-[3px] w-16 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent to-[#C8102E]"
                    animate={{
                      opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                  />

                </motion.div>

                {/* =================================================
                    ROUTE NODES
                ================================================== */}

                <div className="absolute left-0 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#005F99] shadow-md" />

                <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#005F99] shadow-md" />

                <div className="absolute right-0 top-1/2 h-4 w-4 translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#C8102E] shadow-md" />

              </div>

              {/* =================================================
                  LEFT — DELIVERY INPUT
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="absolute left-5 top-5 w-[190px] sm:left-8 sm:top-1/2 sm:w-[220px] sm:-translate-y-1/2"
              >

                <div className="rounded-3xl border border-[#005F99]/10 bg-white/92 p-5 shadow-[0_15px_40px_rgba(0,95,153,0.10)] backdrop-blur-xl">

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#005F99]/10 text-[#005F99]">

                    <Truck size={21} />

                  </div>

                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#005F99]">
                    Delivery Operations
                  </p>

                  <p className="mt-2 text-sm font-semibold text-[#C8102E]">
                    Orders • Vehicles • Drivers
                  </p>

                  <div className="mt-4 space-y-2">

                    <div className="h-1.5 rounded-full bg-[#005F99]/10">
                      <div className="h-full w-[78%] rounded-full bg-[#005F99]" />
                    </div>

                    <div className="h-1.5 rounded-full bg-[#C8102E]/10">
                      <div className="h-full w-[62%] rounded-full bg-[#C8102E]" />
                    </div>

                  </div>

                </div>

              </motion.div>

              {/* =================================================
                  CENTER — AI ENGINE
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.85,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                }}
                className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
              >

                {/* Outer pulse */}

                <motion.div
                  animate={{
                    scale: [1, 1.18, 1],
                    opacity: [0.2, 0, 0.2],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                  }}
                  className="absolute h-40 w-40 rounded-full bg-[#005F99]"
                />

                {/* AI Engine */}

                <div className="relative flex h-28 w-28 flex-col items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-[#005F99] to-[#004A78] text-white shadow-[0_20px_55px_rgba(0,95,153,0.30)]">

                  <Sparkles size={25} />

                  <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em]">
                    AI Engine
                  </span>

                </div>

              </motion.div>

              {/* =================================================
                  RIGHT — BUSINESS OUTCOMES
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.25,
                }}
                className="absolute bottom-5 right-5 w-[190px] sm:right-8 sm:top-1/2 sm:w-[220px] sm:-translate-y-1/2"
              >

                <div className="rounded-3xl border border-[#C8102E]/10 bg-white/92 p-5 shadow-[0_15px_40px_rgba(200,16,46,0.10)] backdrop-blur-xl">

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C8102E]/10 text-[#C8102E]">

                    <TrendingUp size={21} />

                  </div>

                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#C8102E]">
                    Business Outcomes
                  </p>

                  <div className="mt-3 space-y-2.5">

                    {[
                      "Better visibility",
                      "Efficient execution",
                      "Cost-aware operations",
                    ].map((item) => (

                      <div
                        key={item}
                        className="flex items-center gap-2"
                      >

                        <CheckCircle2
                          size={14}
                          className="shrink-0 text-[#005F99]"
                        />

                        <span className="text-xs font-medium text-slate-600">
                          {item}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </motion.div>

        {/* =======================================================
            IMPACT CARDS
        ======================================================== */}

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            const isRed = impact.accent === "red";

            return (
              <motion.article
                key={impact.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -5,
                }}
                className={`group relative overflow-hidden rounded-[26px] border bg-white/85 p-6 shadow-[0_15px_50px_rgba(15,23,42,0.07)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_22px_65px_rgba(15,23,42,0.12)] ${
                  isRed
                    ? "border-[#C8102E]/12"
                    : "border-[#005F99]/12"
                }`}
              >

                {/* Hover glow */}

                <div
                  className={`absolute -right-16 -top-16 h-36 w-36 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                    isRed
                      ? "bg-[#C8102E]/10"
                      : "bg-[#005F99]/10"
                  }`}
                />

                {/* Top accent */}

                <div
                  className={`absolute left-0 top-0 h-1 w-0 transition-all duration-500 group-hover:w-full ${
                    isRed
                      ? "bg-[#C8102E]"
                      : "bg-[#005F99]"
                  }`}
                />

                <div className="relative z-10">

                  {/* Icon */}

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      isRed
                        ? "bg-[#C8102E]/10 text-[#C8102E]"
                        : "bg-[#005F99]/10 text-[#005F99]"
                    }`}
                  >
                    <Icon size={23} />
                  </div>

                  {/* Heading */}

                  <h3
                    className={`mt-5 text-xl font-extrabold tracking-tight ${
                      isRed
                        ? "text-[#C8102E]"
                        : "text-[#005F99]"
                    }`}
                  >
                    {impact.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {impact.description}
                  </p>

                  {/* Accent line */}

                  <div className="mt-5 flex items-center gap-3">

                    <div
                      className={`h-px flex-1 ${
                        isRed
                          ? "bg-[#C8102E]/15"
                          : "bg-[#005F99]/15"
                      }`}
                    />

                    <ArrowRight
                      size={15}
                      className={`transition-transform duration-300 group-hover:translate-x-1 ${
                        isRed
                          ? "text-[#C8102E]"
                          : "text-[#005F99]"
                      }`}
                    />

                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>

        {/* =======================================================
            FINAL VALUE STATEMENT
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mt-14 max-w-4xl text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-[#005F99]/15 bg-[#005F99]/5 px-4 py-2">

            <Zap
              size={15}
              className="text-[#C8102E]"
            />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#005F99]">
              Intelligent Delivery. Measurable Impact.
            </span>

          </div>

          <h3 className="mt-6 text-3xl font-black tracking-tight text-[#C8102E] sm:text-4xl">

            Make Every Delivery

            <span className="text-[#005F99]">
              {" "}Count.
            </span>

          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Connect planning, execution and intelligence to build a more
            responsive and efficient last-mile operation.
          </p>

        </motion.div>

      </div>
    </section>
  );
}