"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Cog,
  Gauge,
  Layers3,
  Settings2,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

type Theme = "blue" | "red";

type Capability = {
  number: string;
  icon: React.ElementType;
  title: string;
  label: string;
  description: string;
  theme: Theme;
};

const capabilities: Capability[] = [
  {
    number: "01",
    icon: Layers3,
    title: "Asset Intelligence",
    label: "ASSET VISIBILITY",
    description:
      "Build a connected view of assets, locations, condition, status and operational history across the enterprise.",
    theme: "blue",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Maintenance Management",
    label: "MAINTENANCE",
    description:
      "Plan, schedule and execute preventive and corrective maintenance with complete operational visibility.",
    theme: "red",
  },
  {
    number: "03",
    icon: Settings2,
    title: "Workforce Operations",
    label: "WORKFORCE",
    description:
      "Coordinate technicians, assignments and maintenance activities across operational teams.",
    theme: "blue",
  },
  {
    number: "04",
    icon: Gauge,
    title: "Performance Monitoring",
    label: "PERFORMANCE",
    description:
      "Monitor asset performance and operational signals to identify trends and improvement opportunities.",
    theme: "red",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Reliability & Compliance",
    label: "RELIABILITY",
    description:
      "Strengthen reliability through inspections, controls, compliance tracking and operational governance.",
    theme: "blue",
  },
  {
    number: "06",
    icon: ClipboardCheck,
    title: "Work Execution",
    label: "EXECUTION",
    description:
      "Convert operational signals into structured, traceable maintenance actions and measurable outcomes.",
    theme: "red",
  },
];

