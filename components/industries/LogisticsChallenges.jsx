"use client";

import {
  Truck,
  Package,
  Route,
  Warehouse,
  Clock3,
  BrainCircuit,
} from "lucide-react";

const challenges = [
  {
    title: "Transportation Delays",
    description:
      "Unexpected delays and inefficient transportation planning impact customer commitments and delivery performance.",
    icon: Truck,
    color: "red",
  },
  {
    title: "Shipment Visibility",
    description:
      "Lack of real-time shipment tracking reduces operational visibility across the logistics network.",
    icon: Package,
    color: "blue",
  },
  {
    title: "Route Optimization",
    description:
      "Manual route planning increases transportation costs and delivery turnaround times.",
    icon: Route,
    color: "red",
  },
  {
    title: "Warehouse Coordination",
    description:
      "Disconnected warehouse operations create bottlenecks across inbound and outbound logistics.",
    icon: Warehouse,
    color: "blue",
  },
  {
    title: "Delivery Performance",
    description:
      "Late deliveries and poor carrier coordination directly impact customer satisfaction.",
    icon: Clock3,
    color: "red",
  },
  {
    title: "AI Decision Making",
    description:
      "Organizations require intelligent logistics insights to optimize transportation and distribution planning.",
    icon: BrainCircuit,
    color: "blue",
  },
];

export default function LogisticsChallenges() {
  return (
    <section className="relative overflow-hidden py-32">

        {/* Background Image */}

<div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('/images/industries/Grid/logistics-route-bg.png')",
  }}
/>

{/* Dark Overlay */}

<div className="absolute inset-0 bg-black/35" />

{/* Blue Glow */}

<div className="absolute -left-40 top-0 w-[450px] h-[450px] rounded-full bg-[#005F99]/10 blur-[180px]" />

{/* Red Glow */}

<div className="absolute -right-40 bottom-0 w-[450px] h-[450px] rounded-full bg-[#C8102E]/10 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[4px] text-[#C8102E] font-semibold">
            INDUSTRY CHALLENGES
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight">

            <span className="text-white">
              Logistics Challenges
            </span>

            <span className="block text-[#C8102E]">
              Require Intelligent Solutions
            </span>

          </h2>

          <p className="mt-8 text-xl leading-relaxed text-white/85">
            Logistics organizations face increasing pressure to deliver
            faster, optimize transportation costs and maintain complete
            visibility across their supply chain operations.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {challenges.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="group rounded-[30px] bg-white/95 backdrop-blur-xl border border-slate-200 p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
              >

                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    item.color === "red"
                      ? "bg-[#C8102E]/10 text-[#C8102E]"
                      : "bg-[#005F99]/10 text-[#005F99]"
                  }`}
                >

                  <Icon size={30} />

                </div>

                <h3 className="text-2xl font-bold text-slate-900">

                  {item.title}

                </h3>

                <p className="mt-4 text-slate-600 leading-8">

                  {item.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}