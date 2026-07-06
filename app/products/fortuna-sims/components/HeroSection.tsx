"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/products/fortuna-sims-hero1.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/45" />

      {/* Red Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-600/10 blur-[120px]" />

      {/* Blue Glow */}
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1500px] items-center px-8 py-24">

        <div className="grid w-full items-center gap-20 lg:grid-cols-[1fr_1.15fr]">

          {/* LEFT CONTENT */}

          <div>

            {/* Badge */}

            <div className="mb-6 inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-medium text-red-300 backdrop-blur">
              AI-Powered Supply Chain Platform
            </div>

            {/* Heading */}

            <h1 className="text-6xl font-extrabold leading-tight text-white xl:text-7xl">

              Transform Your

              <span className="block text-red-500">
                Procurement,
                Inventory &
                Warehouse Operations
              </span>

              with One Intelligent Platform

            </h1>

            {/* Subtitle */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Fortuna SIMS unifies procurement, inventory, warehouse
              management, approvals, analytics, and AI-powered decision making
              into one modern enterprise platform—helping organizations improve
              visibility, automation, and operational efficiency across the
              entire supply chain.
            </p>

          {/* Feature Pills */}

<div className="mt-10 flex flex-wrap gap-4">

  {[
    "Procurement",
    "Inventory",
    "Warehouse (WMS)",
    "AI Analytics",
    "Mobile Ready",
    "Cloud Native",
  ].map((item) => (
    <div
      key={item}
      className="
        group
        relative
        overflow-hidden
        flex
        items-center
        gap-3
        rounded-full
        border
        border-white/10
        bg-white/5
        px-5
        py-3
        text-sm
        font-medium
        text-slate-200
        backdrop-blur-md
        cursor-pointer
        transition-all
        duration-500
        hover:-translate-y-1
        hover:scale-105
        hover:border-[#C8102E]
        hover:bg-gradient-to-r
        hover:from-[#C8102E]/20
        hover:via-[#6B4D73]/20
        hover:to-[#005F99]/20
        hover:shadow-[0_15px_35px_rgba(200,16,46,0.35)]
      "
    >

      {/* Glossy Shine */}

      <span
        className="
          absolute
          -left-24
          top-0
          h-full
          w-16
          -skew-x-12
          bg-white/30
          blur-md
          transition-all
          duration-700
          group-hover:left-[120%]
        "
      />

      {/* Icon */}

      <CheckCircle2
        className="
          relative
          z-10
          h-5
          w-5
          text-[#C8102E]
          transition-all
          duration-300
          group-hover:scale-125
          group-hover:rotate-6
          group-hover:text-white
        "
      />

      {/* Text */}

      <span
        className="
          relative
          z-10
          transition-all
          duration-300
          group-hover:text-white
        "
      >
        {item}
      </span>

    </div>
  ))}

</div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700"
              >
                Request Live Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
  href="/brochures/fortuna SIMS - Product Overview.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
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
    hover:border-[#C8102E]
    hover:bg-gradient-to-r
    hover:from-[#C8102E]/20
    hover:to-[#005F99]/20
    hover:shadow-[0_15px_35px_rgba(200,16,46,0.35)]
  "
>
  <FileText className="mr-2 h-5 w-5 text-[#C8102E] transition-transform duration-300 group-hover:scale-110 group-hover:text-white" />

  <span>Download Brochure</span>
</Link>

            </div>

          </div>

        {/* RIGHT */}

<div className="relative hidden lg:flex items-center justify-end">

  {/* Red Glow */}
  <div className="absolute right-20 top-16 h-80 w-80 rounded-full bg-[#C8102E]/20 blur-[120px]" />

  {/* Blue Glow */}
  <div className="absolute bottom-10 left-16 h-80 w-80 rounded-full bg-[#005F99]/20 blur-[120px]" />

  {/* Dashboard */}

  <img
    src="/images/products/F_SIMS.png"
    alt="Fortuna SIMS"
    className="
      relative
      z-10
      w-[760px]
      xl:w-[900px]
      object-contain
      drop-shadow-[0_40px_80px_rgba(0,0,0,0.45)]
      transition-all
      duration-500
      hover:scale-105
    "
  />

</div>

        </div>

      </div>
    </section>
  );
}