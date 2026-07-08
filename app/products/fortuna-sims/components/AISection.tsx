"use client";

import {
  BrainCircuit,
  Bot,
  Sparkles,
  TrendingUp,
  Boxes,
  TriangleAlert,
  ScanSearch,
  ArrowRight,
} from "lucide-react";

const aiFeatures = [
  {
    icon: TrendingUp,
    title: "Demand Forecasting",
    description:
      "Predict future demand using AI-driven forecasting models and historical consumption patterns.",
  },
  {
    icon: Boxes,
    title: "Inventory Optimization",
    description:
      "Reduce excess inventory while preventing stock shortages using intelligent recommendations.",
  },
  {
    icon: Bot,
    title: "Fortuna AI Copilot",
    description:
      "Receive contextual recommendations, operational insights and guided actions across every module.",
  },
  {
    icon: TriangleAlert,
    title: "Predictive Alerts",
    description:
      "Identify shortages, delays, bottlenecks and operational risks before they impact the business.",
  },
  {
    icon: ScanSearch,
    title: "Exception Detection",
    description:
      "Automatically identify unusual inventory movements, delayed procurement and warehouse exceptions.",
  },
  {
    icon: Sparkles,
    title: "Executive Intelligence",
    description:
      "Convert operational data into executive-ready insights for faster strategic decision making.",
  },
];

