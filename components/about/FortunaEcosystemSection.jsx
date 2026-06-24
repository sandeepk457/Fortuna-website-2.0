export default function FortunaEcosystemSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-[#C8102E] font-semibold">
            THE FORTUNA ECOSYSTEM
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-extrabold">

            <span className="text-[#005F99]">
              One Connected Platform.
            </span>

            <span className="block text-[#C8102E]">
              Infinite Possibilities.
            </span>

          </h2>

          <p className="mt-8 max-w-5xl mx-auto text-xl text-slate-600 leading-relaxed">

  One ecosystem. One intelligence layer. One version of truth.

  Fortuna unifies every supply chain function into a connected
  digital platform where data flows seamlessly across operations,
  decisions are powered by AI and every stakeholder works from
  a single source of intelligence.

</p>

<p className="mt-6 max-w-5xl mx-auto text-lg text-slate-500 leading-relaxed">

  From supplier collaboration and inventory optimization to
  transportation orchestration and last-mile execution,
  Fortuna enables enterprises to build resilient, agile and
  future-ready supply chains at global scale.

</p>

        </div>

      {/* Ecosystem Diagram */}
<div className="mt-24 flex justify-center">

  <div className="relative w-full max-w-7xl h-[950px]">

    {/* Background Industry Visuals */}

<div className="absolute inset-0 pointer-events-none">

  {/* Port Logistics */}

  <img
    src="/images/ecosystem/port-manufacturing-bg.png"
    alt=""
    className="
      absolute
      inset-0
      w-full
      h-full
      object-contain
      opacity-[0.08]
      select-none
    "
  />

</div>


{/* Left Port */}

<img
  src="/images/ai/port-logistics.png"
  alt=""
  className="
    absolute
    left-0
    top-[180px]
    w-[1000px]
    opacity-30
    pointer-events-none
  "
/>

{/* Right Plant */}

<img
  src="/images/ai/manufacturing-plant.png"
  alt=""
  className="
    absolute
    right-0
    top-[180px]
    w-[700px]
    opacity-30
    pointer-events-none
  "
/>

    {/* Background Glow */}

    <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-[#005F99]/10 blur-[120px] rounded-full" />

    <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-[#C8102E]/10 blur-[120px] rounded-full" />

    {/* IntelliAI Node */}

    <div
      className="
      absolute
      left-1/2
      top-0
      -translate-x-1/2
      z-20
      "
    >

      <div className="relative">

        <div
          className="
          absolute
          inset-0
          rounded-3xl
          bg-gradient-to-r
          from-[#005F99]
          to-[#C8102E]
          blur-3xl
          opacity-30
          animate-pulse
          "
        />

        <div
          className="
          relative
          px-20
          py-10
          rounded-3xl
          bg-gradient-to-r
          from-[#005F99]
          to-[#C8102E]
          text-white
          shadow-2xl
          "
        >

          <h3 className="text-4xl font-bold text-center">
            Fortuna IntelliAI
          </h3>

          <p className="mt-3 text-center text-white/90 text-lg">
            Enterprise Intelligence Layer
          </p>

        </div>

      </div>

    </div>

    {/* Vertical Line */}

    <div
      className="
      absolute
      left-1/2
      top-[170px]
      -translate-x-1/2
      w-[4px]
      h-[120px]
      bg-gradient-to-b
      from-[#005F99]
      to-[#C8102E]
      "
    />

    {/* Horizontal Line */}

    <div
      className="
      absolute
      top-[290px]
      left-1/2
      -translate-x-1/2
      w-[75%]
      h-[3px]
      bg-gradient-to-r
      from-[#005F99]
      via-[#C8102E]
      to-[#005F99]
      "
    />

    {/* Product Layer */}

    <div
      className="
      absolute
      top-[320px]
      left-1/2
      -translate-x-1/2
      flex
      gap-8
      flex-wrap
      justify-center
      items-center
        gap-10
        w-full
      "
    >

      {[
        {
          title: "SIMS",
          desc: "Inventory & Warehouse",
        },
        {
          title: "TMS",
          desc: "Transportation",
        },
        {
          title: "YardSync",
          desc: "Yard Operations",
        },
        {
          title: "Lastmile AI",
          desc: "Delivery Execution",
        },
      ].map((item) => (

        <div
          key={item.title}
          className="
          w-[220px]
          p-6
          rounded-3xl
          bg-white
          border border-slate-200
          shadow-xl

          hover:-translate-y-2
          hover:border-[#005F99]
          hover:shadow-[0_20px_60px_rgba(0,95,153,0.20)]

          transition-all
          duration-500
          "
        >

          <h4 className="text-xl font-bold text-[#005F99]">
            {item.title}
          </h4>

          <p className="mt-2 text-slate-500 text-sm">
            {item.desc}
          </p>

        </div>

      ))}

    </div>

    {/* Connect Hub */}

    <div
      className="
      absolute
      top-[560px]
      left-1/2
      -translate-x-1/2
      "
    >

      <div
        className="
        px-10
        py-6
        rounded-3xl
        bg-gradient-to-r
        from-[#005F99]
        to-[#C8102E]
        text-white
        shadow-xl
        "
      >

        <h4 className="text-2xl font-bold">
          Connect Hub
        </h4>

      </div>

    </div>

    {/* Connector */}

    <div
      className="
      absolute
      left-1/2
      top-[430px]
      -translate-x-1/2
      w-[4px]
      h-[90px]
      bg-gradient-to-b
      from-[#005F99]
      to-[#C8102E]
      "
    />

    {/* Lower Connector */}

    <div
      className="
      absolute
      top-[680px]
      left-1/2
      -translate-x-1/2
      w-[60%]
      h-[3px]
      bg-gradient-to-r
      from-[#005F99]
      via-[#C8102E]
      to-[#005F99]
      "
    />

   {/* Intelligence Layer */}

<div
  className="
  absolute
  top-[740px]
  left-1/2
  -translate-x-1/2

  flex
  items-center
  justify-center

  gap-8

  w-full
  "
>

  {[
    "DemandSense",
    "Plan Copilot",
    "EAM",
  ].map((item) => (

    <div
      key={item}
      className="
      w-[220px]
      h-[100px]

      flex
      items-center
      justify-center

      rounded-3xl

      bg-white

      border
      border-slate-200

      shadow-xl

      hover:-translate-y-2
      hover:border-[#C8102E]
      hover:shadow-[0_15px_40px_rgba(200,16,46,0.20)]

      transition-all
      duration-500

      cursor-pointer
      "
    >

      <span className="font-bold text-[#C8102E] text-lg text-center">
        {item}
      </span>

    </div>

  ))}

</div>

  </div>

</div>



      </div>

    </section>
  );
}