"use client";

import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="plan-copilot-cta"
      className="
        relative
        overflow-hidden
        bg-white
        px-4
        py-20
        sm:px-6
        sm:py-24
        lg:px-8
        lg:py-28
      "
    >
      {/* =====================================================
          PAGE BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-50
          bg-[linear-gradient(to_right,rgba(0,95,153,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(200,16,46,0.025)_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#005F99]/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-10
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#C8102E]/10
          blur-[120px]
        "
      />

      {/* =====================================================
          MAIN CTA
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[32px]
          bg-gradient-to-br
          from-[#005F99]
          via-[#07394e]
          to-[#C8102E]
          p-[1px]
          shadow-[0_30px_80px_rgba(0,60,100,0.20)]
          sm:rounded-[40px]
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[31px]
            bg-[#082f43]
            px-6
            py-12
            sm:rounded-[39px]
            sm:px-10
            sm:py-16
            lg:px-16
            lg:py-20
          "
        >
          {/* =================================================
              INTERNAL GRID
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.06]
              bg-[linear-gradient(to_right,rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.9)_1px,transparent_1px)]
              bg-[size:36px_36px]
            "
          />

          {/* BLUE LIGHT */}

          <div
            className="
              pointer-events-none
              absolute
              -left-20
              top-10
              h-64
              w-64
              rounded-full
              bg-[#36b7ed]/15
              blur-[90px]
            "
          />

          {/* RED LIGHT */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              bottom-0
              h-64
              w-64
              rounded-full
              bg-[#ff4164]/15
              blur-[90px]
            "
          />

          {/* =================================================
              CONTENT GRID
          ================================================== */}

          <div
            className="
              relative
              z-10
              grid
              items-center
              gap-12
              lg:grid-cols-[1.15fr_0.85fr]
              lg:gap-16
            "
          >
            {/* =================================================
                LEFT
            ================================================== */}

            <div>
              {/* EYEBROW */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.07]
                  px-4
                  py-2.5
                  backdrop-blur-md
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
                    text-white
                  "
                >
                  <Sparkles size={13} />
                </span>

                <span
                  className="
                    text-[9px]
                    font-extrabold
                    uppercase
                    tracking-[0.2em]
                    text-white/80
                    sm:text-[10px]
                  "
                >
                  Fortuna Plan Co-Pilot
                </span>
              </div>

              {/* HEADING */}

              <h2
                className="
                  mt-7
                  max-w-3xl
                  text-[clamp(2.7rem,6vw,5.3rem)]
                  font-extrabold
                  leading-[0.98]
                  tracking-[-0.055em]
                "
              >
                <span className="block text-white">
                  Plan Smarter.
                </span>

                <span
                  className="
                    mt-3
                    block
                    bg-gradient-to-r
                    from-[#4cc7f5]
                    via-white
                    to-[#ff617a]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Decide Faster.
                </span>

                <span className="mt-3 block text-white">
                  Execute Better.
                </span>
              </h2>

              {/* ACCENT */}

              <div className="mt-7 flex items-center gap-2">
                <span className="h-1 w-16 rounded-full bg-[#C8102E]" />
                <span className="h-1 w-10 rounded-full bg-[#36b7ed]" />
              </div>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-base
                  font-medium
                  leading-7
                  text-white/65
                  sm:text-lg
                  sm:leading-8
                  lg:text-xl
                  lg:leading-9
                "
              >
                Connect demand, supply, inventory and financial
                planning through one intelligent layer built for
                faster, more confident enterprise decisions.
              </p>

              {/* =================================================
                  BUTTONS
              ================================================== */}

              <div
                className="
                  mt-9
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  sm:flex-wrap
                "
              >
                {/* PRIMARY */}

                <a
                  href="/request-demo"
                  className="
                    group
                    inline-flex
                    min-h-[54px]
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#C8102E]
                    px-7
                    text-sm
                    font-extrabold
                    text-white
                    shadow-[0_15px_35px_rgba(200,16,46,0.30)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#d91435]
                    hover:shadow-[0_20px_45px_rgba(200,16,46,0.38)]
                    sm:px-8
                  "
                >
                  Request a Demo

                  <ArrowRight
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </a>

                {/* SECONDARY */}

                
              </div>

              {/* TRUST LINE */}

              <div
                className="
                  mt-7
                  flex
                  items-center
                  gap-2.5
                "
              >
                <CheckCircle2
                  size={16}
                  className="text-[#36b7ed]"
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-white/45
                    sm:text-xs
                  "
                >
                  Intelligent planning for connected enterprises
                </span>
              </div>
            </div>

            {/* =================================================
                RIGHT VISUAL
            ================================================== */}

            <div className="relative mx-auto w-full max-w-[500px]">
              {/* OUTER ORBIT */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[310px]
                  w-[310px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-white/10
                  sm:h-[360px]
                  sm:w-[360px]
                "
              />

              {/* INNER ORBIT */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[240px]
                  w-[240px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#36b7ed]/15
                  sm:h-[285px]
                  sm:w-[285px]
                "
              />

              {/* =================================================
                  VISUAL CARD
              ================================================== */}

              <div
                className="
                  relative
                  flex
                  min-h-[350px]
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/15
                  bg-white/[0.06]
                  px-5
                  py-10
                  shadow-[0_30px_70px_rgba(0,0,0,0.25)]
                  backdrop-blur-xl
                  sm:min-h-[390px]
                  sm:rounded-[38px]
                "
              >
                {/* TOP INFO */}

                <div
                  className="
                    absolute
                    left-5
                    right-5
                    top-5
                    flex
                    items-start
                    justify-between
                  "
                >
                  <div>
                    <p
                      className="
                        text-[8px]
                        font-extrabold
                        uppercase
                        tracking-[0.22em]
                        text-white/40
                      "
                    >
                      Intelligent Planning
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        font-extrabold
                        text-white
                      "
                    >
                      Plan Co-Pilot
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-emerald-300/20
                      bg-emerald-300/10
                      px-3
                      py-1.5
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-emerald-300
                        animate-pulse
                      "
                    />

                    <span
                      className="
                        text-[8px]
                        font-extrabold
                        uppercase
                        tracking-[0.12em]
                        text-emerald-200
                      "
                    >
                      Active
                    </span>
                  </div>
                </div>

                {/* =================================================
                    SIGNAL CARDS
                ================================================== */}

                <MiniSignal
                  className="
                    absolute
                    left-4
                    top-[31%]
                    sm:left-6
                  "
                  icon={<TrendingUp size={15} />}
                  title="Demand"
                  text="Forecast"
                  red={false}
                />

                <MiniSignal
                  className="
                    absolute
                    right-4
                    top-[31%]
                    sm:right-6
                  "
                  icon={<LayersIcon />}
                  title="Supply"
                  text="Balance"
                  red
                />

                <MiniSignal
                  className="
                    absolute
                    bottom-[26%]
                    left-4
                    sm:left-6
                  "
                  icon={<Target size={15} />}
                  title="Inventory"
                  text="Optimize"
                  red={false}
                />

                <MiniSignal
                  className="
                    absolute
                    bottom-[26%]
                    right-4
                    sm:right-6
                  "
                  icon={<Zap size={15} />}
                  title="Finance"
                  text="Align"
                  red
                />

                {/* =================================================
                    CENTRAL CORE
                ================================================== */}

                <div
                  className="
                    relative
                    flex
                    h-[140px]
                    w-[140px]
                    items-center
                    justify-center
                    rounded-[36px]
                    bg-gradient-to-br
                    from-[#005F99]
                    via-[#376f8c]
                    to-[#C8102E]
                    shadow-[0_25px_60px_rgba(0,0,0,0.32)]
                    sm:h-[165px]
                    sm:w-[165px]
                  "
                >
                  <div
                    className="
                      absolute
                      inset-3
                      rounded-[30px]
                      border
                      border-white/20
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-7
                      rounded-[24px]
                      border
                      border-white/10
                      bg-white/5
                    "
                  />

                  <BrainCircuit
                    size={58}
                    strokeWidth={1.35}
                    className="
                      relative
                      z-10
                      text-white
                    "
                  />

                  {/* CORE DOT */}

                  <span
                    className="
                      absolute
                      right-4
                      top-4
                      h-2
                      w-2
                      rounded-full
                      bg-[#55d6ff]
                      shadow-[0_0_15px_rgba(85,214,255,0.9)]
                      animate-pulse
                    "
                  />
                </div>

                {/* =================================================
                    BOTTOM LABEL
                ================================================== */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-1/2
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.07]
                    px-4
                    py-2
                    backdrop-blur-md
                  "
                >
                  <span
                    className="
                      text-[8px]
                      font-extrabold
                      uppercase
                      tracking-[0.2em]
                      text-white/60
                    "
                  >
                    Plan · Predict · Adapt
                  </span>
                </div>
              </div>

              {/* =================================================
                  AI BADGE
              ================================================== */}

              <div
  className="
    absolute
    bottom-5
    left-1/2
    z-30
    flex
    -translate-x-1/2
    items-center
    gap-3
    rounded-2xl
    border
    border-white/15
    bg-[#0b3448]/95
    px-4
    py-3
    shadow-[0_18px_40px_rgba(0,0,0,0.30)]
    backdrop-blur-xl
  "
>
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
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
                      text-[8px]
                      font-extrabold
                      uppercase
                      tracking-[0.18em]
                      text-[#ff667f]
                    "
                  >
                    AI Intelligence
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-xs
                      font-extrabold
                      text-white
                    "
                  >
                    Plan • Predict • Adapt
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              BOTTOM METRICS
          ================================================== */}

          <div
            className="
              relative
              z-10
              mt-12
              border-t
              border-white/10
              pt-7
              sm:mt-14
              sm:pt-8
            "
          >
            <div
              className="
                grid
                gap-5
                sm:grid-cols-3
                sm:divide-x
                sm:divide-white/10
              "
            >
              <Metric
                value="Connected"
                label="Planning Signals"
              />

              <Metric
                value="Intelligent"
                label="Decision Support"
              />

              <Metric
                value="Enterprise"
                label="Planning Visibility"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FINAL LINE
      ====================================================== */}

      <div className="relative mx-auto mt-10 max-w-3xl text-center">
        <p
          className="
            text-sm
            font-semibold
            leading-7
            text-[#005F99]/60
            sm:text-base
          "
        >
          One intelligent planning layer for better connected
          enterprise decisions.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   MINI SIGNAL
============================================================ */

function MiniSignal({
  className,
  icon,
  title,
  text,
  red,
}: {
  className: string;
  icon: React.ReactNode;
  title: string;
  text: string;
  red: boolean;
}) {
  return (
    <div className={className}>
      <div
        className={`
          flex
          items-center
          gap-2
          rounded-2xl
          border
          ${
            red
              ? "border-[#ff4164]/25"
              : "border-[#36b7ed]/25"
          }
          bg-white/[0.08]
          px-3
          py-2.5
          backdrop-blur-md
        `}
      >
        <div
          className={`
            flex
            h-7
            w-7
            shrink-0
            items-center
            justify-center
            rounded-xl
            ${
              red
                ? "bg-[#C8102E]/25 text-[#ff7187]"
                : "bg-[#005F99]/30 text-[#55c8f5]"
            }
          `}
        >
          {icon}
        </div>

        <div>
          <p
            className="
              text-[9px]
              font-extrabold
              text-white
              sm:text-[10px]
            "
          >
            {title}
          </p>

          <p
            className="
              mt-0.5
              text-[7px]
              font-bold
              uppercase
              tracking-[0.1em]
              text-white/40
            "
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   METRIC
============================================================ */

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <p
        className="
          text-sm
          font-extrabold
          text-white
          sm:text-base
        "
      >
        {value}
      </p>

      <p
        className="
          mt-1
          text-[9px]
          font-bold
          uppercase
          tracking-[0.15em]
          text-white/40
        "
      >
        {label}
      </p>
    </div>
  );
}

/* ============================================================
   SIMPLE ICON
============================================================ */

function LayersIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </svg>
  );
}