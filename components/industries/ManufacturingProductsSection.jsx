"use client";

import Link from "next/link";
import {
  Boxes,
  BrainCircuit,
  Network,
  Truck,
  Factory,
  Wrench,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    title: "Fortuna SIMS",
    description:
      "End-to-end procurement, inventory, warehouse management and supplier collaboration platform.",
    icon: Boxes,
    color: "red",
    href: "/products/fortuna-sims",
  },
  {
    title: "Fortuna DemandSense",
    description:
      "AI-powered demand forecasting and inventory optimization for manufacturing operations.",
    icon: BrainCircuit,
    color: "blue",
    href: "/products/demandsense",
  },
  {
    title: "Fortuna Connect Hub",
    description:
  "Integrate ERP, MES, PLC, IoT devices and third-party enterprise applications through seamless real-time connectivity.",
    
    icon: Network,
    color: "red",
    href: "/products/connect-hub",
  },
  {
    title: "Fortuna Lastmile AI",
    description:
      "Transportation planning, shipment execution and delivery visibility powered by AI.",
    icon: Truck,
    color: "blue",
    href: "/products/lastmile-ai",
  },
  {
    title: "Fortuna Plan Copilot",
    description:
      "AI-assisted production planning, scheduling and operational decision intelligence.",
    icon: Factory,
    color: "red",
    href: "/products/plan-copilot",
  },
  {
    title: "Fortuna EAM",
    description:
      "Enterprise Asset Management for preventive maintenance and equipment lifecycle.",
    icon: Wrench,
    color: "blue",
    href: "/products/eam",
  },
];

export default function ManufacturingProductsSection() {
  return (
    <section className="relative overflow-hidden py-32 bg-slate-50">

      {/* Blue Glow */}

      <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-[#005F99]/5 blur-[180px]" />

      {/* Red Glow */}

      <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#C8102E]/5 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[5px] text-[#C8102E] font-semibold">

            FORTUNA SOLUTIONS

          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black leading-tight">

            <span className="text-[#005F99]">

              Solutions Designed

            </span>

            <span className="block text-[#C8102E]">

              For Modern Manufacturing

            </span>

          </h2>

          <div className="mx-auto mt-8 h-1 w-44 rounded-full bg-gradient-to-r from-[#005F99] via-white to-[#C8102E]" />

          <p className="mt-10 text-xl leading-9 text-slate-600">

            Fortuna delivers a complete digital manufacturing ecosystem
            connecting procurement, production, warehousing,
            transportation and AI-powered operational intelligence
            into one unified platform.

          </p>

        </div>

        {/* Products Grid */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {products.map((product, index) => {

            const Icon = product.icon;

            const isRed = product.color === "red";

            return (

                              <Link
                href={product.href}
                key={index}
                className="group"
              >

                <div
                  className="
                    relative
                    overflow-hidden

                    rounded-[32px]

                    border
                    border-slate-200

                    bg-white/90
                    backdrop-blur-xl

                    p-8

                    shadow-xl

                    transition-all
                    duration-500

                    hover:-translate-y-3
                    hover:border-[#C8102E]/30
                    hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)]

                    cursor-pointer
                  "
                >

                  {/* Product Badge */}

                  <div
                    className="
                      inline-flex
                      items-center

                      rounded-full

                      bg-slate-100

                      px-4
                      py-2

                      text-xs
                      font-semibold

                      uppercase
                      tracking-[2px]

                      text-slate-600
                    "
                  >
                    Manufacturing Solution
                  </div>

                  {/* Icon */}

                  <div
                    className={`
                      mt-8

                      flex
                      h-16
                      w-16

                      items-center
                      justify-center

                      rounded-3xl

                      transition-all
                      duration-500

                      group-hover:scale-110
                      group-hover:rotate-6

                      ${
                        isRed
                          ? "bg-[#C8102E]/10 text-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white"
                          : "bg-[#005F99]/10 text-[#005F99] group-hover:bg-[#005F99] group-hover:text-white"
                      }
                    `}
                  >

                    <Icon size={30} />

                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-8

                      text-2xl
                      font-bold

                      text-slate-900

                      transition-colors
                      duration-500

                      group-hover:text-[#C8102E]
                    "
                  >
                    {product.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-5

                      leading-8

                      text-slate-600
                    "
                  >
                    {product.description}
                  </p>

                  {/* Divider */}

                  <div
                    className="
                      mt-8

                      h-[3px]
                      w-20

                      rounded-full

                      bg-gradient-to-r
                      from-[#005F99]
                      to-[#C8102E]
                    "
                  />

                  {/* Button */}

                  <div
                    className="
                      mt-8

                      inline-flex
                      items-center
                      gap-3

                      font-semibold

                      text-[#005F99]

                      transition-all
                      duration-500

                      group-hover:text-[#C8102E]
                    "
                  >

                    Explore Product

                    <ArrowRight
                      size={18}
                      className="
                        transition-all
                        duration-500

                        group-hover:translate-x-2
                      "
                    />

                  </div>

                  {/* Glow */}

                  <div
                    className="
                      absolute
                      inset-0

                      rounded-[32px]

                      border-2
                      border-transparent

                      group-hover:border-[#C8102E]/20

                      transition-all
                      duration-500
                    "
                  />

                </div>

              </Link>

            );

          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-24 text-center">

          <Link
            href="/products"
            className="
              inline-flex
              items-center
              gap-3

              rounded-full

              bg-[#C8102E]

              px-8
              py-4

              font-semibold
              text-white

              transition-all
              duration-500

              hover:scale-105
              hover:bg-[#a80d27]
              hover:shadow-[0_20px_40px_rgba(200,16,46,0.35)]
            "
          >

            Explore All Fortuna Products

            <ArrowRight size={20} />

          </Link>

        </div>

      </div>

    </section>

  );

}