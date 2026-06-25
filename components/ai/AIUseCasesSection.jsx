import {
  ShoppingCart,
  Package,
  Warehouse,
  Truck,
  TrendingUp,
  MapPinned,
  ShieldAlert,
  Radar,
  Bot,
} from "lucide-react";

export default function AIUseCasesSection() {
  const useCases = [
    {
      title: "Procurement Intelligence",
      icon: ShoppingCart,
      metric: "15%",
      label: "Faster Procurement Cycles",
      desc: "Identify sourcing opportunities, predict supplier risks and automate procurement recommendations.",
      color: "#005F99",
    },
    {
      title: "Inventory Intelligence",
      icon: Package,
      metric: "30%",
      label: "Inventory Reduction",
      desc: "Optimize stock levels using demand, consumption and replenishment patterns.",
      color: "#005F99",
    },
    {
      title: "Warehouse Intelligence",
      icon: Warehouse,
      metric: "25%",
      label: "Productivity Increase",
      desc: "Improve picking productivity, slotting accuracy and labor utilization.",
      color: "#005F99",
    },
    {
      title: "Transportation Intelligence",
      icon: Truck,
      metric: "18%",
      label: "Logistics Cost Savings",
      desc: "Optimize route plans, reduce freight costs and improve on-time delivery.",
      color: "#C8102E",
    },
    {
      title: "Demand Intelligence",
      icon: TrendingUp,
      metric: "95%",
      label: "Forecast Accuracy",
      desc: "Forecast demand fluctuations using historical, seasonal and market signals.",
      color: "#C8102E",
    },
    {
      title: "Last Mile Intelligence",
      icon: MapPinned,
      metric: "22%",
      label: "Delivery Efficiency Gain",
      desc: "Improve delivery efficiency, ETA prediction and customer experience.",
      color: "#C8102E",
    },
    {
      title: "Supplier Risk Intelligence",
      icon: ShieldAlert,
      metric: "40%",
      label: "Faster Risk Detection",
      desc: "Detect supplier disruptions and compliance risks before they impact operations.",
      color: "#005F99",
    },
    {
      title: "Control Tower Intelligence",
      icon: Radar,
      metric: "24x7",
      label: "Real-Time Visibility",
      desc: "Monitor enterprise-wide operations through a unified AI-powered command center.",
      color: "#005F99",
    },
    {
      title: "Planning Copilot",
      icon: Bot,
      metric: "Instant",
      label: "AI Insights",
      desc: "Ask questions in natural language and receive planning recommendations instantly.",
      color: "#C8102E",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-slate-50">
      
      {/* Background Glow */}

      <div className="absolute left-0 top-0 w-[450px] h-[450px] bg-[#005F99]/10 blur-[180px] rounded-full" />

      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] bg-[#C8102E]/10 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-24">

          <span className="uppercase tracking-[4px] text-[#C8102E] font-semibold">
            INTELLIAI IN ACTION
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-extrabold">

            <span className="text-[#005F99]">
              AI Use Cases Across
            </span>

            <span className="block text-[#C8102E]">
              Every Supply Chain Function
            </span>

          </h2>

          <p className="mt-8 max-w-4xl mx-auto text-xl text-slate-600 leading-relaxed">
            From procurement to last-mile delivery,
            Fortuna IntelliAI continuously analyzes enterprise data,
            predicts risks and recommends actions that improve
            efficiency, visibility and decision quality.
          </p>

        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {useCases.map((item) => {

            const Icon = item.icon;

            return (

            <div
  key={item.title}
  className="
    group
    relative
    overflow-hidden

    bg-white/95
    backdrop-blur-sm

    rounded-3xl
    border
    border-slate-200

    p-8

    shadow-xl

    hover:-translate-y-4
    hover:scale-[1.02]

    hover:border-[#005F99]/30
    hover:shadow-[0_30px_80px_rgba(0,95,153,0.18)]

    transition-all
    duration-700
  "
>

  {/* Gradient Hover Overlay */}

  <div
    className="
      absolute
      inset-0

      opacity-0

      group-hover:opacity-100

      transition-all
      duration-700
    "
    style={{
      background:
        item.color === "#005F99"
          ? "linear-gradient(135deg, rgba(0,95,153,0.04), transparent 60%)"
          : "linear-gradient(135deg, rgba(200,16,46,0.04), transparent 60%)",
    }}
  />

  {/* Top Glow Line */}

  <div
    className="
      absolute
      top-0
      left-0

      h-[4px]
      w-0

      group-hover:w-full

      transition-all
      duration-700

      bg-gradient-to-r
      from-[#005F99]
      via-[#C8102E]
      to-[#005F99]
    "
  />

  {/* AI Badge */}

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
      text-sm
      font-bold

      flex
      items-center
      justify-center

      shadow-lg
    "
  >
    AI
  </div>

  {/* Content */}

  <div className="relative z-10">

    {/* Icon */}

    <div
      className="
        relative

        w-20
        h-20

        rounded-3xl

        flex
        items-center
        justify-center

        group-hover:scale-110
        group-hover:rotate-6

        transition-all
        duration-700
      "
    >

      {/* Glow */}

      <div
        className="
          absolute
          inset-0

          rounded-3xl
          blur-xl

          opacity-0

          group-hover:opacity-100

          transition-all
          duration-700
        "
        style={{
          background:
            item.color === "#005F99"
              ? "rgba(0,95,153,0.25)"
              : "rgba(200,16,46,0.25)",
        }}
      />

      <div
        className="
          relative
          w-full
          h-full

          rounded-3xl

          flex
          items-center
          justify-center
        "
        style={{
          background:
            item.color === "#005F99"
              ? "rgba(0,95,153,0.08)"
              : "rgba(200,16,46,0.08)",
        }}
      >
        <Icon
          size={42}
          color={item.color}
          strokeWidth={2.2}
        />
      </div>

    </div>

    {/* Title */}

    <h3
      className="mt-8 text-2xl font-bold"
      style={{ color: item.color }}
    >
      {item.title}
    </h3>

    {/* Description */}

    <p className="mt-4 text-slate-600 leading-relaxed min-h-[90px]">
      {item.desc}
    </p>

    {/* Metric */}

    <div className="mt-8 pt-6 border-t border-slate-100">

      <div
        className="text-5xl font-extrabold"
        style={{ color: item.color }}
      >
        {item.metric}
      </div>

      <div className="mt-2 text-slate-500 font-medium">
        {item.label}
      </div>

    </div>

  </div>

</div>

            );
          })}

        </div>

        {/* Bottom Statement */}

        <div className="mt-24">

          <div
            className="
              bg-white
              rounded-3xl
              border
              border-slate-200
              shadow-xl
              p-12
              text-center
            "
          >

            <h3 className="text-3xl font-bold text-[#005F99]">
              One AI Platform. Infinite Supply Chain Possibilities.
            </h3>

            <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Fortuna IntelliAI delivers intelligence across every process,
              enabling enterprises to predict, optimize and execute with confidence.
              From planning and procurement to logistics and last-mile delivery,
              AI becomes the decision layer powering your entire supply chain.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}