"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Factory,
  Boxes,
  BrainCircuit,
  Smartphone,
  Network,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Smart Manufacturing",
    description:
      "Connect production planning, procurement, inventory and shop-floor operations through one intelligent digital platform.",
    icon: Factory,
    color: "red",
  },
  {
    title: "End-to-End Visibility",
    description:
      "Gain real-time visibility across suppliers, warehouses, production and distribution from a single dashboard.",
    icon: Boxes,
    color: "blue",
  },
  {
    title: "AI Decision Intelligence",
    description:
      "Leverage predictive analytics, intelligent forecasting and operational insights to make faster business decisions.",
    icon: BrainCircuit,
    color: "red",
  },
  {
    title: "Mobile Workforce",
    description:
      "Empower warehouse and shop-floor teams through mobile barcode scanning and paperless execution.",
    icon: Smartphone,
    color: "blue",
  },
  {
    title: "Enterprise Integration",
    description:
      "Seamlessly integrate ERP, MES, PLC, IoT devices and third-party business applications.",
    icon: Network,
    color: "red",
  },
  {
    title: "Enterprise Security",
    description:
      "Enterprise-grade security, role-based access control and audit trails for complete operational governance.",
    icon: ShieldCheck,
    color: "blue",
  },
];

export default function WhyFortunaIndustriesSection() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background Image */}

      {/* Full Background */}

<div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('/images/industries/manufacturing-red.png')",
  }}
/>

      {/* White Overlay */}

      {/* White Glass Overlay */}

<div className="absolute inset-0 bg-white/15 backdrop-blur-[2px]" />



      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#005F99]/5 blur-[170px]" />

      <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#C8102E]/5 blur-[170px]" />

      {/* Main Container */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-4xl mx-auto text-center relative z-10">

           

    

          <span className="text-[#FFFFFF] font-semibold uppercase tracking-[5px]">

            WHY FORTUNA

          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black leading-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]">

  Why Industry Leaders Choose

  <span className="block text-[#FF4D6D]">

    FORTUNA

  </span>

  <span className="block text-white">

    Digital Supply Chain Platform

  </span>

</h2>

          <div className="mx-auto mt-8 h-1 w-40 rounded-full bg-gradient-to-r from-[#005F99] via-white to-[#C8102E]" />

        <div className="mx-auto mt-8 h-1 w-40 rounded-full bg-gradient-to-r from-[#005F99] via-white to-[#C8102E]" />

<p className="mt-10 max-w-4xl mx-auto text-xl leading-9 text-white">
  Fortuna empowers manufacturing organizations with intelligent
  supply chain automation, AI-powered decision intelligence,
  warehouse execution, inventory visibility and seamless enterprise
  connectivity designed for modern digital operations.
</p>

       

        </div>

        {/* Capability Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((item, index) => {

            const Icon = item.icon;

            const isRed = item.color === "red";

            return (

                              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden

                  rounded-[30px]

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
                  hover:shadow-[0_30px_70px_rgba(0,0,0,0.15)]

                  cursor-pointer
                "
              >

                {/* Top Accent */}

                <div
                  className={`
                    absolute
                    left-0
                    top-0

                    h-1
                    w-full

                    transition-all
                    duration-500

                    ${
                      isRed
                        ? "bg-[#C8102E]"
                        : "bg-[#005F99]"
                    }
                  `}
                />

                {/* Icon */}

                <div
                  className={`
                    mb-8

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
                    text-2xl
                    font-bold
                    text-slate-900

                    transition-colors
                    duration-300

                    group-hover:text-[#C8102E]
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-5

                    leading-8

                    text-slate-600
                  "
                >
                  {item.description}
                </p>

                {/* Divider */}

                <div
                  className="
                    mt-8

                    h-[3px]
                    w-16

                    rounded-full

                    bg-gradient-to-r
                    from-[#005F99]
                    to-[#C8102E]
                  "
                />

                {/* CTA */}

                <Link
                  href="/contact"
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

                  Learn More

                  <ArrowRight
                    size={18}
                    className="
                      transition-all
                      duration-500

                      group-hover:translate-x-2
                    "
                  />

                </Link>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );

}