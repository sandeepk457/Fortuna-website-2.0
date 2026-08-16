"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

const outcomes = [
  "AI-powered demand forecasting",
  "Inventory optimization intelligence",
  "Faster planning decisions",
  "Continuous forecast improvement",
];

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative isolate overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* =========================================================
          PAGE BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Fortuna red glow */}
        <div
          className="
            absolute
            -left-56
            top-20
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#C8102E]/10
            blur-[120px]
          "
        />

        {/* Fortuna blue glow */}
        <div
          className="
            absolute
            -right-56
            bottom-0
            h-[560px]
            w-[560px]
            rounded-full
            bg-[#005F99]/10
            blur-[130px]
          "
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#005F99 1px, transparent 1px), linear-gradient(90deg, #005F99 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =========================================================
            MAIN PREMIUM CARD
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="
            relative
            overflow-hidden
            rounded-[38px]
            bg-gradient-to-br
            from-[#C8102E]
            via-[#7D2148]
            to-[#005F99]
            p-[1px]
            shadow-[0_35px_100px_rgba(0,70,110,0.22)]
          "
        >
          {/* =======================================================
              INNER CARD
          ======================================================= */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[37px]
              bg-gradient-to-br
              from-[#071D2D]
              via-[#0A3047]
              to-[#123F5C]
              px-6
              py-12
              sm:px-10
              sm:py-14
              lg:px-16
              lg:py-16
            "
          >
            {/* =====================================================
                PREMIUM LIGHTING
            ===================================================== */}
            <div className="pointer-events-none absolute inset-0">
              {/* Red light */}
              <div
                className="
                  absolute
                  -left-40
                  bottom-[-180px]
                  h-[500px]
                  w-[500px]
                  rounded-full
                  bg-[#C8102E]/25
                  blur-[110px]
                "
              />

              {/* Blue light */}
              <div
                className="
                  absolute
                  -right-32
                  top-[-180px]
                  h-[520px]
                  w-[520px]
                  rounded-full
                  bg-[#005F99]/30
                  blur-[110px]
                "
              />

              {/* Central soft glow */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[500px]
                  w-[500px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#005F99]/10
                  blur-[100px]
                "
              />

              {/* Technology grid */}
              <div
                className="absolute inset-0 opacity-[0.045]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />

              {/* Fine top highlight */}
              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  h-px
                  w-[75%]
                  -translate-x-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent
                "
              />
            </div>

            {/* =====================================================
                CONTENT GRID
            ===================================================== */}
            <div className="relative z-10 grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              {/* ===================================================
                  LEFT CONTENT
              =================================================== */}
              <div>
                {/* Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/15
                    bg-white/[0.07]
                    px-4
                    py-2
                    backdrop-blur-md
                  "
                >
                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-br
                      from-[#C8102E]
                      to-[#A40E28]
                      text-white
                      shadow-[0_0_20px_rgba(200,16,46,0.35)]
                    "
                  >
                    <BrainCircuit size={15} />
                  </span>

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.24em]
                      text-white/75
                    "
                  >
                    Demand Intelligence
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.08 }}
                  className="
                    mt-7
                    max-w-3xl
                    text-4xl
                    font-black
                    leading-[1.04]
                    tracking-[-0.045em]
                    text-white
                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  Make Every Demand

                  <span
                    className="
                      block
                      bg-gradient-to-r
                      from-[#FF405C]
                      via-[#C8102E]
                      to-[#E42A45]
                      bg-clip-text
                      text-transparent
                    "
                  >
                    Signal Count.
                  </span>
                </motion.h2>

                {/* Fortuna accent */}
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: "auto" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.18 }}
                  className="mt-7 flex items-center gap-3"
                >
                  <span className="h-[4px] w-20 rounded-full bg-[#C8102E]" />
                  <span className="h-[4px] w-10 rounded-full bg-[#005F99]" />
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.15 }}
                  className="
                    mt-7
                    max-w-2xl
                    text-base
                    leading-8
                    text-white/65
                    sm:text-lg
                  "
                >
                  Discover how Fortuna DemandSense can help your organization
                  transform demand signals into intelligent forecasts,
                  optimized inventory decisions and more responsive supply
                  chain planning.
                </motion.p>

                {/* =================================================
                    BUTTONS
                ================================================= */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.22 }}
                  className="mt-9 flex flex-col gap-3 sm:flex-row"
                >
                  {/* Primary CTA */}
                  <motion.a
                    href="/request-demo"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      group
                      inline-flex
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      bg-gradient-to-r
                      from-[#C8102E]
                      to-[#E21B3C]
                      px-7
                      py-4
                      text-sm
                      font-bold
                      text-white
                      shadow-[0_12px_35px_rgba(200,16,46,0.35)]
                      transition-all
                      duration-200
                      hover:shadow-[0_16px_45px_rgba(200,16,46,0.5)]
                    "
                  >
                    Request a Demo

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </motion.a>

                                  </motion.div>

                {/* Trust statement */}
                <div className="mt-6 flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="text-[#00A8E8]"
                  />

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-white/45
                    "
                  >
                    Intelligent planning for modern supply chains
                  </span>
                </div>
              </div>

              {/* ===================================================
                  RIGHT — ORBITAL AI VISUAL
              =================================================== */}
              <div className="relative mx-auto w-full max-w-[440px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7 }}
                  className="
                    relative
                    aspect-square
                    w-full
                  "
                >
                  {/* =================================================
                      OUTER ORBIT
                  ================================================= */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 32,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      inset-[4%]
                      rounded-full
                      border
                      border-white/[0.08]
                    "
                  >
                    {/* Orbit red node */}
                    <div
                      className="
                        absolute
                        left-1/2
                        top-[-6px]
                        h-3
                        w-3
                        -translate-x-1/2
                        rounded-full
                        bg-[#C8102E]
                        shadow-[0_0_20px_rgba(200,16,46,0.9)]
                      "
                    />
                  </motion.div>

                  {/* =================================================
                      SECOND ORBIT
                  ================================================= */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 23,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      inset-[14%]
                      rounded-full
                      border
                      border-[#005F99]/30
                    "
                  >
                    {/* Blue node */}
                    <div
                      className="
                        absolute
                        right-[3%]
                        top-1/2
                        h-2.5
                        w-2.5
                        -translate-y-1/2
                        rounded-full
                        bg-[#00A8E8]
                        shadow-[0_0_18px_rgba(0,168,232,0.9)]
                      "
                    />
                  </motion.div>

                  {/* =================================================
                      THIRD ORBIT
                  ================================================= */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 17,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      inset-[24%]
                      rounded-full
                      border
                      border-[#C8102E]/25
                    "
                  >
                    {/* White node */}
                    <div
                      className="
                        absolute
                        bottom-[1%]
                        left-1/2
                        h-2
                        w-2
                        -translate-x-1/2
                        rounded-full
                        bg-white
                        shadow-[0_0_15px_rgba(255,255,255,0.9)]
                      "
                    />
                  </motion.div>

                  {/* =================================================
                      INNER GLOW
                  ================================================= */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-[210px]
                      w-[210px]
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-gradient-to-br
                      from-[#005F99]/20
                      via-[#C8102E]/15
                      to-transparent
                      blur-[35px]
                    "
                  />

                  {/* =================================================
                      CENTER AI NODE
                  ================================================= */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(200,16,46,0)",
                        "0 0 0 18px rgba(200,16,46,0.06)",
                        "0 0 0 0 rgba(200,16,46,0)",
                      ],
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      z-20
                      flex
                      h-32
                      w-32
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-[32px]
                      border
                      border-white/15
                      bg-gradient-to-br
                      from-[#005F99]
                      via-[#4C557B]
                      to-[#C8102E]
                      shadow-[0_25px_70px_rgba(0,0,0,0.35)]
                    "
                  >
                    <BrainCircuit
                      size={52}
                      strokeWidth={1.5}
                      className="text-white"
                    />

                    {/* Small center glow */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-[32px]
                        bg-white/[0.04]
                      "
                    />
                  </motion.div>

                  {/* =================================================
                      PREDICT CARD
                  ================================================= */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute
                      right-[18%]
                      top-[10%]
                      z-30
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#102B3E]/90
                      px-4
                      py-2.5
                      shadow-[0_12px_30px_rgba(0,0,0,0.2)]
                      backdrop-blur-xl
                    "
                  >
                    <div className="flex items-center gap-2">
                      <TrendingUp
                        size={14}
                        className="text-[#FF405C]"
                      />

                      <span className="text-[9px] font-bold uppercase tracking-wider text-white/65">
                        Predict
                      </span>
                    </div>
                  </motion.div>

                  {/* =================================================
                      IMPROVE CARD
                  ================================================= */}
                  <motion.div
                    animate={{ x: [0, -4, 0] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4,
                    }}
                    className="
                      absolute
                      left-[2%]
                      top-1/2
                      z-30
                      -translate-y-1/2
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#102B3E]/90
                      px-4
                      py-2.5
                      shadow-[0_12px_30px_rgba(0,0,0,0.2)]
                      backdrop-blur-xl
                    "
                  >
                    <div className="flex items-center gap-2">
                      <BarChart3
                        size={14}
                        className="text-[#00A8E8]"
                      />

                      <span className="text-[9px] font-bold uppercase tracking-wider text-white/65">
                        Improve
                      </span>
                    </div>
                  </motion.div>

                  {/* =================================================
                      OPTIMIZE CARD
                  ================================================= */}
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 4.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.7,
                    }}
                    className="
                      absolute
                      right-[0%]
                      top-1/2
                      z-30
                      -translate-y-1/2
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#102B3E]/90
                      px-4
                      py-2.5
                      shadow-[0_12px_30px_rgba(0,0,0,0.2)]
                      backdrop-blur-xl
                    "
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles
                        size={14}
                        className="text-[#00A8E8]"
                      />

                      <span className="text-[9px] font-bold uppercase tracking-wider text-white/65">
                        Optimize
                      </span>
                    </div>
                  </motion.div>

                  {/* =================================================
                      RESPOND CARD
                  ================================================= */}
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{
                      duration: 4.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="
                      absolute
                      bottom-[10%]
                      left-1/2
                      z-30
                      -translate-x-1/2
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#102B3E]/90
                      px-4
                      py-2.5
                      shadow-[0_12px_30px_rgba(0,0,0,0.2)]
                      backdrop-blur-xl
                    "
                  >
                    <div className="flex items-center gap-2">
                      <Zap
                        size={14}
                        className="text-[#FF405C]"
                      />

                      <span className="text-[9px] font-bold uppercase tracking-wider text-white/65">
                        Respond
                      </span>
                    </div>
                  </motion.div>

                  {/* =================================================
                      DATA POINTS
                  ================================================= */}
                  <motion.span
                    animate={{ opacity: [0.35, 1, 0.35] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                    }}
                    className="
                      absolute
                      left-[25%]
                      top-[24%]
                      h-2
                      w-2
                      rounded-full
                      bg-[#C8102E]
                      shadow-[0_0_15px_rgba(200,16,46,0.9)]
                    "
                  />

                  <motion.span
                    animate={{ opacity: [1, 0.35, 1] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                    className="
                      absolute
                      right-[24%]
                      top-[27%]
                      h-2
                      w-2
                      rounded-full
                      bg-[#005F99]
                      shadow-[0_0_15px_rgba(0,95,153,0.9)]
                    "
                  />

                  <motion.span
                    animate={{ opacity: [0.35, 1, 0.35] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 1,
                    }}
                    className="
                      absolute
                      right-[24%]
                      bottom-[25%]
                      h-2
                      w-2
                      rounded-full
                      bg-white
                      shadow-[0_0_15px_rgba(255,255,255,0.9)]
                    "
                  />
                </motion.div>
              </div>
            </div>

            {/* =====================================================
                OUTCOME BAR
            ===================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.25,
              }}
              className="
                relative
                z-10
                mt-12
                border-t
                border-white/10
                pt-7
              "
            >
              <div
                className="
                  grid
                  gap-3
                  sm:grid-cols-2
                  lg:grid-cols-4
                "
              >
                {outcomes.map((outcome, index) => (
                  <motion.div
                    key={outcome}
                    whileHover={{
                      y: -2,
                      backgroundColor: "rgba(255,255,255,0.07)",
                    }}
                    transition={{ duration: 0.15 }}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-white/[0.035]
                      px-4
                      py-3
                    "
                  >
                    <CheckCircle2
                      size={14}
                      className={
                        index % 2 === 0
                          ? "text-[#C8102E]"
                          : "text-[#00A8E8]"
                      }
                    />

                    <span className="text-[10px] font-semibold text-white/60">
                      {outcome}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* =========================================================
            BRAND SIGNATURE
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-col items-center justify-center gap-2 text-center"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C8102E]/50" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#005F99]/70">
              Fortuna DemandSense
            </span>

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#005F99]/50" />
          </div>

          <p className="text-xs font-medium text-slate-400">
            Predict demand. Optimize inventory. Decide smarter.
          </p>
        </motion.div>
      </div>
    </section>
  );
}