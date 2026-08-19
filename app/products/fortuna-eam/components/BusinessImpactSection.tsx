"use client";

import { useEffect, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Gauge,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wrench,
  Zap,
} from "lucide-react";

const impactAreas = [
  {
    label: "Asset Visibility",
    value: 92,
    description: "Centralized asset intelligence",
    icon: Activity,
    color: "blue",
  },
  {
    label: "Maintenance Intelligence",
    value: 86,
    description: "Predictive and condition-based workflows",
    icon: BrainCircuit,
    color: "red",
  },
  {
    label: "Operational Reliability",
    value: 82,
    description: "Performance and reliability monitoring",
    icon: Gauge,
    color: "blue",
  },
  {
    label: "Workforce Coordination",
    value: 76,
    description: "Connected work orders and resources",
    icon: Wrench,
    color: "red",
  },
  {
    label: "Compliance Control",
    value: 88,
    description: "Safety, compliance and audit visibility",
    icon: ShieldCheck,
    color: "blue",
  },
];

const outcomes = [
  {
    title: "Higher Asset Availability",
    text: "Improve visibility into asset health and maintenance readiness.",
    icon: TrendingUp,
    color: "blue",
  },
  {
    title: "Faster Intervention",
    text: "Identify issues earlier and connect them to actionable workflows.",
    icon: Zap,
    color: "red",
  },
  {
    title: "Smarter Decisions",
    text: "Bring operational signals and performance intelligence together.",
    icon: BarChart3,
    color: "blue",
  },
];

