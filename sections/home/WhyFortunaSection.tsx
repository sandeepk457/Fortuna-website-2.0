import {
  BrainCircuit,
  Network,
  Globe2,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Powered Intelligence",
    description:
      "Predictive analytics, forecasting and optimization across the entire supply chain.",
  },
  {
    icon: Network,
    title: "Unified Platform",
    description:
      "Planning, procurement, warehousing, transportation and execution on one platform.",
  },
  {
    icon: Globe2,
    title: "Enterprise Scalability",
    description:
      "Built to support multi-site, multi-country and high-volume operations.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Grade Security",
    description:
      "Role-based access, audit trails and secure cloud architecture.",
  },
];

export default function WhyFortunaSection() {
  return (
    <section
      className="
        relative
        py-32
        overflow-hidden
        bg-gradient-to-br
        from-[#F8FBFF]
        via-white
        to-[#FFF4F6]
      "
    >
      {/* World Map Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img
          src="/images/world-map.png"
          alt="World Map"
          className="
            w-[1400px]
            max-w-none
            opacity-[0.12]
            object-contain
            mix-blend-multiply
          "
        />
      </div>

      {/* Left Blue Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#005F99]/10 blur-[140px] rounded-full" />

      {/* Right Red Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C8102E]/10 blur-[140px] rounded-full" />

     

  
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#C8102E] font-semibold uppercase tracking-[4px]">
            WHY FORTUNA
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-extrabold">
            <span className="text-[#005F99]">
              Why Global Enterprises
            </span>

            <span className="block text-[#C8102E]">
              Choose 'FORTUNA'
            </span>
          </h2>

          {/* Divider */}
          <div className="mt-8 w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-[#005F99] to-[#C8102E]" />

          <p className="mt-8 text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Purpose-built to deliver intelligence, visibility,
            automation and operational excellence across modern
            supply chains.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                bg-white/80
                backdrop-blur-xl
                border
                border-slate-200
                rounded-3xl
                p-8
                shadow-xl
                hover:shadow-2xl
                hover:border-[#C8102E]
                hover:-translate-y-3
                transition-all
                duration-500
              "
            >
              {(() => {
                const Icon = feature.icon;
                return (
                  <div className="mb-6">
                    <div className="
                      w-16 h-16
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#005F99]/10
                      to-[#C8102E]/10
                      flex items-center justify-center
                    ">
                      <Icon
                        size={34}
                        strokeWidth={2}
                        className="text-[#C8102E]"
                      />
                    </div>
                  </div>
                );
              })()}

              <h3 className="text-xl font-bold text-[#005F99] mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}