export default function SupplyChainNetworkSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#005F99]/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C8102E]/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <span className="uppercase tracking-[4px] text-[#C8102E] font-semibold">
              CONNECTED SUPPLY CHAIN
            </span>

            <h2 className="mt-4 text-5xl font-extrabold leading-tight">

              <span className="text-[#005F99]">
                One Platform.
              </span>

              <span className="block text-[#C8102E]">
                End-to-End Visibility.
              </span>

            </h2>

            <p className="mt-8 text-slate-600 text-lg leading-relaxed">
              Fortuna connects planning, procurement, inventory,
              warehousing, transportation and execution into
              one intelligent digital ecosystem.
            </p>

            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Eliminate silos, improve collaboration and gain
              real-time visibility across your global supply chain.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              <span className="px-4 py-2 rounded-full bg-[#005F99]/10 text-[#005F99] font-medium">
                AI Powered
              </span>

              <span className="px-4 py-2 rounded-full bg-[#C8102E]/10 text-[#C8102E] font-medium">
                Real-Time Visibility
              </span>

              <span className="px-4 py-2 rounded-full bg-[#005F99]/10 text-[#005F99] font-medium">
                Enterprise Scale
              </span>

            </div>

          </div>

{/* Right Image */}
<div className="relative group">

  {/* Glow */}
  <div
    className="
      absolute
      -inset-4
      bg-gradient-to-r
      from-[#005F99]/20
      to-[#C8102E]/20
      blur-3xl
      rounded-3xl
    "
  />

  {/* Animated Dots */}
  <div className="absolute inset-0 overflow-hidden rounded-3xl z-20">

    {/* Moving Data Packets */}
<div className="absolute inset-0 overflow-hidden rounded-3xl z-20">

  <div
    className="data-packet"
    style={{
      top: "28%",
      animationDelay: "0s",
    }}
  />

  <div
    className="data-packet data-packet-red"
    style={{
      top: "48%",
      animationDelay: "2s",
    }}
  />

  <div
    className="data-packet"
    style={{
      top: "68%",
      animationDelay: "4s",
    }}
  />

</div>

    <span className="absolute top-[20%] left-[10%] w-3 h-3 bg-[#005F99] rounded-full animate-ping" />

    <span className="absolute top-[40%] left-[45%] w-3 h-3 bg-[#C8102E] rounded-full animate-ping" />

    <span className="absolute top-[70%] left-[80%] w-3 h-3 bg-[#005F99] rounded-full animate-ping" />

    <span className="absolute top-[55%] left-[65%] w-3 h-3 bg-[#C8102E] rounded-full animate-ping" />

  </div>

  {/* Network Image */}
  <img
    src="/images/about/supply-chain-network.png"
    alt="Supply Chain Network"
    className="
      relative
      rounded-3xl
      shadow-2xl
      border
      border-white
      transition-all
      duration-700
      group-hover:scale-105
      animate-network
    "
  />

</div>

        </div>

      </div>

    </section>
  );
}