function FlowStep({
  number,
  title,
  text,
  color,
}: {
  number: string;
  title: string;
  text: string;
  color: "blue" | "red";
}) {
  return (
    <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-3 transition-all duration-300 hover:bg-white/[0.10]">
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[9px] font-black ${
          color === "blue"
            ? "bg-[#005F99]/30 text-[#62c5ee]"
            : "bg-[#C8102E]/30 text-[#ff8094]"
        }`}
      >
        {number}
      </div>

      <div className="min-w-0 flex-1">
        <p
          className={`text-xs font-black ${
            color === "blue" ? "text-[#62c5ee]" : "text-[#ff8094]"
          }`}
        >
          {title}
        </p>

        <p className="mt-0.5 text-[10px] font-medium text-slate-400">
          {text}
        </p>
      </div>

      <ArrowUpRight
        size={14}
        className="text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
      />
    </div>
  );
}

export default function BusinessImpactSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="business-impact"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,95,153,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,95,153,0.035) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Blue glow */}
      <div className="pointer-events-none absolute -left-48 top-40 h-[420px] w-[420px] rounded-full bg-[#005F99]/5 blur-[120px]" />

      {/* Red glow */}
      <div className="pointer-events-none absolute -right-48 bottom-20 h-[420px] w-[420px] rounded-full bg-[#C8102E]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#005F99]/10 bg-white px-4 py-2 shadow-sm">
            <Sparkles size={14} className="text-[#C8102E]" />

            <span className="bg-gradient-to-r from-[#005F99] to-[#C8102E] bg-clip-text text-[10px] font-extrabold uppercase tracking-[0.22em] text-transparent">
              Business Impact
            </span>
          </div>

          {/* Main heading */}
          <h2 className="mt-7 px-3 pb-3 text-[clamp(2.1rem,4.5vw,4.1rem)] font-black leading-[1.1] tracking-[-0.055em]">
            <span className="block bg-gradient-to-r from-[#005F99] via-[#0879b8] to-[#005F99] bg-clip-text pb-1 text-transparent">
              Turn Asset Data
            </span>

            <span className="mt-2 block bg-gradient-to-r from-[#C8102E] via-[#df304c] to-[#C8102E] bg-clip-text pb-1 text-transparent">
              Into Operational Advantage.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-base font-medium leading-7 text-[#005F99]/75 sm:text-lg sm:leading-8">
            Fortuna EAM connects asset intelligence, maintenance workflows,
            workforce activity and operational signals to create a more
            proactive and measurable asset management environment.
          </p>
        </div>

        {/* =====================================================
            MAIN PANEL
        ====================================================== */}

        <div className="relative mt-16 overflow-hidden rounded-[32px] border border-[#005F99]/10 bg-gradient-to-br from-[#f5fbfe] via-white to-[#fff5f7] p-5 shadow-[0_30px_90px_rgba(0,60,100,0.09)] sm:mt-20 sm:p-8 lg:mt-24 lg:p-10">
          {/* Panel glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[70%] -translate-x-1/2 rounded-full bg-[#005F99]/5 blur-[70px]" />

          {/* Panel header */}
          <div className="relative flex flex-col gap-4 border-b border-[#005F99]/10 pb-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="bg-gradient-to-r from-[#C8102E] to-[#005F99] bg-clip-text text-[10px] font-extrabold uppercase tracking-[0.22em] text-transparent">
                Connected Asset Intelligence
              </p>

              <h3 className="mt-3 bg-gradient-to-r from-[#005F99] via-[#1879ae] to-[#C8102E] bg-clip-text text-2xl font-black leading-[1.15] tracking-[-0.035em] text-transparent sm:text-3xl">
                Where EAM creates operational value
              </h3>
            </div>

            <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#005F99]/10 bg-white px-3.5 py-2 shadow-sm lg:self-auto">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#C8102E]" />

              <span className="bg-gradient-to-r from-[#005F99] to-[#C8102E] bg-clip-text text-[9px] font-extrabold uppercase tracking-[0.14em] text-transparent">
                Intelligent Operations
              </span>
            </div>
          </div>

          {/* =====================================================
              CONTENT
          ====================================================== */}

          <div className="relative mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            {/* ===================================================
                BAR GRAPH
            ==================================================== */}

            <div>
              <div className="mb-7">
                <div className="flex items-center gap-2">
                  <BarChart3 size={17} className="text-[#005F99]" />

                  <span className="bg-gradient-to-r from-[#005F99] to-[#C8102E] bg-clip-text text-sm font-black text-transparent">
                    Operational Impact Areas
                  </span>
                </div>

                <p className="mt-2 text-xs font-medium leading-5 text-[#005F99]/60">
                  Key capability areas supporting connected asset operations.
                </p>
              </div>

              <div className="space-y-6">
                {impactAreas.map((item, index) => {
                  const Icon = item.icon;
                  const isBlue = item.color === "blue";

                  return (
                    <div key={item.label}>
                      {/* Label */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex min-w-0 items-center gap-3">
                          <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                              isBlue
                                ? "bg-[#005F99]/10 text-[#005F99]"
                                : "bg-[#C8102E]/10 text-[#C8102E]"
                            }`}
                          >
                            <Icon size={17} />
                          </div>

                          <div className="min-w-0">
                            <p
                              className={`truncate text-sm font-black ${
                                isBlue
                                  ? "text-[#005F99]"
                                  : "text-[#C8102E]"
                              }`}
                            >
                              {item.label}
                            </p>

                            <p className="mt-0.5 truncate text-[10px] font-semibold text-[#005F99]/50">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        <span
                          className={`shrink-0 text-xs font-black ${
                            isBlue
                              ? "text-[#005F99]"
                              : "text-[#C8102E]"
                          }`}
                        >
                          {item.value}
                        </span>
                      </div>

                      {/* Bar track */}
                      <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-[#005F99]/[0.07]">
                        <div
                          className={`relative h-full rounded-full transition-[width] duration-[1200ms] ease-out ${
                            isBlue
                              ? "bg-gradient-to-r from-[#005F99] via-[#1683bd] to-[#49bce5]"
                              : "bg-gradient-to-r from-[#C8102E] via-[#dc3450] to-[#f17488]"
                          }`}
                          style={{
                            width: visible ? `${item.value}%` : "0%",
                            transitionDelay: `${index * 120}ms`,
                          }}
                        >
                          <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white shadow-sm" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ===================================================
                INTELLIGENCE PANEL
            ==================================================== */}

            <div className="relative flex flex-col justify-center">
              <div className="relative overflow-hidden rounded-[28px] border border-[#005F99]/20 bg-[#082f42] p-6 shadow-[0_25px_60px_rgba(0,60,100,0.15)] sm:p-8">
                {/* Grid */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />

                <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#005F99]/30 blur-[70px]" />

                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#C8102E]/20 blur-[70px]" />

                <div className="relative">
                  <div className="flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#62c5ee]">
                    <BrainCircuit size={14} />
                    EAM Intelligence Layer
                  </div>

                  <h3 className="mt-5 bg-gradient-to-r from-[#62c5ee] via-white to-[#ff7b90] bg-clip-text text-2xl font-black leading-[1.1] tracking-[-0.035em] text-transparent sm:text-3xl">
                    From signals
                    <br />
                    to action.
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-6 text-[#b9d9e8]">
                    Connect operational signals with intelligent maintenance
                    workflows so teams can identify, prioritize and respond
                    with greater clarity.
                  </p>

                  <div className="mt-8 space-y-3">
                    <FlowStep
                      number="01"
                      title="Monitor"
                      text="Capture asset conditions"
                      color="blue"
                    />

                    <FlowStep
                      number="02"
                      title="Predict"
                      text="Identify emerging issues"
                      color="red"
                    />

                    <FlowStep
                      number="03"
                      title="Act"
                      text="Trigger maintenance workflows"
                      color="blue"
                    />

                    <FlowStep
                      number="04"
                      title="Optimize"
                      text="Improve operational decisions"
                      color="red"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              OUTCOME CARDS
          ====================================================== */}

          <div className="relative mt-10 grid gap-4 border-t border-[#005F99]/10 pt-8 sm:grid-cols-3">
            {outcomes.map((item) => {
              const Icon = item.icon;
              const isBlue = item.color === "blue";

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-[#005F99]/10 bg-white p-5 transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_25px_55px_rgba(0,60,100,0.18)]"
                >
                  {/* Gradient layer */}
                  <div
                    className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                      isBlue
                        ? "bg-gradient-to-br from-[#005F99] via-[#0879b8] to-[#C8102E]"
                        : "bg-gradient-to-br from-[#C8102E] via-[#d8324e] to-[#005F99]"
                    }`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-500 ${
                        isBlue
                          ? "bg-[#005F99]/10 text-[#005F99] group-hover:bg-white/15 group-hover:text-white"
                          : "bg-[#C8102E]/10 text-[#C8102E] group-hover:bg-white/15 group-hover:text-white"
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <h4
                      className={`mt-4 text-sm font-black transition-colors duration-500 ${
                        isBlue ? "text-[#005F99]" : "text-[#C8102E]"
                      } group-hover:text-white`}
                    >
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs font-medium leading-5 text-[#005F99]/60 transition-colors duration-500 group-hover:text-white/85">
                      {item.text}
                    </p>

                    <div className="mt-4 flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#005F99]/50 transition-colors duration-500 group-hover:text-white">
                      Explore impact

                      <ArrowUpRight
                        size={12}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div className="mx-auto mt-14 flex max-w-4xl flex-col items-center text-center">
          <div className="flex items-center gap-2 rounded-full border border-[#005F99]/10 bg-[#f7fbfd] px-4 py-2">
            <CheckCircle2 size={15} className="text-[#C8102E]" />

            <span className="bg-gradient-to-r from-[#005F99] to-[#C8102E] bg-clip-text text-[9px] font-extrabold uppercase tracking-[0.16em] text-transparent">
              Connected. Intelligent. Measurable.
            </span>
          </div>

          <p className="mt-5 text-xl font-black tracking-[-0.025em]">
            <span className="text-[#005F99]">
              Better asset intelligence.
            </span>

            <span className="text-[#C8102E]">
              {" "}
              Better operational outcomes.
            </span>
          </p>

          <div className="mt-5 flex items-center gap-2">
            <span className="h-1 w-10 rounded-full bg-[#C8102E]" />
            <span className="h-1 w-6 rounded-full bg-[#005F99]" />
          </div>
        </div>
      </div>
    </section>
  );
}