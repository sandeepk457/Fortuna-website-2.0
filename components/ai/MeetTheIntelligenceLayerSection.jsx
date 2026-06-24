"use client";

import { motion } from "framer-motion";

function OrbitNode({
  size = 14,
  color = "#005F99",
  radius = 230,
  duration = 12,
}) {
  return (
    <motion.div
      className="absolute"
      animate={{ rotate: 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        width: radius * 2,
        height: radius * 2,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: size,
          height: size,
          marginLeft: -(size / 2),
          borderRadius: "999px",
          background: color,
          boxShadow: `0 0 20px ${color}`,
        }}
      />
    </motion.div>
  );
}
export default function MeetTheIntelligenceLayerSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-50">

      {/* Blue Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#005F99]/10 blur-[140px] rounded-full" />

      {/* Red Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C8102E]/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            <span className="uppercase tracking-[4px] text-[#C8102E] font-semibold">
              FORTUNA INTELLI AI
            </span>

            <h2 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">

              <span className="text-[#005F99]">
                Meet The
              </span>

              <span className="block text-[#C8102E]">
                Intelligence Layer
              </span>

            </h2>

            <p className="mt-8 text-slate-700 text-xl leading-relaxed max-w-2xl font-medium">
              Fortuna IntelliAI is the enterprise intelligence layer
              embedded across the Fortuna ecosystem.
            </p>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-2xl">
              It continuously analyzes operational data,
              detects patterns, predicts disruptions and
              recommends actions that help organizations
              make faster, smarter and more confident decisions.
            </p>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-2xl">
              From planning and procurement to inventory,
              warehousing, transportation and execution,
              IntelliAI transforms every supply chain process
              into an intelligent experience.
            </p>

            {/* Feature Chips */}
            <div className="mt-10 flex flex-wrap gap-4">

              <span
                className="
                px-5 py-3
                rounded-full
                bg-[#005F99]/10
                text-[#005F99]
                border border-[#005F99]/20
                font-semibold
                hover:bg-[#005F99]
                hover:text-white
                transition-all duration-300
              "
              >
                Predictive Analytics
              </span>

              <span
                className="
                px-5 py-3
                rounded-full
                bg-[#C8102E]/10
                text-[#C8102E]
                border border-[#C8102E]/20
                font-semibold
                hover:bg-[#C8102E]
                hover:text-white
                transition-all duration-300
              "
              >
                Decision Intelligence
              </span>

              <span
                className="
                px-5 py-3
                rounded-full
                bg-[#005F99]/10
                text-[#005F99]
                border border-[#005F99]/20
                font-semibold
                hover:bg-[#005F99]
                hover:text-white
                transition-all duration-300
              "
              >
                Autonomous Workflows
              </span>

              <span
                className="
                px-5 py-3
                rounded-full
                bg-[#C8102E]/10
                text-[#C8102E]
                border border-[#C8102E]/20
                font-semibold
                hover:bg-[#C8102E]
                hover:text-white
                transition-all duration-300
              "
              >
                Real-Time Visibility
              </span>

            </div>

            {/* Quote */}
            <div className="mt-12 border-l-4 border-[#C8102E] pl-6">

              <p className="text-2xl font-bold text-[#005F99] italic leading-relaxed">
                "Data tells you what happened.
                IntelliAI tells you what happens next."
              </p>

            </div>

          </div>

          {/* RIGHT CONTENT */}
<div className="relative flex justify-center items-center min-h-[650px]">

  {/* Main Blue Glow */}
  <div
    className="
      absolute
      w-[550px]
      h-[550px]
      bg-[#005F99]/15
      blur-[130px]
      rounded-full
      animate-pulse
      z-0
    "
  />

  {/* Secondary Red Glow */}
  <div
    className="
      absolute
      w-[650px]
      h-[650px]
      bg-[#C8102E]/10
      blur-[180px]
      rounded-full
      z-0
    "
  />

  {/* Outer Red Orbit Ring */}
  <div
    className="
      absolute
      z-10
      w-[560px]
      h-[560px]
      rounded-full
      border
      border-[#C8102E]/30
      shadow-[0_0_30px_rgba(200,16,46,0.20)]
      animate-spin
    "
    style={{
      animationDuration: "30s",
      animationDirection: "reverse",
    }}
  />

  {/* Main Blue Orbit Ring */}
  <div
    className="
      absolute
      z-10
      w-[460px]
      h-[460px]
      rounded-full
      border-2
      border-[#005F99]/40
      shadow-[0_0_40px_rgba(0,95,153,0.25)]
      animate-spin
    "
    style={{ animationDuration: "20s" }}
  />

  {/* Inner Orbit Ring */}
  <div
    className="
      absolute
      z-10
      w-[340px]
      h-[340px]
      rounded-full
      border
      border-[#005F99]/25
      animate-spin
    "
    style={{ animationDuration: "15s" }}
  />

  {/* Data Packet 1 */}
  <div
    className="
      absolute
      z-10
      top-[22%]
      left-[18%]
      w-5
      h-5
      bg-[#005F99]
      rounded-full
      shadow-[0_0_20px_rgba(0,95,153,0.7)]
      animate-ping
    "
  />

  {/* Data Packet 2 */}
  <div
    className="
      absolute
      z-10
      top-[70%]
      right-[18%]
      w-5
      h-5
      bg-[#C8102E]
      rounded-full
      shadow-[0_0_20px_rgba(200,16,46,0.7)]
      animate-ping
    "
    style={{ animationDelay: "1s" }}
  />

  {/* Data Packet 3 */}
  <div
    className="
      absolute
      z-10
      top-[40%]
      left-[10%]
      w-4
      h-4
      bg-[#005F99]
      rounded-full
      shadow-[0_0_20px_rgba(0,95,153,0.7)]
      animate-bounce
    "
  />

  {/* Data Packet 4 */}
  <div
    className="
      absolute
      z-10
      top-[35%]
      right-[12%]
      w-4
      h-4
      bg-[#C8102E]
      rounded-full
      shadow-[0_0_20px_rgba(200,16,46,0.7)]
      animate-bounce
    "
    style={{ animationDelay: "0.5s" }}
  />

    {/* Orbit Nodes */}

<OrbitNode
  color="#005F99"
  radius={230}
  duration={12}
/>

<OrbitNode
  color="#C8102E"
  radius={280}
  duration={18}
/>

<OrbitNode
  color="#005F99"
  radius={170}
  duration={9}
/>



  {/* Glass Card */}
  <div
  className="
    relative
    z-20
    flex
    justify-center
    items-center
  "
>
    <img
      src="/images/ai/intelliai-log1.png"
      alt="Fortuna IntelliAI"
      className="
  w-[650px]
  object-contain
  hover:scale-105
  transition-all
  duration-700
  drop-shadow-[0_0_60px_rgba(0,95,153,0.25)]
"
    />
  </div>

</div>

        </div>

      </div>
    </section>
  );
}