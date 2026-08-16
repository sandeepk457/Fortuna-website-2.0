"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  TrendingUp,
  Boxes,
  RefreshCw,
  BarChart3,
  PlugZap,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Activity,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "AI Demand Forecasting",
    description:
      "Generate intelligent demand forecasts using historical demand patterns, seasonality and changing market signals to support better planning decisions.",
    icon: TrendingUp,
    color: "red",
    tags: ["Demand Prediction", "Pattern Analysis"],
  },
  {
    number: "02",
    title: "Inventory Optimization",
    description:
      "Balance inventory levels with demand intelligence, safety stock planning and replenishment requirements to reduce excess stock and stockout risk.",
    icon: Boxes,
    color: "blue",
    tags: ["Safety Stock", "Stock Balancing"],
  },
  {
    number: "03",
    title: "Forecast Optimization",
    description:
      "Continuously validate forecast performance, adjust models and improve predictions through an intelligent accuracy feedback loop.",
    icon: RefreshCw,
    color: "red",
    tags: ["Accuracy Check", "Model Tuning"],
  },
  {
    number: "04",
    title: "AI Analytics & Insights",
    description:
      "Convert demand and inventory data into meaningful analytics that help planners identify trends, exceptions and opportunities faster.",
    icon: BarChart3,
    color: "blue",
    tags: ["Trend Analysis", "Decision Support"],
  },
  {
    number: "05",
    title: "Integration & Automation",
    description:
      "Connect enterprise systems through APIs and automate forecast-to-order actions with synchronized data across the supply chain.",
    icon: PlugZap,
    color: "red",
    tags: ["ERP Integration", "Automation"],
  },
  {
    number: "06",
    title: "Continuous AI Learning",
    description:
      "Learn from historical performance, forecast adjustments and accuracy feedback so the intelligence improves as new data becomes available.",
    icon: BrainCircuit,
    color: "blue",
    tags: ["Machine Learning", "Feedback Loop"],
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="relative isolate overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* =========================================================
          PREMIUM AI SUPPLY CHAIN BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Main generated AI image */}
       <div
  className="
    absolute inset-y-0 right-0
    h-full w-full
    bg-contain bg-right-center bg-no-repeat
    lg:w-[88%]
    xl:w-[82%]
  "
          style={{
            backgroundImage:
              "url('/images/products/demandsense-capabilities-bg.png')",
          }}
        />

        {/* Soft white readability overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-white
            via-white/95
            via-[58%]
            to-white/45
          "
        />

        {/* Top soft fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-white/70 to-transparent" />

        {/* Bottom soft fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/75 to-transparent" />

        {/* Fortuna Red ambient glow */}
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
            opacity: [0.25, 0.42, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-24
            h-[430px]
            w-[430px]
            rounded-full
            bg-[#C8102E]/[0.055]
            blur-[115px]
          "
        />

        {/* Fortuna Blue ambient glow */}
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 25, 0],
            opacity: [0.25, 0.42, 0.25],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-120px]
            top-[30%]
            h-[470px]
            w-[470px]
            rounded-full
            bg-[#005F99]/[0.07]
            blur-[120px]
          "
        />

        {/* Premium technology grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#005F99 1px, transparent 1px), linear-gradient(90deg, #005F99 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* =======================================================
            HEADER
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#005F99]/15 bg-white/85 px-4 py-2 shadow-sm backdrop-blur-md">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#005F99] text-white">
              <BrainCircuit size={15} />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#005F99] sm:text-xs">
              Intelligent Capabilities
            </span>
          </div>

          <h2 className="mt-7 text-4xl font-black leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            <span className="block text-[#C8102E]">
              Intelligent Capabilities.
            </span>

            <span className="mt-2 block text-[#005F99]">
              Smarter Outcomes.
            </span>
          </h2>

          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <span className="h-[4px] w-20 rounded-full bg-[#C8102E]" />
            <span className="h-[4px] w-10 rounded-full bg-[#005F99]" />
          </div>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Fortuna DemandSense combines AI-driven forecasting, inventory
            optimization, analytics, integration and continuous learning to
            transform demand signals into actionable supply chain intelligence.
          </p>
        </motion.div>

        {/* =======================================================
            AI INTELLIGENCE STATUS
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="
            relative mx-auto mt-12 max-w-5xl
            overflow-hidden rounded-[30px]
            border border-[#005F99]/10
            bg-white/80
            p-5
            shadow-[0_25px_70px_rgba(0,95,153,0.08)]
            backdrop-blur-xl
            sm:p-6
          "
        >
          {/* Moving gloss */}
          <motion.div
            animate={{ x: ["-120%", "220%"] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none absolute top-0
              h-full w-24
              -skew-x-12
              bg-white/50
              blur-xl
            "
          />

          <div className="relative flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(0,95,153,0)",
                    "0 0 0 9px rgba(0,95,153,0.08)",
                    "0 0 0 0 rgba(0,95,153,0)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="
                  flex h-12 w-12 shrink-0
                  items-center justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#005F99]
                  to-[#C8102E]
                  text-white
                "
              >
                <Sparkles size={21} />
              </motion.div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                  Powered by Fortuna AI
                </p>

                <p className="mt-1 text-sm font-bold text-[#005F99]">
                  From demand signals to intelligent decisions
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2">
              <motion.span
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
                className="h-2 w-2 rounded-full bg-emerald-500"
              />

              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                Continuous Intelligence
              </span>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            CAPABILITY GRID
        ======================================================= */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            const isRed = item.color === "red";

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 45,
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
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group relative"
              >
                {/* Card glow */}
                <div
                  className={`absolute -inset-1 rounded-[30px] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 ${
                    isRed
                      ? "bg-[#C8102E]/10"
                      : "bg-[#005F99]/10"
                  }`}
                />

                <div
                  className={`
                    relative h-full overflow-hidden rounded-[28px]
                    border border-slate-200/80
                    bg-white/90 p-6
                    backdrop-blur-xl
                    transition-all duration-500
                    group-hover:-translate-y-2
                    group-hover:shadow-[0_25px_70px_rgba(0,65,105,0.12)]
                    ${
                      isRed
                        ? "group-hover:border-[#C8102E]/30"
                        : "group-hover:border-[#005F99]/30"
                    }
                  `}
                >
                  {/* Gloss */}
                  <div className="
                    pointer-events-none absolute
                    -left-24 top-0
                    h-full w-20
                    -skew-x-12
                    bg-white/50
                    blur-md
                    transition-all duration-700
                    group-hover:left-[125%]
                  " />

                  {/* Decorative corner */}
                  <div
                    className={`absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl ${
                      isRed
                        ? "bg-[#C8102E]/[0.07]"
                        : "bg-[#005F99]/[0.07]"
                    }`}
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-black tracking-widest ${
                          isRed
                            ? "text-[#C8102E]"
                            : "text-[#005F99]"
                        }`}
                      >
                        {item.number}
                      </span>

                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          rotate: 4,
                        }}
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                          isRed
                            ? "bg-[#C8102E]/10 text-[#C8102E]"
                            : "bg-[#005F99]/10 text-[#005F99]"
                        }`}
                      >
                        <Icon size={27} strokeWidth={1.8} />
                      </motion.div>
                    </div>

                    <div className="mt-6 flex items-center gap-2">
                      <span
                        className={`h-[3px] w-12 rounded-full ${
                          isRed
                            ? "bg-[#C8102E]"
                            : "bg-[#005F99]"
                        }`}
                      />

                      <span className="h-[3px] w-5 rounded-full bg-slate-200" />
                    </div>

                    <h3
                      className={`mt-5 text-xl font-bold leading-tight ${
                        isRed
                          ? "text-[#C8102E]"
                          : "text-[#005F99]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold ${
                            isRed
                              ? "border-[#C8102E]/10 bg-[#C8102E]/[0.04] text-[#C8102E]"
                              : "border-[#005F99]/10 bg-[#005F99]/[0.04] text-[#005F99]"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                      <div className="flex items-center gap-2">
                        <Activity
                          size={14}
                          className={
                            isRed
                              ? "text-[#C8102E]"
                              : "text-[#005F99]"
                          }
                        />

                        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                          AI Intelligence
                        </span>
                      </div>

                      <ArrowRight
                        size={17}
                        className={`transition-transform duration-300 group-hover:translate-x-1 ${
                          isRed
                            ? "text-[#C8102E]"
                            : "text-[#005F99]"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =======================================================
            WORKFLOW INTELLIGENCE
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="
            relative mt-16 overflow-hidden
            rounded-[34px]
            border border-[#005F99]/10
            bg-gradient-to-r
            from-[#005F99]/[0.055]
            via-white
            to-[#C8102E]/[0.055]
            p-6
            shadow-[0_25px_70px_rgba(0,65,105,0.07)]
            sm:p-8
          "
        >
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-[0.08]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(#005F99 1.2px, transparent 1.2px)",
                backgroundSize: "18px 18px",
              }}
            />
          </div>

          <div className="relative grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C8102E]">
                Demand Planning Intelligence
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-tight text-[#005F99] sm:text-4xl">
                From Forecast
                <span className="block text-[#C8102E]">
                  to Replenishment.
                </span>
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                DemandSense connects the complete demand planning cycle —
                collecting data, generating forecasts, validating accuracy,
                synchronizing supply and supporting inventory replenishment.
              </p>
            </div>

            <div className="relative">
              <div className="grid gap-3 sm:grid-cols-5">
                {[
                  "Data Collection",
                  "AI Forecast",
                  "Accuracy Check",
                  "Supply Sync",
                  "Replenishment",
                ].map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.15 + index * 0.1,
                      duration: 0.45,
                    }}
                    className="
                      relative rounded-2xl
                      border border-slate-200
                      bg-white/90
                      p-4
                      text-center
                      shadow-sm
                    "
                  >
                    <div
                      className={`mx-auto flex h-9 w-9 items-center justify-center rounded-xl text-white ${
                        index % 2 === 0
                          ? "bg-[#C8102E]"
                          : "bg-[#005F99]"
                      }`}
                    >
                      <span className="text-xs font-bold">
                        {index + 1}
                      </span>
                    </div>

                    <p className="mt-3 text-[10px] font-bold leading-4 text-[#005F99]">
                      {step}
                    </p>

                    {index < 4 && (
                      <motion.span
                        animate={{
                          opacity: [0.25, 1, 0.25],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          delay: index * 0.25,
                        }}
                        className="
                          absolute -right-2.5 top-1/2
                          hidden h-[2px] w-5
                          bg-gradient-to-r
                          from-[#C8102E]
                          to-[#005F99]
                          sm:block
                        "
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            BOTTOM AI STATEMENT
        ======================================================= */}
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative mx-auto mt-14 max-w-5xl
            overflow-hidden rounded-[32px]
            border border-[#005F99]/15
            bg-gradient-to-r
            from-[#005F99]
            via-[#244E73]
            to-[#C8102E]
            p-[1px]
            shadow-[0_25px_70px_rgba(0,65,105,0.16)]
          "
        >
          <div className="
            relative overflow-hidden
            rounded-[31px]
            bg-white/10
            px-6 py-7
            backdrop-blur-xl
            sm:px-10 sm:py-8
          ">
            <motion.div
              animate={{
                x: ["-100%", "180%"],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none absolute top-0
                h-full w-28
                -skew-x-12
                bg-white/10
                blur-xl
              "
            />

            <div className="
              relative flex flex-col
              items-center justify-between
              gap-6 text-center
              sm:flex-row sm:text-left
            ">
              <div className="flex items-center gap-4">
                <div className="
                  flex h-12 w-12 shrink-0
                  items-center justify-center
                  rounded-2xl
                  bg-white/15
                  text-white
                ">
                  <BrainCircuit size={23} />
                </div>

                <div>
                  <p className="
                    text-[10px] font-bold
                    uppercase tracking-[0.22em]
                    text-white/70
                  ">
                    Continuous AI Intelligence
                  </p>

                  <h4 className="mt-1 text-lg font-bold text-white">
                    Smarter forecasts. Better inventory decisions.
                  </h4>
                </div>
              </div>

              <div className="
                flex items-center gap-2
                text-xs font-semibold
                text-white/80
              ">
                <CheckCircle2 size={16} />
                Learn. Predict. Optimize.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}