"use client";

import Link from "next/link";

import {
  Factory,
  BrainCircuit,
  Network,
  Truck,
  Warehouse,
  Car,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    title: "Fortuna SIMS",
    description:
      "Digitize procurement, inventory, warehouse operations and production material flow across automotive manufacturing plants.",
    icon: Factory,
    color: "red",
    href: "/products/fortuna-sims",
  },
  {
    title: "Fortuna DemandSense",
    description:
      "Predict production demand, optimize inventory and improve manufacturing planning through AI-powered forecasting.",
    icon: BrainCircuit,
    color: "blue",
    href: "/products/demandsense",
  },
  {
    title: "Fortuna Connect Hub",
    description:
      "Connect ERP, MES, PLC, IoT devices and supplier ecosystems through seamless enterprise integration.",
    icon: Network,
    color: "red",
    href: "/products/connect-hub",
  },
  {
    title: "Fortuna Lastmile AI",
    description:
      "Optimize inbound logistics, outbound distribution and finished vehicle transportation using AI-powered logistics.",
    icon: Truck,
    color: "blue",
    href: "/products/lastmile-ai",
  },
  {
    title: "Smart Warehousing",
    description:
      "Automate warehouse execution, material handling, barcode operations and production inventory replenishment.",
    icon: Warehouse,
    color: "red",
    href: "/products/fortuna-sims",
  },
  {
    title: "Production Intelligence",
    description:
      "Gain complete visibility into production planning, supplier collaboration and manufacturing performance using AI.",
    icon: Car,
    color: "blue",
    href: "/products/intelli-ai",
  },
];

export default function AutomotiveProductsSection() {
  return (
    <section className="relative overflow-hidden py-32 bg-slate-50">

      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-[#005F99]/5 blur-[180px]" />

      <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#C8102E]/5 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[5px] text-[#C8102E] font-semibold">

            FORTUNA SOLUTIONS

          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black leading-tight">

            <span className="text-[#005F99]">

              Automotive Solutions

            </span>

            <span className="block text-[#C8102E]">

              Built For Smart Manufacturing

            </span>

          </h2>

          <div className="mx-auto mt-8 h-1 w-44 rounded-full bg-gradient-to-r from-[#005F99] to-[#C8102E]" />

          <p className="mt-10 text-xl leading-9 text-slate-600">

            Fortuna delivers intelligent automotive supply chain solutions
            connecting manufacturing, suppliers, warehouses, production,
            AI planning and logistics into one unified digital ecosystem.

          </p>

        </div>

        {/* Product Cards */}

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

                    bg-white

                    p-8

                    shadow-xl

                    transition-all
                    duration-500

                    hover:-translate-y-3
                    hover:scale-[1.02]
                    hover:border-[#C8102E]/30
                    hover:shadow-[0_35px_70px_rgba(0,0,0,0.18)]
                  "
                >

                  {/* Badge */}

                  <div
                    className="
                      inline-flex
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

                    Automotive Solution

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

                  <h3 className="mt-8 text-2xl font-bold text-slate-900 group-hover:text-[#C8102E] transition-colors">

                    {product.title}

                  </h3>

                  {/* Description */}

                  <p className="mt-5 text-slate-600 leading-8 min-h-[96px]">

                    {product.description}

                  </p>

                  {/* Divider */}

                  <div className="mt-8 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#005F99] to-[#C8102E]" />

                  {/* CTA */}

                  <div className="mt-8 inline-flex items-center gap-3 font-semibold text-[#005F99] group-hover:text-[#C8102E] transition-all">

                    Explore Product

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-2 transition-all"
                    />

                  </div>

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

              text-white
              font-semibold

              transition-all
              duration-500

              hover:bg-[#a80d27]
              hover:scale-105
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