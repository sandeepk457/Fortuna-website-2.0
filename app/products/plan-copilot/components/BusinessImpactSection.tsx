"use client";

import type { ReactNode } from "react";

import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Gauge,
  Layers3,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound,
  Zap,
} from "lucide-react";

/* ============================================================
   BUSINESS IMPACT DATA
============================================================ */

const impactCards = [
  {
    number: "01",
    eyebrow: "PLANNING PERFORMANCE",
    title: "Better Forecast Accuracy",
    description:
      "Improve planning confidence by connecting demand signals, supply constraints and operational intelligence.",
    outcomes: [
      "More reliable forecasts",
      "Earlier demand visibility",
      "Improved planning confidence",
    ],
    accent: "blue",
    icon: TrendingUp,
  },
  {
    number: "02",
    eyebrow: "PLANNING AGILITY",
    title: "Faster Planning Cycles",
    description:
      "Move from disconnected spreadsheets and manual coordination to a continuously connected planning environment.",
    outcomes: [
      "Reduced planning effort",
      "Faster scenario evaluation",
      "Quicker decision cycles",
    ],
    accent: "red",
    icon: Gauge,
  },
  {
    number: "03",
    eyebrow: "RISK INTELLIGENCE",
    title: "Lower Supply & Inventory Risk",
    description:
      "Identify planning gaps, supply constraints and potential disruptions before they become operational problems.",
    outcomes: [
      "Early risk identification",
      "Balanced inventory decisions",
      "Proactive exception management",
    ],
    accent: "blue",
    icon: ShieldCheck,
  },
  {
    number: "04",
    eyebrow: "ENTERPRISE ALIGNMENT",
    title: "Stronger Collaboration",
    description:
      "Create one shared planning view across sales, operations, finance and logistics teams.",
    outcomes: [
      "Shared planning visibility",
      "Cross-functional alignment",
      "Faster consensus decisions",
    ],
    accent: "red",
    icon: UsersRound,
  },
];

const businessSignals = [
  {
    label: "Demand",
    sub: "Forecast",
    icon: TrendingUp,
  },
  {
    label: "Supply",
    sub: "Balance",
    icon: Layers3,
  },
  {
    label: "Inventory",
    sub: "Optimize",
    icon: BarChart3,
  },
  {
    label: "Finance",
    sub: "Align",
    icon: Gauge,
  },
];

/* ============================================================
   MAIN SECTION
============================================================ */

