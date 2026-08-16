"use client";

import { motion } from "framer-motion";
import {
  TrendingDown,
  TrendingUp,
  ShieldCheck,
  Gauge,
  Boxes,
  BrainCircuit,
  ArrowRight,
  Sparkles,
  Activity,
  Target,
  BarChart3,
  CheckCircle2,
  Zap,
} from "lucide-react";

const impacts = [
  {
    number: "01",
    title: "Higher Forecast Confidence",
    description:
      "Transform demand signals into more reliable forecasts that help planners make decisions with greater confidence.",
    icon: Target,
    metric: "Forecast",
    metricValue: "Intelligence",
    tone: "red",
  },
  {
    number: "02",
    title: "Lower Inventory Exposure",
    description:
      "Align inventory with expected demand to reduce unnecessary stock while protecting service levels.",
    icon: TrendingDown,
    metric: "Inventory",
    metricValue: "Optimization",
    tone: "blue",
  },
  {
    number: "03",
    title: "Reduced Stockout Risk",
    description:
      "Identify demand changes earlier and support proactive replenishment decisions before shortages impact operations.",
    icon: ShieldCheck,
    metric: "Supply",
    metricValue: "Protection",
    tone: "red",
  },
  {
    number: "04",
    title: "Faster Planning Decisions",
    description:
      "Give planners actionable intelligence instead of forcing them to spend time manually interpreting fragmented data.",
    icon: Gauge,
    metric: "Planning",
    metricValue: "Velocity",
    tone: "blue",
  },
  {
    number: "05",
    title: "Smarter Replenishment",
    description:
      "Connect demand intelligence with inventory requirements to support more responsive replenishment planning.",
    icon: Boxes,
    metric: "Demand →",
    metricValue: "Supply",
    tone: "red",
  },
  {
    number: "06",
    title: "Continuous Improvement",
    description:
      "Use forecast performance and feedback signals to continuously improve planning intelligence as new data becomes available.",
    icon: BrainCircuit,
    metric: "AI",
    metricValue: "Learning",
    tone: "blue",
  },
];

const journey = [
  {
    label: "Demand Signals",
    sub: "Observe",
    icon: Activity,
  },
  {
    label: "AI Forecast",
    sub: "Predict",
    icon: BrainCircuit,
  },
  {
    label: "Inventory Intelligence",
    sub: "Optimize",
    icon: Boxes,
  },
  {
    label: "Business Decisions",
    sub: "Act",
    icon: TrendingUp,
  },
];

