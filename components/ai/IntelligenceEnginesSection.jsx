import {
  BrainCircuit,
  Network,
  Target,
  Cog,
  Eye,
  MessageSquareText,
} from "lucide-react";



export default function IntelligenceEnginesSection() {
 const engines = [
{
  title: "Predictive Engine",
  icon: BrainCircuit,
  color: "#005F99",
  desc: "Forecast demand shifts, supplier risks and disruptions before they occur."
},
{
  title: "Optimization Engine",
  icon: Network,
  color: "#005F99",
  desc: "Optimize inventory levels, transportation routes and warehouse operations."
},
{
  title: "Decision Engine",
  icon: Target,
  color: "#C8102E",
  desc: "Transform operational signals into intelligent recommendations."
},
{
  title: "Automation Engine",
  icon: Cog,
  color: "#C8102E",
  desc: "Automatically trigger workflows, approvals and corrective actions."
},
{
  title: "Visibility Engine",
  icon: Eye,
  color: "#005F99",
  desc: "Provide real-time visibility across inventory and logistics operations."
},
{
  title: "Copilot Engine",
  icon: MessageSquareText,
  color: "#C8102E",
  desc: "Interact with enterprise data using natural language."
},
];


  return (
    <section className="relative py-32 overflow-hidden bg-white">
  
  <div
    className="
      absolute
      inset-0
      bg-center
      bg-cover
      bg-no-repeat
      opacity-70
      pointer-events-none
    "
    style={{
      backgroundImage:
        "url('/images/ai/intelligence-engines-bg.png')"
    }}
  />

  <div className="absolute inset-0 bg-white/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

      {/* Hexagon Background */}

      {/* Left Hexagons */}

<div className="absolute left-[-150px] top-[80px] opacity-[0.12]">

  <img
    src="/images/ai/hexagon-blue.svg"
    alt=""
    className="w-[450px]"
  />

</div>

{/* Right Hexagons */}

<div className="absolute right-[-150px] bottom-[80px] opacity-[0.12]">

  <img
    src="/images/ai/hexagon-red.svg"
    alt=""
    className="w-[450px]"
  />

</div>

      {/* Header */}

      <div className="text-center mb-20">

  <span className="uppercase tracking-[4px] text-[#C8102E] font-semibold">
    THE INTELLIGENCE ENGINES
  </span>

  <h2 className="mt-6 text-6xl font-extrabold">

    <span className="text-[#005F99]">
      Six AI Engines Behind Every
    </span>

    <span className="block text-[#C8102E]">
      Intelligent Decision
    </span>

  </h2>

  <p className="mt-8 max-w-4xl mx-auto text-xl text-slate-600">
    Fortuna IntelliAI is powered by six specialized intelligence
    engines that continuously analyze, optimize and automate
    supply chain operations.
  </p>

</div>

<div className="grid md:grid-cols-3 gap-8">

  {engines.map((engine) => {

    const Icon = engine.icon;

    return (

      <div
        key={engine.title}
        className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-8
        shadow-xl
        hover:-translate-y-2
        transition-all
        duration-500
        "
      >

        <div
          className="
          w-20
          h-20
          rounded-3xl
          flex
          items-center
          justify-center
          "
          style={{
            background:
              engine.color === "#005F99"
              ? "rgba(0,95,153,0.08)"
              : "rgba(200,16,46,0.08)"
          }}
        >

          <Icon
            size={42}
            color={engine.color}
          />

        </div>

        <h3
          className="mt-8 text-3xl font-bold"
          style={{ color: engine.color }}
        >
          {engine.title}
        </h3>

        <p className="mt-4 text-slate-600 leading-relaxed">
          {engine.desc}
        </p>

      </div>

    );
  })}

</div>

      {/* 6 Engine Cards */}

      

     
      {/* Bottom Statement */}

      <div className="mt-20">

  <div
   className="
bg-white
border
border-slate-200
rounded-3xl
p-8

shadow-xl

hover:-translate-y-3
hover:border-[#005F99]/30
hover:shadow-[0_25px_60px_rgba(0,95,153,0.12)]

transition-all
duration-500
"
  >

    <p className="text-2xl text-center">

      Together these six engines form the core of

      <span className="font-bold text-[#005F99]">
        {" "}Fortuna IntelliAI{" "}
      </span>

      helping enterprises

      <span className="font-bold text-[#005F99]">
        predict
      </span>

      ,

      <span className="font-bold text-[#C8102E]">
        {" "}decide{" "}
      </span>

      and

      <span className="font-bold text-[#C8102E]">
        {" "}execute
      </span>

      with speed and confidence.

    </p>

  </div>

</div>

</div>
    </section>
  );
}