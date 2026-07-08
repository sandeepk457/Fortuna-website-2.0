"use client";

import {
  ClipboardList,
  FileSearch,
  FileCheck2,
  ShoppingCart,
  PackageCheck,
  Boxes,
  Warehouse,
  Truck,
  BrainCircuit,
} from "lucide-react";

const processSteps = [
  {
    icon: ClipboardList,
    title: "Purchase Requisition",
    short: "PR",
    description:
      "Departments initiate procurement requests through configurable approval workflows.",
  },
  {
    icon: FileSearch,
    title: "Request for Quotation",
    short: "RFQ",
    description:
      "Suppliers receive RFQs and submit competitive quotations digitally.",
  },
  {
    icon: FileCheck2,
    title: "Quotation Evaluation",
    short: "QTN",
    description:
      "Compare supplier quotations and finalize the most suitable vendor.",
  },
  {
    icon: ShoppingCart,
    title: "Purchase Order",
    short: "PO",
    description:
      "Generate approved purchase orders with automated supplier communication.",
  },
  {
    icon: PackageCheck,
    title: "Goods Receipt",
    short: "GRN",
    description:
      "Capture goods receipt with barcode validation and quality inspection.",
  },
  {
    icon: Boxes,
    title: "Inventory",
    short: "INV",
    description:
      "Maintain real-time inventory visibility across multiple warehouses.",
  },
  {
    icon: Warehouse,
    title: "Warehouse Execution",
    short: "WMS",
    description:
      "Execute receiving, putaway, picking, packing and dispatch efficiently.",
  },
  {
    icon: Truck,
    title: "Dispatch",
    short: "DSP",
    description:
      "Manage outbound logistics, shipment planning and delivery execution.",
  },
];

