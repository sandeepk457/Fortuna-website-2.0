export default function HowIntelliAIPowersSection() {
  const steps = [
  {
    title: "Predict",
    icon: "🧠",
    desc: "Forecast demand changes, inventory risks and potential supply chain disruptions before they happen.",
    metric: "95%",
    label: "Forecast Accuracy",
    color: "#005F99"
  },
  {
    title: "Analyze",
    icon: "📊",
    desc: "Continuously process operational, inventory, transportation and warehouse data in real time.",
    metric: "500M+",
    label: "Data Signals Processed",
    color: "#005F99"
  },
  {
    title: "Decide",
    icon: "⚡",
    desc: "Generate intelligent recommendations that help teams make faster and more confident decisions.",
    metric: "70%",
    label: "Faster Decisions",
    color: "#C8102E"
  },
  {
    title: "Execute",
    icon: "🚀",
    desc: "Trigger workflows, alerts and actions directly across Fortuna products.",
    metric: "24x7",
    label: "Autonomous Actions",
    color: "#C8102E"
  }
];

  return (
    <section className="relative py-32 overflow-hidden bg-slate-50">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-[#005F99]/10 blur-[140px] rounded-full" />

      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[#C8102E]/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-[#C8102E] font-semibold">
            HOW INTELLI AI WORKS
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-extrabold">

            <span className="text-[#005F99]">
              How Intelli AI Powers
            </span>

            <span className="block text-[#C8102E]">
              Every Decision
            </span>

          </h2>

          <p className="mt-8 max-w-4xl mx-auto text-xl text-slate-600 leading-relaxed">

            From prediction to execution, Intelli AI continuously
            analyzes operational data, identifies opportunities
            and recommends actions across the entire supply chain.

          </p>

        </div>

        {/* Flow Section */}

        <div className="relative mt-24">

          {/* Main Line */}

            <div
  className="
    absolute

    top-[185px]
    left-0

    w-full
    h-[6px]

    rounded-full

    bg-gradient-to-r
    from-[#005F99]
    via-[#C8102E]
    to-[#005F99]

    shadow-[0_0_25px_rgba(0,95,153,0.25)]
  "
/>

        <div
  className="
    absolute

    top-[178px]
    left-0

    w-full
    h-[12px]

    rounded-full

    bg-gradient-to-r
    from-[#005F99]/20
    via-[#C8102E]/20
    to-[#005F99]/20

    blur-md
  "
/>


          {/* Glowing Nodes */}


<div className="absolute top-[182px] left-[11.5%] w-5 h-5 bg-[#005F99] rounded-full shadow-[0_0_20px_rgba(0,95,153,0.6)] animate-pulse z-30" />

<div className="absolute top-[182px] left-[37.5%] w-5 h-5 bg-[#005F99] rounded-full shadow-[0_0_20px_rgba(0,95,153,0.6)] animate-pulse z-30" />

<div className="absolute top-[182px] left-[63.5%] w-5 h-5 bg-[#C8102E] rounded-full shadow-[0_0_20px_rgba(200,16,46,0.6)] animate-pulse z-30" />

<div className="absolute top-[182px] left-[89.5%] w-5 h-5 bg-[#C8102E] rounded-full shadow-[0_0_20px_rgba(200,16,46,0.6)] animate-pulse z-30" />

          {/* Moving Data Packet */}

          
          {/* Cards */}

          <div className="grid md:grid-cols-4 gap-8 relative z-20 pt-10">

            {steps.map((step , index) => (

                
              <div
                key={step.title}
                className="
                    relative

                    bg-white/95
                    backdrop-blur-sm
                    rounded-3xl
                p-8
                border
                border-slate-200
                shadow-xl

                group

                hover:-translate-y-4
                hover:scale-[1.03]

                hover:shadow-[0_25px_70px_rgba(0,95,153,0.18)]

                transition-all
                duration-700
                "
              >

                <div
  className="
    absolute
    top-5
    right-5

    w-10
    h-10

    rounded-full

    bg-gradient-to-r
    from-[#005F99]
    to-[#C8102E]

    text-white
    text-base
    font-bold

    flex
    items-center
    justify-center
  "
>
  {index + 1}
</div>


                <div
                className="
                    w-20
                    h-20
                    rounded-3xl
                    flex
                    items-center
                    justify-center
                    text-4xl
                    mb-8

                    shadow-[0_10px_30px_rgba(0,95,153,0.15)]

                    group-hover:scale-110
                    group-hover:rotate-6

                    transition-all
                    duration-700
                "
                style={{
                    background:
                    step.color === "#005F99"
                        ? "rgba(0,95,153,0.10)"
                        : "rgba(200,16,46,0.10)",
                }}
                >
                {step.icon}
                </div>

               <h3
  className="text-2xl font-bold"
  style={{ color: step.color }}
>
  {step.title}
</h3>

<p className="mt-4 text-slate-600 leading-relaxed min-h-[130px]">
  {step.desc}
</p>

<div className="mt-6 border-t border-slate-100 pt-5">

  <div
    className="text-4xl font-extrabold"
    style={{ color: step.color }}
  >
    {step.metric}
  </div>

  <div className="text-base text-slate-500 mt-1">
    {step.label}
  </div>

</div>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom Statement */}

        <div className="mt-24">

          <div
            className="
              max-w-5xl
              mx-auto

              rounded-3xl

              bg-white

              border
              border-slate-200

              shadow-xl

              p-10
              text-center
            "
          >

            <h3 className="text-3xl font-bold text-[#005F99]">

              Predict. Analyze. Decide. Execute.

            </h3>

            <p className="mt-6 text-xl text-slate-600 leading-relaxed">

              Intelli AI transforms raw operational data into
              intelligent business outcomes by continuously
              learning, optimizing and orchestrating decisions
              across the Fortuna ecosystem.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}