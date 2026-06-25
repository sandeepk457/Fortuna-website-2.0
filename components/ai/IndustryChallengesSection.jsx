
import {
  AlertTriangle,
  PackageX,
  Truck,
  TrendingDown,
  ShieldAlert,
  Clock3,
  Warehouse,
  BarChart3,
} from "lucide-react";

export default function IndustryChallengesSection() {
  const challenges = [
    {
      title: "Demand Forecast Inaccuracy",
      problem:
        "Manual forecasting leads to stockouts, excess inventory and missed sales opportunities.",
      solution:
        "AI-powered forecasting continuously learns from historical, seasonal and market trends.",
      icon: TrendingDown,
      color: "#C8102E",
    },
    {
      title: "Inventory Imbalances",
      problem:
        "Too much stock in one location while shortages occur elsewhere.",
      solution:
        "Intelligent replenishment recommendations optimize inventory across the network.",
      icon: PackageX,
      color: "#005F99",
    },
    {
      title: "Supplier Risks",
      problem:
        "Supplier delays and compliance issues disrupt procurement operations.",
      solution:
        "AI detects supplier risk signals before they impact production and deliveries.",
      icon: ShieldAlert,
      color: "#C8102E",
    },
    {
      title: "Warehouse Inefficiencies",
      problem:
        "Poor slotting, low productivity and labor utilization challenges.",
      solution:
        "AI recommends optimal slotting and workforce allocation strategies.",
      icon: Warehouse,
      color: "#005F99",
    },
    {
      title: "Logistics Cost Escalation",
      problem:
        "Increasing freight costs and inefficient route planning reduce margins.",
      solution:
        "AI optimizes transportation planning and route execution.",
        icon: Truck,
      color: "#C8102E",
    },
    {
      title: "Lack of Visibility",
      problem:
        "Teams struggle to monitor disruptions across procurement, inventory and logistics.",
      solution:
        "AI-powered control tower provides real-time visibility and alerts.",
      icon: AlertTriangle,
      color: "#005F99",
    },
    {
      title: "Slow Decision Making",
      problem:
        "Critical supply chain decisions rely heavily on manual analysis.",
      solution:
        "Planning Copilot delivers instant recommendations using enterprise data.",
      icon: Clock3,
      color: "#C8102E",
    },
    {
      title: "Data Silos",
      problem:
        "Business-critical data exists across disconnected systems.",
      solution:
        "AI unifies data streams to generate enterprise-wide insights.",
      icon: BarChart3,
      color: "#005F99",
    },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">

      <div className="absolute left-0 top-0 w-[450px] h-[450px] bg-[#005F99]/10 blur-[180px] rounded-full" />
      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] bg-[#C8102E]/10 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-24">

          <span className="uppercase tracking-[4px] text-[#C8102E] font-semibold">
            INDUSTRY CHALLENGES
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-extrabold">

            <span className="text-[#005F99]">
              Solving Real Supply Chain
            </span>

            <span className="block text-[#C8102E]">
              Challenges with AI
            </span>

          </h2>

          <p className="mt-8 max-w-4xl mx-auto text-xl text-slate-600 leading-relaxed">
            Modern supply chains face increasing complexity,
            uncertainty and operational inefficiencies.
            Fortuna IntelliAI helps enterprises predict,
            prevent and resolve disruptions before they impact business performance.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {challenges.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background:
                      item.color === "#005F99"
                        ? "rgba(0,95,153,0.08)"
                        : "rgba(200,16,46,0.08)",
                  }}
                >
                  <Icon size={34} color={item.color} />
                </div>

                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>

                <div className="mb-5">
                  <div className="text-red-600 font-semibold mb-2">
                    Challenge
                  </div>

                  <p className="text-slate-600">
                    {item.problem}
                  </p>
                </div>

                <div>
                  <div className="text-green-600 font-semibold mb-2">
                    AI Solution
                  </div>

                  <p className="text-slate-700">
                    {item.solution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}

        <div className="mt-24">

          <div className="bg-gradient-to-r from-[#005F99] to-[#C8102E] rounded-3xl p-12 text-center text-white">

            <h3 className="text-4xl font-bold">
              Predict Problems Before They Become Disruptions
            </h3>

            <p className="mt-6 text-xl text-white/90 max-w-4xl mx-auto">
              Fortuna IntelliAI transforms reactive supply chains into
              predictive, resilient and autonomous operations by identifying
              risks, opportunities and inefficiencies before they impact business.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

