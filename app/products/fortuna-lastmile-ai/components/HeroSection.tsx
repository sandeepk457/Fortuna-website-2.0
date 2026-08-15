"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  MapPin,
  Navigation,
  PackageCheck,
  Route,
  Sparkles,
  Truck,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  /*
   * ============================================================
   * FORTUNA LASTMILE AI — HERO
   * ============================================================
   *
   * Theme:
   * Fortuna Red  : #C8102E
   * Fortuna Blue : #005F99
   *
   * The route, road, lane animation and delivery markers
   * intentionally share the same SVG coordinate system so
   * everything remains visually connected.
   */

  const routePath =
    "M70 190 C150 130, 180 180, 250 120 S370 70, 430 120 S520 190, 620 70";

  const routePoints = [
    {
      left: "10%",
      top: "76%",
      label: "Start",
      type: "truck",
    },
    {
      left: "35.7%",
      top: "48%",
      label: "Stop 01",
      type: "stop",
    },
    {
      left: "61.4%",
      top: "48%",
      label: "Stop 02",
      type: "stop",
    },
    {
      left: "88.6%",
      top: "28%",
      label: "Customer",
      type: "customer",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white">

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_42%,rgba(0,95,153,0.10),transparent_34%),radial-gradient(circle_at_12%_20%,rgba(200,16,46,0.07),transparent_30%)]"
      />

      <div className="absolute -right-40 top-20 -z-10 h-[600px] w-[600px] rounded-full bg-[#005F99]/5 blur-[130px]" />

      <div className="absolute -left-40 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#C8102E]/5 blur-[130px]" />

      {/* =========================================================
          SUBTLE FORTUNA GRID
      ========================================================== */}

      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#005F99 1px, transparent 1px), linear-gradient(90deg, #005F99 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* =========================================================
          MAIN HERO
      ========================================================== */}

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">

        <div className="grid items-center gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:gap-14">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
            className="relative z-10"
          >

            {/* =================================================
                EYEBROW
            ================================================== */}

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#005F99]/15 bg-[#005F99]/5 px-4 py-2">

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#005F99] text-white shadow-sm">
                <Sparkles size={14} />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#005F99]">
                AI-POWERED LAST-MILE INTELLIGENCE
              </span>

            </div>

            {/* =================================================
                HEADING
            ================================================== */}

            <h1 className="max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">

              <span className="block text-[#C8102E]">
                Optimize Every
              </span>

              <span className="block text-[#C8102E]">
                Mile.
              </span>

              <span className="mt-3 block text-[#005F99]">
                Deliver Smarter.
              </span>

            </h1>

            {/* =================================================
                FORTUNA ACCENT
            ================================================== */}

            <div className="mt-8 flex items-center gap-3">

              <div className="h-1 w-16 rounded-full bg-[#C8102E]" />

              <div className="h-1 w-8 rounded-full bg-[#005F99]" />

            </div>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">

              Fortuna LastMile AI is an intelligent last-mile execution
              platform designed to optimize delivery operations for
              timely, efficient and cost-aware execution.

            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">

              Bring route optimization, delivery planning, driver visibility,
              proof of delivery and AI-powered delivery insights together
              through one intelligent last-mile platform.

            </p>

            {/* =================================================
                ACTIONS
            ================================================== */}

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/request-demo"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#C8102E] px-7 py-4 text-sm font-bold text-white shadow-[0_15px_40px_rgba(200,16,46,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a80d26] hover:shadow-[0_20px_45px_rgba(200,16,46,0.30)]"
              >
                Request a Demo

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

              <a
                href="#capabilities"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-[#005F99] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#005F99] hover:shadow-lg"
              >
                Explore Capabilities

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </a>

            </div>

            {/* =================================================
                TRUST STRIP
            ================================================== */}

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">

              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  className="text-[#005F99]"
                />
                Intelligent Routing
              </div>

              <div className="hidden h-4 w-px bg-slate-300 sm:block" />

              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  className="text-[#005F99]"
                />
                Delivery Visibility
              </div>

              <div className="hidden h-4 w-px bg-slate-300 sm:block" />

              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  className="text-[#005F99]"
                />
                AI Delivery Insights
              </div>

            </div>

          </motion.div>

          {/* =====================================================
              RIGHT — PREMIUM PRODUCT VISUAL
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative"
          >

            {/* =================================================
                OUTER FORTUNA GLOW
            ================================================== */}

            <div className="absolute -inset-7 rounded-[46px] bg-gradient-to-br from-[#005F99]/10 via-transparent to-[#C8102E]/10 blur-2xl" />

            {/* =================================================
                MAIN CARD
            ================================================== */}

            <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-white/95 p-5 shadow-[0_30px_90px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:p-7">

              {/* =================================================
                  TOP STATUS
              ================================================== */}

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#005F99]/10 text-[#005F99]">
                    <BrainCircuit size={21} />
                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                      Intelligent Delivery
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      AI Optimization Engine
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">

                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

                  Active

                </div>

              </div>

              {/* =================================================
                  PRODUCT LOGO
              ================================================== */}

              <div className="relative mt-6 flex min-h-[145px] items-center justify-center overflow-hidden rounded-[27px] bg-gradient-to-br from-slate-50 via-white to-[#005F99]/5 px-5">

                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#005F99]/10" />

                <div className="absolute -left-16 -bottom-20 h-48 w-48 rounded-full border border-[#C8102E]/10" />

                <div className="absolute h-32 w-32 rounded-full bg-[#005F99]/5 blur-2xl" />

                <Image
                  src="/images/products/Fortuna-lastMile.png"
                  alt="Fortuna LastMile AI"
                  width={720}
                  height={246}
                  priority
                  className="relative z-10 h-auto w-full max-w-[510px] object-contain"
                />

              </div>

              {/* =================================================
                  ROUTE INTELLIGENCE PANEL
              ================================================== */}

              <div
                className="relative mt-6 h-[270px] overflow-hidden rounded-[28px] border border-[#005F99]/10 bg-gradient-to-br from-[#F7FBFE] via-white to-[#FFF6F7]"
              >

                {/* =================================================
                    SOFT BLUE GLOW
                ================================================== */}

                <div className="absolute left-[25%] top-[30%] h-28 w-28 rounded-full bg-[#005F99]/10 blur-3xl" />

                {/* =================================================
                    SOFT RED GLOW
                ================================================== */}

                <div className="absolute right-[20%] bottom-[15%] h-28 w-28 rounded-full bg-[#C8102E]/10 blur-3xl" />

                {/* =================================================
                    LIGHT GRID
                ================================================== */}

                <div
                  className="absolute inset-0 opacity-[0.075]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#005F99 1px, transparent 1px), linear-gradient(90deg, #005F99 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* =================================================
                    ROUTE / HIGHWAY SVG
                ================================================== */}

                <div className="absolute inset-0">

                  <svg
                    className="h-full w-full"
                    viewBox="0 0 700 250"
                    preserveAspectRatio="none"
                  >

                    {/* =================================================
                        OUTER ROAD SHADOW
                    ================================================== */}

                    <path
                      d={routePath}
                      fill="none"
                      stroke="rgba(15,23,42,0.14)"
                      strokeWidth="42"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* =================================================
                        FORTUNA BLUE ROAD BORDER
                    ================================================== */}

                    <path
                      d={routePath}
                      fill="none"
                      stroke="#005F99"
                      strokeWidth="37"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* =================================================
                        ASPHALT ROAD
                    ================================================== */}

                    <path
                      d={routePath}
                      fill="none"
                      stroke="#364152"
                      strokeWidth="31"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* =================================================
                        SUBTLE ROAD HIGHLIGHT
                    ================================================== */}

                    <path
                      d={routePath}
                      fill="none"
                      stroke="#4B5563"
                      strokeWidth="27"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* =================================================
                        WHITE HIGHWAY CENTER LINE
                    ================================================== */}

                    <motion.path
                      d={routePath}
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="13 15"
                      animate={{
                        strokeDashoffset: [0, -112],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* =================================================
                        FORTUNA RED AI INTELLIGENCE FLOW
                    ================================================== */}

                    <motion.path
                      d={routePath}
                      fill="none"
                      stroke="#C8102E"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="9 17"
                      animate={{
                        strokeDashoffset: [0, -130],
                      }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* =================================================
                        BLUE AI SIGNAL
                    ================================================== */}

                    <motion.path
                      d={routePath}
                      fill="none"
                      stroke="#36A9E1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="4 23"
                      animate={{
                        strokeDashoffset: [0, 150],
                      }}
                      transition={{
                        duration: 3.8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                  </svg>

                </div>

                {/* =================================================
                    ROUTE POINTS
                ================================================== */}

                {routePoints.map((point, index) => (

                  <motion.div
                    key={point.label}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: point.left,
                      top: point.top,
                    }}
                    initial={{
                      opacity: 0,
                      scale: 0.65,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.6 + index * 0.15,
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                  >

                    {/* =================================================
                        PULSE
                    ================================================== */}

                    <motion.div
                      className={`absolute inset-0 rounded-full ${
                        point.type === "customer"
                          ? "bg-[#C8102E]"
                          : "bg-[#005F99]"
                      }`}
                      animate={{
                        scale: [1, 1.45, 1],
                        opacity: [0.35, 0, 0.35],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: "easeOut",
                      }}
                    />

                    {/* =================================================
                        MARKER
                    ================================================== */}

                    <div
                      className={`relative flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-white shadow-[0_5px_18px_rgba(15,23,42,0.22)] ${
                        point.type === "customer"
                          ? "bg-[#C8102E]"
                          : "bg-[#005F99]"
                      }`}
                    >

                      {point.type === "truck" ? (
                        <Truck
                          size={15}
                          strokeWidth={2.4}
                          className="text-white"
                        />
                      ) : point.type === "customer" ? (
                        <PackageCheck
                          size={15}
                          strokeWidth={2.4}
                          className="text-white"
                        />
                      ) : (
                        <MapPin
                          size={15}
                          strokeWidth={2.4}
                          className="text-white"
                        />
                      )}

                    </div>

                  </motion.div>

                ))}

                {/* =================================================
                    AI ROUTE BADGE
                ================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: -8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.8,
                    duration: 0.5,
                  }}
                  className="absolute left-5 top-5 rounded-2xl border border-[#005F99]/10 bg-white/90 px-4 py-3 shadow-[0_8px_25px_rgba(0,95,153,0.10)] backdrop-blur-md"
                >

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">

                    <Sparkles
                      size={14}
                      className="text-[#C8102E]"
                    />

                    AI Route Optimization

                  </div>

                  <p className="mt-1 text-[11px] text-slate-500">
                    Intelligent route sequencing
                  </p>

                </motion.div>

                {/* =================================================
                    OPTIMIZED ROUTE BADGE
                ================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1,
                    duration: 0.5,
                  }}
                  className="absolute bottom-5 right-5 rounded-2xl border border-[#C8102E]/10 bg-white/90 px-4 py-3 shadow-[0_8px_25px_rgba(200,16,46,0.10)] backdrop-blur-md"
                >

                  <div className="flex items-center gap-2">

                    <Navigation
                      size={14}
                      className="text-[#C8102E]"
                    />

                    <span className="text-xs font-semibold text-slate-800">
                      Optimized Route
                    </span>

                  </div>

                  <p className="mt-1 text-[11px] text-slate-500">
                    Smarter last-mile execution
                  </p>

                </motion.div>

              </div>

              {/* =================================================
                  CAPABILITY STRIP
              ================================================== */}

              <div className="mt-5 grid grid-cols-3 gap-3">

                {/* Route */}

                <div className="rounded-2xl border border-[#005F99]/5 bg-[#005F99]/[0.035] p-3">

                  <Route
                    size={17}
                    className="text-[#005F99]"
                  />

                  <p className="mt-2 text-[11px] font-semibold text-slate-700">
                    Route Optimization
                  </p>

                </div>

                {/* Driver */}

                <div className="rounded-2xl border border-[#C8102E]/5 bg-[#C8102E]/[0.035] p-3">

                  <Truck
                    size={17}
                    className="text-[#C8102E]"
                  />

                  <p className="mt-2 text-[11px] font-semibold text-slate-700">
                    Driver Tracking
                  </p>

                </div>

                {/* AI */}

                <div className="rounded-2xl border border-[#005F99]/5 bg-[#005F99]/[0.035] p-3">

                  <Sparkles
                    size={17}
                    className="text-[#005F99]"
                  />

                  <p className="mt-2 text-[11px] font-semibold text-slate-700">
                    AI Insights
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* =========================================================
            BOTTOM VALUE STATEMENT
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.45,
          }}
          className="mx-auto mt-16 max-w-5xl text-center"
        >

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C8102E]">
            LAST-MILE EXECUTION
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-[#C8102E] sm:text-4xl">

            From Delivery Plans to{" "}

            <span className="text-[#005F99]">
              Intelligent Execution
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-500">

            Turn complex last-mile operations into a more visible,
            intelligent and efficient delivery experience.

          </p>

        </motion.div>

      </div>

    </section>
  );
}