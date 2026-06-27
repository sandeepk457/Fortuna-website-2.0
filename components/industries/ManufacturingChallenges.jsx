"use client";

import {
  Factory,
  Boxes,
  Warehouse,
  Truck,
  ArrowRight,
} from "lucide-react";

const challenges = [
  {
    title: "Production Planning",
    description:
      "Demand volatility, changing customer requirements and supply disruptions make production planning increasingly complex for modern manufacturers.",
    solution:
      "Fortuna enables intelligent production planning through connected procurement, inventory visibility and AI-driven decision support.",
    icon: Factory,
    color: "red",
  },
  {
    title: "Inventory Visibility",
    description:
      "Disconnected inventory across warehouses and production creates shortages, excess stock and delayed manufacturing operations.",
    solution:
      "Real-time inventory visibility provides accurate stock information across every warehouse and production location.",
    icon: Boxes,
    color: "blue",
  },
  {
    title: "Warehouse Operations",
    description:
      "Manual warehouse activities reduce operational efficiency, inventory accuracy and order fulfillment performance.",
    solution:
      "Barcode scanning, mobile warehouse execution and intelligent workflows improve warehouse productivity.",
    icon: Warehouse,
    color: "red",
  },
  {
    title: "Supplier Collaboration",
    description:
      "Supplier communication delays impact procurement cycles and manufacturing continuity.",
    solution:
      "Digital procurement workflows, RFQs and supplier collaboration streamline purchasing operations.",
    icon: Truck,
    color: "blue",
  },
];

export default function ManufacturingChallenges() {
  return (
    <section className="relative py-28 bg-slate-50 overflow-hidden">

        {/* Background Image */}

<div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('/images/industries/manufacturing-bg.png')",
  }}
/>

      {/* Background Glow */}

      <div className="absolute -left-40 top-0 w-[450px] h-[450px] bg-[#005F99]/5 blur-[170px] rounded-full" />

      <div className="absolute -right-40 bottom-0 w-[450px] h-[450px] bg-[#C8102E]/5 blur-[170px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[4px] text-[#C8102E] font-semibold">

            INDUSTRY CHALLENGES

          </span>

          <h2 className="mt-5 text-5xl md:text-6xl font-black leading-tight">

            <span className="text-[#005F99]">

              Manufacturing Challenges

            </span>

            <span className="block text-[#C8102E]">

              Driving Digital Transformation

            </span>

          </h2>

          <p className="mt-8 text-xl leading-relaxed text-slate-600">

            Manufacturing organizations must continuously improve
            productivity, optimize inventory, strengthen supplier
            collaboration and make faster operational decisions.
            Fortuna enables manufacturers to address these challenges
            through intelligent supply chain automation and AI-driven
            digital operations.

          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {challenges.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="
                  group

                  rounded-[32px]

                  bg-white

                  border
                  border-slate-200

                  p-8

                  shadow-lg

                  hover:-translate-y-2

                  transition-all
                  duration-500

                  hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
                "
              >

                <div className="flex items-start gap-5">

                  <div
                    className={`
                      w-16
                      h-16

                      rounded-2xl

                      flex
                      items-center
                      justify-center

                      transition-all
                      duration-500

                      group-hover:rotate-6
                      group-hover:scale-110

                      ${
                        item.color === "red"
                          ? "bg-[#C8102E]/15 text-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white"
                          : "bg-[#005F99]/15 text-[#005F99] group-hover:bg-[#005F99] group-hover:text-white"
                      }
                    `}
                  >

                    <Icon size={30} />

                  </div>

                  <div className="flex-1">

                    <h3 className="text-2xl font-bold text-slate-900">

                      {item.title}

                    </h3>

                    <p className="mt-5 text-slate-600 leading-8">

                      {item.description}

                    </p>

                    <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200">

                      <div className="font-semibold text-[#C8102E]">

                        Fortuna Approach

                      </div>

                      <p className="mt-3 text-slate-600 leading-7">

                        {item.solution}

                      </p>

                    </div>

                    <button
                      className="
                        mt-7

                        inline-flex
                        items-center
                        gap-3

                        font-semibold

                        text-[#005F99]

                        group-hover:text-[#C8102E]

                        transition-all
                      "
                    >

                      Learn More

                      <ArrowRight
                        size={18}
                        className="
                          group-hover:translate-x-2
                          transition-all
                        "
                      />

                    </button>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}