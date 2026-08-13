"use client";

import { motion } from "framer-motion";
import {
  Truck,
  Factory,
  ShoppingCart,
  Car,
  Package,
  Pill,
  HardHat,
  Zap,
  ArrowRight,
  Globe2,
  Network,
  Sparkles,
} from "lucide-react";

const industries = [
  {
    icon: Truck,
    title: "Logistics & 3PL",
    description:
      "Manage multi-customer transportation operations with better planning, dispatch visibility, carrier coordination, and delivery control.",
    accent: "blue",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Coordinate inbound and outbound transportation across plants, suppliers, warehouses, and distribution networks.",
    accent: "red",
  },
  {
    icon: ShoppingCart,
    title: "Retail & Distribution",
    description:
      "Improve delivery planning, fleet utilization, shipment visibility, and distribution performance across complex networks.",
    accent: "blue",
  },
  {
    icon: Car,
    title: "Automotive",
    description:
      "Connect vehicle movements, parts transportation, supplier logistics, and delivery operations through one intelligent platform.",
    accent: "red",
  },
  {
    icon: Package,
    title: "FMCG & Consumer Goods",
    description:
      "Optimize high-volume transportation operations while improving delivery reliability, route efficiency, and shipment visibility.",
    accent: "blue",
  },
  {
    icon: Pill,
    title: "Pharmaceuticals & Healthcare",
    description:
      "Support controlled transportation workflows with stronger visibility, delivery coordination, and operational traceability.",
    accent: "red",
  },
  {
    icon: HardHat,
    title: "Construction & Infrastructure",
    description:
      "Coordinate material movement, fleet operations, project deliveries, and transportation requirements across multiple locations.",
    accent: "blue",
  },
  {
    icon: Zap,
    title: "Energy & Industrial",
    description:
      "Manage complex transportation requirements for equipment, materials, field operations, and industrial supply networks.",
    accent: "red",
  },
];

export default function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">

    {/* =====================================================
    GLOBAL INDUSTRY BACKGROUND
====================================================== */}