export default function AISection() {
  return (
    <section className="relative overflow-hidden py-32">

  {/* Background Image */}

  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/images/ai/mesh-grid.png')",
    }}
  />

  {/* Dark Overlay */}

  <div className="absolute inset-0 bg-slate-950/20" />

  {/* Optional Gradient */}

  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

  <div className="relative z-10">

      {/* Background Glow */}

      <div className="absolute left-0 top-40 h-[500px] w-[500px] rounded-full bg-[#005F99]/20 blur-[180px]" />

      <div className="absolute right-0 bottom-20 h-[500px] w-[500px] rounded-full bg-[#C8102E]/20 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C8102E]">

            FORTUNA INTELLIAI

          </p>

          <h2 className="mt-8 text-5xl font-bold leading-[1.02] tracking-[-0.04em] md:text-7xl">

            <span className="block text-white">

              AI That Thinks Before

            </span>

            <span className="mt-2 block text-[#4DA6FF]">

              Your Supply Chain Does

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-300">

            Fortuna IntelliAI transforms operational data into intelligent
            business decisions by combining predictive analytics,
            machine learning and real-time supply chain intelligence
            across procurement, inventory and warehouse operations.

          </p>

        </div>

        {/* Main Layout */}

        <div className="mt-24 grid items-center gap-20 lg:grid-cols-[1fr_1fr]">

               {/* =====================================
            LEFT AI SHOWCASE
        ====================================== */}

        <div className="relative">

          {/* Blue Glow */}

          <div className="absolute -left-12 top-16 h-72 w-72 rounded-full bg-[#005F99]/20 blur-[120px]" />

          {/* Red Glow */}

          <div className="absolute -right-12 bottom-16 h-72 w-72 rounded-full bg-[#C8102E]/20 blur-[120px]" />

          {/* Glass Card */}

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_40px_90px_rgba(0,0,0,0.35)]">

            {/* Gloss */}

            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/15 to-transparent" />

            {/* AI Image */}

            <img
              src="/images/ai/ai-section-bg.png"
              alt="Fortuna IntelliAI"
              className="w-full rounded-t-[36px] object-cover"
            />

            {/* Bottom Content */}

            <div className="p-10">

              {/* Badge */}

              <div className="inline-flex items-center rounded-full border border-[#C8102E]/30 bg-[#C8102E]/10 px-5 py-2 text-sm font-semibold text-red-300">

                <BrainCircuit className="mr-2 h-4 w-4" />

                Powered by Fortuna IntelliAI

              </div>

              {/* Heading */}

              <h3 className="mt-6 text-4xl font-bold text-white">

                Enterprise Intelligence
                <span className="block text-[#4DA6FF]">
                  Beyond Traditional ERP
                </span>

              </h3>

              {/* Description */}

              <p className="mt-6 text-lg leading-8 text-slate-300">

                Fortuna IntelliAI continuously analyzes procurement,
                inventory, warehouse and operational data to predict
                demand, optimize inventory, detect anomalies and
                recommend the next best action before problems occur.

              </p>

              {/* Premium Stats */}

              <div className="mt-10 grid grid-cols-3 gap-5">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">

                  <div className="text-3xl font-bold text-[#4DA6FF]">

                    AI

                  </div>

                  <p className="mt-2 text-sm text-slate-300">

                    Decision Engine

                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">

                  <div className="text-3xl font-bold text-[#C8102E]">

                    ML

                  </div>

                  <p className="mt-2 text-sm text-slate-300">

                    Learning Models

                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">

                  <div className="text-3xl font-bold text-white">

                    24×7

                  </div>

                  <p className="mt-2 text-sm text-slate-300">

                    Continuous Insights

                  </p>

                </div>

              </div>

              {/* CTA */}

              <button
                className="
                  group
                  mt-10
                  inline-flex
                  items-center
                  rounded-xl
                  bg-gradient-to-r
                  from-[#C8102E]
                  to-[#005F99]
                  px-7
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_20px_45px_rgba(200,16,46,0.35)]
                "
              >

                Explore AI Capabilities

                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

              </button>

            </div>

          </div>

        </div>

                        {/* =====================================
            RIGHT AI CAPABILITIES
        ====================================== */}

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#C8102E]">
            AI CAPABILITIES
          </p>

          <h3 className="mt-4 text-4xl font-bold text-white">
            Enterprise Intelligence
            <span className="block text-[#4DA6FF]">
              Across Every Operation
            </span>
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Fortuna IntelliAI continuously analyzes operational data,
            identifies patterns and provides intelligent recommendations
            that improve decision making throughout the supply chain.
          </p>

          {/* AI Feature Cards */}

          <div className="mt-10 space-y-5">

            {aiFeatures.map((feature) => {

              const Icon = feature.icon;

              return (

                <div
                  key={feature.title}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/5
                    p-7
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[#C8102E]
                    hover:bg-gradient-to-r
                    hover:from-[#C8102E]/10
                    hover:via-white/5
                    hover:to-[#005F99]/10
                    hover:shadow-[0_25px_70px_rgba(200,16,46,0.20)]
                  "
                >

                  {/* Gloss Effect */}

                  <div
                    className="
                      absolute
                      -left-24
                      top-0
                      h-full
                      w-20
                      -skew-x-12
                      bg-white/30
                      blur-md
                      transition-all
                      duration-700
                      group-hover:left-[120%]
                    "
                  />

                  <div className="relative flex gap-6">

                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-[#C8102E]
                        to-[#005F99]
                        shadow-lg
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:rotate-6
                      "
                    >

                      <Icon className="h-8 w-8 text-white" />

                    </div>

                    {/* Content */}

                    <div className="flex-1">

                      <h4
                        className="
                          text-2xl
                          font-bold
                          text-white
                          transition-colors
                          duration-300
                          group-hover:text-[#4DA6FF]
                        "
                      >
                        {feature.title}
                      </h4>

                      <p className="mt-3 leading-8 text-slate-300">
                        {feature.description}
                      </p>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

          {/* AI Highlight */}

          <div className="mt-10 rounded-[28px] border border-[#005F99]/30 bg-gradient-to-r from-[#005F99]/20 via-white/5 to-[#C8102E]/20 p-8 backdrop-blur-xl">

            <div className="flex items-center gap-4">

              <BrainCircuit className="h-10 w-10 text-[#4DA6FF]" />

              <div>

                <h4 className="text-2xl font-bold text-white">
                  Smarter Decisions. Faster Execution.
                </h4>

                <p className="mt-2 text-slate-300">
                  AI continuously learns from enterprise data to improve
                  planning accuracy, operational efficiency and supply chain
                  resilience.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

              {/* =====================================
            AI IMPACT METRICS
        ====================================== */}

        <div className="mt-24 grid gap-6 md:grid-cols-4">

          {[
            {
              value: "24×7",
              label: "Continuous AI Monitoring",
            },
            {
              value: "Real-Time",
              label: "Operational Intelligence",
            },
            {
              value: "Predictive",
              label: "Decision Support",
            },
            {
              value: "Enterprise",
              label: "AI Ready Platform",
            },
          ].map((item) => (

            <div
              key={item.label}
              className="
                rounded-[28px]
                border
                border-white/10
                bg-white/5
                p-8
                text-center
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#C8102E]
                hover:bg-gradient-to-br
                hover:from-[#C8102E]/10
                hover:via-white/5
                hover:to-[#005F99]/10
                hover:shadow-[0_25px_70px_rgba(200,16,46,0.20)]
              "
            >

              <h4 className="text-4xl font-bold text-[#4DA6FF]">
                {item.value}
              </h4>

              <p className="mt-4 text-base font-medium text-slate-300 leading-7">
                {item.label}
              </p>

            </div>

          ))}

        </div>

        {/* =====================================
            PREMIUM ENTERPRISE CTA
        ====================================== */}

        <div className="relative mx-auto mt-28 max-w-6xl overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-r from-[#005F99] via-[#4F5478] to-[#C8102E] px-12 py-16 shadow-[0_40px_90px_rgba(0,0,0,0.35)]">

          {/* Gloss */}

          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/20 to-transparent" />

          {/* Left Glow */}

          <div className="absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#005F99]/30 blur-[130px]" />

          {/* Right Glow */}

          <div className="absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#C8102E]/30 blur-[130px]" />

          <div className="relative z-10 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-white/80">

              POWERED BY FORTUNA INTELLIAI

            </p>

            <h3 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl">

              Predict.

              <span className="block">
                Optimize.
              </span>

              <span className="block text-[#B8D9FF]">
                Execute Smarter.
              </span>

            </h3>

            <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-white/80" />

            <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-white/90">

              Fortuna IntelliAI empowers organizations to move beyond
              reactive operations by delivering predictive intelligence,
              automated recommendations and data-driven decision support
              across procurement, inventory management, warehouse execution
              and executive analytics.

            </p>

            {/* Enterprise Pills */}

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              {[
                "Demand Forecasting",
                "Inventory Optimization",
                "AI Copilot",
                "Predictive Alerts",
                "Executive Intelligence",
              ].map((item) => (

                <div
                  key={item}
                  className="
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-white
                    backdrop-blur-md
                  "
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

      </div>

    </section>

  );

}

   