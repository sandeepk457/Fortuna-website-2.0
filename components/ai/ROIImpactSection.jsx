import {
  Package,
  TrendingUp,
  Warehouse,
  Truck,
  ShieldAlert,
  Radar,
} from "lucide-react";

export default function ROIImpactSection() {
  const metrics = [
  {
    value: "30%",
    title: "Inventory Reduction",
    desc: "Optimize stock levels and reduce inventory carrying costs.",
    icon: Package,
    color: "#005F99",
  },
  {
    value: "95%",
    title: "Forecast Accuracy",
    desc: "Improve demand planning and reduce forecasting uncertainty.",
    icon: TrendingUp,
    color: "#C8102E",
  },
  {
    value: "25%",
    title: "Warehouse Productivity",
    desc: "Increase throughput and labor efficiency across operations.",
    icon: Warehouse,
    color: "#005F99",
  },
  {
    value: "18%",
    title: "Logistics Cost Savings",
    desc: "Reduce transportation expenses through intelligent optimization.",
    icon: Truck,
    color: "#C8102E",
  },
  {
    value: "40%",
    title: "Faster Risk Detection",
    desc: "Identify disruptions and supply chain risks before impact.",
    icon: ShieldAlert,
    color: "#005F99",
  },
  {
    value: "24x7",
    title: "Supply Chain Visibility",
    desc: "Monitor enterprise-wide operations in real time.",
    icon: Radar,
    color: "#C8102E",
  },
];
  return (
    <section className="relative py-32 bg-slate-50 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-[450px] h-[450px] bg-[#005F99]/10 blur-[180px] rounded-full"></div>

      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] bg-[#C8102E]/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="uppercase tracking-[4px] text-[#C8102E] font-semibold">
            BUSINESS IMPACT
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-extrabold">
            <span className="text-[#005F99]">
              AI That Delivers
            </span>

            <span className="block text-[#C8102E]">
              Measurable Results
            </span>
          </h2>

          <p className="mt-8 max-w-4xl mx-auto text-xl text-slate-600 leading-relaxed">
            Fortuna IntelliAI enables organizations to achieve measurable
            improvements in planning, procurement, inventory, warehousing
            and logistics through predictive intelligence and automation.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {metrics.map((item, index) => {
  const Icon = item.icon;

  return (
    <div
      key={index}
      className="
        group
        relative
        overflow-hidden
        bg-white
        rounded-3xl
        border
        border-slate-200
        p-10
        shadow-xl
        hover:-translate-y-3
        hover:shadow-[0_30px_80px_rgba(0,95,153,0.15)]
        transition-all
        duration-700
      "
    >
      {/* Top Accent Line */}
      <div
        className="absolute top-0 left-0 h-1 w-full"
        style={{ backgroundColor: item.color }}
      />

      {/* Icon */}
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
        style={{
          backgroundColor:
            item.color === "#005F99"
              ? "rgba(0,95,153,0.08)"
              : "rgba(200,16,46,0.08)",
        }}
      >
        <Icon
          size={32}
          color={item.color}
          strokeWidth={2.2}
        />
      </div>

      {/* Value */}
      <div
        className="text-6xl font-extrabold"
        style={{ color: item.color }}
      >
        {item.value}
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {item.title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-slate-600 leading-relaxed">
        {item.desc}
      </p>
    </div>
  );
})}       </div>

        {/* Bottom Banner */}
        <div className="mt-24">
          <div className="bg-white border border-slate-200 rounded-3xl p-12 shadow-xl text-center">
            <h3 className="text-4xl font-bold text-[#005F99]">
              Every Decision Backed by Intelligence
            </h3>

            <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Fortuna IntelliAI empowers supply chain leaders to reduce costs,
              improve service levels, increase operational efficiency and build
              resilient supply chain networks through predictive intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}