<div className="pointer-events-none absolute inset-0">

  {/* Generated Global Logistics Background */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('/images/products/industries-bg.png')",
    }}
  />

  

  {/* Red Ambient Glow */}
  <motion.div
    animate={{
      x: [0, 25, 0],
      y: [0, -20, 0],
      scale: [1, 1.08, 1],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-[#C8102E]/[0.06] blur-[110px]"
  />

  {/* Blue Ambient Glow */}
  <motion.div
    animate={{
      x: [0, -25, 0],
      y: [0, 25, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -right-48 bottom-10 h-[500px] w-[500px] rounded-full bg-[#005F99]/[0.07] blur-[110px]"
  />

  {/* Fine Enterprise Grid */}
  <div
    className="absolute inset-0 opacity-[0.025]"
    style={{
      backgroundImage:
        "linear-gradient(#005F99 1px, transparent 1px), linear-gradient(90deg, #005F99 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }}
  />

</div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

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

          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#005F99]/15 bg-white/80 px-5 py-2.5 shadow-sm backdrop-blur"
          >
            <Globe2 className="h-4 w-4 text-[#005F99]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#005F99]">
              Industries We Serve
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#C8102E]" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#005F99] sm:text-4xl lg:text-5xl xl:text-[52px]">

            Transportation Intelligence

            <span className="block mt-2 bg-gradient-to-r from-[#C8102E] via-[#C8102E] to-[#005F99] bg-clip-text text-transparent">
              Built for Every Industry
            </span>

          </h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            From global logistics networks to complex industrial operations,
            Fortuna TMS adapts transportation planning, execution, visibility,
            and analytics to the unique realities of modern enterprises.
          </p>

        </motion.div>

        {/* =================================================
            GLOBAL NETWORK VISUAL
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto mt-14 max-w-5xl"
        >

          {/* Network Line */}
          <div className="absolute left-[8%] right-[8%] top-1/2 hidden h-px bg-gradient-to-r from-transparent via-[#005F99]/20 to-transparent lg:block" />

          {/* Central Intelligence Node */}
          <div className="relative mx-auto flex w-fit items-center justify-center">

            <div className="absolute h-32 w-32 rounded-full border border-[#005F99]/10" />

            <div className="absolute h-24 w-24 rounded-full border border-[#C8102E]/10" />

            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#005F99] to-[#C8102E] text-white shadow-xl shadow-[#005F99]/20">

              <Network size={27} strokeWidth={1.8} />

            </div>

          </div>

          {/* Floating Labels */}
          <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#005F99]">
              <span className="h-2 w-2 rounded-full bg-[#005F99]" />
              Connected Operations
            </div>
          </div>

          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C8102E]">
              Intelligent Execution
              <span className="h-2 w-2 rounded-full bg-[#C8102E]" />
            </div>
          </div>

        </motion.div>

        {/* =================================================
            INDUSTRY GRID
        ================================================== */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {industries.map((industry, index) => {

            const Icon = industry.icon;

            const isRed = industry.accent === "red";

            return (
              <motion.div
                key={industry.title}
                initial={{
                  opacity: 0,
                  y: 45,
                  scale: 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -9,
                }}
                className="group relative"
              >

                {/* Animated Gradient Border */}
                <div
                  className={`absolute -inset-[1px] rounded-[22px] opacity-0 blur-[1px] transition-opacity duration-500 group-hover:opacity-100 ${
                    isRed
                      ? "bg-gradient-to-br from-[#C8102E] via-[#005F99] to-[#C8102E]"
                      : "bg-gradient-to-br from-[#005F99] via-[#C8102E] to-[#005F99]"
                  }`}
                />

                {/* Card */}
                <div className="relative h-full overflow-hidden rounded-[21px] border border-slate-200/80 bg-white/90 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 group-hover:shadow-[0_25px_60px_rgba(0,95,153,0.12)]">

                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                      isRed
                        ? "bg-gradient-to-br from-[#C8102E]/[0.035] via-transparent to-[#005F99]/[0.045]"
                        : "bg-gradient-to-br from-[#005F99]/[0.045] via-transparent to-[#C8102E]/[0.035]"
                    }`}
                  />

                  {/* Top Accent */}
                  <div
                    className={`absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r ${
                      isRed
                        ? "from-[#C8102E] to-[#005F99]"
                        : "from-[#005F99] to-[#C8102E]"
                    }`}
                  />

                  {/* Corner Glow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                      duration: 5 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute -right-16 -top-16 h-32 w-32 rounded-full blur-3xl ${
                      isRed
                        ? "bg-[#C8102E]/10"
                        : "bg-[#005F99]/10"
                    }`}
                  />

                  <div className="relative">

                    {/* Header Row */}
                    <div className="flex items-start justify-between">

                      {/* Icon */}
                      <div
                        className={`relative flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-2 ${
                          isRed
                            ? "bg-gradient-to-br from-[#C8102E] to-[#005F99]"
                            : "bg-gradient-to-br from-[#005F99] to-[#C8102E]"
                        }`}
                      >
                        <Icon size={26} strokeWidth={1.8} />

                        {/* Icon Glow */}
                        <div
                          className={`absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70 ${
                            isRed
                              ? "bg-[#C8102E]"
                              : "bg-[#005F99]"
                          }`}
                        />
                      </div>

                      {/* Number */}
                      <span className="text-xs font-bold tracking-[0.2em] text-slate-300 transition-colors duration-300 group-hover:text-slate-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>

                    {/* Title */}
                    <h3
                      className={`mt-7 text-xl font-bold leading-snug transition-colors duration-300 ${
                        isRed
                          ? "text-[#C8102E] group-hover:text-[#005F99]"
                          : "text-[#005F99] group-hover:text-[#C8102E]"
                      }`}
                    >
                      {industry.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {industry.description}
                    </p>

                    {/* Bottom Divider */}
                    <div className="mt-6 h-px w-full bg-slate-100 transition-all duration-500 group-hover:bg-slate-200" />

                    {/* Footer */}
                    <div className="mt-5 flex items-center justify-between">

                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                        Industry Capability
                      </span>

                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-500 ${
                          isRed
                            ? "border-[#C8102E]/20 text-[#C8102E] group-hover:border-[#005F99] group-hover:bg-[#005F99] group-hover:text-white"
                            : "border-[#005F99]/20 text-[#005F99] group-hover:border-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white"
                        }`}
                      >
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </div>

                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* =================================================
            BOTTOM ENTERPRISE STATEMENT
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-20 overflow-hidden rounded-3xl border border-[#005F99]/10 bg-gradient-to-br from-[#005F99]/[0.06] via-white to-[#C8102E]/[0.06] px-8 py-10 text-center shadow-sm sm:px-12 lg:py-12"
        >

          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-[#005F99]/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-[#C8102E]/10 blur-3xl" />

          <div className="relative">

            {/* Icon */}
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#005F99] to-[#C8102E] text-white shadow-lg">
              <Sparkles size={21} />
            </div>

            <p className="mt-6 text-2xl font-bold tracking-tight text-[#005F99] sm:text-3xl">

              One Transportation Platform.

              <span className="block bg-gradient-to-r from-[#C8102E] to-[#005F99] bg-clip-text text-transparent">
                Multiple Industry Realities.
              </span>

            </p>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Built to adapt to the operational complexity, scale, and
              transportation requirements of modern enterprises.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}