export default function BusinessImpactSection() {
  return (
    <section
      id="business-impact"
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
          BACKGROUND GRID
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-70
          bg-[linear-gradient(to_right,rgba(0,95,153,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(200,16,46,0.025)_1px,transparent_1px)]
          bg-[size:42px_42px]
        "
      />

      {/* BLUE GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          -left-44
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#005F99]/8
          blur-[120px]
        "
      />

      {/* RED GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          -right-44
          bottom-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#C8102E]/7
          blur-[120px]
        "
      />

      {/* ======================================================
          CONTAINER
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
            HEADER
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
              Business Impact
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
              Turn Planning Intelligence
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
              Into Business Impact.
            </span>
          </h2>

          {/* FORTUNA ACCENT */}

          <div className="mt-7 flex justify-center gap-2 sm:mt-8">
            <span className="h-1 w-14 rounded-full bg-[#C8102E] sm:w-16" />
            <span className="h-1 w-9 rounded-full bg-[#005F99] sm:w-10" />
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
            Fortuna Plan Co-Pilot transforms connected planning intelligence
            into faster decisions, lower risk and stronger operational
            performance across the enterprise.
          </p>
        </div>

        {/* ====================================================
            PREMIUM INTELLIGENCE FLOW
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-12
            max-w-5xl
            overflow-hidden
            rounded-[30px]
            bg-gradient-to-br
            from-[#005F99]
            via-[#174f6c]
            to-[#C8102E]
            p-[1px]
            shadow-[0_25px_70px_rgba(0,60,100,0.20)]
            sm:mt-16
            sm:rounded-[36px]
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[29px]
              bg-gradient-to-br
              from-[#064f78]
              via-[#123f56]
              to-[#a90f2a]
              px-5
              py-9
              sm:rounded-[35px]
              sm:px-10
              sm:py-12
            "
          >
            {/* ==================================================
                ANIMATED AMBIENT GLOWS
            =================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                -left-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-[#38bdf8]/20
                blur-[90px]
                animate-pulse
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-24
                -right-24
                h-72
                w-72
                rounded-full
                bg-[#fb3859]/20
                blur-[90px]
                animate-pulse
              "
            />

            {/* ==================================================
                GRID
            =================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.07]
                bg-[linear-gradient(to_right,rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.8)_1px,transparent_1px)]
                bg-[size:38px_38px]
              "
            />

            <div className="relative">
              {/* =================================================
                  CARD HEADER
              ================================================== */}

              <div className="text-center">
                <p
                  className="
                    text-[9px]
                    font-extrabold
                    uppercase
                    tracking-[0.22em]
                    text-white/60
                    sm:text-xs
                  "
                >
                  From Signals To Outcomes
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
                  One intelligent planning flow.
                </h3>
              </div>

              {/* =================================================
                  SIGNAL CARDS
              ================================================== */}

              <div
                className="
                  mt-8
                  grid
                  grid-cols-2
                  gap-3
                  sm:grid-cols-4
                  sm:gap-4
                "
              >
                {businessSignals.map((signal, index) => {
                  const Icon = signal.icon;

                  return (
                    <div
                      key={signal.label}
                      className="
                        group
                        relative
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        border-white/15
                        bg-white/10
                        px-3
                        py-3
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-white/30
                        hover:bg-white/15
                        sm:px-4
                        sm:py-4
                      "
                    >
                      {/* ICON */}

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
                          from-white/20
                          to-white/5
                          text-white
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
                            text-white
                          "
                        >
                          {signal.label}
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-[10px]
                            font-semibold
                            text-white/50
                          "
                        >
                          {signal.sub}
                        </p>
                      </div>

                      {/* SMALL SIGNAL PULSE */}

                      <span
                        className={`
                          absolute
                          right-2
                          top-2
                          h-1.5
                          w-1.5
                          rounded-full
                          ${
                            index % 2 === 0
                              ? "bg-[#49b7e9]"
                              : "bg-[#ff4a68]"
                          }
                          animate-pulse
                        `}
                      />
                    </div>
                  );
                })}
              </div>

              {/* =================================================
                  PREMIUM ORBIT
              ================================================== */}

              <div
                className="
                  relative
                  mx-auto
                  mt-10
                  flex
                  h-[260px]
                  w-full
                  max-w-[620px]
                  items-center
                  justify-center
                  overflow-hidden
                  sm:h-[300px]
                "
              >
                {/* OUTER ORBIT */}

                <div
                  className="
                    absolute
                    h-[225px]
                    w-[225px]
                    rounded-full
                    border
                    border-white/10
                    animate-[spin_20s_linear_infinite]
                    sm:h-[265px]
                    sm:w-[265px]
                  "
                />

                {/* SECOND ORBIT */}

                <div
                  className="
                    absolute
                    h-[170px]
                    w-[170px]
                    rounded-full
                    border
                    border-[#49b7e9]/20
                    animate-[spin_14s_linear_infinite_reverse]
                    sm:h-[205px]
                    sm:w-[205px]
                  "
                />

                {/* INNER ORBIT */}

                <div
                  className="
                    absolute
                    h-[120px]
                    w-[120px]
                    rounded-full
                    border
                    border-[#ff4a68]/25
                    sm:h-[145px]
                    sm:w-[145px]
                  "
                />

                {/* =================================================
                    ROTATING BLUE NODE
                ================================================== */}

                <div
                  className="
                    absolute
                    h-[225px]
                    w-[225px]
                    animate-[spin_20s_linear_infinite]
                    sm:h-[265px]
                    sm:w-[265px]
                  "
                >
                  <span
                    className="
                      absolute
                      left-1/2
                      top-0
                      h-3
                      w-3
                      -translate-x-1/2
                      rounded-full
                      bg-[#36a9dc]
                      shadow-[0_0_18px_rgba(54,169,220,0.9)]
                      animate-pulse
                    "
                  />
                </div>

                {/* =================================================
                    ROTATING RED NODE
                ================================================== */}

                <div
                  className="
                    absolute
                    h-[170px]
                    w-[170px]
                    animate-[spin_14s_linear_infinite_reverse]
                    sm:h-[205px]
                    sm:w-[205px]
                  "
                >
                  <span
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-3
                      w-3
                      -translate-x-1/2
                      rounded-full
                      bg-[#ef3655]
                      shadow-[0_0_18px_rgba(239,54,85,0.9)]
                      animate-pulse
                    "
                  />
                </div>

                {/* =================================================
                    CENTRAL INTELLIGENCE HUB
                ================================================== */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-28
                    w-28
                    items-center
                    justify-center
                    rounded-[30px]
                    bg-gradient-to-br
                    from-[#005F99]
                    via-[#356d89]
                    to-[#C8102E]
                    shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                    animate-pulse
                    sm:h-32
                    sm:w-32
                  "
                >
                  {/* INNER BORDER */}

                  <div
                    className="
                      absolute
                      inset-2
                      rounded-[25px]
                      border
                      border-white/20
                    "
                  />

                  {/* SHINE */}

                  <div
                    className="
                      absolute
                      inset-0
                      rounded-[30px]
                      bg-gradient-to-tr
                      from-transparent
                      via-white/10
                      to-white/20
                    "
                  />

                  <Sparkles
                    size={48}
                    strokeWidth={1.5}
                    className="
                      relative
                      z-10
                      text-white
                    "
                  />
                </div>

                {/* TOP LABEL */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-2
                    -translate-x-1/2
                    rounded-full
                    border
                    border-white/15
                    bg-white/10
                    px-3
                    py-1.5
                    text-[8px]
                    font-extrabold
                    uppercase
                    tracking-[0.18em]
                    text-white/70
                    backdrop-blur-md
                    sm:top-0
                    sm:text-[9px]
                  "
                >
                  Intelligent Planning
                </div>

                {/* BOTTOM LABEL */}

                <div
                  className="
                    absolute
                    bottom-1
                    left-1/2
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-full
                    border
                    border-white/15
                    bg-white/10
                    px-4
                    py-2
                    text-[9px]
                    font-extrabold
                    uppercase
                    tracking-[0.18em]
                    text-white/80
                    backdrop-blur-md
                    sm:bottom-0
                    sm:text-[10px]
                  "
                >
                  Connect · Simulate · Align · Execute
                </div>
              </div>

              {/* =================================================
                  INTELLIGENCE LABEL
              ================================================== */}

              <div className="my-3 flex items-center justify-center gap-3 sm:my-4">
                <span className="hidden h-px w-16 bg-white/20 sm:block" />

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/15
                    bg-white/10
                    px-4
                    py-2.5
                    backdrop-blur-md
                    animate-pulse
                  "
                >
                  <span
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-br
                      from-[#005F99]
                      to-[#C8102E]
                    "
                  >
                    <Sparkles
                      size={12}
                      className="text-white"
                    />
                  </span>

                  <span
                    className="
                      text-[9px]
                      font-extrabold
                      uppercase
                      tracking-[0.16em]
                      text-white
                      sm:text-[10px]
                    "
                  >
                    Plan Co-Pilot Intelligence
                  </span>
                </div>

                <span className="hidden h-px w-16 bg-white/20 sm:block" />
              </div>

              {/* =================================================
                  OUTCOME PILLS
              ================================================== */}

              <div
                className="
                  grid
                  gap-3
                  sm:grid-cols-3
                "
              >
                <OutcomePill
                  icon={<Zap size={15} />}
                  text="Decide Faster"
                />

                <OutcomePill
                  icon={<ShieldCheck size={15} />}
                  text="Reduce Risk"
                />

                <OutcomePill
                  icon={<TrendingUp size={15} />}
                  text="Improve Performance"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================
            BUSINESS IMPACT CARDS
        ===================================================== */}

        <div
          className="
            mt-8
            grid
            gap-5
            sm:mt-10
            sm:gap-6
            md:grid-cols-2
          "
        >
          {impactCards.map((card) => {
            const Icon = card.icon;
            const isRed = card.accent === "red";

            return (
              <article
                key={card.number}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#005F99]/10
                  bg-white
                  p-5
                  shadow-[0_15px_45px_rgba(0,60,100,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  hover:shadow-[0_25px_60px_rgba(0,60,100,0.15)]
                  sm:rounded-[32px]
                  sm:p-8
                "
              >
                {/* TOP GRADIENT */}

                <div
                  className={`
                    absolute
                    inset-x-0
                    top-0
                    h-1
                    ${
                      isRed
                        ? "bg-gradient-to-r from-[#C8102E] via-[#d8324e] to-[#005F99]"
                        : "bg-gradient-to-r from-[#005F99] via-[#1879ae] to-[#C8102E]"
                    }
                  `}
                />

                {/* CARD GLOW */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-44
                    w-44
                    rounded-full
                    blur-3xl
                    transition-transform
                    duration-500
                    group-hover:scale-125
                    ${
                      isRed
                        ? "bg-[#C8102E]/7"
                        : "bg-[#005F99]/7"
                    }
                  `}
                />

                {/* CARD HEADER */}

                <div
                  className="
                    relative
                    flex
                    items-start
                    justify-between
                    gap-4
                  "
                >
                  <div className="flex min-w-0 items-center gap-4">
                    {/* ICON */}

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
                        via-[#376f8c]
                        to-[#C8102E]
                        text-white
                        shadow-[0_10px_24px_rgba(0,70,110,0.18)]
                        transition-transform
                        duration-300
                        group-hover:scale-110
                        group-hover:rotate-2
                      "
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          text-[9px]
                          font-extrabold
                          uppercase
                          tracking-[0.16em]
                          text-[#C8102E]
                          sm:text-[10px]
                          sm:tracking-[0.2em]
                        "
                      >
                        {card.eyebrow}
                      </p>

                      <h3
                        className="
                          mt-1
                          bg-gradient-to-r
                          from-[#005F99]
                          via-[#1879ae]
                          to-[#C8102E]
                          bg-clip-text
                          text-lg
                          font-extrabold
                          leading-tight
                          tracking-[-0.025em]
                          text-transparent
                          sm:text-2xl
                        "
                      >
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {/* NUMBER */}

                  <span
                    className="
                      shrink-0
                      text-3xl
                      font-extrabold
                      tracking-[-0.05em]
                      text-[#005F99]/10
                      transition-colors
                      duration-300
                      group-hover:text-[#C8102E]/15
                      sm:text-5xl
                    "
                  >
                    {card.number}
                  </span>
                </div>

                {/* DESCRIPTION */}

                <p
                  className="
                    relative
                    mt-5
                    text-sm
                    font-medium
                    leading-7
                    text-[#005F99]/70
                    sm:mt-6
                    sm:text-base
                    sm:leading-8
                  "
                >
                  {card.description}
                </p>

                {/* OUTCOMES */}

                <div
                  className="
                    relative
                    mt-5
                    grid
                    gap-2.5
                    sm:mt-6
                  "
                >
                  {card.outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="
                        flex
                        items-center
                        gap-2.5
                        rounded-xl
                        border
                        border-[#005F99]/7
                        bg-gradient-to-r
                        from-[#f6fbfd]
                        to-[#fff8f9]
                        px-3
                        py-2.5
                        transition-all
                        duration-200
                        group-hover:from-[#eef8fc]
                        group-hover:to-[#fff1f4]
                        sm:px-4
                        sm:py-3
                      "
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-[#C8102E]"
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
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>

                {/* FOOTER */}

                <div
                  className="
                    relative
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-[#005F99]/10
                    pt-4
                    sm:mt-7
                    sm:pt-5
                  "
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-[#C8102E]
                        animate-pulse
                      "
                    />

                    <span
                      className="
                        text-[9px]
                        font-extrabold
                        uppercase
                        tracking-[0.14em]
                        text-[#005F99]
                        sm:text-[10px]
                      "
                    >
                      Business Outcome
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-[#f5f9fb]
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:bg-[#fff1f4]
                      sm:h-9
                      sm:w-9
                    "
                  >
                    <ArrowUpRight
                      size={16}
                      className="text-[#C8102E]"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ====================================================
            FINAL STATEMENT
        ===================================================== */}

        <div className="mx-auto mt-12 max-w-4xl text-center sm:mt-16">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C8102E]/30 sm:w-14" />

            <Target
              size={17}
              className="text-[#005F99]"
            />

            <span className="h-px w-10 bg-[#005F99]/30 sm:w-14" />
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
              Connect the signals.
            </span>{" "}
            <span className="text-[#C8102E]">
              Understand the impact.
            </span>{" "}
            <span className="text-[#005F99]">
              Act with confidence.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   OUTCOME PILL
============================================================ */

function OutcomePill({
  icon,
  text,
}: {
  icon: ReactNode;
  text: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-center
        gap-2.5
        rounded-full
        border
        border-white/20
        bg-white/10
        px-4
        py-3
        text-xs
        font-extrabold
        text-white
        backdrop-blur-md
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:bg-white/15
      "
    >
      {icon}
      {text}
    </div>
  );
}