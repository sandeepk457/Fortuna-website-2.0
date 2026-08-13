"use client";

import {
  Truck,
  Route,
  ClipboardCheck,
  Handshake,
  BrainCircuit,
  Radio,
  Wrench,
  Fuel,
  MapPinned,
  Clock3,
  PackageCheck,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const modules = [
  {
    number: "01",
    icon: Truck,
    title: "Fleet Management",
    description:
      "Manage vehicles, drivers, maintenance, fuel performance and vehicle health through one connected fleet environment.",
    features: [
      "Vehicle Master & Registration",
      "Maintenance & Service Scheduling",
      "Fuel Usage & Cost Analytics",
      "Driver Management",
      "IoT Vehicle Health Monitoring",
    ],
    accent: "from-[#C8102E] to-[#9E3152]",
    iconBg: "bg-[#C8102E]/10",
    iconColor: "text-[#C8102E]",
  },
  {
    number: "02",
    icon: Route,
    title: "Route Planning & Optimization",
    description:
      "Create dynamic routes and improve transportation efficiency using AI optimization, traffic intelligence and ETA prediction.",
    features: [
      "Route Database Management",
      "AI Route Optimization",
      "Traffic & Distance Analysis",
      "ETA Prediction",
      "Route Deviation Alerts",
    ],
    accent: "from-[#005F99] to-[#174F91]",
    iconBg: "bg-[#005F99]/10",
    iconColor: "text-[#005F99]",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Dispatch & Delivery",
    description:
      "Coordinate trips, vehicle assignments, driver execution and delivery confirmation through connected dispatch workflows.",
    features: [
      "Trip Planning & Assignment",
      "Driver & Vehicle Allocation",
      "Real-Time Dispatch",
      "Delivery Status Tracking",
      "Digital Proof of Delivery",
    ],
    accent: "from-[#C8102E] to-[#005F99]",
    iconBg: "bg-[#C8102E]/10",
    iconColor: "text-[#C8102E]",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Freight & Carrier Management",
    description:
      "Manage freight movements, carrier relationships, contracts and transportation costs with greater visibility and control.",
    features: [
      "Carrier Master",
      "Freight Rate Management",
      "Contract Management",
      "Carrier Performance",
      "Freight Cost Analytics",
    ],
    accent: "from-[#005F99] to-[#34548D]",
    iconBg: "bg-[#005F99]/10",
    iconColor: "text-[#005F99]",
  },
  {
    number: "05",
    icon: BrainCircuit,
    title: "AI Analytics",
    description:
      "Transform transportation data into predictive insights that help improve fleet utilization, route performance and operational decisions.",
    features: [
      "Predictive Analytics",
      "Fleet Performance Insights",
      "Route Intelligence",
      "Exception Detection",
      "Operational Recommendations",
    ],
    accent: "from-[#C8102E] to-[#8F3152]",
    iconBg: "bg-[#C8102E]/10",
    iconColor: "text-[#C8102E]",
  },
  {
    number: "06",
    icon: Radio,
    title: "Integration & Communication",
    description:
      "Connect transportation operations with enterprise systems, telematics and IoT devices through modern integration capabilities.",
    features: [
      "REST API Integration",
      "Webhooks",
      "MQTT / IoT Sync",
      "GPS & Telematics",
      "Real-Time Data Exchange",
    ],
    accent: "from-[#005F99] to-[#C8102E]",
    iconBg: "bg-[#005F99]/10",
    iconColor: "text-[#005F99]",
  },
];

const moduleIcons = [
  Wrench,
  Fuel,
  MapPinned,
  Clock3,
  PackageCheck,
  BarChart3,
];

export default function ModulesSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-32">

    {/* TMS Modules Background */}
<div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/images/products/tms2.png')",
  }}
/>

{/* Background Glows */}
<div className="absolute -left-40 top-32 h-[500px] w-[500px] rounded-full bg-[#005F99]/5 blur-[150px]" />

<div className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#C8102E]/5 blur-[150px]" />
      <div className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#C8102E]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C8102E]">
            CORE TMS MODULES
          </p>

          <h2 className="mt-7 text-5xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">

            <span className="block text-[#005F99]">
              One Platform.
            </span>

            <span className="mt-2 block text-[#C8102E]">
              Every Transportation Operation.
            </span>

          </h2>

              <p className="mx-auto mt-8 max-w-4xl text-lg font-semibold leading-8 text-[#005F99]">
                Fortuna TMS brings fleet management, route optimization,
                dispatch, freight management, AI analytics and connected
                transportation operations together in one intelligent platform.
            </p>

        </div>

        {/* =====================================================
            MODULE GRID
        ====================================================== */}

        <div className="mt-20 grid gap-7 md:grid-cols-2">

          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <div
                key={module.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-[0_15px_45px_rgba(0,0,0,0.06)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#C8102E]/30
                  hover:shadow-[0_25px_65px_rgba(0,0,0,0.12)]
                "
              >

                {/* Top Gradient Line */}

                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${module.accent}`}
                />

                {/* Gloss */}

                <div
                  className="
                    absolute
                    -left-28
                    top-0
                    h-full
                    w-20
                    -skew-x-12
                    bg-white/70
                    blur-md
                    transition-all
                    duration-700
                    group-hover:left-[120%]
                  "
                />

                <div className="relative">

                  {/* Header */}

                  <div className="flex items-start justify-between gap-5">

                    <div className="flex items-center gap-4">

                      <div
                        className={`
                          flex
                          h-14
                          w-14
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          ${module.iconBg}
                          transition-all
                          duration-300
                          group-hover:scale-110
                        `}
                      >
                        <Icon
                          className={`h-7 w-7 ${module.iconColor}`}
                        />
                      </div>

                      <div>

                        <p className="text-xs font-bold tracking-[0.2em] text-slate-400">
                          MODULE {module.number}
                        </p>

                        <h3 className="mt-1 text-xl font-bold text-slate-900">
                          {module.title}
                        </h3>

                      </div>

                    </div>

                    <ArrowRight
                      className="
                        mt-2
                        h-5
                        w-5
                        shrink-0
                        text-slate-300
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-[#C8102E]
                      "
                    />

                  </div>

                  {/* Description */}

                  <p className="mt-6 leading-7 text-slate-600">
                    {module.description}
                  </p>

                  {/* Feature List */}

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">

                    {module.features.map((feature, index) => {

                      const FeatureIcon =
                        moduleIcons[index % moduleIcons.length];

                      return (
                        <div
                          key={feature}
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            border
                            border-slate-100
                            bg-slate-50
                            px-4
                            py-3
                            text-sm
                            font-medium
                            text-slate-700
                            transition-all
                            duration-300
                            group-hover:border-slate-200
                          "
                        >

                          <FeatureIcon
                            className={`h-4 w-4 shrink-0 ${module.iconColor}`}
                          />

                          <span>{feature}</span>

                        </div>
                      );

                    })}

                  </div>

                  {/* Explore */}

                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#005F99] transition-colors duration-300 group-hover:text-[#C8102E]">

                    Explore Module

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div className="mx-auto mt-20 max-w-5xl overflow-hidden rounded-[32px] bg-gradient-to-r from-[#005F99] via-[#34548D] to-[#C8102E] p-[1px] shadow-[0_25px_70px_rgba(0,95,153,0.18)]">

          <div className="rounded-[31px] bg-white px-8 py-10 text-center md:px-16">

            <p className="text-lg font-bold leading-8 text-[#005F99] md:text-xl">
              From fleet registration to final delivery, Fortuna TMS
              connects every transportation process through one intelligent
              operational ecosystem.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}