"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Database,
  TrendingUp,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";

const RED = "#C8102E";
const BLUE = "#005F99";

const forecastPath =
  "M0 138 C55 130, 75 116, 110 121 C145 126, 170 94, 205 101 C245 110, 258 76, 300 81 C340 86, 352 62, 390 68 C430 74, 450 42, 490 53 C530 65, 550 30, 600 38";

const forecastPoints = [
  [110, 121],
  [205, 101],
  [300, 81],
  [390, 68],
  [490, 53],
] as const;

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Fortuna Red ambient glow */}
        <div className="absolute -left-48 top-20 h-[560px] w-[560px] rounded-full bg-[#C8102E]/[0.055] blur-3xl" />

        {/* Fortuna Blue ambient glow */}
        <div className="absolute -right-48 -top-20 h-[680px] w-[680px] rounded-full bg-[#005F99]/[0.065] blur-3xl" />

        {/* Fortuna grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#005F99 1px, transparent 1px), linear-gradient(90deg, #005F99 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Red / blue divider */}
        <div className="absolute left-0 right-0 top-[48%] h-px bg-gradient-to-r from-transparent via-[#C8102E]/20 to-transparent" />

        {/* Soft center glow */}
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#005F99]/[0.025] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-8 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#005F99]/15 bg-white/85 px-4 py-2 shadow-sm backdrop-blur"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#005F99] text-white">
                <BrainCircuit size={15} strokeWidth={2.2} />
              </span>

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#005F99] sm:text-xs">
                AI-Powered Demand Intelligence
              </span>
            </motion.div>

            {/* =================================================
                MAIN HEADING
            ================================================= */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.65 }}
              className="mt-7 max-w-3xl font-black leading-[0.98] tracking-[-0.045em]"
            >
              <span className="block text-5xl text-[#C8102E] sm:text-6xl lg:text-[68px]">
                Predict Demand.
              </span>

              <span className="mt-1 block text-5xl text-[#005F99] sm:text-6xl lg:text-[68px]">
                Optimize Inventory.
              </span>

              <span className="mt-2 block text-5xl text-[#C8102E] sm:text-6xl lg:text-[68px]">
                Decide Smarter.
              </span>
            </motion.h1>

            {/* Accent */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-7 flex items-center gap-3"
            >
              <span className="h-[4px] w-20 rounded-full bg-[#C8102E]" />
              <span className="h-[4px] w-10 rounded-full bg-[#005F99]" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              Fortuna DemandSense is an AI-driven demand and inventory
              optimization system designed to forecast, balance, and
              synchronize supply chain operations with changing market
              conditions.
            </motion.p>

            {/* Secondary description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58, duration: 0.6 }}
              className="mt-4 max-w-2xl text-sm leading-7 text-[#005F99]/75 sm:text-base"
            >
              Turn sales history, seasonality, pricing trends and external
              market signals into predictive intelligence — helping reduce
              stockouts, minimize overstock and improve working capital
              efficiency.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68, duration: 0.6 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#C8102E] px-7 py-4 text-sm font-bold text-white shadow-[0_14px_35px_rgba(200,16,46,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a90d26] hover:shadow-[0_18px_40px_rgba(200,16,46,0.28)]"
              >
                Request a Demo

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

             
            </motion.div>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
            >
              {[
                "AI Forecasting",
                "Inventory Optimization",
                "Continuous Learning",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-500"
                >
                  <CheckCircle2
                    size={16}
                    className="text-[#005F99]"
                    strokeWidth={2.3}
                  />

                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT VISUAL
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative pb-2"
          >
            {/* Ambient red glow */}
            <motion.div
              animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-5 top-8 h-24 w-24 rounded-full bg-[#C8102E]/10 blur-2xl"
            />

            {/* Ambient blue glow */}
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-8 bottom-16 h-28 w-28 rounded-full bg-[#005F99]/10 blur-2xl"
            />

            {/* =================================================
                MAIN INTELLIGENCE CARD
            ================================================= */}
            <div className="relative overflow-hidden rounded-[34px] border border-slate-200/80 bg-white/92 p-5 shadow-[0_30px_80px_rgba(0,65,105,0.13)] backdrop-blur-xl sm:p-6">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#005F99]/10 text-[#005F99]">
                    <BrainCircuit size={23} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#005F99]/55">
                      Intelligent Forecasting
                    </p>

                    <p className="mt-0.5 text-sm font-bold text-[#005F99]">
                      DemandSense AI Engine
                    </p>
                  </div>
                </div>

                {/* Active */}
                <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

                  <span className="text-[11px] font-bold text-emerald-600">
                    Active
                  </span>
                </div>
              </div>

              {/* =================================================
                  LOGO PANEL
              ================================================= */}
              <div className="relative mt-5 overflow-hidden rounded-[25px] border border-[#005F99]/10 bg-gradient-to-br from-white via-[#f8fbfd] to-[#fff4f5] p-5">
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#005F99]/[0.06] blur-2xl" />

                <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-[#C8102E]/[0.06] blur-2xl" />

                <div className="relative flex min-h-[145px] items-center justify-center">
                  <Image
                    src="/images/products/demandsense-logo.png"
                    alt="Fortuna DemandSense - AI Demand and Inventory Optimizer"
                    width={650}
                    height={190}
                    className="h-auto w-full max-w-[560px] object-contain"
                    priority
                  />
                </div>
              </div>

              {/* =================================================
                  FORECAST CARD
              ================================================= */}
              <div className="mt-5 overflow-hidden rounded-[25px] border border-slate-200 bg-white">
                <div className="flex items-center justify-between px-5 pb-2 pt-5">
                  <div>
                    <p className="text-xs font-bold text-[#005F99]">
                      AI Demand Forecast
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Rolling forecast intelligence
                    </p>
                  </div>

                  <motion.div
                    animate={{
                      scale: [1, 1.04, 1],
                    }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex items-center gap-2 rounded-full bg-[#C8102E]/[0.07] px-3 py-1.5"
                  >
                    <TrendingUp size={13} className="text-[#C8102E]" />

                    <span className="text-[10px] font-bold text-[#C8102E]">
                      Predictive
                    </span>
                  </motion.div>
                </div>

                {/* =================================================
                    ANIMATED FORECAST GRAPH
                ================================================= */}
                <div className="relative h-[210px] px-4 pb-4">
                  {/* Grid */}
                  <div className="absolute inset-x-5 bottom-7 top-3 overflow-hidden rounded-xl">
                    <div className="absolute inset-0 grid grid-rows-5">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span
                          key={`row-${index}`}
                          className="border-t border-slate-100"
                        />
                      ))}
                    </div>

                    <div className="absolute inset-0 grid grid-cols-7">
                      {Array.from({ length: 7 }).map((_, index) => (
                        <span
                          key={`col-${index}`}
                          className="border-l border-slate-100"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Forecast SVG */}
                  <svg
                    viewBox="0 0 600 170"
                    preserveAspectRatio="none"
                    className="absolute inset-x-5 bottom-8 top-5 h-[155px] w-[calc(100%-40px)] overflow-visible"
                  >
                    <defs>
                      {/* Forecast area */}
                      <linearGradient
                        id="forecastFillAnimated"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor={BLUE}
                          stopOpacity="0.18"
                        />

                        <stop
                          offset="55%"
                          stopColor={RED}
                          stopOpacity="0.07"
                        />

                        <stop
                          offset="100%"
                          stopColor={BLUE}
                          stopOpacity="0"
                        />
                      </linearGradient>

                      {/* Fortuna gradient line */}
                      <linearGradient
                        id="forecastLineAnimated"
                        x1="0"
                        x2="1"
                        y1="0"
                        y2="0"
                      >
                        <stop offset="0%" stopColor={BLUE} />
                        <stop offset="55%" stopColor={BLUE} />
                        <stop offset="78%" stopColor={RED} />
                        <stop offset="100%" stopColor={RED} />
                      </linearGradient>

                      {/* Glow */}
                      <filter
                        id="forecastGlow"
                        x="-30%"
                        y="-30%"
                        width="160%"
                        height="160%"
                      >
                        <feGaussianBlur
                          stdDeviation="4"
                          result="blur"
                        />

                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>

                      {/* Moving gradient */}
                      <linearGradient
                        id="scanGradient"
                        x1="0"
                        x2="1"
                        y1="0"
                        y2="0"
                      >
                        <stop
                          offset="0%"
                          stopColor={BLUE}
                          stopOpacity="0"
                        />

                        <stop
                          offset="50%"
                          stopColor={RED}
                          stopOpacity="0.9"
                        />

                        <stop
                          offset="100%"
                          stopColor={BLUE}
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    {/* =================================================
                        FORECAST AREA
                    ================================================= */}
                    <motion.path
                      d={`${forecastPath} L600 170 L0 170 Z`}
                      fill="url(#forecastFillAnimated)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.5, 0.8, 0.5] }}
                      transition={{
                        delay: 1.5,
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* =================================================
                        SOFT GLOW UNDER FORECAST LINE
                    ================================================= */}
                    <motion.path
                      d={forecastPath}
                      fill="none"
                      stroke={BLUE}
                      strokeWidth="11"
                      strokeLinecap="round"
                      opacity="0.08"
                      filter="url(#forecastGlow)"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 2.2,
                        delay: 0.5,
                        ease: "easeInOut",
                      }}
                    />

                    {/* =================================================
                        MAIN FORECAST LINE
                    ================================================= */}
                    <motion.path
                      d={forecastPath}
                      fill="none"
                      stroke="url(#forecastLineAnimated)"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 2.4,
                        delay: 0.55,
                        ease: "easeInOut",
                      }}
                    />

                    {/* =================================================
                        SECONDARY DASHED AI SIGNAL
                    ================================================= */}
                    <motion.path
                      d={forecastPath}
                      fill="none"
                      stroke="url(#scanGradient)"
                      strokeWidth="2"
                      strokeDasharray="10 14"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: 1,
                        opacity: [0, 0.75, 0.25],
                      }}
                      transition={{
                        pathLength: {
                          duration: 2.4,
                          delay: 0.7,
                        },
                        opacity: {
                          duration: 2.8,
                          delay: 1.1,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    />

                    {/* =================================================
                        FORECAST POINTS
                    ================================================= */}
                    {forecastPoints.map(([cx, cy], index) => (
                      <motion.g key={`${cx}-${cy}`}>
                        {/* outer pulse */}
                        <motion.circle
                          cx={cx}
                          cy={cy}
                          r="11"
                          fill="none"
                          stroke={index > 2 ? RED : BLUE}
                          strokeWidth="2"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{
                            opacity: [0, 0.35, 0],
                            scale: [0.7, 1.45, 1.45],
                          }}
                          transition={{
                            delay: 2 + index * 0.18,
                            duration: 2.4,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                          style={{
                            transformOrigin: `${cx}px ${cy}px`,
                          }}
                        />

                        {/* main point */}
                        <motion.circle
                          cx={cx}
                          cy={cy}
                          r="6"
                          fill="#fff"
                          stroke={index > 2 ? RED : BLUE}
                          strokeWidth="4"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 1.5 + index * 0.14,
                            duration: 0.35,
                            ease: "easeOut",
                          }}
                          style={{
                            transformOrigin: `${cx}px ${cy}px`,
                          }}
                        />
                      </motion.g>
                    ))}

                    {/* =================================================
                        AI FORECAST ENDPOINT
                    ================================================= */}
                    <motion.g>
                      {/* pulse ring */}
                      <motion.circle
                        cx="600"
                        cy="38"
                        r="12"
                        fill="none"
                        stroke={RED}
                        strokeWidth="2"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{
                          opacity: [0.55, 0, 0.55],
                          scale: [0.8, 1.7, 0.8],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                        style={{
                          transformOrigin: "600px 38px",
                        }}
                      />

                      {/* endpoint */}
                      <motion.circle
                        cx="600"
                        cy="38"
                        r="7"
                        fill={RED}
                        stroke="#fff"
                        strokeWidth="3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          delay: 2.4,
                          duration: 0.4,
                        }}
                      />
                    </motion.g>

                    {/* =================================================
                        AI SCANNING DOT
                    ================================================= */}
                    <motion.circle
                      r="4.5"
                      fill={RED}
                      initial={{
                        cx: 0,
                        cy: 138,
                        opacity: 0,
                      }}
                      animate={{
                        cx: [0, 110, 205, 300, 390, 490, 600],
                        cy: [138, 121, 101, 81, 68, 53, 38],
                        opacity: [0, 1, 1, 1, 1, 1, 0],
                      }}
                      transition={{
                        delay: 2.2,
                        duration: 5,
                        repeat: Infinity,
                        repeatDelay: 1.2,
                        ease: "easeInOut",
                      }}
                    />
                  </svg>

                  {/* AI Scan label */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 2.2,
                      duration: 0.5,
                    }}
                    className="absolute right-6 top-5 hidden items-center gap-2 rounded-full border border-[#C8102E]/10 bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur sm:flex"
                  >
                    <motion.span
                      animate={{
                        scale: [1, 1.35, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-[#C8102E]"
                    />

                    <span className="text-[9px] font-bold text-[#C8102E]">
                      AI LEARNING
                    </span>
                  </motion.div>

                  {/* Legend */}
                  <div className="absolute bottom-1 left-5 right-5 flex items-center justify-between text-[9px] font-medium text-slate-400">
                    <span>Historical</span>

                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-5 rounded-full bg-gradient-to-r from-[#005F99] to-[#C8102E]" />
                      AI Forecast
                    </span>

                    <span>Future</span>
                  </div>
                </div>
              </div>

              {/* =================================================
                  MINI METRICS
              ================================================= */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                <MiniMetric
                  icon={<Database size={16} />}
                  label="Market Data"
                  value="Live"
                  blue
                />

                <MiniMetric
                  icon={<TrendingUp size={16} />}
                  label="Forecast"
                  value="AI"
                  red
                />

                <MiniMetric
                  icon={<Zap size={16} />}
                  label="Learning"
                  value="Continuous"
                  blue
                />
              </div>
            </div>

            {/* =================================================
                FLOATING AI INSIGHT
            ================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.6 }}
              className="relative mt-4 ml-2 hidden w-[205px] rounded-2xl border border-[#C8102E]/10 bg-white/95 p-4 shadow-[0_18px_45px_rgba(200,16,46,0.12)] backdrop-blur-xl sm:block">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#C8102E]/10 text-[#C8102E]">
                  <TrendingUp size={17} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#C8102E]/65">
                    AI Insight
                  </p>

                  <p className="mt-1 text-xs font-bold leading-5 text-[#005F99]">
                    Demand signals continuously improve forecast decisions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                FLOATING DEMAND → SUPPLY
            ================================================= */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="absolute -right-4 top-[39%] hidden w-[185px] rounded-2xl border border-[#005F99]/10 bg-white/95 p-4 shadow-[0_18px_45px_rgba(0,95,153,0.12)] backdrop-blur-xl xl:block"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(0,95,153,0)",
                      "0 0 0 7px rgba(0,95,153,0.08)",
                      "0 0 0 0 rgba(0,95,153,0)",
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#005F99]/10 text-[#005F99]"
                >
                  <Zap size={17} />
                </motion.div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#005F99]/55">
                    Intelligence
                  </p>

                  <p className="mt-1 text-xs font-bold text-[#005F99]">
                    Demand → Supply
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* =======================================================
            BOTTOM VALUE STRIP
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-14 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(0,65,105,0.07)] sm:grid-cols-3"
        >
          <ValueItem
            icon={<TrendingUp size={20} />}
            title="Predictive Intelligence"
            description="Forecast demand using historical and external market signals."
            color="blue"
          />

          <ValueItem
            icon={<Database size={20} />}
            title="Inventory Optimization"
            description="Balance stock levels, safety stock and replenishment needs."
            color="red"
          />

          <ValueItem
            icon={<Zap size={20} />}
            title="Continuous Learning"
            description="AI models adapt as new demand patterns and data emerge."
            color="blue"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* =============================================================
   MINI METRIC
============================================================= */

function MiniMetric({
  icon,
  label,
  value,
  blue = false,
  red = false,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  blue?: boolean;
  red?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3">
      <div
        className={`mb-2 flex h-7 w-7 items-center justify-center rounded-lg ${
          red
            ? "bg-[#C8102E]/10 text-[#C8102E]"
            : blue
              ? "bg-[#005F99]/10 text-[#005F99]"
              : "bg-slate-100 text-slate-600"
        }`}
      >
        {icon}
      </div>

      <p className="truncate text-[9px] font-medium text-slate-400">
        {label}
      </p>

      <p className="mt-0.5 truncate text-xs font-bold text-[#005F99]">
        {value}
      </p>
    </div>
  );
}

/* =============================================================
   VALUE ITEM
============================================================= */

function ValueItem({
  icon,
  title,
  description,
  color,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  color: "blue" | "red";
}) {
  return (
    <div className="group relative p-5 sm:p-6">
      <div
        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${
          color === "red"
            ? "bg-[#C8102E]/10 text-[#C8102E]"
            : "bg-[#005F99]/10 text-[#005F99]"
        } transition-transform duration-300 group-hover:-translate-y-1`}
      >
        {icon}
      </div>

      <h3
        className={`text-sm font-bold ${
          color === "red"
            ? "text-[#C8102E]"
            : "text-[#005F99]"
        }`}
      >
        {title}
      </h3>

      <p className="mt-2 text-xs leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}