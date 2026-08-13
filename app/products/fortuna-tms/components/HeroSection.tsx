"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Truck,
  Route,
  MapPin,
  Gauge,
  Brain,
  Radio,
  Clock3,
} from "lucide-react";

const features = [
  "Fleet Management",
  "Route Optimization",
  "Dispatch & Delivery",
  "Freight Management",
  "AI Analytics",
  "Real-Time Visibility",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* TMS Background Image — ORIGINAL */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/products/fortuna-tms-hero-bg.png')",
        }}
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-slate-950/55" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Fortuna Red Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#C8102E]/20 blur-[130px]" />

      {/* Fortuna Blue Glow */}
      <div className="absolute right-0 bottom-0 h-[550px] w-[550px] rounded-full bg-[#005F99]/30 blur-[150px]" />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative mx-auto flex min-h-screen max-w-[1500px] items-center px-8 py-28">

        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div>

            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-medium text-red-300 backdrop-blur">
              Intelligent Transportation Management Platform
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white md:text-6xl xl:text-7xl">
              Transform Your

              <span className="block text-[#C8102E]">
                Transportation
              </span>

              <span className="block text-[#C8102E]">
                Planning & Execution
              </span>

              <span className="mt-2 block">
                with One Intelligent Platform
              </span>
            </h1>

            {/* Accent Line */}
            <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-[#C8102E] to-[#005F99]" />

            {/* Description */}
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Fortuna TMS is an intelligent, cloud-based transportation
              management platform that streamlines planning, dispatch,
              tracking and delivery through automation, real-time data and
              predictive analytics.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
              Connect vehicles, routes, drivers and cargo within one unified
              digital environment to improve delivery accuracy, optimize
              fleet performance and reduce operational costs.
            </p>

            {/* =================================================
                FEATURE PILLS
            ================================================== */}

            <div className="mt-8 flex max-w-2xl flex-wrap gap-3">

              {features.map((item) => (
                <div
                  key={item}
                  className="
                    group
                    relative
                    inline-flex
                    items-center
                    gap-2
                    overflow-hidden
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-2.5
                    text-sm
                    font-medium
                    text-slate-200
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#C8102E]/50
                    hover:bg-white/10
                  "
                >
                  <CheckCircle2
                    className="
                      h-4
                      w-4
                      text-[#C8102E]
                      transition-all
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  <span>{item}</span>
                </div>
              ))}

            </div>

            {/* =================================================
                BUTTONS
            ================================================== */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/request-demo"
                className="
                  group
                  inline-flex
                  items-center
                  rounded-xl
                  bg-gradient-to-r
                  from-[#C8102E]
                  to-[#D7193F]
                  px-7
                  py-4
                  font-semibold
                  text-white
                  shadow-[0_15px_35px_rgba(200,16,46,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_45px_rgba(200,16,46,0.35)]
                "
              >
                Request Live Demo

                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  rounded-xl
                  border
                  border-white/20
                  bg-white/5
                  px-7
                  py-4
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#005F99]
                  hover:bg-white/10
                "
              >
                Talk to Our Experts
              </Link>

            </div>

            {/* Small Trust Line */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Cloud-Based Platform
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Real-Time Visibility
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                AI-Driven Intelligence
              </div>

            </div>

          </div>

          {/* =================================================
              RIGHT — TMS CONTROL TOWER
          ================================================== */}

          <div className="relative">

            {/* =================================================
                FORTUNA TMS LOGO
                NEW — DOES NOT REPLACE CONTROL TOWER
            ================================================== */}

            <div className="relative z-30 mb-5 flex justify-end">

              <div
                className="
                  relative
                  w-[250px]
                  rounded-2xl
                  border
                  border-white/15
                  bg-slate-950/45
                  px-5
                  py-3
                  shadow-[0_20px_50px_rgba(0,0,0,0.45)]
                  backdrop-blur-md
                  sm:w-[290px]
                  lg:w-[330px]
                "
              >

                {/* Blue Glow */}
                <div className="pointer-events-none absolute -inset-5 -z-10 rounded-3xl bg-[#005F99]/20 blur-3xl" />

                {/* Red Glow */}
                <div className="pointer-events-none absolute -right-5 -top-5 -z-10 h-24 w-24 rounded-full bg-[#C8102E]/20 blur-2xl" />

                {/* Logo */}
                <Image
                  src="/images/products/Fortuna-TMS.png"
                  alt="Fortuna TMS"
                  width={905}
                  height={302}
                  priority
                  className="
                    h-auto
                    w-full
                    object-contain
                    drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]
                  "
                />

                {/* Fortuna Red + Blue Accent */}
                <div className="mx-auto mt-2 h-0.5 w-20 rounded-full bg-gradient-to-r from-[#C8102E] via-[#005F99] to-[#C8102E]" />

              </div>

            </div>

            {/* Existing Control Tower Glow */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-[#005F99]/20 blur-3xl" />

            {/* =================================================
                EXISTING CONTROL TOWER
            ================================================== */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.07]
                p-5
                shadow-[0_35px_100px_rgba(0,0,0,0.45)]
                backdrop-blur-xl
                md:p-7
              "
            >

              {/* Gloss */}
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/10 to-transparent" />

              <div className="relative">

                {/* Header */}
                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      FORTUNA TMS
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-white">
                      Transportation Control Tower
                    </h2>

                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#005F99] to-[#C8102E] shadow-lg">
                    <Truck className="h-6 w-6 text-white" />
                  </div>

                </div>

                {/* =================================================
                    KPI GRID
                ================================================== */}

                <div className="mt-6 grid grid-cols-2 gap-4">

                  {/* Routes */}
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

                    <div className="flex items-center gap-2">

                      <Route className="h-5 w-5 text-[#4DA6FF]" />

                      <span className="text-xs text-slate-400">
                        Active Routes
                      </span>

                    </div>

                    <p className="mt-3 text-3xl font-bold text-white">
                      128
                    </p>

                    <p className="mt-1 text-xs text-emerald-400">
                      Optimized in real time
                    </p>

                  </div>

                  {/* Fleet */}
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

                    <div className="flex items-center gap-2">

                      <Truck className="h-5 w-5 text-[#C8102E]" />

                      <span className="text-xs text-slate-400">
                        Fleet
                      </span>

                    </div>

                    <p className="mt-3 text-3xl font-bold text-white">
                      342
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Vehicles monitored
                    </p>

                  </div>

                </div>

                {/* =================================================
                    LIVE VISIBILITY
                ================================================== */}

                <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/40 p-5">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#005F99]/10">
                        <MapPin className="h-5 w-5 text-[#4DA6FF]" />
                      </div>

                      <div>

                        <p className="font-semibold text-white">
                          Real-Time Vehicle Visibility
                        </p>

                        <p className="text-xs text-slate-400">
                          Routes, vehicles & shipments
                        </p>

                      </div>

                    </div>

                    <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">

                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                      Live

                    </span>

                  </div>

                  {/* Route */}
                  <div className="relative mt-7 h-24">

                    <div className="absolute left-5 right-5 top-1/2 h-px bg-gradient-to-r from-[#005F99] via-[#C8102E] to-[#005F99]" />

                    {/* Origin */}
                    <div className="absolute left-2 top-[calc(50%-8px)] h-4 w-4 rounded-full border-2 border-[#005F99] bg-slate-950 shadow-[0_0_15px_rgba(0,95,153,0.7)]" />

                    {/* In Transit */}
                    <div className="absolute left-1/2 top-[calc(50%-10px)] flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#C8102E] bg-slate-950 shadow-[0_0_18px_rgba(200,16,46,0.7)]">

                      <span className="h-1.5 w-1.5 rounded-full bg-[#C8102E]" />

                    </div>

                    {/* Destination */}
                    <div className="absolute right-2 top-[calc(50%-8px)] h-4 w-4 rounded-full border-2 border-[#005F99] bg-slate-950 shadow-[0_0_15px_rgba(0,95,153,0.7)]" />

                    <span className="absolute left-0 top-0 text-[10px] uppercase tracking-wider text-slate-500">
                      Origin
                    </span>

                    <span className="absolute left-1/2 top-0 -translate-x-1/2 text-[10px] uppercase tracking-wider text-slate-500">
                      In Transit
                    </span>

                    <span className="absolute right-0 top-0 text-[10px] uppercase tracking-wider text-slate-500">
                      Destination
                    </span>

                    <span className="absolute left-0 bottom-0 text-xs font-medium text-white">
                      Hyderabad
                    </span>

                    <span className="absolute left-1/2 bottom-0 -translate-x-1/2 text-xs font-medium text-[#C8102E]">
                      68%
                    </span>

                    <span className="absolute right-0 bottom-0 text-xs font-medium text-white">
                      Visakhapatnam
                    </span>

                  </div>

                </div>

                {/* =================================================
                    INTELLIGENCE CARDS
                ================================================== */}

                <div className="mt-4 grid grid-cols-3 gap-3">

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">

                    <Brain className="h-5 w-5 text-[#C8102E]" />

                    <p className="mt-2 text-xs font-medium text-white">
                      AI Analytics
                    </p>

                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">

                    <Gauge className="h-5 w-5 text-[#4DA6FF]" />

                    <p className="mt-2 text-xs font-medium text-white">
                      Fleet Performance
                    </p>

                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">

                    <Radio className="h-5 w-5 text-emerald-400" />

                    <p className="mt-2 text-xs font-medium text-white">
                      IoT Tracking
                    </p>

                  </div>

                </div>

                {/* =================================================
                    OPERATION STATUS
                ================================================== */}

                <div className="mt-4 grid grid-cols-2 gap-3">

                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">

                    <Clock3 className="h-5 w-5 text-[#4DA6FF]" />

                    <div>

                      <p className="text-xs text-slate-400">
                        ETA Prediction
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        Live Updates
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">

                    <Gauge className="h-5 w-5 text-[#C8102E]" />

                    <div>

                      <p className="text-xs text-slate-400">
                        Route Status
                      </p>

                      <p className="mt-1 text-sm font-semibold text-emerald-400">
                        Optimized
                      </p>

                    </div>

                  </div>

                </div>

                {/* Bottom Statement */}
                <div className="mt-5 border-t border-white/10 pt-5">

                  <p className="text-sm leading-6 text-slate-400">
                    Connect vehicles, routes, drivers and cargo through one
                    intelligent transportation environment.
                  </p>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );

}
