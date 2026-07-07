"use client";

import { useState } from "react";
import Image from "next/image";

import {
  ShoppingCart,
  Boxes,
  Warehouse,
  BrainCircuit,
  BarChart3,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const modules = [
  {
    id: "procurement",
    title: "Procurement Management",
    short: "Digitize procurement from requisition to purchase order.",
    description:
      "Automate procurement workflows with Purchase Requisitions, RFQs, Quotations, Purchase Orders, Approval Workflows and Supplier Collaboration.",

    image: "/images/modules/sims-procurement.png",

    icon: ShoppingCart,

    features: [
      "Purchase Requisition",
      "RFQ Management",
      "Supplier Quotations",
      "Purchase Orders",
      "Approval Workflow",
      "Vendor Collaboration",
    ],
  },

  {
    id: "inventory",

    title: "Inventory Management",

    short:
      "Gain complete inventory visibility across warehouses.",

    description:
      "Track inventory movements, stock levels, replenishment, transfers, cycle counting and real-time inventory visibility.",

    image: "/images/modules/sims-inventory.png",

    icon: Boxes,

    features: [
      "Real-time Inventory",
      "Stock Transfers",
      "Cycle Count",
      "Lot & Batch Tracking",
      "Serial Numbers",
      "Inventory Replenishment",
    ],
  },

  {
    id: "warehouse",

    title: "Warehouse Management",

    short:
      "Optimize warehouse execution from receiving to dispatch.",

    description:
      "Improve warehouse productivity with receiving, putaway, picking, packing, dispatch, barcode scanning and bin management.",

    image: "/images/modules/fortuna-sims-hero.png",

    icon: Warehouse,

    features: [
      "Inbound",
      "Putaway",
      "Picking",
      "Packing",
      "Dispatch",
      "Barcode Management",
    ],
  },

  {
    id: "ai",

    title: "AI Intelligence",

    short:
      "AI-powered insights for faster enterprise decisions.",

    description:
      "Leverage AI to forecast demand, optimize inventory, identify anomalies and receive intelligent operational recommendations.",

    image: "/images/modules/sims-ai.png",

    icon: BrainCircuit,

    features: [
      "Demand Forecasting",
      "Inventory Optimization",
      "AI Recommendations",
      "Predictive Alerts",
      "Exception Detection",
      "Plan Copilot",
    ],
  },

  {
    id: "analytics",

    title: "Executive Analytics",

    short:
      "Real-time operational dashboards and KPI visibility.",

    description:
      "Monitor procurement, inventory, warehouse and enterprise performance through interactive dashboards and executive reporting.",

    image: "/images/modules/sims-edb.png",

    icon: BarChart3,

    features: [
      "Executive Dashboard",
      "Operational KPIs",
      "Reports",
      "Power BI Ready",
      "Trend Analysis",
      "Data Insights",
    ],
  },

  {
    id: "mobile",

    title: "Mobile WMS",

    short:
      "Warehouse execution from Android handheld devices.",

    description:
      "Enable warehouse operators to perform receiving, putaway, picking, transfers and cycle counting using Fortuna WMS Mobile.",

    image: "/images/modules/sims-mobile wms.png",

    icon: Smartphone,

    features: [
      "Android App",
      "Barcode Scanner",
      "Offline Mode",
      "Receiving",
      "Picking",
      "Cycle Count",
    ],
  },
];

export default function ModulesSection() {

  const [activeModule, setActiveModule] = useState(modules[0]);

  return (

<section className="relative overflow-hidden bg-white py-32">

      {/* Background */}

      <div className="absolute left-0 top-40 h-[450px] w-[450px] rounded-full bg-[#005F99]/5 blur-[150px]" />

      <div className="absolute right-0 bottom-20 h-[450px] w-[450px] rounded-full bg-[#C8102E]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C8102E]">

            CORE MODULES

          </p>

          <h2 className="mt-8 text-5xl font-bold leading-[1.02] tracking-[-0.04em] md:text-7xl">

            <span className="block text-[#C8102E]">

              Complete Supply Chain Suite

            </span>

            <span className="mt-2 block text-[#005F99]">

              Built on One Intelligent Platform

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-600">

            Every supply chain function—from procurement and inventory
            management to warehouse execution, AI intelligence,
            analytics and mobile operations—is seamlessly connected
            through one enterprise platform designed for visibility,
            automation and operational excellence.

          </p>

        </div>

        {/* Main Layout */}

        <div className="mt-24 grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

                  {/* ===========================
              LEFT ENTERPRISE SHOWCASE
          ============================ */}

          <div className="sticky top-28 self-start">

            {/* Blue Glow */}

            <div className="absolute -left-12 top-16 h-72 w-72 rounded-full bg-[#005F99]/10 blur-[110px]" />

            {/* Red Glow */}

            <div className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-[#C8102E]/10 blur-[110px]" />

            {/* Glass Card */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[34px]
                border
                border-slate-200
                bg-white/80
                backdrop-blur-xl
                shadow-[0_35px_90px_rgba(0,0,0,0.12)]
              "
            >

              {/* Gloss Effect */}

              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/40 to-transparent" />

              {/* Module Image */}

              <div className="relative overflow-hidden">

                <Image
                  src={activeModule.image}
                  alt={activeModule.title}
                  width={1200}
                  height={720}
                  priority
                  className="
                    w-full
                    object-cover
                    transition-all
                    duration-700
                    hover:scale-[1.02]
                  "
                />

              </div>

              {/* Bottom Information */}

              <div className="p-10">

                {/* Small Label */}

                <div className="inline-flex items-center rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-[#C8102E]">

                  Fortuna SIMS Module

                </div>

                {/* Module Title */}

                <h3 className="mt-6 text-4xl font-bold text-[#005F99]">

                  {activeModule.title}

                </h3>

                {/* Short Description */}

                <p className="mt-5 text-lg leading-8 text-slate-600">

                  {activeModule.description}

                </p>

                {/* Feature Tags */}

                <div className="mt-8 flex flex-wrap gap-3">

                  {activeModule.features.map((feature) => (

                    <span
                      key={feature}
                      className="
                        rounded-full
                        border
                        border-slate-200
                        bg-slate-50
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-slate-700
                        transition-all
                        duration-300
                        hover:border-[#C8102E]
                        hover:bg-red-50
                        hover:text-[#C8102E]
                      "
                    >
                      {feature}
                    </span>

                  ))}

                </div>

                {/* CTA */}

                <button
                  className="
                    group
                    mt-10
                    inline-flex
                    items-center
                    rounded-xl
                    bg-gradient-to-r
                    from-[#C8102E]
                    to-[#005F99]
                    px-7
                    py-4
                    font-semibold
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:shadow-[0_20px_45px_rgba(200,16,46,0.35)]
                  "
                >

                  Explore Module

                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

                </button>

              </div>

            </div>

          </div>

                    {/* ===========================
              RIGHT MODULE NAVIGATION
          ============================ */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#C8102E]">
              Enterprise Capabilities
            </p>

            <h3 className="mt-4 text-4xl font-bold text-slate-900">
              Explore Every Module
            </h3>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Fortuna SIMS combines procurement, inventory, warehouse
              management, AI, analytics and mobile execution into one
              intelligent enterprise platform.
            </p>

            {/* Module Navigation */}

            <div
  className="
    mt-10
    h-[640px]
    overflow-y-auto
    pr-3
    space-y-5

    scrollbar-thin
    scrollbar-thumb-[#C8102E]/40
    scrollbar-track-transparent
  "
>

              {modules.map((module) => {

                const Icon = module.icon;

                const active = activeModule.id === module.id;

                return (

                  <button
                    key={module.id}
                    onMouseEnter={() => setActiveModule(module)}
                    onClick={() => setActiveModule(module)}
                    className={`
                      group
                      relative
                      w-full
                      overflow-hidden
                      rounded-[28px]
                      border
                      p-6
                      text-left
                      transition-all
                      duration-500
                      ${
                        active
                          ? "border-[#C8102E] bg-gradient-to-r from-[#C8102E]/8 via-white to-[#005F99]/8 shadow-[0_20px_50px_rgba(200,16,46,0.18)]"
                          : "border-slate-200 bg-white hover:border-[#C8102E] hover:shadow-xl"
                      }
                    `}
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
                        bg-white/40
                        blur-md
                        transition-all
                        duration-700
                        group-hover:left-[120%]
                      "
                    />

                    <div className="relative flex items-start gap-5">

                      {/* Icon */}

                      <div
                        className={`
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-2xl
                          transition-all
                          duration-300
                          ${
                            active
                              ? "bg-gradient-to-br from-[#C8102E] to-[#005F99] text-white"
                              : "bg-slate-100 text-[#005F99] group-hover:bg-gradient-to-br group-hover:from-[#C8102E] group-hover:to-[#005F99] group-hover:text-white"
                          }
                        `}
                      >

                        <Icon className="h-8 w-8" />

                      </div>

                      {/* Content */}

                      <div className="flex-1">

                        <div className="flex items-center justify-between">

                          <h4
                            className={`
                              text-2xl
                              font-bold
                              transition-colors
                              duration-300
                              ${
                                active
                                  ? "text-[#C8102E]"
                                  : "text-[#005F99]"
                              }
                            `}
                          >
                            {module.title}
                          </h4>

                          <ArrowRight
                            className={`
                              h-6
                              w-6
                              transition-all
                              duration-300
                              ${
                                active
                                  ? "translate-x-1 text-[#C8102E]"
                                  : "text-slate-400 group-hover:translate-x-1 group-hover:text-[#C8102E]"
                              }
                            `}
                          />

                        </div>

                        <p className="mt-3 leading-7 text-slate-600">
                          {module.short}
                        </p>

                      </div>

                    </div>

                  </button>

                );

              })}

            </div>

          </div>

        </div>

                {/* ==========================================
            ENTERPRISE VALUE STRIP
        =========================================== */}

        <div className="mt-24 grid gap-6 md:grid-cols-4">

          {[
            {
              number: "6+",
              label: "Integrated Enterprise Modules",
            },
            {
              number: "Web + Mobile",
              label: "Unified User Experience",
            },
            {
              number: "AI Powered",
              label: "Intelligent Decision Support",
            },
            {
              number: "Cloud Ready",
              label: "Scalable Enterprise Platform",
            },
          ].map((item) => (

            <div
              key={item.label}
              className="
                rounded-[28px]
                border
                border-slate-200
                bg-white
                p-8
                text-center
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#C8102E]
                hover:bg-gradient-to-br
                hover:from-[#C8102E]/5
                hover:via-white
                hover:to-[#005F99]/5
                hover:shadow-[0_25px_60px_rgba(200,16,46,0.18)]
              "
            >

              <div className="text-4xl font-extrabold text-[#C8102E]">
                {item.number}
              </div>

              <div className="mt-4 text-lg font-semibold text-[#005F99]">
                {item.label}
              </div>

            </div>

          ))}

        </div>

        {/* ==========================================
            PREMIUM ENTERPRISE CTA
        =========================================== */}

        <div className="relative mx-auto mt-28 max-w-6xl overflow-hidden rounded-[40px] border border-white/20 bg-gradient-to-r from-[#005F99] via-[#5C5575] to-[#C8102E] px-12 py-16 shadow-[0_35px_90px_rgba(200,16,46,0.25)]">

          {/* Gloss */}

          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/20 to-transparent" />

          {/* Left Glow */}

          <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#005F99]/25 blur-[120px]" />

          {/* Right Glow */}

          <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#C8102E]/25 blur-[120px]" />

          <div className="relative z-10 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-white/80">
              ONE PLATFORM. ENDLESS POSSIBILITIES.
            </p>

            <h3 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl">

              Connected Modules.

              <span className="block">
                Connected Decisions.
              </span>

              <span className="block">
                Connected Enterprise.
              </span>

            </h3>

            <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-white/80" />

            <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-white/90">

              Fortuna SIMS delivers an integrated enterprise platform where
              procurement, inventory, warehouse execution, mobile operations,
              AI intelligence and executive analytics work together seamlessly.
              Eliminate disconnected systems, improve operational visibility
              and accelerate digital transformation across your entire supply
              chain.

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}

       