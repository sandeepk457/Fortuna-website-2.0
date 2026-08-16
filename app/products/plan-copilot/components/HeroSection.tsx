"use client";

import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  GitBranch,
  Layers3,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

const planningNodes = [
  {
    title: "Demand",
    subtitle: "Forecast",
    icon: TrendingUp,
    position: "left-2 top-7 sm:left-5 sm:top-9",
    animation: "floatDemand 5s ease-in-out infinite",
    gradient: "from-[#005F99] via-[#1879ae] to-[#C8102E]",
  },
  {
    title: "Supply",
    subtitle: "Balance",
    icon: Layers3,
    position: "right-2 top-7 sm:right-5 sm:top-9",
    animation: "floatSupply 5.5s ease-in-out infinite",
    gradient: "from-[#C8102E] via-[#d8324e] to-[#005F99]",
  },
  {
    title: "Logistics",
    subtitle: "Synchronize",
    icon: GitBranch,
    position: "bottom-7 left-2 sm:left-5 sm:bottom-9",
    animation: "floatLogistics 5.2s ease-in-out infinite",
    gradient: "from-[#005F99] via-[#277ca8] to-[#C8102E]",
  },
  {
    title: "AI Insights",
    subtitle: "Decide",
    icon: Sparkles,
    position: "bottom-7 right-2 sm:right-5 sm:bottom-9",
    animation: "floatInsights 4.8s ease-in-out infinite",
    gradient: "from-[#C8102E] via-[#d52c48] to-[#005F99]",
  },
];

const statusItems = [
  {
    label: "Predictive",
    value: "Planning",
    color: "#005F99",
  },
  {
    label: "Scenario",
    value: "Simulation",
    color: "#C8102E",
  },
  {
    label: "Continuous",
    value: "Learning",
    color: "#005F99",
  },
];

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white">

      {/* =========================================================
          PLAN CO-PILOT PREMIUM HERO BACKGROUND
      ========================================================== */}
<div
  className="
    pointer-events-none
    absolute
    inset-0
    -z-20
    bg-cover
    bg-center
    bg-no-repeat
  "
  style={{
    backgroundImage:
      "url('/images/products/plan-copilot-hero-bg.png')",
  }}
