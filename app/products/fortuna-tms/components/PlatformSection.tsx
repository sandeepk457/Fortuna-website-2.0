"use client";

import {
  Truck,
  Route,
  MapPinned,
  PackageCheck,
  BrainCircuit,
  Cloud,
  ArrowRight,
} from "lucide-react";

const capabilities = [
  {
    icon: Truck,
    title: "Connected Fleet",
    description:
      "Manage vehicles, drivers, maintenance, fuel performance and vehicle health through one connected transportation environment.",
  },
  {
    icon: Route,
    title: "Intelligent Route Planning",
    description:
      "Create dynamic routes and optimize travel using route intelligence, traffic analysis and ETA prediction.",
  },
  {
    icon: MapPinned,
    title: "Real-Time Visibility",
    description:
      "Track vehicles, routes and shipments with live location visibility, movement updates and route deviation alerts.",
  },
  {
    icon: PackageCheck,
    title: "Smart Delivery Execution",
    description:
      "Coordinate shipments, vehicle assignment, trip execution and digital proof of delivery through connected workflows.",
  },
  {
    icon: BrainCircuit,
    title: "Predictive Intelligence",
    description:
      "Use analytics and AI-driven insights to improve route performance, maintenance planning and operational decisions.",
  },
  {
    icon: Cloud,
    title: "Cloud-Based Platform",
    description:
      "Operate on a scalable SaaS foundation designed for connected enterprise transportation operations.",
  },
];

export default function PlatformSection() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* Background Glows */}

      <div className="absolute -left-32 top-32 h-[450px] w-[450px] rounded-full bg-[#005F99]/5 blur-[150px]" />

      <div className="absolute -right-32 bottom-20 h-[450px] w-[450px] rounded-full bg-[#C8102E]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C8102E]">
            ONE CONNECTED TRANSPORTATION PLATFORM
          </p>

          <h2 className="mt-7 text-5xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
            <span className="block text-[#005F99]">
              Connect Every Movement
            </span>

            <span className="mt-2 block text-[#C8102E]">
              With Intelligence
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-600">
            Fortuna TMS brings transportation planning, fleet operations,
            route optimization, dispatch, delivery tracking and analytics
            together in one intelligent digital environment.
          </p>
        </div>

        {/* Connected Flow */}

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid items-center gap-4 md:grid-cols-4">
            {[
              {
                icon: Truck,
                title: "Vehicle",
              },
              {
                icon: Route,
                title: "Route",
              },
              {
                icon: PackageCheck,
                title: "Shipment",
              },
              {
                icon: MapPinned,
                title: "Delivery",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="relative">
 
 <div
  className="
    flex
    flex-col
    items-center
    rounded-[24px]
    border
    border-slate-200
    bg-white
    p-7
    shadow-[0_15px_45px_rgba(0,0,0,0.06)]
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-[#C8102E]/40
    hover:shadow-[0_20px_50px_rgba(200,16,46,0.12)]
  "
>
                    <div
  className="
    flex
    h-14
    w-14
    items-center
    justify-center
    rounded-2xl
    bg-gradient-to-br
    from-[#C8102E]
    to-[#005F99]
    shadow-lg
  "
>
  <Icon className="h-7 w-7 text-white" />
</div>
                    <p className="mt-4 font-semibold text-slate-900">
  {item.title}
</p>
                  </div>

                  {index < 3 && (
  <div
    className="
      pointer-events-none
      absolute
      -right-9
      top-1/2
      z-30
      hidden
      w-12
      -translate-y-1/2
      items-center
      md:flex
    "
  >
    <div className="h-[2px] w-7 bg-gradient-to-r from-[#005F99] to-[#C8102E]" />

    <ArrowRight
      className="h-5 w-5 shrink-0 text-[#C8102E]"
      strokeWidth={2.5}
    />
  </div>
)}
                </div>
              );
            })}
          </div>
        </div>

        {/* Capability Cards */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
            <div
  key={item.title}
  className="
    group
    relative
    overflow-hidden
    rounded-[28px]
    border
    border-white/20
    bg-gradient-to-br
    from-[#C8102E]
    via-[#8F3152]
    to-[#005F99]
    p-7
    text-white
    shadow-[0_20px_50px_rgba(0,95,153,0.18)]
    transition-all
    duration-500
    hover:-translate-y-2
    hover:shadow-[0_25px_70px_rgba(200,16,46,0.30)]
  "
>
                {/* Gloss */}

                <div
                  className="
                    absolute
                    -left-24
                    top-0
                    h-full
                    w-20
                    -skew-x-12
                    bg-white/60
                    blur-md
                    transition-all
                    duration-700
                    group-hover:left-[120%]
                  "
                />

                <div className="relative">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#C8102E]
                      to-[#005F99]
                      shadow-lg
                      transition-transform
                      duration-300
                      group-hover:scale-110
                      group-hover:rotate-3
                    "
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/80">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}

        <div className="mx-auto mt-16 max-w-4xl text-center">
  <p className="text-lg font-bold leading-8 text-[#005F99]">
    From the first planning decision to the final delivery,
    Fortuna TMS connects transportation operations into one
    intelligent flow.
  </p>
</div>
      </div>
    </section>
  );
}