"use client";

import { motion } from "framer-motion";
import {
  Truck,
  Clock3,
  Eye,
  BarChart3,
  Users,
  Zap,
  ArrowRight,
} from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Lower Transportation Costs",
    description:
      "Optimize routes, reduce empty miles, improve vehicle utilization, and control transportation spend with intelligent planning.",
    metric: "Cost Optimization",
  },
  {
    icon: Clock3,
    title: "Faster Delivery Cycles",
    description:
      "Improve dispatch planning and execution to reduce delays, shorten delivery cycles, and keep transportation operations moving.",
    metric: "Faster Execution",
  },
  {
    icon: Eye,
    title: "Real-Time Shipment Visibility",
    description:
      "Track shipments, vehicles, deliveries, and operational milestones through a connected transportation visibility layer.",
    metric: "End-to-End Visibility",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description:
      "Turn transportation data into actionable insights with operational dashboards, performance indicators, and analytics.",
    metric: "Smarter Decisions",
  },
  {
    icon: Users,
    title: "Improved Customer Service",
    description:
      "Provide reliable delivery information, improve communication, and build stronger customer experiences through better execution.",
    metric: "Better Experience",
  },
  {
    icon: Zap,
    title: "Higher Operational Efficiency",
    description:
      "Connect planning, dispatch, execution, tracking, and reporting into one streamlined transportation management workflow.",
    metric: "Operational Excellence",
  },
];

export default function TMSOperationalBenefits() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#C8102E]/5 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#005F99]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Small Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C8102E]/15 bg-[#C8102E]/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#C8102E]" />
            <span className="text-sm font-semibold tracking-wide text-[#C8102E]">
              BUSINESS IMPACT
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-[#005F99] sm:text-4xl lg:text-5xl">
  Operational Benefits That{" "}
  <span className="text-[#C8102E]">
    Drive Business Performance
  </span>
</h2>

          {/* Description */}
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Fortuna TMS connects transportation planning, execution, visibility,
            and analytics to help organizations reduce operational complexity
            and achieve measurable business outcomes.
          </p>
        </motion.div>

       {/* Benefits Grid */}

<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {benefits.map((benefit, index) => {
    const Icon = benefit.icon;

    return (
      <motion.div
        key={benefit.title}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.55,
          delay: index * 0.08,
        }}
        whileHover={{ y: -8 }}
        className="group relative overflow-hidden rounded-2xl border border-[#005F99]/15 bg-gradient-to-br from-[#005F99]/[0.06] via-white to-[#C8102E]/[0.06] p-[1px] shadow-sm transition-all duration-500 hover:border-transparent hover:shadow-xl"
      >
        {/* Gradient Card Inner */}
        <div className="relative h-full overflow-hidden rounded-[15px] bg-white/95 p-7 backdrop-blur-sm">

          {/* Top Gradient Accent */}
          <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#005F99] via-[#C8102E] to-[#005F99] opacity-80 transition-all duration-500 group-hover:h-1.5 group-hover:opacity-100" />

          {/* Subtle Background Glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#C8102E]/10 blur-3xl transition-all duration-500 group-hover:bg-[#C8102E]/20" />

          <div className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-[#005F99]/10 blur-3xl transition-all duration-500 group-hover:bg-[#005F99]/20" />

          {/* Icon */}
          <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#005F99] to-[#C8102E] text-white shadow-md shadow-[#005F99]/15 transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#C8102E]/20">
            <Icon size={26} strokeWidth={1.8} />
          </div>

          {/* Metric Label */}
          <div className="relative mb-3 text-xs font-bold uppercase tracking-widest text-[#005F99]">
            {benefit.metric}
          </div>

          {/* Title */}
          <h3 className="relative text-xl font-bold text-[#C8102E] transition-colors duration-300 group-hover:text-[#005F99]">
            {benefit.title}
          </h3>

          {/* Description */}
          <p className="relative mt-4 text-sm leading-7 text-slate-600">
            {benefit.description}
          </p>

          {/* Bottom Arrow */}
          <div className="relative mt-6 flex items-center gap-2 text-sm font-semibold text-[#005F99] transition-all duration-300 group-hover:gap-3 group-hover:text-[#C8102E]">
            <span>Business Value</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>

        </div>
      </motion.div>
    );
  })}
</div>

        {/* Bottom Impact Banner */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-[#005F99] via-[#0077A8] to-[#C8102E] px-8 py-10 shadow-xl shadow-[#005F99]/15 sm:px-12 lg:px-14"
>
  {/* Decorative Gradient Glow */}
  <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

  <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#C8102E]/30 blur-3xl" />

  {/* Subtle Shine */}
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/10" />

  <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

    {/* Text */}
    <div className="max-w-3xl">

      <div className="mb-3 text-sm font-bold uppercase tracking-widest text-white/90">
        Connected Transportation Intelligence
      </div>

      <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
        From planning to delivery, turn transportation operations into
        a connected, measurable, and intelligent workflow.
      </h3>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
        Fortuna TMS helps transportation teams move from fragmented
        operations to greater control, visibility, and performance.
      </p>
    </div>

    {/* CTA */}
    <div className="shrink-0">
      <a
        href="#request-demo"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#005F99] shadow-lg transition-all duration-300 hover:bg-slate-50 hover:text-[#C8102E] hover:shadow-xl"
      >
        Request a TMS Demo
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    </div>

  </div>
</motion.div>
      </div>
    </section>
  );
}