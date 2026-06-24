import {
  Brain,
  Radar,
  Network,
  Trophy,
} from "lucide-react";

export default function InnovationFrameworkSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">

      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-[#005F99]/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-[#C8102E]/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}

        <div className="text-center mb-20">

          <span className="uppercase tracking-[4px] text-[#C8102E] font-semibold">
            FORTUNA INNOVATION FRAMEWORK
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-extrabold">

            <span className="text-[#005F99]">
              Intelligence.
            </span>

            <span className="text-[#C8102E]">
              {" "}Connection.
            </span>

            <span className="block text-[#005F99]">
              Excellence.
            </span>

          </h2>

          <p className="mt-8 max-w-4xl mx-auto text-slate-600 text-lg">
            Fortuna combines AI, digital visibility,
            connected ecosystems and operational excellence
            to help enterprises build resilient and intelligent
            supply chains.
          </p>

        </div>

      </div>

      <div className="relative mb-24">

  <div
    className="
    absolute
    -inset-6
    bg-gradient-to-r
    from-[#005F99]/20
    to-[#C8102E]/20
    blur-3xl
    rounded-[40px]
    "
  />

  <img
    src="/images/about/fortuna-innovation-framework.png"
    alt="Fortuna Innovation Framework"
    className="
    relative
    rounded-[40px]
    shadow-2xl
    border
    border-white
    "
  />

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:-translate-y-2 transition-all duration-500">

  <Brain className="text-[#C8102E]" size={40} />

  <h3 className="mt-6 text-2xl font-bold text-[#005F99]">
    AI Intelligence
  </h3>

  <p className="mt-4 text-slate-600">
    Predictive analytics, forecasting and intelligent automation.
  </p>

</div>


<div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:-translate-y-2 transition-all duration-500">

  <Radar className="text-[#005F99]" size={40} />

  <h3 className="mt-6 text-2xl font-bold text-[#005F99]">
    Digital Control Tower
  </h3>

  <p className="mt-4 text-slate-600">
    Real-time visibility across planning, procurement,
    inventory, warehousing and transportation operations.
  </p>

</div>

<div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:-translate-y-2 transition-all duration-500">

  <Network className="text-[#C8102E]" size={40} />

  <h3 className="mt-6 text-2xl font-bold text-[#005F99]">
    Connected Ecosystem
  </h3>

  <p className="mt-4 text-slate-600">
    Seamlessly connect suppliers, warehouses,
    logistics partners and customers through
    one intelligent digital network.
  </p>

</div>

<div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:-translate-y-2 transition-all duration-500">

  <Trophy className="text-[#005F99]" size={40} />

  <h3 className="mt-6 text-2xl font-bold text-[#005F99]">
    Operational Excellence
  </h3>

  <p className="mt-4 text-slate-600">
    Improve efficiency, agility and business
    performance through intelligent execution
    and continuous optimization.
  </p>

</div>

</div>




    </section>

    

  );
}