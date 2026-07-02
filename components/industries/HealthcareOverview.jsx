"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HealthcareOverview() {
  return (
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Image */}

          <div className="relative">

            <div className="overflow-hidden rounded-[32px] shadow-2xl">

              <Image
                src="/images/industries/grid/pharma-healthcare.png"
                alt="Healthcare Supply Chain"
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

                Healthcare Supply Chains

              </span>

              <span className="block text-[#C8102E]">

                Connected For Better

              </span>

              <span className="block text-[#005F99]">

                Patient Care

              </span>

            </h2>

            <p className="mt-8 text-xl leading-relaxed text-slate-600">

              Healthcare organizations require intelligent supply chain
              visibility to ensure uninterrupted availability of medicines,
              medical equipment and critical healthcare supplies.

              Fortuna enables hospitals, pharmaceutical companies and
              healthcare providers to optimize procurement, inventory,
              warehousing and distribution while ensuring compliance,
              traceability and patient safety.

            </p>

            {/* Feature List */}

            <div className="grid grid-cols-2 gap-5 mt-10">

              {[
                "Medical Inventory",
                "Cold Chain Visibility",
                "Pharmaceutical Distribution",
                "Inventory Traceability",
                "Regulatory Compliance",
                "AI Healthcare Intelligence",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    className="text-[#C8102E]"
                    size={22}
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

                  hover:bg-[#a50d25]
                  hover:scale-105

                  transition-all
                "
              >

                Explore Solutions

              </Link>

              <Link
                href="/contact"
                className="
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

                  inline-flex
                  items-center
                  gap-2
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