"use client";

import type { ReactNode } from "react";

import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  CircleDot,
  Database,
  GitBranch,
  Layers3,
  Network,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

/* ============================================================
   WORKFLOW DATA
============================================================ */

const workflowSteps = [
  {
    number: "01",
    title: "Connect",
    shortTitle: "Connect Signals",
    description:
      "Bring demand, supply, inventory and financial signals together into one connected planning foundation.",
    icon: Network,
    points: [
      "Demand & supply signals",
      "Inventory visibility",
      "Financial planning inputs",
    ],
    accent: "blue",
  },
  {
    number: "02",
    title: "Analyze",
    shortTitle: "Analyze Intelligence",
    description:
      "Use intelligent planning analysis to identify patterns, constraints, gaps and emerging planning risks.",
    icon: BrainCircuit,
    points: [
      "Pattern identification",
      "Constraint awareness",
      "Planning risk visibility",
    ],
    accent: "red",
  },
  {
    number: "03",
    title: "Simulate",
    shortTitle: "Simulate Scenarios",
    description:
      "Evaluate alternative planning scenarios and understand their potential operational and business impact.",
    icon: GitBranch,
    points: [
      "Scenario comparison",
      "What-if evaluation",
      "Impact understanding",
    ],
    accent: "blue",
  },
  {
    number: "04",
    title: "Align & Act",
    shortTitle: "Align Decisions",
    description:
      "Create a shared planning view, align stakeholders and move forward with greater decision confidence.",
    icon: Target,
    points: [
      "Cross-functional alignment",
      "Consensus building",
      "Confident execution",
    ],
    accent: "red",
  },
];

const signalItems = [
  {
    label: "Demand",
    icon: Database,
  },
  {
    label: "Supply",
    icon: Layers3,
  },
  {
    label: "Inventory",
    icon: Network,
  },
  {
    label: "Finance",
    icon: Target,
  },
];

/* ============================================================
   MAIN WORKFLOW SECTION
============================================================ */

