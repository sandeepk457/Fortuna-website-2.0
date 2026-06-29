"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function EnergyOverview() {
  return (
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Image */}

          <div className="relative">

            <div className="overflow-hidden rounded-[32px] shadow-2xl">

              <Image
                src="/images/industries/Grid/Energy and resource.png"
                alt="Energy & Utilities"
                width={1200}
                height={850}
                className="
                  w-full
                  h-auto
                  object-cover
                  transition-all
                  duration-700
                  hover:scale-105
                "
              />

            </div>

          </div>

          {/* Right Content */}

          <div>

            <span className="uppercase tracking-[4px] text-[#C8102E] font-semibold">

              INDUSTRY OVERVIEW

            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight">

              <span className="text-[#005F99]">

                Powering Energy

              </span>

              <span className="block text-[#C8102E]">

                Through Intelligent

              </span>

              <span className="block text-[#005F99]">

                Supply Chain Operations

              </span>

            </h2>

            <p className="mt-8 text-xl leading-relaxed text-slate-600">

              Energy and Utility organizations require resilient supply
              chains to support power generation, renewable energy,
              maintenance operations and critical infrastructure.
              Fortuna enables organizations to optimize procurement,
              inventory, warehousing and field logistics through one
              intelligent digital platform.

            </p>

            {/* Features */}

            <div className="grid grid-cols-2 gap-5 mt-10">

              {[
                "Asset Visibility",
                "Spare Parts Management",
                "Field Operations",
                "Warehouse Automation",
                "Predictive Maintenance",
                "AI Supply Chain Intelligence",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    size={22}
                    className="text-[#C8102E]"
                  />

                  <span className="font-medium text-slate-700">

                    {item}

                  </span>

                </div>

              ))}

            </div>

            {/* Buttons */}

            <div className="flex gap-5 mt-12">

              <Link
                href="/products/fortuna-sims"
                className="
                  px-8
                  py-4
                  rounded-full

                  bg-[#C8102E]
                  text-white

                  font-semibold

                  hover:bg-[#a60d27]
                  hover:scale-105

                  transition-all
                "
              >

                Explore Solutions

              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  gap-2

                  px-8
                  py-4

                  rounded-full

                  border-2
                  border-[#005F99]

                  text-[#005F99]
                  font-semibold

                  hover:bg-[#005F99]
                  hover:text-white
                  hover:scale-105

                  transition-all
                "
              >

                Talk to Experts

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}