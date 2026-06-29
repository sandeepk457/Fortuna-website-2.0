"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden min-h-[760px] flex items-center">

      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/contact/contact1.png')",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/90 via-[#071527]/75 to-[#020817]/45" />

      {/* Blue Glow */}

      <div className="absolute left-0 top-0 w-[500px] h-[500px] rounded-full bg-[#005F99]/20 blur-[180px]" />

      {/* Red Glow */}

      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[#C8102E]/20 blur-[180px]" />

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="max-w-3xl">

          <span className="uppercase tracking-[5px] text-[#C8102E] font-semibold">

            LET'S CONNECT

          </span>

          <h1 className="mt-6 text-6xl md:text-7xl font-black leading-tight text-white">

            Let's Build the Future

            <span className="block">

              of Supply Chain

            </span>

            <span className="block text-[#C8102E]">

              Together

            </span>

          </h1>

          <p className="mt-8 text-xl leading-9 text-white/85 max-w-2xl">

            Whether you're exploring AI-powered planning,
            warehouse automation, procurement transformation
            or enterprise supply chain modernization,
            our experts are ready to help you design
            the right solution.

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-12">

            <Link
              href="/request-demo"
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

                hover:bg-[#a60d27]
                hover:scale-105

                transition-all
                duration-300
              "
            >

              Request Demo

              <ArrowRight size={20} />

            </Link>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                gap-3

                rounded-full

                border
                border-white/30

                bg-white/5
                backdrop-blur-md

                px-8
                py-4

                text-white
                font-semibold

                hover:bg-white/10
                hover:scale-105

                transition-all
                duration-300
              "
            >

              <PhoneCall size={18} />

              Talk to Experts

            </Link>

          </div>

          {/* Bottom Glass Cards */}

          <div className="grid grid-cols-3 gap-6 mt-20 max-w-2xl">

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

              <div className="text-4xl font-black text-[#C8102E]">

                8+

              </div>

              <p className="mt-2 text-white/80">

                Industries

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

              <div className="text-4xl font-black text-[#005F99]">

                9

              </div>

              <p className="mt-2 text-white/80">

                Products

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

              <div className="text-4xl font-black text-[#C8102E]">

                AI

              </div>

              <p className="mt-2 text-white/80">

                Powered Platform

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}