export default function BusinessImpactSection() {
  return (
    <section
      id="business-impact"
      className="relative isolate overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* =========================================================
          LIGHTWEIGHT PREMIUM BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Red atmosphere */}
        <div
          className="
            absolute -left-64 top-20
            h-[500px] w-[500px]
            rounded-full
            bg-[#C8102E]/[0.045]
            blur-[110px]
          "
        />

        {/* Blue atmosphere */}
        <div
          className="
            absolute -right-64 top-[30%]
            h-[540px] w-[540px]
            rounded-full
            bg-[#005F99]/[0.05]
            blur-[120px]
          "
        />

        {/* Enterprise grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#005F99 1px, transparent 1px), linear-gradient(90deg, #005F99 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Soft white center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,transparent_0%,rgba(255,255,255,0.9)_78%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* =========================================================
            HEADER
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-[#005F99]/15
              bg-white/90
              px-4 py-2
              shadow-sm
              backdrop-blur-md
            "
          >
            <span
              className="
                flex h-7 w-7 items-center justify-center
                rounded-full bg-[#C8102E] text-white
              "
            >
              <Sparkles size={14} />
            </span>

            <span
              className="
                text-[11px] font-bold uppercase
                tracking-[0.24em] text-[#005F99]
                sm:text-xs
              "
            >
              Business Impact
            </span>
          </div>

          <h2
            className="
              mt-7 text-4xl font-black
              leading-[1.04] tracking-[-0.04em]
              sm:text-5xl lg:text-6xl
            "
          >
            <span className="block text-[#005F99]">
              Turn Intelligence
            </span>

            <span className="mt-2 block text-[#C8102E]">
              Into Business Impact.
            </span>
          </h2>

          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <span className="h-[4px] w-20 rounded-full bg-[#C8102E]" />
            <span className="h-[4px] w-10 rounded-full bg-[#005F99]" />
          </div>

          <p
            className="
              mx-auto mt-7 max-w-3xl
              text-base leading-8 text-slate-600
              sm:text-lg
            "
          >
            Fortuna DemandSense transforms demand intelligence into practical
            planning outcomes — helping organizations improve forecast
            confidence, optimize inventory and respond faster to changing
            demand.
          </p>
        </motion.div>

        {/* =========================================================
            EXECUTIVE INTELLIGENCE PANEL
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="
            relative mx-auto mt-14 max-w-6xl
            overflow-hidden rounded-[34px]
            border border-slate-200/80
            bg-white/90
            shadow-[0_20px_60px_rgba(0,65,105,0.08)]
            backdrop-blur-xl
          "
        >
          {/* Fortuna gradient line */}
          <div
            className="
              absolute inset-x-0 top-0 h-[3px]
              bg-gradient-to-r
              from-[#C8102E]
              via-[#005F99]
              to-[#C8102E]
            "
          />

          <div className="relative p-6 sm:p-8 lg:p-10">

            <div
              className="
                flex flex-col gap-8
                lg:flex-row lg:items-center
                lg:justify-between
              "
            >
              <div className="max-w-xl">
                <div className="flex items-center gap-3">
                  <div
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
                    <BarChart3 size={22} />
                  </div>

                  <div>
                    <p
                      className="
                        text-[10px] font-bold uppercase
                        tracking-[0.22em] text-[#C8102E]
                      "
                    >
                      Enterprise Intelligence
                    </p>

                    <h3 className="mt-1 text-lg font-bold text-[#005F99]">
                      From demand signal to business action
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                  DemandSense brings forecasting, inventory intelligence and
                  continuous learning together so planning teams can move from
                  reactive decisions to proactive supply chain execution.
                </p>
              </div>

              <div
                className="
                  shrink-0 rounded-2xl
                  border border-emerald-200
                  bg-emerald-50/80
                  px-5 py-4
                "
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span
                      className="
                        absolute inline-flex h-full w-full
                        animate-ping rounded-full
                        bg-emerald-400 opacity-60
                      "
                    />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                      Intelligence Active
                    </p>

                    <p className="mt-1 text-sm font-bold text-emerald-700">
                      Continuous Decision Support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                INTELLIGENCE JOURNEY
            ===================================================== */}
            <div className="mt-10">
              <div className="grid gap-3 md:grid-cols-4">
                {journey.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div key={step.label} className="relative">
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 12,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        whileHover={{
                          y: -4,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.07,
                        }}
                        className="
                          rounded-2xl
                          border border-slate-200
                          bg-white
                          p-4
                          shadow-sm
                          transition-shadow
                          duration-200
                          hover:shadow-md
                        "
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`
                              flex h-10 w-10
                              shrink-0
                              items-center justify-center
                              rounded-xl text-white
                              ${
                                index % 2 === 0
                                  ? "bg-[#C8102E]"
                                  : "bg-[#005F99]"
                              }
                            `}
                          >
                            <Icon size={18} />
                          </div>

                          <div>
                            <p className="text-xs font-bold text-[#005F99]">
                              {step.label}
                            </p>

                            <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-400">
                              {step.sub}
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {index < journey.length - 1 && (
                        <div
                          className="
                            absolute -right-3 top-1/2
                            hidden h-[2px] w-6
                            -translate-y-1/2
                            bg-gradient-to-r
                            from-[#C8102E]
                            to-[#005F99]
                            md:block
                          "
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            IMPACT CARDS
        ========================================================= */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {impacts.map((item, index) => {
            const Icon = item.icon;
            const isRed = item.tone === "red";

            return (
              <motion.div
                key={item.title}
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
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group relative"
              >
                {/* Lightweight gradient border */}
                <div
                  className="
                    absolute inset-0
                    rounded-[28px]
                    bg-gradient-to-br
                    from-[#C8102E]
                    via-[#005F99]
                    to-[#C8102E]
                    opacity-0
                    transition-opacity duration-200
                    group-hover:opacity-100
                  "
                />

                {/* Main card */}
                <motion.div
                  whileHover={{
                    y: -7,
                  }}
                  transition={{
                    duration: 0.18,
                    ease: "easeOut",
                  }}
                  className="
                    relative m-[1px]
                    h-full
                    overflow-hidden
                    rounded-[27px]
                    border border-slate-200
                    bg-white
                    p-6
                    shadow-[0_10px_35px_rgba(0,65,105,0.05)]
                    transition-shadow duration-200
                    group-hover:shadow-[0_18px_45px_rgba(0,65,105,0.10)]
                  "
                >
                  {/* Hover light sweep */}
                  <div
                    className="
                      pointer-events-none
                      absolute -left-24 top-0
                      h-full w-16
                      -skew-x-12
                      bg-white/70
                      opacity-0
                      blur-sm
                      transition-all duration-500
                      group-hover:left-[120%]
                      group-hover:opacity-100
                    "
                  />

                  {/* Top accent */}
                  <div
                    className="
                      absolute left-0 right-0 top-0
                      h-[3px]
                      origin-left
                      scale-x-0
                      bg-gradient-to-r
                      from-[#C8102E]
                      to-[#005F99]
                      transition-transform duration-300
                      group-hover:scale-x-100
                    "
                  />

                  <div className="relative">

                    {/* Top row */}
                    <div className="flex items-center justify-between">
                      <span
                        className="
                          text-xs font-black
                          tracking-[0.2em]
                          text-slate-300
                          transition-colors duration-200
                          group-hover:text-[#C8102E]
                        "
                      >
                        {item.number}
                      </span>

                      {/* Icon */}
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                        }}
                        transition={{
                          duration: 0.16,
                        }}
                        className={`
                          flex h-14 w-14
                          items-center justify-center
                          rounded-2xl
                          border
                          transition-all duration-200
                          ${
                            isRed
                              ? `
                                border-[#C8102E]/10
                                bg-[#C8102E]/[0.07]
                                text-[#C8102E]
                                group-hover:bg-[#C8102E]
                                group-hover:text-white
                              `
                              : `
                                border-[#005F99]/10
                                bg-[#005F99]/[0.07]
                                text-[#005F99]
                                group-hover:bg-[#005F99]
                                group-hover:text-white
                              `
                          }
                        `}
                      >
                        <Icon size={25} strokeWidth={1.8} />
                      </motion.div>
                    </div>

                    {/* Accent line */}
                    <div className="mt-6 flex items-center gap-2">
                      <span
                        className="
                          h-[3px] w-12
                          rounded-full
                          bg-gradient-to-r
                          from-[#C8102E]
                          to-[#005F99]
                        "
                      />

                      <span className="h-[3px] w-5 rounded-full bg-slate-200" />
                    </div>

                    {/* Title */}
                    <h3
                      className={`
                        mt-5 text-xl
                        font-bold leading-tight
                        transition-colors duration-200
                        ${
                          isRed
                            ? "text-[#C8102E]"
                            : "text-[#005F99]"
                        }
                      `}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>

                    {/* Metric */}
                    <div
                      className="
                        mt-6
                        rounded-2xl
                        border border-slate-100
                        bg-slate-50/80
                        p-4
                        transition-all duration-200
                        group-hover:border-[#005F99]/10
                        group-hover:bg-white
                      "
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                            Business Dimension
                          </p>

                          <p
                            className={`
                              mt-1 text-sm font-bold
                              ${
                                isRed
                                  ? "text-[#C8102E]"
                                  : "text-[#005F99]"
                              }
                            `}
                          >
                            {item.metric}
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                            Impact
                          </p>

                          <p className="mt-1 text-sm font-bold text-slate-700">
                            {item.metricValue}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div
                      className="
                        mt-6 flex
                        items-center justify-between
                        border-t border-slate-100
                        pt-5
                      "
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2
                          size={15}
                          className={
                            isRed
                              ? "text-[#C8102E]"
                              : "text-[#005F99]"
                          }
                        />

                        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                          Enterprise Outcome
                        </span>
                      </div>

                      <div
                        className="
                          flex h-8 w-8
                          items-center justify-center
                          rounded-full
                          border border-slate-200
                          bg-white
                          transition-all duration-200
                          group-hover:border-[#C8102E]/20
                          group-hover:bg-[#C8102E]/5
                        "
                      >
                        <ArrowRight
                          size={16}
                          className="
                            text-[#C8102E]
                            transition-transform duration-200
                            group-hover:translate-x-1
                          "
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================
            EXECUTIVE OUTCOME STRIP
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="
            relative mx-auto mt-16 max-w-6xl
            overflow-hidden rounded-[34px]
            bg-gradient-to-r
            from-[#005F99]
            via-[#174F77]
            to-[#C8102E]
            p-[1px]
            shadow-[0_25px_70px_rgba(0,65,105,0.14)]
          "
        >
          <div
            className="
              relative overflow-hidden
              rounded-[33px]
              bg-white/10
              px-6 py-8
              backdrop-blur-xl
              sm:px-10 sm:py-9
            "
          >
            {/* Single lightweight shine */}
            <div
              className="
                pointer-events-none
                absolute -left-20 top-0
                h-full w-20
                -skew-x-12
                bg-white/10
                blur-lg
                transition-transform duration-[1400ms]
                group-hover:translate-x-[900px]
              "
            />

            <div
              className="
                relative flex flex-col
                items-center justify-between
                gap-7
                text-center
                lg:flex-row lg:text-left
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex h-14 w-14 shrink-0
                    items-center justify-center
                    rounded-2xl
                    bg-white/15 text-white
                  "
                >
                  <TrendingUp size={26} />
                </div>

                <div>
                  <p
                    className="
                      text-[10px] font-bold uppercase
                      tracking-[0.23em] text-white/65
                    "
                  >
                    The DemandSense Advantage
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                    Better intelligence. Better planning. Better outcomes.
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                {["Predict", "Optimize", "Respond", "Improve"].map(
                  (word, index) => (
                    <div
                      key={word}
                      className="flex items-center gap-2"
                    >
                      <span
                        className="
                          rounded-full
                          border border-white/20
                          bg-white/10
                          px-4 py-2
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-wider
                          text-white
                          transition-all duration-200
                          hover:bg-white/20
                        "
                      >
                        {word}
                      </span>

                      {index < 3 && (
                        <ArrowRight
                          size={13}
                          className="hidden text-white/50 sm:block"
                        />
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            FINAL MICRO SIGNAL
        ========================================================= */}
        <div className="mt-10 flex items-center justify-center gap-2 text-center">
          <Zap size={14} className="text-[#C8102E]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Powered by Fortuna AI Intelligence
          </span>
        </div>
      </div>
    </section>
  );
}