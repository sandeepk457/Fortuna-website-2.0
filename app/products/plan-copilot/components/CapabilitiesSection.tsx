"use client";

import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  CircleDot,
  CloudCog,
  Database,
  GitBranch,
  Layers3,
  Network,
  ScanSearch,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound,
  Workflow,
  Zap,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    icon: Target,
    title: "Demand & Supply Alignment",
    description:
      "Bring forecasts, orders, production and logistics signals together to continuously balance supply capacity against demand.",
    points: [
      "Unified enterprise planning data",
      "AI forecast integration",
      "Gap & variance analysis",
      "Cross-functional consensus planning",
    ],
    gradient: "from-[#005F99] via-[#1879ae] to-[#2f83ae]",
    softGradient: "from-[#edf7fb] via-white to-[#f4faff]",
    accent: "#005F99",
  },
  {
    number: "02",
    icon: GitBranch,
    title: "Scenario Simulation",
    description:
      "Evaluate alternative planning scenarios and understand potential business impact before committing to a plan.",
    points: [
      "What-if planning",
      "Risk-aware scenario analysis",
      "Alternative plan comparison",
      "Predictive decision support",
    ],
    gradient: "from-[#C8102E] via-[#d8324e] to-[#e05b70]",
    softGradient: "from-[#fff1f4] via-white to-[#fff7f8]",
    accent: "#C8102E",
  },
  {
    number: "03",
    icon: UsersRound,
    title: "Collaborative S&OP",
    description:
      "Connect sales, operations, finance and logistics teams around one shared planning view with structured workflows and accountability.",
    points: [
      "Cross-functional collaboration",
      "Consensus-based decisions",
      "Workflow-driven planning",
      "Real-time alignment",
    ],
    gradient: "from-[#005F99] via-[#376f8c] to-[#6a8fa2]",
    softGradient: "from-[#edf7fb] via-white to-[#f5fafd]",
    accent: "#005F99",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Continuous AI Learning",
    description:
      "Continuously learn from planning outcomes and business signals to improve recommendations, accuracy and operational responsiveness.",
    points: [
      "Predictive intelligence",
      "Adaptive planning",
      "Risk identification",
      "Self-improving insights",
    ],
    gradient: "from-[#C8102E] via-[#9d3045] to-[#005F99]",
    softGradient: "from-[#fff1f4] via-white to-[#f1f8fb]",
    accent: "#C8102E",
  },
];

const connectedSystems = [
  {
    label: "ERP",
    icon: Database,
  },
  {
    label: "CRM",
    icon: UsersRound,
  },
  {
    label: "DemandSense",
    icon: TrendingUp,
  },
  {
    label: "SIMS",
    icon: Layers3,
  },
  {
    label: "TMS",
    icon: Workflow,
  },
];

const intelligenceSignals = [
  "Forecast",
  "Supply",
  "Inventory",
  "Finance",
  "Logistics",
];

const intelligenceOutputs = [
  {
    icon: BarChart3,
    title: "Forecast",
    text: "Predictive signals",
    color: "#005F99",
  },
  {
    icon: ScanSearch,
    title: "Analyze",
    text: "Gap & variance",
    color: "#C8102E",
  },
  {
    icon: GitBranch,
    title: "Simulate",
    text: "What-if scenarios",
    color: "#005F99",
  },
  {
    icon: CheckCircle2,
    title: "Execute",
    text: "Actionable plans",
    color: "#C8102E",
  },
];

