import {
  Brain,
  Globe,
  Network,
  TrendingUp,
} from "lucide-react";

export default function GlobalVisionSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#031B34]">

        <div className="absolute inset-0 opacity-10">
  <img
    src="/images/world-map.png"
    alt=""
    className="w-full h-full object-cover"
  />
</div>

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#005F99]/20 blur-[150px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C8102E]/20 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-[#C8102E] font-semibold">
            GLOBAL VISION 2030
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-extrabold text-white">

            Building The Future Of

            <span className="block text-[#C8102E]">
              Intelligent Supply Chains
            </span>

          </h2>

          <p className="mt-8 text-slate-300 text-xl max-w-4xl mx-auto">
            Our vision is to create a globally connected,
            AI-powered supply chain ecosystem that enables
            enterprises to operate with complete visibility,
            agility and intelligence.
          </p>

        <div className="grid md:grid-cols-4 gap-6 mt-20">

  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
    <h3 className="text-[#C8102E] font-bold text-xl">
      AI First
    </h3>
    <p className="mt-3 text-slate-300">
      Intelligent automation and predictive decision making.
    </p>
  </div>

  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
    <h3 className="text-[#005F99] font-bold text-xl">
      Global Scalability
    </h3>
    <p className="mt-3 text-slate-300">
      Built for multi-site and global enterprise operations.
    </p>
  </div>

  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
    <h3 className="text-[#C8102E] font-bold text-xl">
      Connected Ecosystem
    </h3>
    <p className="mt-3 text-slate-300">
      Suppliers, warehouses and customers on one network.
    </p>
  </div>

  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
    <h3 className="text-[#005F99] font-bold text-xl">
      Operational Excellence
    </h3>
    <p className="mt-3 text-slate-300">
      Visibility, agility and performance across supply chains.
    </p>
  </div>
        </div>

      </div>
        </div>
    </section>
  );
}