export default function ProcessFlowSection() {
  return (
    <section className="relative overflow-hidden bg-white py-32">

      {/* Background Glow */}

      <div className="absolute -left-20 top-40 h-96 w-96 rounded-full bg-[#005F99]/5 blur-[140px]" />

      <div className="absolute -right-20 bottom-40 h-96 w-96 rounded-full bg-[#C8102E]/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#C8102E]">

            END-TO-END PROCESS FLOW

          </p>

          <h2 className="mt-8 text-5xl font-bold leading-[1.02] tracking-[-0.04em] md:text-7xl">

            <span className="block text-[#C8102E]">

              Connected Supply Chain

            </span>

            <span className="mt-2 block text-[#005F99]">

              From Request to Delivery

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-600">

            Fortuna SIMS digitally connects every stage of the supply chain—
            from procurement requests to warehouse execution and final
            dispatch—providing complete operational visibility,
            automation and AI-driven decision support.

          </p>

        </div>

        {/* Process Flow */}

        <div className="mt-24 overflow-x-auto">

          <div className="flex min-w-max items-center gap-4">

            
                  {processSteps.map((step, index) => {

            const Icon = step.icon;

            return (

              <div
                key={step.title}
                className="flex items-center"
              >

                {/* Process Card */}

                <div
                  className="
                    group
                    relative
                    w-[290px]
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-slate-200
                    bg-white
                    p-8
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:border-[#C8102E]
                    hover:bg-gradient-to-br
                    hover:from-red-50
                    hover:via-white
                    hover:to-blue-50
                    hover:shadow-[0_30px_80px_rgba(200,16,46,0.18)]
                  "
                >

                  {/* Gloss Effect */}

                  <div
                    className="
                      absolute
                      -left-32
                      top-0
                      h-full
                      w-24
                      -skew-x-12
                      bg-white/40
                      blur-lg
                      transition-all
                      duration-1000
                      group-hover:left-[130%]
                    "
                  />

                  {/* Step Badge */}

                  <div
                    className="
                      absolute
                      right-6
                      top-6
                      rounded-full
                      bg-gradient-to-r
                      from-[#C8102E]
                      to-[#005F99]
                      px-3
                      py-1
                      text-xs
                      font-bold
                      tracking-wider
                      text-white
                    "
                  >

                    STEP {index + 1}

                  </div>

                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-3xl
                      bg-gradient-to-br
                      from-[#C8102E]
                      to-[#005F99]
                      shadow-xl
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-6
                    "
                  >

                    <Icon className="h-10 w-10 text-white" />

                  </div>

                  {/* Short Code */}

                  <div className="mt-8">

                    <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-bold tracking-[0.25em] text-[#C8102E]">

                      {step.short}

                    </span>

                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-6
                      text-2xl
                      font-bold
                      text-[#005F99]
                      transition-all
                      duration-300
                      group-hover:text-[#C8102E]
                    "
                  >

                    {step.title}

                  </h3>

                  {/* Divider */}

                  <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#C8102E] to-[#005F99]" />

                  {/* Description */}

                  <p className="mt-6 leading-8 text-slate-600">

                    {step.description}

                  </p>

                </div>

                {/* Connector */}

                {index < processSteps.length - 1 && (

                  <div className="mx-6 flex flex-col items-center">

                    {/* Animated Line */}

                    <div className="relative h-1 w-20 rounded-full bg-slate-200 overflow-hidden">

                      <div
                        className="
                          absolute
                          left-0
                          top-0
                          h-full
                          w-1/2
                          rounded-full
                          bg-gradient-to-r
                          from-[#C8102E]
                          to-[#005F99]
                          animate-pulse
                        "
                      />

                    </div>

                    {/* Arrow */}

                    <svg
                      className="mt-2 h-7 w-7 text-[#005F99]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h12m-4-4 4 4-4 4"
                      />

                    </svg>

                  </div>

                )}

              </div>

            );

          })}

        </div>

      </div>

              {/* =====================================
            FORTUNA INTELLIAI LAYER
        ====================================== */}

        <div className="relative mx-auto mt-28 max-w-7xl overflow-hidden rounded-[40px] border border-white/20 bg-gradient-to-r from-[#005F99] via-[#5B5676] to-[#C8102E] px-12 py-16 shadow-[0_40px_90px_rgba(200,16,46,0.25)]">

          {/* Gloss */}

          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/20 to-transparent" />

          {/* Blue Glow */}

          <div className="absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#005F99]/25 blur-[120px]" />

          {/* Red Glow */}

          <div className="absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#C8102E]/25 blur-[120px]" />

          <div className="relative z-10 text-center">

            {/* Badge */}

            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-xl">

              <BrainCircuit className="mr-3 h-5 w-5 text-white" />

              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white">

                Powered by Fortuna IntelliAI

              </span>

            </div>

            {/* Heading */}

            <h3 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl">

              Continuous Intelligence

              <span className="block text-[#B9DCFF]">

                Across Every Process

              </span>

            </h3>

            <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-white/80" />

            {/* Description */}

            <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-white/90">

              Every procurement request, quotation, purchase order,
              inventory movement, warehouse transaction and dispatch
              is continuously monitored by Fortuna IntelliAI to
              detect exceptions, forecast demand, optimize inventory,
              improve warehouse productivity and recommend the next
              best operational action.

            </p>

            {/* AI Capability Pills */}

            <div className="mt-12 flex flex-wrap justify-center gap-4">

              {[
                "Demand Forecasting",
                "Inventory Optimization",
                "Supplier Intelligence",
                "AI Copilot",
                "Predictive Alerts",
                "Executive Analytics",
              ].map((item) => (

                <div
                  key={item}
                  className="
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    px-6
                    py-3
                    text-sm
                    font-medium
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:bg-white/20
                    hover:scale-105
                  "
                >
                  {item}
                </div>

              ))}

            </div>

            {/* Enterprise Metrics */}

            <div className="mt-16 grid gap-6 md:grid-cols-4">

              {[
                {
                  value: "24×7",
                  label: "AI Monitoring",
                },
                {
                  value: "Real-Time",
                  label: "Decision Support",
                },
                {
                  value: "Predictive",
                  label: "Business Intelligence",
                },
                {
                  value: "Enterprise",
                  label: "Operational Visibility",
                },
              ].map((item) => (

                <div
                  key={item.label}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/10
                    p-8
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:bg-white/20
                  "
                >

                  <h4 className="text-4xl font-bold text-white">

                    {item.value}

                  </h4>

                  <p className="mt-4 text-white/80 leading-7">

                    {item.label}

                  </p>

                </div>

              ))}

            </div>

            </div>

          </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-3">

          <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#C8102E] hover:shadow-[0_25px_70px_rgba(200,16,46,0.15)]">

            <h4 className="text-3xl font-bold text-[#005F99]">
              Connected Operations
            </h4>

            <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#C8102E] to-[#005F99]" />

            <p className="mt-6 leading-8 text-slate-600">
              Every procurement, inventory and warehouse activity is digitally
              connected, eliminating disconnected systems and manual processes
              across the enterprise.
            </p>

          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#C8102E] hover:shadow-[0_25px_70px_rgba(200,16,46,0.15)]">

            <h4 className="text-3xl font-bold text-[#005F99]">
              Real-Time Visibility
            </h4>

            <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#C8102E] to-[#005F99]" />

            <p className="mt-6 leading-8 text-slate-600">
              Gain complete visibility into every transaction, inventory
              movement, warehouse activity and procurement workflow from a
              single enterprise platform.
            </p>

          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#C8102E] hover:shadow-[0_25px_70px_rgba(200,16,46,0.15)]">

            <h4 className="text-3xl font-bold text-[#005F99]">
              Intelligent Decisions
            </h4>

            <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#C8102E] to-[#005F99]" />

            <p className="mt-6 leading-8 text-slate-600">
              AI continuously analyzes operational data, identifies business
              opportunities and recommends actions that improve productivity
              and supply chain performance.
            </p>

          </div>

        </div>

        {/* =====================================
            ENTERPRISE CTA
        ====================================== */}

        <div className="relative mx-auto mt-28 max-w-6xl overflow-hidden rounded-[40px] border border-white/20 bg-gradient-to-r from-[#005F99] via-[#5C5575] to-[#C8102E] px-12 py-16 shadow-[0_35px_90px_rgba(200,16,46,0.25)]">

          {/* Gloss */}

          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/20 to-transparent" />

          {/* Blue Glow */}

          <div className="absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#005F99]/25 blur-[120px]" />

          {/* Red Glow */}

          <div className="absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#C8102E]/25 blur-[120px]" />

          <div className="relative z-10 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-white/80">
              DIGITAL SUPPLY CHAIN EXECUTION
            </p>

            <h3 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl">

              From Procurement

              <span className="block">
                To Delivery.
              </span>

              <span className="block text-[#CFE8FF]">
                Connected End-to-End.
              </span>

            </h3>

            <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-white/80" />

            <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-white/90">

              Fortuna SIMS seamlessly orchestrates every supply chain
              operation—from purchase requisitions and supplier collaboration
              to inventory control, warehouse execution, dispatch and executive
              analytics—empowering organizations with one connected,
              intelligent enterprise platform.

            </p>

            {/* Feature Pills */}

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              {[
                "Procurement",
                "Inventory",
                "Warehouse",
                "AI Intelligence",
                "Mobile WMS",
                "Executive Analytics",
              ].map((item) => (

                <div
                  key={item}
                  className="
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:bg-white/20
                    hover:scale-105
                  "
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

          