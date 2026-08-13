"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  LockKeyhole,
  UsersRound,
  FileCheck2,
  PlugZap,
  RefreshCw,
  Cloud,
  Radio,
  Database,
  BarChart3,
  Truck,
  Warehouse,
  ArrowRight,
  CheckCircle2,
  Network,
  Globe2,
} from "lucide-react";

const securityFeatures = [
  {
    icon: LockKeyhole,
    title: "Controlled Access",
    description:
      "Support controlled access to transportation operations through defined user roles and permissions.",
  },
  {
    icon: UsersRound,
    title: "Role-Based Operations",
    description:
      "Keep operational responsibilities aligned with the right users, teams, and business functions.",
  },
  {
    icon: FileCheck2,
    title: "Operational Traceability",
    description:
      "Maintain greater visibility across transportation activities, decisions, and operational workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Data Handling",
    description:
      "Designed to support secure handling of transportation, fleet, shipment, and operational information.",
  },
];

const integrations = [
  {
    icon: Warehouse,
    title: "WMS",
    description: "Warehouse Operations",
  },
  {
    icon: Database,
    title: "ERP",
    description: "Enterprise Systems",
  },
  {
    icon: Truck,
    title: "Fleet",
    description: "Fleet Platforms",
  },
  {
    icon: Radio,
    title: "Telematics",
    description: "Vehicle Data",
  },
  {
    icon: BarChart3,
    title: "BI & Analytics",
    description: "Business Intelligence",
  },
  {
    icon: PlugZap,
    title: "APIs",
    description: "Connected Applications",
  },
];