export default function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-32
      "
    >
      {/* ======================================================
          BACKGROUND
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-60
          bg-[linear-gradient(to_right,rgba(0,95,153,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(200,16,46,0.025)_1px,transparent_1px)]
          bg-[size:42px_42px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-48
          top-40
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#005F99]/7
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-48
          bottom-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#C8102E]/6
          blur-[130px]
        "
      />

      {/* ======================================================
          MAIN CONTAINER
      ======================================================= */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* ====================================================
            SECTION INTRO
        ===================================================== */}

        <div className="mx-auto max-w-5xl text-center">
          {/* EYEBROW */}

          <div
            className="
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-[#005F99]/10
              bg-gradient-to-r
              from-[#eef8fc]
              via-white
              to-[#fff1f4]
              px-4
              py-2.5
              shadow-[0_10px_30px_rgba(0,60,100,0.06)]
              sm:px-5
            "
          >
            <Sparkles
              size={16}
              className="text-[#C8102E]"
            />

            <span
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.18em]
                text-[#005F99]
                sm:text-xs
                sm:tracking-[0.22em]
              "
            >
              How Plan Co-Pilot Works
            </span>
          </div>

          {/* MAIN HEADING */}

          <h2
            className="
              mt-7
              text-[clamp(2.45rem,7vw,5.4rem)]
              font-extrabold
              leading-[1.04]
              tracking-[-0.055em]
            "
          >
            <span
              className="
                block
                bg-gradient-to-r
                from-[#005F99]
                via-[#1879ae]
                to-[#005F99]
                bg-clip-text
                text-transparent
              "
            >
              From Planning Complexity
            </span>

            <span
              className="
                mt-4
                block
                bg-gradient-to-r
                from-[#C8102E]
                via-[#d8324e]
                to-[#C8102E]
                bg-clip-text
                text-transparent
              "
            >
              To Connected Decisions.
            </span>
          </h2>

          {/* ACCENT */}

          <div className="mt-7 flex justify-center gap-2 sm:mt-8">
            <span className="h-1 w-14 rounded-full bg-[#005F99] sm:w-16" />
            <span className="h-1 w-9 rounded-full bg-[#C8102E] sm:w-10" />
          </div>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-7
              max-w-4xl
              text-base
              font-medium
              leading-7
              text-[#005F99]/70
              sm:mt-8
              sm:text-lg
              sm:leading-8
              lg:text-xl
              lg:leading-9
            "
          >
            Plan Co-Pilot connects planning signals, applies intelligent
            analysis, enables scenario evaluation and helps teams align
            decisions with greater confidence.
          </p>
        </div>

        {/* ====================================================
            PLANNING SIGNALS
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-12
            grid
            max-w-4xl
            grid-cols-2
            gap-3
            sm:mt-14
            sm:grid-cols-4
            sm:gap-4
          "
        >
          {signalItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#005F99]/10
                  bg-gradient-to-br
                  from-[#f7fbfd]
                  via-white
                  to-[#fff7f8]
                  px-3
                  py-3
                  shadow-[0_10px_28px_rgba(0,60,100,0.06)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_18px_35px_rgba(0,60,100,0.11)]
                  sm:px-4
                  sm:py-4
                "
              >
                <div
                  className={`
                    absolute
                    inset-x-0
                    top-0
                    h-[2px]
                    ${
                      index % 2 === 0
                        ? "bg-[#005F99]"
                        : "bg-[#C8102E]"
                    }
                  `}
                />

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-[#eef8fc]
                    to-[#fff1f4]
                    text-[#005F99]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon size={18} />
                </div>

                <div className="min-w-0">
                  <p
                    className="
                      truncate
                      text-xs
                      font-extrabold
                      text-[#005F99]
                      sm:text-sm
                    "
                  >
                    {item.label}
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#C8102E]/70
                    "
                  >
                    Planning signal
                  </p>
                </div>

                <span
                  className={`
                    absolute
                    right-2.5
                    top-2.5
                    h-1.5
                    w-1.5
                    rounded-full
                    animate-pulse
                    ${
                      index % 2 === 0
                        ? "bg-[#005F99]"
                        : "bg-[#C8102E]"
                    }
                  `}
                />
              </div>
            );
          })}
        </div>

        {/* ====================================================
            RUBIK CONNECTED PLANNING MATRIX
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-12
            max-w-6xl
            overflow-hidden
            rounded-[32px]
            bg-gradient-to-br
            from-[#005F99]
            via-[#123f56]
            to-[#C8102E]
            p-[1px]
            shadow-[0_30px_85px_rgba(0,60,100,0.20)]
            sm:mt-16
            sm:rounded-[38px]
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[31px]
              bg-[#082f43]
              px-5
              py-12
              sm:rounded-[37px]
              sm:px-10
              sm:py-14
              lg:px-14
            "
          >
            {/* GRID */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.07]
                bg-[linear-gradient(to_right,rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.8)_1px,transparent_1px)]
                bg-[size:34px_34px]
              "
            />

            {/* BLUE GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                -left-32
                top-0
                h-72
                w-72
                rounded-full
                bg-[#00a8e8]/20
                blur-[100px]
                animate-pulse
              "
            />

            {/* RED GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                -right-32
                bottom-0
                h-72
                w-72
                rounded-full
                bg-[#C8102E]/20
                blur-[100px]
                animate-pulse
              "
            />

            <div className="relative">
              {/* ==================================================
                  MATRIX HEADER
              =================================================== */}

              <div className="text-center">
                <p
                  className="
                    text-[9px]
                    font-extrabold
                    uppercase
                    tracking-[0.24em]
                    text-white/50
                    sm:text-xs
                  "
                >
                  Connected Planning Architecture
                </p>

                <h3
                  className="
                    mt-2
                    text-xl
                    font-extrabold
                    tracking-[-0.025em]
                    text-white
                    sm:text-2xl
                  "
                >
                  Every planning signal connected.
                </h3>
              </div>

              {/* ==================================================
                  RUBIK NETWORK
              =================================================== */}

              <div
                className="
                  relative
                  mx-auto
                  mt-10
                  h-[430px]
                  w-full
                  max-w-[760px]
                  overflow-hidden
                  px-2
                  sm:h-[470px]
                  sm:px-4
                "
              >
                {/* =================================================
                    TOP CONNECTOR
                ================================================== */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-[112px]
                    h-[82px]
                    w-px
                    -translate-x-1/2
                    bg-gradient-to-b
                    from-[#36b7ed]/70
                    via-white/25
                    to-white/10
                  "
                />

                {/* =================================================
                    LEFT CONNECTOR
                ================================================== */}

                <div
                  className="
                    absolute
                    left-[21%]
                    top-1/2
                    h-px
                    w-[29%]
                    bg-gradient-to-r
                    from-[#ff4164]/70
                    via-white/25
                    to-white/10
                  "
                />

                {/* =================================================
                    RIGHT CONNECTOR
                ================================================== */}

                <div
                  className="
                    absolute
                    right-[21%]
                    top-1/2
                    h-px
                    w-[29%]
                    bg-gradient-to-l
                    from-[#36b7ed]/70
                    via-white/25
                    to-white/10
                  "
                />

                {/* =================================================
                    BOTTOM CONNECTOR
                ================================================== */}

                <div
                  className="
                    absolute
                    bottom-[101px]
                    left-1/2
                    h-[72px]
                    w-px
                    -translate-x-1/2
                    bg-gradient-to-t
                    from-[#ff4164]/70
                    via-white/25
                    to-white/10
                  "
                />

                {/* =================================================
                    DIAGONAL CONNECTORS
                ================================================== */}

                <div
                  className="
                    absolute
                    left-[31%]
                    top-[29%]
                    h-px
                    w-[18%]
                    rotate-[28deg]
                    bg-gradient-to-r
                    from-[#36b7ed]/40
                    to-white/10
                  "
                />

                <div
                  className="
                    absolute
                    right-[31%]
                    top-[29%]
                    h-px
                    w-[18%]
                    -rotate-[28deg]
                    bg-gradient-to-l
                    from-[#ff4164]/40
                    to-white/10
                  "
                />

                {/* =================================================
                    DATA PACKET — TOP
                ================================================== */}

                <span
                  className="
                    absolute
                    left-1/2
                    top-[116px]
                    z-10
                    h-2
                    w-2
                    -translate-x-1/2
                    rounded-full
                    bg-[#42c3f4]
                    shadow-[0_0_18px_rgba(66,195,244,1)]
                    animate-[ping_2.5s_ease-in-out_infinite]
                  "
                />

                {/* =================================================
                    DATA PACKET — LEFT
                ================================================== */}

                <span
                  className="
                    absolute
                    left-[29%]
                    top-[49.2%]
                    z-10
                    h-2
                    w-2
                    rounded-full
                    bg-[#ff4164]
                    shadow-[0_0_18px_rgba(255,65,100,1)]
                    animate-[ping_3s_ease-in-out_infinite]
                  "
                />

                {/* =================================================
                    DATA PACKET — RIGHT
                ================================================== */}

                <span
                  className="
                    absolute
                    right-[29%]
                    top-[49.2%]
                    z-10
                    h-2
                    w-2
                    rounded-full
                    bg-[#42c3f4]
                    shadow-[0_0_18px_rgba(66,195,244,1)]
                    animate-[ping_2.8s_ease-in-out_infinite]
                  "
                />

                {/* =================================================
                    DATA PACKET — BOTTOM
                ================================================== */}

                <span
                  className="
                    absolute
                    bottom-[94px]
                    left-1/2
                    z-10
                    h-2
                    w-2
                    -translate-x-1/2
                    rounded-full
                    bg-[#ff4164]
                    shadow-[0_0_18px_rgba(255,65,100,1)]
                    animate-[ping_3.2s_ease-in-out_infinite]
                  "
                />

                {/* =================================================
                    DEMAND NODE
                    FIXED TOP GAP
                ================================================== */}

                <RubikNode
                  position="
                    absolute
                    left-1/2
                    top-7
                    -translate-x-1/2
                  "
                  color="blue"
                  label="Demand"
                  sub="Forecast"
                  icon={<TrendingUp size={20} />}
                />

                {/* =================================================
                    SUPPLY NODE
                ================================================== */}

                <RubikNode
                  position="
                    absolute
                    left-[3%]
                    top-[36%]
                  "
                  color="red"
                  label="Supply"
                  sub="Balance"
                  icon={<Layers3 size={20} />}
                />

                {/* =================================================
                    INVENTORY NODE
                ================================================== */}

                <RubikNode
                  position="
                    absolute
                    right-[3%]
                    top-[36%]
                  "
                  color="blue"
                  label="Inventory"
                  sub="Optimize"
                  icon={<Network size={20} />}
                />

                {/* =================================================
                    FINANCE NODE
                    FIXED BOTTOM GAP
                ================================================== */}

                <RubikNode
                  position="
                    absolute
                    bottom-7
                    left-1/2
                    -translate-x-1/2
                  "
                  color="red"
                  label="Finance"
                  sub="Align"
                  icon={<Target size={20} />}
                />

                {/* =================================================
                    CENTRAL RUBIK INTELLIGENCE MATRIX
                ================================================== */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    z-20
                    flex
                    h-[132px]
                    w-[132px]
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-[30px]
                    border
                    border-white/20
                    bg-gradient-to-br
                    from-[#005F99]
                    via-[#376f8c]
                    to-[#C8102E]
                    shadow-[0_25px_65px_rgba(0,0,0,0.35)]
                    transition-transform
                    duration-500
                    hover:scale-105
                    sm:h-[150px]
                    sm:w-[150px]
                  "
                >
                  {/* OUTER FRAME */}

                  <div
                    className="
                      absolute
                      inset-2
                      rounded-[24px]
                      border
                      border-white/15
                    "
                  />

                  {/* INNER GLASS */}

                  <div
                    className="
                      absolute
                      inset-5
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                    "
                  />

                  {/* RUBIK MATRIX */}

                  <div
                    className="
                      relative
                      z-10
                      grid
                      grid-cols-3
                      gap-1.5
                    "
                  >
                    <span className="h-3 w-3 rounded-[3px] bg-white/80" />
                    <span className="h-3 w-3 rounded-[3px] bg-[#36b7ed]" />
                    <span className="h-3 w-3 rounded-[3px] bg-white/40" />

                    <span className="h-3 w-3 rounded-[3px] bg-[#ff4164]" />
                    <span className="h-3 w-3 rounded-[3px] bg-white" />
                    <span className="h-3 w-3 rounded-[3px] bg-[#36b7ed]" />

                    <span className="h-3 w-3 rounded-[3px] bg-white/40" />
                    <span className="h-3 w-3 rounded-[3px] bg-[#ff4164]" />
                    <span className="h-3 w-3 rounded-[3px] bg-white/80" />
                  </div>

                </div>
              </div>

              {/* =================================================
                  MATRIX FOOTER
              ================================================== */}

              <div className="mt-4 flex justify-center sm:mt-6">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/15
                    bg-white/10
                    px-4
                    py-2.5
                    backdrop-blur-md
                  "
                >
                  <Zap
                    size={14}
                    className="text-[#42c3f4]"
                  />

                  <span
                    className="
                      text-[9px]
                      font-extrabold
                      uppercase
                      tracking-[0.18em]
                      text-white/80
                      sm:text-[10px]
                    "
                  >
                    Signals → Intelligence → Decisions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================
            WORKFLOW STEPS
        ===================================================== */}

        <div className="mt-10 sm:mt-14">
          <div
            className="
              grid
              gap-5
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isRed = step.accent === "red";

              return (
                <div
                  key={step.number}
                  className="group relative"
                >
                  {index < workflowSteps.length - 1 && (
                    <div
                      className="
                        absolute
                        left-1/2
                        top-full
                        hidden
                        h-6
                        w-px
                        bg-gradient-to-b
                        from-[#005F99]/20
                        to-[#C8102E]/20
                        lg:left-[calc(100%+2px)]
                        lg:top-1/2
                        lg:block
                        lg:h-px
                        lg:w-5
                      "
                    />
                  )}

                  <div
                    className="
                      relative
                      h-full
                      overflow-hidden
                      rounded-[28px]
                      border
                      border-[#005F99]/10
                      bg-gradient-to-br
                      from-white
                      via-[#f8fbfd]
                      to-[#fff6f8]
                      p-6
                      shadow-[0_15px_45px_rgba(0,60,100,0.08)]
                      transition-all
                      duration-300
                      hover:-translate-y-1.5
                      hover:shadow-[0_25px_60px_rgba(0,60,100,0.14)]
                    "
                  >
                    <div
                      className={`
                        absolute
                        inset-x-0
                        top-0
                        h-1
                        ${
                          isRed
                            ? "bg-gradient-to-r from-[#C8102E] to-[#005F99]"
                            : "bg-gradient-to-r from-[#005F99] to-[#C8102E]"
                        }
                      `}
                    />

                    <div className="flex items-start justify-between">
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-2xl
                          bg-gradient-to-br
                          from-[#005F99]
                          via-[#376f8c]
                          to-[#C8102E]
                          text-white
                          shadow-[0_10px_25px_rgba(0,70,110,0.18)]
                          transition-transform
                          duration-300
                          group-hover:scale-105
                        "
                      >
                        <Icon
                          size={21}
                          strokeWidth={1.8}
                        />
                      </div>

                      <span
                        className="
                          text-4xl
                          font-extrabold
                          tracking-[-0.05em]
                          text-[#005F99]/10
                          transition-colors
                          duration-300
                          group-hover:text-[#C8102E]/15
                        "
                      >
                        {step.number}
                      </span>
                    </div>

                    <p
                      className="
                        mt-6
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[0.18em]
                        text-[#C8102E]
                      "
                    >
                      Step {step.number}
                    </p>

                    <h3
                      className="
                        mt-2
                        bg-gradient-to-r
                        from-[#005F99]
                        via-[#1879ae]
                        to-[#C8102E]
                        bg-clip-text
                        text-2xl
                        font-extrabold
                        tracking-[-0.03em]
                        text-transparent
                      "
                    >
                      {step.shortTitle}
                    </h3>

                    <p
                      className="
                        mt-4
                        text-sm
                        font-medium
                        leading-7
                        text-[#005F99]/70
                      "
                    >
                      {step.description}
                    </p>

                    <div className="mt-5 grid gap-2">
                      {step.points.map((point) => (
                        <div
                          key={point}
                          className="
                            flex
                            items-center
                            gap-2.5
                            rounded-xl
                            border
                            border-[#005F99]/7
                            bg-white/80
                            px-3
                            py-2.5
                          "
                        >
                          <CheckCircle2
                            size={15}
                            className="shrink-0 text-[#C8102E]"
                          />

                          <span
                            className="
                              text-xs
                              font-bold
                              leading-5
                              text-[#005F99]
                            "
                          >
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div
                      className="
                        mt-6
                        flex
                        items-center
                        justify-between
                        border-t
                        border-[#005F99]/10
                        pt-4
                      "
                    >
                      <span
                        className="
                          text-[9px]
                          font-extrabold
                          uppercase
                          tracking-[0.15em]
                          text-[#005F99]/60
                        "
                      >
                        {step.title}
                      </span>

                      <ArrowRight
                        size={16}
                        className="
                          text-[#C8102E]
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ====================================================
            FINAL MESSAGE
        ===================================================== */}

        <div className="mx-auto mt-14 max-w-4xl text-center sm:mt-18">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#005F99]/25 sm:w-14" />

            <CircleDot
              size={17}
              className="text-[#C8102E]"
            />

            <span className="h-px w-10 bg-[#C8102E]/25 sm:w-14" />
          </div>

          <p
            className="
              mt-5
              text-base
              font-extrabold
              leading-7
              tracking-[-0.01em]
              sm:mt-6
              sm:text-xl
              sm:leading-8
            "
          >
            <span className="text-[#005F99]">
              Connect.
            </span>{" "}
            <span className="text-[#C8102E]">
              Analyze.
            </span>{" "}
            <span className="text-[#005F99]">
              Simulate.
            </span>{" "}
            <span className="text-[#C8102E]">
              Align.
            </span>{" "}
            <span className="text-[#005F99]">
              Act.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   RUBIK NODE
============================================================ */

function RubikNode({
  position,
  color,
  label,
  sub,
  icon,
}: {
  position: string;
  color: "blue" | "red";
  label: string;
  sub: string;
  icon: ReactNode;
}) {
  const isRed = color === "red";

  return (
    <div
      className={`
        ${position}
        z-10
        animate-[bounce_4s_ease-in-out_infinite]
      `}
    >
      <div
        className={`
          group
          relative
          flex
          h-[82px]
          w-[82px]
          flex-col
          items-center
          justify-center
          rounded-[20px]
          border
          ${
            isRed
              ? "border-[#ff4164]/40"
              : "border-[#42c3f4]/40"
          }
          bg-white/10
          backdrop-blur-xl
          shadow-[0_15px_35px_rgba(0,0,0,0.22)]
          transition-all
          duration-300
          hover:scale-110
          hover:bg-white/15
          sm:h-[92px]
          sm:w-[92px]
        `}
      >
        <div
          className={`
            mb-1
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-xl
            ${
              isRed
                ? "bg-[#C8102E]/25 text-[#ff6b82]"
                : "bg-[#005F99]/30 text-[#65c9f3]"
            }
          `}
        >
          {icon}
        </div>

        <span
          className="
            text-[10px]
            font-extrabold
            text-white
            sm:text-xs
          "
        >
          {label}
        </span>

        <span
          className="
            text-[7px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-white/45
          "
        >
          {sub}
        </span>

        {/* STATUS */}

        <span
          className={`
            absolute
            -right-1
            -top-1
            h-2
            w-2
            rounded-full
            ${
              isRed
                ? "bg-[#ff4164]"
                : "bg-[#42c3f4]"
            }
            shadow-[0_0_12px_currentColor]
            animate-pulse
          `}
        />

        {/* CORNER LIGHT */}

        <span
          className={`
            absolute
            bottom-1.5
            left-1.5
            h-1
            w-1
            rounded-full
            ${
              isRed
                ? "bg-[#ff4164]/60"
                : "bg-[#42c3f4]/60"
            }
          `}
        />
      </div>
    </div>
  );
}