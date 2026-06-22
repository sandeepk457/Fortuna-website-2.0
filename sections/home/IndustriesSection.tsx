const industries = [
  {
    title: "Manufacturing",
    image: "/images/industries/manufacturing.png",
    description:
      "Production planning, supplier collaboration and inventory visibility.",
  },
  {
    title: "Retail & Distribution",
    image: "/images/industries/retail.png",
    description:
      "Demand forecasting, warehouse operations and order fulfillment.",
  },
  {
    title: "FMCG",
    image: "/images/industries/fmcg.png",
    description:
      "High-volume planning, distribution optimization and stock control.",
  },
  {
    title: "Pharmaceuticals",
    image: "/images/industries/pharma.png",
    description:
      "Batch traceability, compliance and cold-chain operations.",
  },
  {
    title: "Logistics & 3PL",
    image: "/images/industries/logistics.png",
    description:
      "Transportation, yard management and last-mile execution.",
  },
  {
    title: "Energy & Industrial",
    image: "/images/industries/energy.png",
    description:
      "Asset management, procurement and maintenance planning.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-[radial-gradient(circle_at_top_left,#EAF4FF,#FFFFFF,#FFF1F4)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#C8102E] font-semibold uppercase tracking-wider">
            Industries We Serve
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#005F99]">
            Built For Complex Supply Chains
          </h2>

          <p className="mt-6 text-slate-600 text-lg max-w-3xl mx-auto">
            Fortuna delivers industry-specific supply chain solutions
            across manufacturing, retail, logistics, pharmaceuticals,
            FMCG and industrial enterprises.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {industries.map((industry) => (
            <div
  key={industry.title}
  className="group h-[500px] overflow-hidden rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] hover:border-[#C8102E] transition-all duration-500"
>
            {/* Image */}
<div className="h-56 overflow-hidden">
  <img
    src={industry.image}
    alt={industry.title}
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
  />
</div>

{/* Content */}
<div className="p-7 flex flex-col justify-between h-[220px]">

  <div>
    <h3 className="text-3xl font-bold text-[#C8102E] mb-4">
      {industry.title}
    </h3>

    <p className="text-[#005F99] text-lg leading-relaxed">
      {industry.description}
    </p>
  </div>

  <button className="mt-6 text-[#C8102E] font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">
    Learn More →
  </button>

</div>
</div>
          ))}

        </div>

      </div>
    </section>
  );
}