/>

      


      {/* Fortuna red ambient glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-48
          top-20
          -z-10
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#C8102E]/5
          blur-[150px]
        "
      />

      {/* Fortuna blue ambient glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-48
          top-0
          -z-10
          h-[620px]
          w-[620px]
          rounded-full
          bg-[#005F99]/7
          blur-[160px]
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">

        <div className="grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] xl:gap-20">

          {/* =====================================================
              LEFT — HERO CONTENT
          ====================================================== */}

          <div className="relative z-10">

            {/* EYEBROW */}

            <div
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#005F99]/15
                bg-white/95
                px-4
                py-2
                shadow-[0_10px_30px_rgba(0,95,153,0.07)]
                backdrop-blur-sm
              "
            >
              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#005F99]
                  text-white
                "
              >
                <BrainCircuit size={16} />
              </span>

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-[#005F99]
                  sm:text-xs
                "
              >
                AI-Powered Planning Intelligence
              </span>
            </div>

            {/* HERO HEADING */}

            <h1
              className="
                mt-8
                max-w-[700px]
                text-[52px]
                font-black
                leading-[0.94]
                tracking-[-0.055em]
                sm:text-[64px]
                lg:text-[68px]
                xl:text-[76px]
              "
            >
              <span className="block text-[#C8102E]">
                Plan Smarter.
              </span>

              <span className="mt-2 block text-[#005F99]">
                Align Faster.
              </span>

              <span className="mt-2 block text-[#C8102E]">
                Execute Better.
              </span>
            </h1>

            {/* FORTUNA ACCENT */}

            <div className="mt-8 flex items-center gap-3">
              <span className="h-[4px] w-20 rounded-full bg-[#C8102E]" />
              <span className="h-[4px] w-10 rounded-full bg-[#005F99]" />
            </div>

            {/* PRIMARY DESCRIPTION */}

            <p
              className="
                mt-7
                max-w-[650px]
                text-base
                leading-8
                text-slate-600
                sm:text-lg
              "
            >
              Fortuna Plan Co-Pilot is an AI-driven planning intelligence
              assistant built to synchronize supply, demand and logistics
              across the enterprise.
            </p>

            {/* SECONDARY DESCRIPTION */}

            <p
              className="
                mt-4
                max-w-[640px]
                text-sm
                leading-7
                text-slate-500
                sm:text-base
              "
            >
              Combine predictive analytics, scenario simulation and real-time
              collaboration in one intelligent planning environment that
              continuously learns and turns business signals into actionable
              decisions.
            </p>

            {/* CTA */}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#C8102E]
                  px-7
                  py-4
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_18px_40px_rgba(200,16,46,0.20)]
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:bg-[#a90d26]
                  hover:shadow-[0_22px_45px_rgba(200,16,46,0.28)]
                "
              >
                Request a Demo

                <ArrowRight
                  size={18}
                  className="
                    ml-3
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                />
              </a>

              

            </div>

            {/* TRUST LINE */}

            <div
  className="
    mt-7
    flex
    items-center
    gap-2
    text-[10px]
    font-bold
    uppercase
    tracking-[0.17em]
    text-[#C8102E]
    sm:text-xs
  "
>
  <CheckCircle2
    size={15}
    className="text-[#C8102E]"
  />

  Intelligent planning for connected enterprises
</div>

          </div>

          {/* =====================================================
              RIGHT — AI PLANNING ENGINE
          ====================================================== */}

          <div className="relative">

            {/* OUTER GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                -inset-8
                rounded-[50px]
                bg-gradient-to-br
                from-[#005F99]/10
                via-transparent
                to-[#C8102E]/10
                blur-3xl
              "
            />

            {/* =================================================
                MAIN ENGINE CARD
            ================================================== */}

            <div
              className="
                relative
                rounded-[38px]
                border
                border-white/90
                bg-white/95
                p-4
                shadow-[0_35px_100px_rgba(0,45,80,0.15)]
                backdrop-blur-xl
                sm:p-6
              "
            >

              {/* TOP EDGE */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-8
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#005F99]/35
                  to-transparent
                "
              />

              {/* =================================================
                  ENGINE HEADER
              ================================================== */}

              <div className="flex items-center justify-between gap-4">

                <div className="flex min-w-0 items-center gap-3">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#005F99]/10
                      text-[#005F99]
                    "
                  >
                    <BrainCircuit size={22} />
                  </div>

                  <div>

                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.22em]
                        text-[#005F99]/60
                      "
                    >
                      Intelligent Planning
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-800">
                      Plan Co-Pilot AI Engine
                    </p>

                  </div>

                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-emerald-50
                    px-3
                    py-2
                    text-[10px]
                    font-bold
                    text-emerald-600
                  "
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Active
                </div>

              </div>

              {/* =================================================
                  PRODUCT LOGO PANEL
                  PURE WHITE
              ================================================== */}

              <div
                className="
                  relative
                  mt-5
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  px-5
                  py-6
                  sm:px-7
                  sm:py-7
                "
              >
                <div
                  className="
                    relative
                    flex
                    min-h-[180px]
                    items-center
                    justify-center
                    bg-white
                  "
                >
                  <img
                    src="/images/products/Fortuna Copilot.png"
                    alt="Fortuna Plan Co-Pilot"
                    className="
                      block
                      max-h-[180px]
                      w-full
                      max-w-[540px]
                      object-contain
                    "
                  />
                </div>
              </div>

              {/* BLUE GLOW */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-12
                  -top-12
                  h-32
                  w-32
                  rounded-full
                  bg-[#005F99]/8
                  blur-3xl
                "
              />

              {/* RED GLOW */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-12
                  -left-12
                  h-32
                  w-32
                  rounded-full
                  bg-[#C8102E]/8
                  blur-3xl
                "
              />

              {/* =================================================
                  AI ORBIT NETWORK
              ================================================== */}

              <div
                className="
                  relative
                  mt-4
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-gradient-to-br
                  from-[#f5fafd]
                  via-white
                  to-[#fff6f8]
                  px-4
                  py-5
                  sm:px-5
                  sm:py-6
                "
              >

                {/* AMBIENT CENTER GLOW */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-44
                    w-44
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-gradient-to-br
                    from-[#005F99]/10
                    to-[#C8102E]/10
                    blur-3xl
                  "
                />

                {/* ORBIT AREA */}

                <div
                  className="
                    relative
                    flex
                    h-[225px]
                    items-center
                    justify-center
                    sm:h-[235px]
                  "
                >

                  {/* OUTER ORBIT */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      h-[215px]
                      w-[215px]
                      rounded-full
                      border
                      border-[#005F99]/12
                      animate-[spin_24s_linear_infinite]
                    "
                  />

                  {/* SECOND ORBIT */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      h-[175px]
                      w-[175px]
                      rounded-full
                      border
                      border-[#C8102E]/12
                      animate-[spin_18s_linear_infinite_reverse]
                    "
                  />

                  {/* INNER ORBIT */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      h-[135px]
                      w-[135px]
                      rounded-full
                      border
                      border-[#005F99]/10
                    "
                  />

                  {/* =================================================
                      RED ORBIT SIGNAL
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-1/2
                      z-[5]
                      h-[215px]
                      w-[215px]
                      -translate-x-1/2
                      -translate-y-1/2
                      animate-[orbitRed_8s_linear_infinite]
                    "
                  >
                    <span
                      className="
                        absolute
                        left-1/2
                        top-[-6px]
                        h-3
                        w-3
                        -translate-x-1/2
                        rounded-full
                        bg-[#C8102E]
                        shadow-[0_0_10px_rgba(200,16,46,0.55)]
                        animate-[redSignalBlink_1.5s_ease-in-out_infinite]
                      "
                    />
                  </div>

                  {/* =================================================
                      BLUE ORBIT SIGNAL
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-1/2
                      z-[5]
                      h-[175px]
                      w-[175px]
                      -translate-x-1/2
                      -translate-y-1/2
                      animate-[orbitBlue_6.5s_linear_infinite_reverse]
                    "
                  >
                    <span
                      className="
                        absolute
                        left-1/2
                        top-[-5px]
                        h-2.5
                        w-2.5
                        -translate-x-1/2
                        rounded-full
                        bg-[#005F99]
                        shadow-[0_0_10px_rgba(0,95,153,0.55)]
                        animate-[blueSignalBlink_1.3s_ease-in-out_infinite_0.4s]
                      "
                    />
                  </div>

                  {/* =================================================
                      SMALL RED SIGNAL
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-1/2
                      z-[4]
                      h-[135px]
                      w-[135px]
                      -translate-x-1/2
                      -translate-y-1/2
                      animate-[orbitAccent_10s_linear_infinite_reverse]
                    "
                  >
                    <span
                      className="
                        absolute
                        left-1/2
                        top-[-3px]
                        h-1.5
                        w-1.5
                        -translate-x-1/2
                        rounded-full
                        bg-[#C8102E]/75
                        shadow-[0_0_8px_rgba(200,16,46,0.45)]
                        animate-[accentBlink_2s_ease-in-out_infinite]
                      "
                    />
                  </div>

                  {/* =================================================
                      CENTER AI ENGINE
                  ================================================== */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-[112px]
                      w-[112px]
                      items-center
                      justify-center
                      rounded-[32px]
                      bg-gradient-to-br
                      from-[#005F99]
                      via-[#456f8c]
                      to-[#C8102E]
                      shadow-[0_25px_55px_rgba(0,95,153,0.24)]
                    "
                  >

                    <div
                      className="
                        absolute
                        inset-[7px]
                        rounded-[27px]
                        border
                        border-white/20
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        rounded-[32px]
                        bg-gradient-to-tr
                        from-transparent
                        via-white/10
                        to-white/20
                      "
                    />

                    <BrainCircuit
                      size={44}
                      strokeWidth={1.6}
                      className="relative z-10 text-white"
                    />

                  </div>

                  {/* =================================================
                      PLANNING NODE CARDS
                  ================================================== */}

                  {planningNodes.map((node) => {
                    const Icon = node.icon;

                    return (
                      <div
                        key={node.title}
                        className={`
                          absolute
                          z-30
                          ${node.position}
                          group
                          w-[116px]
                          rounded-[18px]
                          p-[1px]
                          bg-gradient-to-br
                          ${node.gradient}
                          shadow-[0_12px_30px_rgba(0,70,110,0.12)]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:scale-[1.03]
                          hover:shadow-[0_18px_38px_rgba(0,70,110,0.18)]
                          sm:w-[135px]
                        `}
                        style={{
                          animation: node.animation,
                        }}
                      >

                        <div
                          className="
                            rounded-[17px]
                            bg-white/95
                            px-3
                            py-2.5
                            backdrop-blur-xl
                            sm:px-3.5
                            sm:py-3
                          "
                        >

                          <div className="flex items-center gap-2.5">

                            <div
                              className={`
                                flex
                                h-8
                                w-8
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-gradient-to-br
                                ${node.gradient}
                                text-white
                                shadow-sm
                                sm:h-9
                                sm:w-9
                              `}
                            >
                              <Icon
                                size={15}
                                strokeWidth={2}
                              />
                            </div>

                            <div className="min-w-0">

                              <p
                                className="
                                  text-[10px]
                                  font-bold
                                  text-slate-800
                                  sm:text-xs
                                "
                              >
                                {node.title}
                              </p>

                              <p
                                className="
                                  mt-0.5
                                  text-[8px]
                                  font-semibold
                                  text-slate-500
                                  sm:text-[9px]
                                "
                              >
                                {node.subtitle}
                              </p>

                            </div>

                          </div>

                          <div
                            className={`
                              mt-2
                              h-[2px]
                              w-8
                              rounded-full
                              bg-gradient-to-r
                              ${node.gradient}
                              opacity-60
                            `}
                          />

                        </div>

                      </div>
                    );
                  })}

                </div>

                {/* NETWORK LABEL */}

                <div className="relative z-30 text-center">

                  <div className="mx-auto flex items-center justify-center gap-2">

                    <span className="h-px w-8 bg-[#C8102E]/25" />

                    <span
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.28em]
                        text-[#005F99]/70
                        sm:text-[9px]
                      "
                    >
                      Connect · Simulate · Align · Execute
                    </span>

                    <span className="h-px w-8 bg-[#005F99]/25" />

                  </div>

                  <p
                    className="
                      mt-2
                      text-xs
                      font-semibold
                      text-slate-600
                      sm:text-sm
                    "
                  >
                    One intelligent planning layer across the enterprise
                  </p>

                </div>

              </div>

              {/* =================================================
                  STATUS CARDS
              ================================================== */}

              <div className="mt-4 grid grid-cols-3 gap-3">

                {statusItems.map((item) => (
                  <div
                    key={item.label}
                    className="
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      px-2
                      py-3
                      text-center
                      transition-all
                      duration-200
                      hover:-translate-y-0.5
                      hover:shadow-[0_10px_25px_rgba(0,70,110,0.07)]
                      sm:px-3
                      sm:py-4
                    "
                  >

                    <p
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-slate-400
                        sm:text-[9px]
                      "
                    >
                      {item.label}
                    </p>

                    <p
                      className="mt-1 text-[10px] font-bold sm:text-xs"
                      style={{ color: item.color }}
                    >
                      {item.value}
                    </p>

                  </div>
                ))}

              </div>

            </div>

            {/* =================================================
                FLOATING AI BADGE
            ================================================== */}

            <div
              className="
                absolute
                -bottom-6
                -left-5
                z-40
                hidden
                rounded-[22px]
                border
                border-white
                bg-white
                px-4
                py-3
                shadow-[0_18px_40px_rgba(0,70,110,0.14)]
                sm:block
              "
            >

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-[#005F99]
                    to-[#C8102E]
                    text-white
                  "
                >
                  <Zap size={17} />
                </div>

                <div>

                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#C8102E]
                    "
                  >
                    AI Intelligence
                  </p>

                  <p className="mt-1 text-xs font-bold text-slate-700">
                    Plan · Predict · Adapt
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =======================================================
            BOTTOM ENTERPRISE STRIP
        ======================================================== */}

        <div
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[28px]
            border
            border-slate-200
            bg-gradient-to-r
            from-[#005F99]/5
            via-white
            to-[#C8102E]/5
            px-5
            py-5
            shadow-[0_15px_40px_rgba(0,70,110,0.05)]
            sm:px-7
          "
        >

          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-5
              sm:flex-row
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#005F99]/10
                  text-[#005F99]
                "
              >
                <GitBranch size={18} />
              </div>

              <div>

                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#C8102E]
                    sm:text-[10px]
                  "
                >
                  Digital S&OP Co-Pilot
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    font-semibold
                    text-slate-600
                    sm:text-sm
                  "
                >
                  From forecasting to execution — every planning decision
                  stays connected.
                </p>

              </div>

            </div>

            <div className="flex flex-wrap justify-center gap-2">

              {["Supply", "Demand", "Finance", "Logistics"].map(
                (item, index) => (
                  <div
                    key={item}
                    className="
                      rounded-full
                      border
                      border-slate-200
                      bg-white
                      px-3
                      py-2
                      text-[10px]
                      font-bold
                      text-[#005F99]
                      shadow-sm
                      sm:px-4
                    "
                  >
                    {item}

                    {index < 3 && (
                      <span className="ml-2 text-[#C8102E]">
                        →
                      </span>
                    )}

                  </div>
                ),
              )}

            </div>

          </div>

        </div>

      </div>

      {/* =========================================================
          PREMIUM ORBIT + CARD ANIMATIONS
      ========================================================== */}

      <style>
        {`
          /* =====================================================
             NODE FLOATING
          ===================================================== */

          @keyframes floatDemand {
            0%,
            100% {
              transform: translate3d(0, 0, 0);
            }

            50% {
              transform: translate3d(0, -5px, 0);
            }
          }

          @keyframes floatSupply {
            0%,
            100% {
              transform: translate3d(0, 0, 0);
            }

            50% {
              transform: translate3d(0, -6px, 0);
            }
          }

          @keyframes floatLogistics {
            0%,
            100% {
              transform: translate3d(0, 0, 0);
            }

            50% {
              transform: translate3d(0, 5px, 0);
            }
          }

          @keyframes floatInsights {
            0%,
            100% {
              transform: translate3d(0, 0, 0);
            }

            50% {
              transform: translate3d(0, 5px, 0);
            }
          }

          /* =====================================================
             RED OUTER ORBIT
          ===================================================== */

          @keyframes orbitRed {
            from {
              transform:
                translate(-50%, -50%)
                rotate(0deg);
            }

            to {
              transform:
                translate(-50%, -50%)
                rotate(360deg);
            }
          }

          /* =====================================================
             BLUE INNER ORBIT
          ===================================================== */

          @keyframes orbitBlue {
            from {
              transform:
                translate(-50%, -50%)
                rotate(0deg);
            }

            to {
              transform:
                translate(-50%, -50%)
                rotate(360deg);
            }
          }

          /* =====================================================
             SMALL ACCENT ORBIT
          ===================================================== */

          @keyframes orbitAccent {
            from {
              transform:
                translate(-50%, -50%)
                rotate(0deg);
            }

            to {
              transform:
                translate(-50%, -50%)
                rotate(360deg);
            }
          }

          /* =====================================================
             RED SIGNAL BLINK
          ===================================================== */

          @keyframes redSignalBlink {
            0%,
            100% {
              opacity: 0.35;
              transform:
                translateX(-50%)
                scale(0.7);
              box-shadow:
                0 0 4px rgba(200, 16, 46, 0.2);
            }

            50% {
              opacity: 1;
              transform:
                translateX(-50%)
                scale(1.35);
              box-shadow:
                0 0 10px rgba(200, 16, 46, 0.7),
                0 0 24px rgba(200, 16, 46, 0.25);
            }
          }

          /* =====================================================
             BLUE SIGNAL BLINK
          ===================================================== */

          @keyframes blueSignalBlink {
            0%,
            100% {
              opacity: 0.35;
              transform:
                translateX(-50%)
                scale(0.7);
              box-shadow:
                0 0 4px rgba(0, 95, 153, 0.2);
            }

            50% {
              opacity: 1;
              transform:
                translateX(-50%)
                scale(1.35);
              box-shadow:
                0 0 10px rgba(0, 95, 153, 0.7),
                0 0 24px rgba(0, 95, 153, 0.25);
            }
          }

          /* =====================================================
             ACCENT PULSE
          ===================================================== */

          @keyframes accentBlink {
            0%,
            100% {
              opacity: 0.25;
              transform:
                translateX(-50%)
                scale(0.7);
            }

            50% {
              opacity: 0.9;
              transform:
                translateX(-50%)
                scale(1.4);
              box-shadow:
                0 0 10px rgba(200, 16, 46, 0.4);
            }
          }

          /* =====================================================
             ACCESSIBILITY
          ===================================================== */

          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              scroll-behavior: auto !important;
            }
          }
        `}
      </style>

    </section>
  );
}