const planningLayers = [
  {
    icon: Network,
    label: "Integrate",
  },
  {
    icon: BrainCircuit,
    label: "Intelligence",
  },
  {
    icon: BarChart3,
    label: "Visualize",
  },
  {
    icon: Workflow,
    label: "Collaborate",
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
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
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#005F99]/5
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-48
          bottom-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#C8102E]/5
          blur-[150px]
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >

        {/* =======================================================
            SECTION INTRO
        ======================================================== */}

        <div className="mx-auto max-w-5xl text-center">

          <div
            className="
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-[#C8102E]/15
              bg-gradient-to-r
              from-[#fff5f7]
              via-white
              to-[#f3faff]
              px-5
              py-2.5
              shadow-[0_10px_30px_rgba(0,60,100,0.06)]
            "
          >
            <Sparkles
              size={17}
              className="text-[#C8102E]"
            />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#C8102E]
                sm:text-sm
              "
            >
              Connected Planning Intelligence
            </span>
          </div>

          {/* =====================================================
              FORTUNA THEME HEADING
          ====================================================== */}

              <h2
  className="
    mt-8
    text-5xl
    font-black
    leading-[1.08]
    tracking-[-0.05em]
    sm:text-6xl
    lg:text-7xl
    lg:leading-[1.08]
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
    One Planning Layer.
  </span>

  <span
    className="
      mt-5
      block
      bg-gradient-to-r
      from-[#C8102E]
      via-[#d8324e]
      to-[#C8102E]
      bg-clip-text
      text-transparent
    "
  >
    Every Decision Connected.
  </span>
</h2>

          <div className="mx-auto mt-8 flex items-center justify-center gap-2">
            <span className="h-[4px] w-16 rounded-full bg-[#C8102E]" />
            <span className="h-[4px] w-10 rounded-full bg-[#005F99]" />
          </div>

          <p
            className="
              mx-auto
              mt-8
              max-w-4xl
              text-lg
              font-medium
              leading-8
              text-slate-600
              sm:text-xl
              sm:leading-9
            "
          >
            Plan Co-Pilot brings demand, supply, finance and logistics
            planning together in one intelligent environment — helping
            teams move from fragmented planning to connected,
            data-driven decisions.
          </p>

        </div>

        {/* =======================================================
            ARCHITECTURE
        ======================================================== */}

        <div className="relative mt-16 lg:mt-20">

          {/* =====================================================
              CONNECTED DATA CARD
          ====================================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-[#005F99]/10
              bg-gradient-to-r
              from-[#edf8fc]
              via-white
              to-[#fff2f5]
              p-6
              shadow-[0_20px_55px_rgba(0,60,100,0.07)]
              sm:p-7
            "
          >

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-44
                w-44
                rounded-full
                bg-[#C8102E]/8
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-20
                -left-20
                h-44
                w-44
                rounded-full
                bg-[#005F99]/8
                blur-3xl
              "
            />

            <div
              className="
                relative
                flex
                flex-col
                gap-6
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#005F99]
                    to-[#1879ae]
                    text-white
                    shadow-[0_10px_25px_rgba(0,95,153,0.18)]
                  "
                >
                  <Network size={23} />
                </div>

                <div>

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-[#005F99]
                      sm:text-xs
                    "
                  >
                    Connected Enterprise Data
                  </p>

                  <p
                    className="
                      mt-1.5
                      text-base
                      font-black
                      text-[#005F99]
                      sm:text-lg
                    "
                  >
                    One planning intelligence layer across your ecosystem
                  </p>

                </div>

              </div>

              <div className="flex flex-wrap gap-2.5">

                {connectedSystems.map((system) => {
                  const Icon = system.icon;

                  return (
                    <div
                      key={system.label}
                      className="
                        group
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-[#005F99]/10
                        bg-white/90
                        px-4
                        py-2.5
                        text-xs
                        font-bold
                        text-[#005F99]
                        shadow-sm
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                        hover:border-[#C8102E]/20
                        hover:text-[#C8102E]
                      "
                    >
                      <Icon
                        size={15}
                        className="text-[#005F99] transition-colors group-hover:text-[#C8102E]"
                      />

                      {system.label}
                    </div>
                  );
                })}

              </div>

            </div>

          </div>

      {/* =====================================================
    INTELLIGENCE VISUAL CARD
====================================================== */}

<div
  className="
    relative
    mt-7
    overflow-hidden
    rounded-[36px]
    border
    border-white/20
    bg-gradient-to-br
    from-[#005F99]
    via-[#164e6a]
    to-[#C8102E]
    px-5
    py-14
    shadow-[0_30px_90px_rgba(0,60,100,0.22)]
    sm:px-8
    sm:py-16
    lg:px-10
  "
>

  {/* =================================================
      PREMIUM GRADIENT LIGHT
  ================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      -left-32
      -top-32
      h-[420px]
      w-[420px]
      rounded-full
      bg-[#2b91c0]/30
      blur-[100px]
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -bottom-32
      -right-32
      h-[420px]
      w-[420px]
      rounded-full
      bg-[#e84260]/30
      blur-[100px]
    "
  />

  {/* =================================================
      SUBTLE NETWORK GRID
  ================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      inset-0
      opacity-[0.12]
      bg-[linear-gradient(to_right,rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.7)_1px,transparent_1px)]
      bg-[size:36px_36px]
    "
  />

  {/* =================================================
      CENTRAL PREMIUM GLOW
  ================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-[380px]
      w-[380px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-white/10
      blur-[100px]
    "
  />

  <div className="relative mx-auto max-w-5xl">

    {/* =================================================
        SIGNALS
    ================================================== */}

    <div className="flex flex-wrap justify-center gap-2.5">

      {intelligenceSignals.map((signal, index) => (
        <div
          key={signal}
          className="
            flex
            items-center
            gap-2.5
            rounded-full
            border
            border-white/20
            bg-white/10
            px-4
            py-2.5
            text-xs
            font-black
            text-white
            shadow-[0_8px_25px_rgba(0,0,0,0.08)]
            backdrop-blur-md
          "
        >

          <span
            className={`
              h-2
              w-2
              rounded-full
              ${
                index % 2 === 0
                  ? "bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                  : "bg-[#ffb5c1] shadow-[0_0_10px_rgba(255,181,193,0.8)]"
              }
            `}
          />

          {signal}

        </div>
      ))}

    </div>

    {/* =================================================
        CENTRAL HUB
    ================================================== */}

    <div
      className="
        relative
        mx-auto
        mt-12
        flex
        max-w-3xl
        flex-col
        items-center
        justify-center
      "
    >

      {/* CONNECTION LINE */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          hidden
          h-px
          w-[82%]
          -translate-x-1/2
          -translate-y-1/2
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
          sm:block
        "
      />

      {/* CENTRAL AI HUB */}

      <div
        className="
          relative
          z-10
          flex
          h-40
          w-40
          items-center
          justify-center
          rounded-[42px]
          border
          border-white/30
          bg-gradient-to-br
          from-[#005F99]
          via-[#377d9d]
          to-[#C8102E]
          shadow-[0_30px_80px_rgba(0,0,0,0.22)]
        "
      >

        <div
          className="
            absolute
            inset-2
            rounded-[37px]
            border
            border-white/20
          "
        />

        <div
          className="
            absolute
            inset-0
            rounded-[42px]
            bg-gradient-to-tr
            from-transparent
            via-white/10
            to-white/25
          "
        />

        <BrainCircuit
          size={54}
          strokeWidth={1.5}
          className="
            relative
            z-10
            text-white
            drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]
          "
        />

      </div>

      {/* HUB LABEL */}

      <div
        className="
          relative
          z-20
          mt-6
          rounded-full
          border
          border-white/25
          bg-white/95
          px-6
          py-3
          text-center
          shadow-[0_15px_35px_rgba(0,0,0,0.14)]
        "
      >

        <p
          className="
            text-[10px]
            font-black
            uppercase
            tracking-[0.22em]
            text-[#C8102E]
            sm:text-xs
          "
        >
          Fortuna Intelligence Layer
        </p>

        <p
          className="
            mt-1.5
            text-base
            font-black
            text-[#005F99]
            sm:text-lg
          "
        >
          Plan · Predict · Simulate · Align
        </p>

      </div>

    </div>

    {/* =================================================
        OUTPUT CARDS
    ================================================== */}

    <div
      className="
        mx-auto
        mt-12
        grid
        max-w-4xl
        grid-cols-2
        gap-4
        sm:grid-cols-4
      "
    >

      {intelligenceOutputs.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              group
              rounded-2xl
              border
              border-white/20
              bg-white/10
              p-5
              text-center
              shadow-[0_12px_30px_rgba(0,0,0,0.10)]
              backdrop-blur-md
              transition-all
              duration-200
              hover:-translate-y-1
              hover:bg-white/15
            "
          >

            <div
              className="
                mx-auto
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-white/20
                bg-white/15
              "
              style={{
                color: "#ffffff",
              }}
            >
              <Icon size={20} />
            </div>

            <p
              className="
                mt-3
                text-xs
                font-black
                uppercase
                tracking-[0.12em]
                text-white
              "
            >
              {item.title}
            </p>

            <p
              className="
                mt-1.5
                text-xs
                font-semibold
                text-white/70
              "
            >
              {item.text}
            </p>

          </div>
        );
      })}

    </div>

  </div>

</div>

          {/* =====================================================
              CAPABILITY CARDS
          ====================================================== */}

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.number}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white
                    bg-gradient-to-br
                    p-[1px]
                    shadow-[0_18px_50px_rgba(0,60,100,0.10)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_28px_65px_rgba(0,60,100,0.15)]
                  "
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${
                      capability.accent === "#C8102E"
                        ? "#C8102E"
                        : "#005F99"
                    }, ${
                      capability.accent === "#C8102E"
                        ? "#005F99"
                        : "#1879ae"
                    }, ${
                      capability.accent === "#C8102E"
                        ? "#e05b70"
                        : "#63a5c3"
                    })`,
                  }}
                >

                  <div
                    className={`
                      relative
                      h-full
                      overflow-hidden
                      rounded-[31px]
                      bg-gradient-to-br
                      ${capability.softGradient}
                      p-7
                      sm:p-8
                    `}
                  >

                    {/* CARD GLOW */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        h-52
                        w-52
                        rounded-full
                        bg-[#005F99]/7
                        blur-3xl
                        transition-all
                        duration-500
                        group-hover:scale-125
                      "
                    />

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -bottom-20
                        -left-20
                        h-44
                        w-44
                        rounded-full
                        bg-[#C8102E]/6
                        blur-3xl
                      "
                    />

                    {/* TOP ACCENT */}

                    <div
                      className="
                        absolute
                        inset-x-0
                        top-0
                        h-[4px]
                        bg-gradient-to-r
                        from-[#005F99]
                        via-[#C8102E]
                        to-[#005F99]
                      "
                    />

                    {/* HEADER */}

                    <div
                      className="
                        relative
                        flex
                        items-start
                        justify-between
                        gap-5
                      "
                    >

                      <div className="flex items-center gap-4">

                        <div
                          className="
                            flex
                            h-14
                            w-14
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            bg-gradient-to-br
                            from-[#005F99]
                            via-[#376f8c]
                            to-[#C8102E]
                            text-white
                            shadow-[0_12px_28px_rgba(0,70,110,0.18)]
                          "
                        >
                          <Icon
                            size={24}
                            strokeWidth={1.8}
                          />
                        </div>

                        <div>

                          <p
                            className="
                              text-[10px]
                              font-black
                              uppercase
                              tracking-[0.2em]
                              text-[#005F99]
                              sm:text-xs
                            "
                          >
                            Capability {capability.number}
                          </p>

                          <h3
                            className="
                              mt-1.5
                              bg-gradient-to-r
                              from-[#005F99]
                              via-[#1879ae]
                              to-[#C8102E]
                              bg-clip-text
                              text-xl
                              font-black
                              tracking-[-0.025em]
                              text-transparent
                              sm:text-2xl
                            "
                          >
                            {capability.title}
                          </h3>

                        </div>

                      </div>

                      <span
                        className="
                          text-4xl
                          font-black
                          tracking-[-0.05em]
                          text-[#005F99]/10
                          transition-all
                          duration-300
                          group-hover:text-[#C8102E]/15
                          sm:text-5xl
                        "
                      >
                        {capability.number}
                      </span>

                    </div>

                    {/* DESCRIPTION */}

                    <p
                      className="
                        relative
                        mt-6
                        text-base
                        font-medium
                        leading-8
                        text-[#005F99]/75
                        sm:text-lg
                        sm:leading-8
                      "
                    >
                      {capability.description}
                    </p>

                    {/* DIVIDER */}

                    <div
                      className="
                        relative
                        my-6
                        h-px
                        bg-gradient-to-r
                        from-[#005F99]/15
                        via-[#C8102E]/10
                        to-transparent
                      "
                    />

                    {/* POINTS */}

                    <div className="relative grid gap-2.5 sm:grid-cols-2">

                      {capability.points.map((point) => (
                        <div
                          key={point}
                          className="
                            flex
                            items-start
                            gap-2.5
                            rounded-xl
                            border
                            border-white/80
                            bg-white/75
                            px-4
                            py-3
                            shadow-sm
                          "
                        >

                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-[#C8102E]"
                          />

                          <span
                            className="
                              text-xs
                              font-bold
                              leading-5
                              text-[#005F99]
                              sm:text-sm
                            "
                          >
                            {point}
                          </span>

                        </div>
                      ))}

                    </div>

                    {/* FOOTER */}

                    <div
                      className="
                        relative
                        mt-7
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <div className="flex items-center gap-2.5">

                        <CircleDot
                          size={15}
                          className="text-[#C8102E]"
                        />

                        <span
                          className="
                            text-[10px]
                            font-black
                            uppercase
                            tracking-[0.16em]
                            text-[#005F99]
                            sm:text-xs
                          "
                        >
                          Intelligent Planning
                        </span>

                      </div>

                      <div
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          bg-white
                          shadow-sm
                        "
                      >
                        <ArrowRight
                          size={18}
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

                </article>
              );
            })}

          </div>

          {/* =====================================================
              PREMIUM ARCHITECTURE STRIP
          ====================================================== */}

          <div
            className="
              relative
              mt-8
              overflow-hidden
              rounded-[32px]
              bg-gradient-to-r
              from-[#005F99]
              via-[#376f8c]
              to-[#C8102E]
              p-[1px]
              shadow-[0_28px_75px_rgba(0,60,100,0.16)]
            "
          >

            <div
              className="
                relative
                overflow-hidden
                rounded-[31px]
                bg-gradient-to-br
                from-[#005F99]
                via-[#164e6a]
                to-[#C8102E]
                px-6
                py-8
                sm:px-8
                sm:py-9
              "
            >

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-56
                  w-56
                  rounded-full
                  bg-white/10
                  blur-3xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  -left-20
                  h-56
                  w-56
                  rounded-full
                  bg-white/10
                  blur-3xl
                "
              />

              <div
                className="
                  relative
                  flex
                  flex-col
                  gap-8
                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                "
              >

                <div className="max-w-2xl">

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-white/15
                        text-white
                      "
                    >
                      <CloudCog size={22} />
                    </div>

                    <p
                      className="
                        text-[10px]
                        font-black
                        uppercase
                        tracking-[0.24em]
                        text-white
                        sm:text-xs
                      "
                    >
                      Fortuna Intelligent Planning Cloud
                    </p>

                  </div>

                  <h3
                    className="
                      mt-5
                      text-3xl
                      font-black
                      leading-tight
                      tracking-[-0.035em]
                      text-white
                      sm:text-4xl
                    "
                  >
                    From Enterprise Data to
                    <span className="ml-2 text-white/70">
                      Executable Plans.
                    </span>
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-xl
                      text-base
                      font-medium
                      leading-7
                      text-white/80
                      sm:text-lg
                      sm:leading-8
                    "
                  >
                    Integrate planning signals, AI intelligence,
                    collaboration and execution into one connected
                    planning ecosystem.
                  </p>

                </div>

                {/* LAYERS */}

                <div
                  className="
                    grid
                    shrink-0
                    grid-cols-2
                    gap-2.5
                    sm:grid-cols-4
                  "
                >

                  {planningLayers.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="
                          flex
                          min-w-[110px]
                          flex-col
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-white/15
                          bg-white/10
                          px-4
                          py-4
                          text-center
                          transition-all
                          duration-200
                          hover:bg-white/15
                        "
                      >

                        <Icon
                          size={20}
                          className="text-white"
                        />

                        <span
                          className="
                            mt-2.5
                            text-[10px]
                            font-black
                            text-white
                            sm:text-xs
                          "
                        >
                          {item.label}
                        </span>

                      </div>
                    );
                  })}

                </div>

              </div>

            </div>

          </div>

          {/* =====================================================
              BOTTOM MESSAGE
          ====================================================== */}

          <div className="mx-auto mt-14 max-w-4xl text-center">

            <div className="flex items-center justify-center gap-3">

              <span className="h-px w-12 bg-[#C8102E]/30" />

              <Zap
                size={18}
                className="text-[#C8102E]"
              />

              <span className="h-px w-12 bg-[#005F99]/30" />

            </div>

            <p
              className="
                mt-6
                bg-gradient-to-r
                from-[#005F99]
                via-[#376f8c]
                to-[#C8102E]
                bg-clip-text
                text-base
                font-black
                leading-8
                text-transparent
                sm:text-lg
                sm:leading-9
              "
            >
              Transform planning from reactive coordination into proactive,
              connected and intelligent decision-making.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}