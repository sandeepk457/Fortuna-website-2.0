"use client";

import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-22">
      {/* =====================================================
          PAGE BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,95,153,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,95,153,0.035)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="absolute -left-48 top-10 h-[420px] w-[420px] rounded-full bg-[#005F99]/[0.055] blur-[120px]" />

        <div className="absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[#C8102E]/[0.05] blur-[120px]" />
      </div>

      {/* =====================================================
          HERO CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="relative z-20">

            {/* EYEBROW */}

            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#005F99]/10 bg-[#005F99]/[0.035] px-4 py-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#005F99] to-[#187caf] text-white">
                <Cpu size={13} />
              </span>

              <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#005F99] sm:text-[10px]">
                Enterprise Asset Management
              </span>
            </div>

            {/* MAIN HEADING */}

            <h1 className="mt-7 max-w-2xl text-[clamp(2.55rem,4.6vw,4.35rem)] font-black leading-[0.98] tracking-[-0.055em]">

              <span className="block bg-gradient-to-r from-[#005F99] via-[#0878b8] to-[#005F99] bg-clip-text pb-1 text-transparent">
                Manage Smarter.
              </span>

              <span className="mt-3 block bg-gradient-to-r from-[#C8102E] via-[#df2d49] to-[#C8102E] bg-clip-text pb-1 text-transparent">
                Maintain Proactively.
              </span>

              <span className="mt-3 block bg-gradient-to-r from-[#005F99] via-[#316e8a] to-[#C8102E] bg-clip-text pb-1 text-transparent">
                Perform Better.
              </span>

            </h1>

            {/* ACCENT */}

            <div className="mt-7 flex items-center gap-2">
              <span className="h-[4px] w-14 rounded-full bg-[#C8102E]" />
              <span className="h-[4px] w-9 rounded-full bg-[#005F99]" />
            </div>

            {/* DESCRIPTION */}

            <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Fortuna EAM is an intelligent Enterprise Asset Management
              platform designed to help organizations manage assets,
              maintenance and operational performance across the entire
              asset lifecycle.
            </p>

            <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-slate-500 sm:text-base sm:leading-8">
              Bring asset intelligence, predictive maintenance, monitoring
              and operational control together through one connected
              enterprise platform.
            </p>

            {/* BUTTON */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/request-demo"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#C8102E] px-7 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(200,16,46,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#b70f2b] hover:shadow-[0_18px_38px_rgba(200,16,46,0.27)]"
              >
                Request a Demo

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* TRUST */}

            <div className="mt-6 flex items-center gap-2.5">
              <CheckCircle2 size={16} className="text-[#005F99]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#005F99] sm:text-xs">
                Connected asset intelligence for modern enterprises
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT CORPORATE VISUAL
          ================================================== */}

          <div className="relative min-h-[470px] sm:min-h-[540px] lg:min-h-[590px]">

            {/* MAIN PANEL */}

            <div className="absolute inset-0 overflow-hidden rounded-[32px] border border-[#005F99]/15 bg-[#062f43] shadow-[0_30px_90px_rgba(0,60,100,0.16)]">

              {/* INDUSTRIAL BACKGROUND */}

              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/images/products/fortuna-eam-hero-bg.png')",
                }}
              />

              {/* DARK OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-r from-[#062f43]/95 via-[#062f43]/65 to-[#062f43]/25" />

              {/* FORTUNA COLOR OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-br from-[#005F99]/35 via-transparent to-[#C8102E]/30 mix-blend-screen" />

              {/* BOTTOM FADE */}

              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#062f43]/95 via-[#062f43]/40 to-transparent" />

              {/* GRID */}

              <div
                className="pointer-events-none absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "34px 34px",
                }}
              />

              {/* =================================================
                  TOP LABEL
              ================================================== */}

              <div className="absolute left-6 top-6 z-50 sm:left-8 sm:top-8">
                <div className="flex items-center gap-2 rounded-full border border-white/15 bg-[#062f43]/65 px-4 py-2.5 backdrop-blur-md">

                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#C8102E] shadow-[0_0_12px_rgba(200,16,46,0.8)]" />

                  <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-white/85 sm:text-[10px]">
                    Connected Asset Intelligence
                  </span>

                </div>
              </div>

              {/* =================================================
                  CONNECTION NETWORK
              ================================================== */}

              <div className="absolute inset-x-0 top-[48%] z-20 h-[230px] -translate-y-1/2 sm:h-[270px]">

                <svg
                  viewBox="0 0 800 300"
                  className="absolute inset-0 h-full w-full overflow-visible"
                  fill="none"
                  preserveAspectRatio="none"
                >

                  {/* =================================================
                      LEFT ASSET → CENTER
                  ================================================== */}

                  <path
                    d="M145 150 C175 150 195 150 225 150"
                    stroke="#36AEE0"
                    strokeWidth="1.8"
                    strokeOpacity="0.85"
                  />

                  {/* =================================================
                      SENSOR → CENTER
                  ================================================== */}

                  <path
                    d="M205 45 C245 48 265 70 300 105"
                    stroke="#ff5068"
                    strokeWidth="1.5"
                    strokeOpacity="0.8"
                  />

                  {/* =================================================
                      CENTER → ANALYTICS
                  ================================================== */}

                  <path
                    d="M500 105 C535 70 555 48 595 45"
                    stroke="#ff5068"
                    strokeWidth="1.5"
                    strokeOpacity="0.8"
                  />

                  {/* =================================================
                      CENTER → INSIGHTS
                  ================================================== */}

                  <path
                    d="M575 150 C605 150 625 150 655 150"
                    stroke="#36AEE0"
                    strokeWidth="1.8"
                    strokeOpacity="0.85"
                  />

                  {/* =================================================
                      LOWER CENTER CONNECTION
                  ================================================== */}

                  <path
                    d="M300 190 C350 230 450 230 500 190"
                    stroke="#36AEE0"
                    strokeWidth="1.3"
                    strokeOpacity="0.55"
                  />

                  {/* =================================================
                      BLUE MOVING PARTICLE — ASSET
                  ================================================== */}

                  <circle r="4" fill="#62c5ee">

                    <animateMotion
                      dur="3.5s"
                      repeatCount="indefinite"
                      path="M145 150 C175 150 195 150 225 150"
                    />

                  </circle>

                  {/* =================================================
                      RED MOVING PARTICLE — SENSOR
                  ================================================== */}

                  <circle r="3.5" fill="#ff7185">

                    <animateMotion
                      dur="3.8s"
                      repeatCount="indefinite"
                      path="M205 45 C245 48 265 70 300 105"
                    />

                  </circle>

                  {/* =================================================
                      RED MOVING PARTICLE — ANALYTICS
                  ================================================== */}

                  <circle r="3.5" fill="#ff7185">

                    <animateMotion
                      dur="3.8s"
                      begin="1.3s"
                      repeatCount="indefinite"
                      path="M500 105 C535 70 555 48 595 45"
                    />

                  </circle>

                  {/* =================================================
                      BLUE MOVING PARTICLE — INSIGHTS
                  ================================================== */}

                  <circle r="4" fill="#62c5ee">

                    <animateMotion
                      dur="3.5s"
                      begin="1.5s"
                      repeatCount="indefinite"
                      path="M575 150 C605 150 625 150 655 150"
                    />

                  </circle>

                  {/* =================================================
                      LOWER PARTICLE
                  ================================================== */}

                  <circle r="3" fill="#36AEE0">

                    <animateMotion
                      dur="4s"
                      begin="0.8s"
                      repeatCount="indefinite"
                      path="M300 190 C350 230 450 230 500 190"
                    />

                  </circle>

                  {/* =================================================
                      CONNECTION ANCHOR POINTS
                  ================================================== */}

                  {/* Assets anchor */}

                  <circle
                    cx="145"
                    cy="150"
                    r="4"
                    fill="#36AEE0"
                  />

                  <circle
                    cx="225"
                    cy="150"
                    r="3.5"
                    fill="#36AEE0"
                  />

                  {/* Sensors */}

                  <circle
                    cx="205"
                    cy="45"
                    r="4"
                    fill="#ff5068"
                  />

                  <circle
                    cx="300"
                    cy="105"
                    r="3.5"
                    fill="#ff5068"
                  />

                  {/* Analytics */}

                  <circle
                    cx="595"
                    cy="45"
                    r="4"
                    fill="#ff5068"
                  />

                  <circle
                    cx="500"
                    cy="105"
                    r="3.5"
                    fill="#ff5068"
                  />

                  {/* Insights */}

                  <circle
                    cx="575"
                    cy="150"
                    r="3.5"
                    fill="#36AEE0"
                  />

                  <circle
                    cx="655"
                    cy="150"
                    r="4"
                    fill="#36AEE0"
                  />

                </svg>

                {/* =================================================
                    ASSETS CARD
                ================================================== */}

                <NetworkNode
                  className="absolute left-[4%] top-1/2 -translate-y-1/2"
                  color="blue"
                  label="Assets"
                />

                {/* =================================================
                    SENSORS CARD
                ================================================== */}

                <NetworkNode
                  className="absolute left-[12%] top-0"
                  color="red"
                  label="Sensors"
                  small
                />

                {/* =================================================
                    INSIGHTS CARD
                ================================================== */}

                <NetworkNode
                  className="absolute right-[4%] top-1/2 -translate-y-1/2"
                  color="blue"
                  label="Insights"
                />

                {/* =================================================
                    ANALYTICS CARD
                ================================================== */}

                <NetworkNode
                  className="absolute right-[12%] top-0"
                  color="red"
                  label="Analytics"
                  small
                />

                {/* =================================================
                    CENTRAL EAM PANEL
                ================================================== */}

                <div className="absolute left-1/2 top-1/2 z-40 w-[52%] max-w-[410px] -translate-x-1/2 -translate-y-1/2">

                  <div className="relative">

                    {/* BRAND GLOW */}

                    <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-[#005F99]/30 via-white/10 to-[#C8102E]/25 blur-[40px]" />

                    {/* LOGO CARD */}

                    <div className="relative rounded-3xl border border-white/15 bg-[#062f43]/70 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-7">

                      <img
                        src="/images/products/Fortuna-EAM.png"
                        alt="Fortuna EAM"
                        className="relative z-10 w-full object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)]"
                      />

                    </div>

                  </div>
                </div>

              </div>

              {/* =================================================
                  CENTER STATUS
              ================================================== */}

              <div className="absolute bottom-[17%] left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-[#062f43]/80 px-4 py-2 shadow-[0_10px_28px_rgba(0,0,0,0.25)] backdrop-blur-md">

                <div className="flex items-center gap-2">

                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#005F99] to-[#C8102E] text-white">
                    <Sparkles size={10} />
                  </span>

                  <span className="text-[8px] font-extrabold uppercase tracking-[0.16em] text-white/90 sm:text-[9px]">
                    One Connected Asset Platform
                  </span>

                </div>

              </div>

              {/* =================================================
                  BOTTOM INFORMATION
              ================================================== */}

              <div className="absolute bottom-6 left-6 right-6 z-50 border-t border-white/15 pt-4 sm:bottom-7 sm:left-8 sm:right-8">

                <div className="flex items-center justify-between gap-3">

                  <div>

                    <p className="text-[8px] font-extrabold uppercase tracking-[0.18em] text-[#ff7185]">
                      Intelligent Operations
                    </p>

                    <p className="mt-1 text-xs font-bold text-white/90 sm:text-sm">
                      Monitor · Predict · Maintain · Optimize
                    </p>

                  </div>

                  <div className="hidden items-center gap-2 sm:flex">

                    <MiniStatus
                      icon={<ShieldCheck size={12} />}
                      text="Secure"
                    />

                    <MiniStatus
                      icon={<Cpu size={12} />}
                      text="Connected"
                    />

                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   NETWORK NODE
============================================================ */

function NetworkNode({
  className,
  color,
  label,
  small,
}: {
  className: string;
  color: "blue" | "red";
  label: string;
  small?: boolean;
}) {
  const blue = color === "blue";

  return (
    <div className={`${className} z-50`}>

      <div
        className={`
          flex
          items-center
          gap-2
          rounded-full
          border
          bg-[#062f43]/85
          px-2.5
          py-2
          shadow-[0_8px_22px_rgba(0,0,0,0.30)]
          backdrop-blur-md
          ${
            blue
              ? "border-[#36AEE0]/45"
              : "border-[#ff5068]/45"
          }
        `}
      >

        {/* NODE ICON */}

        <span
          className={`
            relative
            flex
            items-center
            justify-center
            rounded-full
            ${
              small
                ? "h-6 w-6"
                : "h-7 w-7"
            }
            ${
              blue
                ? "bg-[#005F99]/45"
                : "bg-[#C8102E]/45"
            }
          `}
        >

          <span
            className={`
              h-2
              w-2
              animate-pulse
              rounded-full
              ${
                blue
                  ? "bg-[#36AEE0] shadow-[0_0_12px_rgba(54,174,224,0.9)]"
                  : "bg-[#ff5068] shadow-[0_0_12px_rgba(255,80,104,0.9)]"
              }
            `}
          />

        </span>

        {/* LABEL */}

        <span
          className={`
            text-[8px]
            font-extrabold
            uppercase
            tracking-[0.12em]
            ${
              blue
                ? "text-[#62c5ee]"
                : "text-[#ff8094]"
            }
          `}
        >
          {label}
        </span>

      </div>

    </div>
  );
}

/* ============================================================
   MINI STATUS
============================================================ */

function MiniStatus({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[#062f43]/65 px-2.5 py-1.5 backdrop-blur-md">

      <span className="text-[#62c5ee]">
        {icon}
      </span>

      <span className="text-[8px] font-bold uppercase tracking-[0.08em] text-white/65">
        {text}
      </span>

    </div>
  );
}