function AnimatedToolIcon({
  Icon,
  theme,
}: {
  Icon: React.ElementType;
  theme: Theme;
}) {
  const blue = theme === "blue";

  return (
    <div className="relative h-14 w-14">

      {/* Rotating technical frame */}

      <motion.div
        className={`absolute inset-0 rounded-2xl border ${
          blue
            ? "border-[#005F99]/20"
            : "border-[#C8102E]/20"
        }`}
        animate={{
          rotate: [0, 3, 0, -3, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Technical indicator */}

      <motion.span
        className={`absolute -right-1 top-1 h-2 w-2 rounded-full ${
          blue ? "bg-[#35A9DE]" : "bg-[#C8102E]"
        }`}
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.45, 1, 0.45],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
        }}
      />

      {/* Icon */}

      <motion.div
        className={`absolute inset-[5px] flex items-center justify-center rounded-xl ${
          blue
            ? "bg-[#005F99]/[0.07] text-[#005F99]"
            : "bg-[#C8102E]/[0.07] text-[#C8102E]"
        }`}
        whileHover={{
          scale: 1.08,
        }}
        transition={{
          duration: 0.25,
        }}
      >
        <motion.div
          animate={{
            rotate: [0, -4, 4, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={22} strokeWidth={1.8} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function CapabilitiesSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#F8FBFD] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      style={{
        fontFamily:
          "Arial, Helvetica, sans-serif",
      }}
    >

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Corporate grid */}

        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,95,153,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,95,153,0.035) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Fortuna blue glow */}

        <div className="absolute -left-52 top-32 h-[500px] w-[500px] rounded-full bg-[#005F99]/[0.045] blur-[130px]" />

        {/* Fortuna red glow */}

        <div className="absolute -right-52 bottom-32 h-[500px] w-[500px] rounded-full bg-[#C8102E]/[0.035] blur-[130px]" />

      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-4xl text-center"
        >

          {/* Eyebrow */}

          <div className="inline-flex items-center gap-2 rounded-full border border-[#005F99]/15 bg-white px-4 py-2 shadow-sm">

            <Sparkles
              size={13}
              className="text-[#C8102E]"
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#005F99] sm:text-[10px]">
              Fortuna EAM Capabilities
            </span>

          </div>

          {/* Main heading */}

          <h2 className="mt-6 text-[clamp(2rem,4vw,3.45rem)] font-black leading-[1.08] tracking-[-0.035em]">

            <span className="block text-[#005F99]">
              Intelligent Assets.
            </span>

            <span className="mt-1 block text-[#C8102E]">
              Connected Operations.
            </span>

          </h2>

          {/* Fortuna accent */}

          <div className="mx-auto mt-6 flex items-center justify-center gap-2">

            <span className="h-[3px] w-12 rounded-full bg-[#C8102E]" />

            <span className="h-[3px] w-7 rounded-full bg-[#005F99]" />

          </div>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-[#17466A] sm:text-base sm:leading-8">
            Fortuna EAM connects asset intelligence, maintenance execution,
            workforce coordination and operational performance through one
            connected enterprise asset management platform.
          </p>

        </motion.div>

        {/* =====================================================
            PREMIUM INTELLIGENCE PANEL
        ====================================================== */}

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
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative mt-14 overflow-hidden rounded-[30px] border border-[#005F99]/20 bg-[#06364B] shadow-[0_28px_80px_rgba(0,60,95,0.16)]"
        >

          {/* Grid */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)",
              backgroundSize: "38px 38px",
            }}
          />

          {/* Blue atmosphere */}

          <div className="pointer-events-none absolute -left-48 top-0 h-[450px] w-[450px] rounded-full bg-[#005F99]/35 blur-[120px]" />

          {/* Red atmosphere */}

          <div className="pointer-events-none absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-[#C8102E]/25 blur-[120px]" />

          {/* =================================================
              PANEL HEADER
          ================================================== */}

          <div className="relative flex flex-col justify-between gap-5 border-b border-white/10 px-6 py-6 sm:flex-row sm:items-center sm:px-8">

            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[#35A9DE]">
                <Activity size={20} />
              </div>

              <div>

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                  Connected Asset Intelligence
                </p>

                <h3 className="mt-1 text-lg font-black text-white sm:text-xl">
                  The EAM Intelligence Layer
                </h3>

              </div>

            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">

              <motion.span
                className="h-2 w-2 rounded-full bg-[#35A9DE]"
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/75">
                System Connected
              </span>

            </div>

          </div>

          {/* =================================================
              IMAGES
          ================================================== */}

          <div className="relative grid gap-5 p-5 sm:p-7 lg:grid-cols-2">

            {/* IMAGE ONE */}

            <div className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-[#042B3C]">

              <div className="relative h-[260px] sm:h-[330px]">

                <img
                  src="/images/products/fortuna-eam-asset-intelligence.png"
                  alt="Fortuna EAM asset intelligence"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#06364B] via-transparent to-transparent" />

                {/* Image label */}

                <div className="absolute left-5 top-5">

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#06364B]/75 px-3 py-2 backdrop-blur-md">

                    <span className="h-1.5 w-1.5 rounded-full bg-[#35A9DE]" />

                    <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white">
                      Asset Intelligence
                    </span>

                  </span>

                </div>

                {/* Image content */}

                <div className="absolute bottom-5 left-5 right-5">

                  <h4 className="text-xl font-black text-white sm:text-2xl">
                    See every asset.
                  </h4>

                  <p className="mt-2 max-w-md text-xs font-medium leading-5 text-white/75">
                    Connect asset information, condition and operational
                    signals into one intelligent view.
                  </p>

                </div>

              </div>

            </div>

            {/* IMAGE TWO */}

            <div className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-[#042B3C]">

              <div className="relative h-[260px] sm:h-[330px]">

                <img
                  src="/images/products/fortuna-eam-industrial-operations.png"
                  alt="Fortuna EAM industrial operations"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#06364B] via-transparent to-transparent" />

                <div className="absolute left-5 top-5">

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#06364B]/75 px-3 py-2 backdrop-blur-md">

                    <span className="h-1.5 w-1.5 rounded-full bg-[#C8102E]" />

                    <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white">
                      Industrial Operations
                    </span>

                  </span>

                </div>

                <div className="absolute bottom-5 left-5 right-5">

                  <h4 className="text-xl font-black text-white sm:text-2xl">
                    Act before disruption.
                  </h4>

                  <p className="mt-2 max-w-md text-xs font-medium leading-5 text-white/75">
                    Turn operational signals into proactive maintenance
                    decisions and stronger asset performance.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              SIGNAL → INTELLIGENCE → EXECUTION
          ================================================== */}

          <div className="relative px-5 pb-7 sm:px-7">

            <div className="relative rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-5">

              <div className="flex flex-col gap-5 lg:flex-row lg:items-center">

                {/* SIGNALS */}

                <div className="flex flex-1 items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#005F99]/25 text-[#35A9DE]">
                    <Zap size={18} />
                  </div>

                  <div>

                    <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#35A9DE]">
                      Signals
                    </p>

                    <p className="mt-1 text-xs font-bold text-white/80">
                      Asset & operational data
                    </p>

                  </div>

                </div>

                {/* CONNECTOR */}

                <div className="hidden h-px flex-1 bg-gradient-to-r from-[#005F99]/60 to-white/20 lg:block" />

                {/* INTELLIGENCE */}

                <div className="flex flex-1 items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">

                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Cog size={18} />
                    </motion.div>

                  </div>

                  <div>

                    <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/80">
                      Intelligence
                    </p>

                    <p className="mt-1 text-xs font-bold text-white/80">
                      Analyze & prioritize
                    </p>

                  </div>

                </div>

                {/* CONNECTOR */}

                <div className="hidden h-px flex-1 bg-gradient-to-r from-white/20 to-[#C8102E]/60 lg:block" />

                {/* EXECUTION */}

                <div className="flex flex-1 items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C8102E]/20 text-[#ff7185]">
                    <Wrench size={18} />
                  </div>

                  <div>

                    <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#C8102E]">
                      Execution
                    </p>

                    <p className="mt-1 text-xs font-bold text-white/80">
                      Act & improve
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

        {/* =====================================================
            CAPABILITY TITLE
        ====================================================== */}

        <div className="mt-16 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>

            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C8102E]">
              Core Capability Framework
            </p>

            <h3 className="mt-2 text-2xl font-black tracking-[-0.025em] text-[#005F99] sm:text-3xl">
              Everything your assets need.
            </h3>

          </div>

          <div className="flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-[#005F99]" />

            <span className="text-xs font-bold text-[#17466A]">
              One connected EAM platform
            </span>

          </div>

        </div>

        {/* =====================================================
            CAPABILITY CARDS
        ====================================================== */}

        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {capabilities.map((item, index) => {

            const Icon = item.icon;
            const blue = item.theme === "blue";

            return (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 28,
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
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -6,
                }}
                className={`group relative overflow-hidden rounded-[24px] border bg-white p-6 shadow-[0_14px_40px_rgba(0,60,100,0.065)] transition-all duration-300 ${
                  blue
                    ? "border-[#005F99]/10 hover:border-[#005F99]/25"
                    : "border-[#C8102E]/10 hover:border-[#C8102E]/25"
                }`}
              >

                {/* Hover atmosphere */}

                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                    blue
                      ? "bg-[#005F99]/10"
                      : "bg-[#C8102E]/10"
                  }`}
                />

                {/* Header */}

                <div className="relative flex items-start justify-between">

                  <AnimatedToolIcon
                    Icon={Icon}
                    theme={item.theme}
                  />

                  <span
                    className={`text-[10px] font-black tracking-[0.18em] ${
                      blue
                        ? "text-[#005F99]/25"
                        : "text-[#C8102E]/25"
                    }`}
                  >
                    {item.number}
                  </span>

                </div>

                {/* Label */}

                <p
                  className={`relative mt-5 text-[8px] font-bold uppercase tracking-[0.18em] ${
                    blue
                      ? "text-[#005F99]"
                      : "text-[#C8102E]"
                  }`}
                >
                  {item.label}
                </p>

                {/* Title */}

                <h4 className="relative mt-2 text-xl font-black tracking-[-0.02em] text-[#005F99]">
                  {item.title}
                </h4>

                {/* Description */}

                <p className="relative mt-3 text-sm font-medium leading-6 text-[#17466A]">
                  {item.description}
                </p>

                {/* Footer */}

                <div className="relative mt-6 flex items-center justify-between border-t border-[#005F99]/[0.08] pt-4">

                  <div className="flex items-center gap-2">

                    <CheckCircle2
                      size={14}
                      className={
                        blue
                          ? "text-[#005F99]"
                          : "text-[#C8102E]"
                      }
                    />

                    <span className="text-[10px] font-bold text-[#17466A]">
                      Connected capability
                    </span>

                  </div>

                  <motion.span
                    className={`h-1.5 w-1.5 rounded-full ${
                      blue
                        ? "bg-[#35A9DE]"
                        : "bg-[#C8102E]"
                    }`}
                    animate={{
                      opacity: [0.35, 1, 0.35],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.12,
                    }}
                  />

                </div>

              </motion.article>
            );
          })}

        </div>

        {/* =====================================================
            BOTTOM FORTUNA STATEMENT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.65,
          }}
          className="relative mt-14 overflow-hidden rounded-[24px] border border-[#005F99]/10 bg-white px-6 py-7 shadow-[0_15px_45px_rgba(0,60,100,0.055)] sm:px-8"
        >

          {/* Fortuna background tint */}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#005F99]/[0.035] via-transparent to-[#C8102E]/[0.025]" />

          <div className="relative flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#005F99]/[0.07]">

                <BarChart3
                  size={20}
                  className="text-[#005F99]"
                />

              </div>

              <div>

                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#C8102E]">
                  Operational Advantage
                </p>

                <p className="mt-1 text-sm font-black text-[#005F99]">
                  From asset visibility to intelligent execution.
                </p>

              </div>

            </div>

            {/* Brand language */}

            <div className="flex items-center gap-2">

              <span className="text-xs font-black text-[#005F99]">
                CONNECT
              </span>

              <span className="text-[#C8102E]">
                •
              </span>

              <span className="text-xs font-black text-[#005F99]">
                PREDICT
              </span>

              <span className="text-[#C8102E]">
                •
              </span>

              <span className="text-xs font-black text-[#C8102E]">
                OPTIMIZE
              </span>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}