export default function SecuritySection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Blue Glow */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-[#005F99]/20 blur-[130px]"
        />

        {/* Red Glow */}
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-48 bottom-10 h-[500px] w-[500px] rounded-full bg-[#C8102E]/15 blur-[130px]"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >

          {/* Label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 backdrop-blur-md">

            <ShieldCheck className="h-4 w-4 text-[#C8102E]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
              Enterprise Security & Connectivity
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#005F99]" />

          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[52px]">

            Secure by Design.

            <span className="block mt-2 bg-gradient-to-r from-[#C8102E] via-[#C8102E] to-[#005F99] bg-clip-text text-transparent">
              Connected by Architecture.
            </span>

          </h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Fortuna TMS brings transportation operations, users, data, and
            connected business systems together through controlled access,
            operational traceability, and integration-ready architecture.
          </p>

        </motion.div>

        {/* =================================================
            SECURITY CORE
        ================================================== */}

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

          {/* =================================================
              LEFT — SECURITY FEATURES
          ================================================== */}

          <div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
            >

              <div className="mb-8 flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C8102E] to-[#005F99] text-white shadow-lg shadow-[#005F99]/20">
                  <ShieldCheck size={24} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4DA6FF]">
                    Security Foundation
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-white">
                    Operational Trust Layer
                  </h3>
                </div>

              </div>

              {/* Security Cards */}
              <div className="grid gap-4 sm:grid-cols-2">

                {securityFeatures.map((feature, index) => {

                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.08,
                      }}
                      whileHover={{ y: -5 }}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#005F99]/40 hover:bg-white/[0.08]"
                    >

                      {/* Accent */}
                      <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#C8102E] to-[#005F99] opacity-60 transition-opacity group-hover:opacity-100" />

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#005F99]/10 text-[#4DA6FF] transition-all duration-300 group-hover:bg-[#C8102E]/15 group-hover:text-[#C8102E]">
                        <Icon size={21} strokeWidth={1.8} />
                      </div>

                      <h4 className="mt-5 text-base font-bold text-white">
                        {feature.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {feature.description}
                      </p>

                    </motion.div>
                  );
                })}

              </div>

            </motion.div>

          </div>

          {/* =================================================
              RIGHT — SECURITY VISUAL
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* Outer Glow */}
            <div className="absolute -inset-10 rounded-[3rem] bg-[#005F99]/10 blur-3xl" />

            {/* Main Core */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-[0_35px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-9">

              {/* Top Gloss */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.08] to-transparent" />

              {/* Header */}
              <div className="relative flex items-center justify-between">

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    FORTUNA TMS
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white">
                    Connected Enterprise Core
                  </h3>

                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#005F99] to-[#C8102E] text-white shadow-lg">
                  <Network size={21} />
                </div>

              </div>

              {/* =================================================
    CORE NETWORK VISUAL
================================================== */}

              <div className="relative mx-auto mt-10 flex h-[330px] max-w-[500px] items-center justify-center">

                {/* =================================================
                    ORBIT SYSTEM
                ================================================== */}

                {/* Outer Orbit */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-[260px] w-[260px] rounded-full border border-[#005F99]/20"
                />

                {/* Inner Orbit */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-[190px] w-[190px] rounded-full border border-[#C8102E]/20 border-dashed"
                />

                {/* =================================================
                    STATIC CONNECTION AXIS
                ================================================== */}

                <div className="absolute left-1/2 top-1/2 h-[250px] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#005F99]/25 to-transparent" />

                <div className="absolute left-1/2 top-1/2 h-px w-[330px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#C8102E]/25 to-transparent" />

                {/* =================================================
    ORBITING NODE 1 — CLOUD
================================================== */}

<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute inset-0"
>
  <div
    className="absolute left-1/2 top-0"
    style={{ transform: "translateX(-50%)" }}
  >
    <div className="flex flex-col items-center gap-2">

      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[#005F99]/30 bg-slate-900 text-[#4DA6FF] shadow-[0_0_25px_rgba(0,95,153,0.18)]">

        <Cloud size={21} />

        <span className="absolute inset-0 rounded-2xl border border-[#4DA6FF]/30 animate-ping" />

      </div>

      <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-wider text-slate-500">
        Cloud
      </span>

    </div>
  </div>
</motion.div>


{/* =================================================
    ORBITING NODE 2 — DATA
================================================== */}

<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "linear",
    delay: -3,
  }}
  className="absolute inset-0"
>
  <div
    className="absolute left-1/2 top-0"
    style={{ transform: "translateX(-50%)" }}
  >
    <div className="flex flex-col items-center gap-2">

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#C8102E]/30 bg-slate-900 text-[#C8102E] shadow-[0_0_25px_rgba(200,16,46,0.15)]">

        <Database size={21} />

      </div>

      <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-wider text-slate-500">
        Data
      </span>

    </div>
  </div>
</motion.div>


{/* =================================================
    ORBITING NODE 3 — APIs
================================================== */}

<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "linear",
    delay: -6,
  }}
  className="absolute inset-0"
>
  <div
    className="absolute left-1/2 top-0"
    style={{ transform: "translateX(-50%)" }}
  >
    <div className="flex flex-col items-center gap-2">

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#005F99]/30 bg-slate-900 text-[#4DA6FF] shadow-[0_0_25px_rgba(0,95,153,0.18)]">

        <PlugZap size={21} />

      </div>

      <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-wider text-slate-500">
        APIs
      </span>

    </div>
  </div>
</motion.div>


{/* =================================================
    ORBITING NODE 4 — SYNC
================================================== */}

<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "linear",
    delay: -9,
  }}
  className="absolute inset-0"
>
  <div
    className="absolute left-1/2 top-0"
    style={{ transform: "translateX(-50%)" }}
  >
    <div className="flex flex-col items-center gap-2">

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#C8102E]/30 bg-slate-900 text-[#C8102E] shadow-[0_0_25px_rgba(200,16,46,0.15)]">

        <RefreshCw size={21} />

      </div>

      <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-wider text-slate-500">
        Sync
      </span>

    </div>
  </div>
</motion.div>

                {/* =================================================
                    CENTRAL INTELLIGENCE NODE
                ================================================== */}

                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 0 rgba(0,95,153,0)",
                      "0 0 40px rgba(0,95,153,0.35)",
                      "0 0 0 rgba(0,95,153,0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-20 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[#005F99] to-[#C8102E] text-white shadow-2xl"
                >

                  {/* Inner Glow */}
                  <div className="absolute inset-2 rounded-2xl bg-white/[0.08]" />

                  <Globe2
                    size={38}
                    strokeWidth={1.5}
                    className="relative z-10"
                  />

                </motion.div>

              </div>

              {/* =================================================
                  STATUS
              ================================================== */}

              <div className="relative flex items-center justify-between rounded-xl border border-white/10 bg-black/10 px-4 py-3">

                <div className="flex items-center gap-2">

                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                  <span className="text-xs font-medium text-slate-300">
                    Connected Architecture
                  </span>

                </div>

                <span className="text-xs font-semibold text-[#4DA6FF]">
                  Ready for Integration
                </span>

              </div>

            </div>

          </motion.div>
        </div>

        {/* =================================================
            INTEGRATION ECOSYSTEM
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >

          <div className="mb-8 text-center">

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#4DA6FF]">
              Integration Ecosystem
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Connect the Systems That Run Your Business
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              Fortuna TMS is designed to operate as part of a connected
              enterprise technology landscape.
            </p>

          </div>

          {/* Integration Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {integrations.map((integration, index) => {

              const Icon = integration.icon;

              return (
                <motion.div
                  key={integration.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  whileHover={{ y: -5 }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-md transition-all duration-300 hover:border-[#005F99]/40 hover:bg-white/[0.07]"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#005F99]/20 to-[#C8102E]/15 text-[#4DA6FF] transition-all duration-300 group-hover:text-white">

                    <Icon size={22} strokeWidth={1.8} />

                  </div>

                  <div className="min-w-0 flex-1">

                    <h4 className="font-semibold text-white">
                      {integration.title}
                    </h4>

                    <p className="mt-1 text-xs text-slate-500">
                      {integration.description}
                    </p>

                  </div>

                  <ArrowRight
                    size={16}
                    className="text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#C8102E]"
                  />

                </motion.div>
              );
            })}

          </div>

        </motion.div>

        {/* =================================================
            BOTTOM TRUST STATEMENT
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-col items-center justify-center gap-4 text-center sm:flex-row"
        >

          <div className="flex items-center gap-2 text-sm font-medium text-slate-400">

            <CheckCircle2 className="h-4 w-4 text-emerald-400" />

            Controlled Operations

          </div>

          <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />

          <div className="flex items-center gap-2 text-sm font-medium text-slate-400">

            <CheckCircle2 className="h-4 w-4 text-emerald-400" />

            Integration Ready

          </div>

          <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />

          <div className="flex items-center gap-2 text-sm font-medium text-slate-400">

            <CheckCircle2 className="h-4 w-4 text-emerald-400" />

            Connected Visibility

          </div>

        </motion.div>

      </div>
    </section>
  );
}