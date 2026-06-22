const products = [
  {
    name: "Fortuna SIMS",
    description: "Supply & Inventory Management System",
    icon: "/images/products/F_SIMS.png",
  },
  {
    name: "Fortuna TMS",
    description: "Transportation Management System",
    icon: "/images/products/Fortuna-TMS.png",
  },
  {
    name: "Fortuna DemandSense",
    description: "AI Demand Forecasting Platform",
    icon: "/images/products/Fortuna_DMNDS.png",
  },
  {
    name: "Fortuna Plan Copilot",
    description: "AI Planning Assistant",
    icon: "/images/products/Fortuna Copilot.png",
  },
  {
    name: "Fortuna YardSync",
    description: "Yard & Dock Management",
    icon: "/images/products/Fortuna-Yardsync.png",
  },
  {
    name: "Fortuna Lastmile AI",
    description: "Last Mile Execution Platform",
    icon: "/images/products/Fortuna-lastMile.png",
  },
  {
    name: "Fortuna Connect Hub",
    description: "Supply Chain Integration Hub",
    icon: "/images/products/Fortuna-Chub.png",
  },
  {
    name: "Fortuna EAM",
    description: "Enterprise Asset Management",
    icon: "/images/products/Fortuna-EAM.png",
  },
];

export default function EcosystemSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-red-50/30">

        {/* Background Effects */}
<div className="absolute top-0 left-0 h-96 w-96 bg-[#005F99]/10 blur-[120px] rounded-full"></div>

<div className="absolute bottom-0 right-0 h-96 w-96 bg-[#C8102E]/10 blur-[120px] rounded-full"></div>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-[#C8102E] font-semibold uppercase tracking-wider">
            Fortuna Ecosystem
          </span>

         <h2
  className="
  mt-4
  text-4xl
  md:text-5xl
  lg:text-6xl
  font-extrabold
  leading-tight
  bg-gradient-to-r
  from-[#005F99]
  via-[#C8102E]
  to-[#C8102E]
  bg-clip-text
  text-transparent
  "
>
  One Platform. Eight Intelligent Products.
</h2>

          <p className="mt-6 text-slate-600 text-lg max-w-3xl mx-auto">
            A complete suite of AI-powered supply chain applications
            designed to connect planning, procurement, warehousing,
            transportation and execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
  key={product.name}
  className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border
    border-slate-200
    bg-gradient-to-br
    from-white
    via-blue-50
    to-red-50
    p-8
    shadow-lg
    hover:shadow-2xl
    hover:-translate-y-3
    hover:border-[#C8102E]
    transition-all
    duration-500
  "
>
  {/* Gloss Effect */}
  <div className="absolute inset-0 overflow-hidden rounded-3xl">
    <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-[#005F99]/10 blur-3xl"></div>

    <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#C8102E]/10 blur-3xl"></div>

    <div className="absolute top-0 left-0 h-1/2 w-full bg-gradient-to-b from-white/50 to-transparent"></div>
  </div>

  {/* Content */}
  <div className="relative z-10">

    <img
      src={product.icon}
      alt={product.name}
      className="
        h-16
        object-contain
        mb-6
        transition-all
        duration-500
        group-hover:scale-110
      "
    />

    <h3
      className="
        text-xl
        font-bold
        text-[#005F99]
        group-hover:text-[#C8102E]
        transition-colors
        duration-300
      "
    >
      {product.name}
    </h3>

    <p className="mt-3 text-slate-600">
      {product.description}
    </p>

    <div className="mt-6 flex items-center font-semibold text-[#C8102E]">
      Learn More

      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
        →
      </span>
    </div>

  </div>
</div>
          ))}
        </div>

      </div>
    </section>
  );
}