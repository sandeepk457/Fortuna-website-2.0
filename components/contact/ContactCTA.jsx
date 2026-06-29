"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/contact/contact3.png')",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/90 via-[#071527]/75 to-[#020817]/50" />

      {/* Blue Glow */}

      <div className="absolute -left-40 top-0 w-[500px] h-[500px] rounded-full bg-[#005F99]/20 blur-[180px]" />

      {/* Red Glow */}

      <div className="absolute -right-40 bottom-0 w-[500px] h-[500px] rounded-full bg-[#C8102E]/20 blur-[180px]" />

      {/* Floating Glow */}

      <div className="absolute left-1/2 top-1/2 w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[180px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <div
          className="
            rounded-[40px]
            border
            border-white/10

            bg-white/5
            backdrop-blur-xl

            p-16

            text-center

            shadow-[0_40px_100px_rgba(0,0,0,0.35)]
          "
        >

          <span className="uppercase tracking-[5px] font-semibold text-[#C8102E]">

            START YOUR DIGITAL TRANSFORMATION

          </span>

          <h2 className="mt-8 text-5xl md:text-6xl font-black leading-tight text-white">

            Ready to Transform

            <span className="block text-[#C8102E]">

              Your Supply Chain?

            </span>

          </h2>

          <p className="mt-10 max-w-3xl mx-auto text-xl leading-9 text-white/85">

            Connect with Fortuna to discover how AI-powered Supply Chain,
            Procurement, Warehouse and Logistics solutions can help your
            organization improve operational efficiency, visibility and
            business performance.

          </p>

          {/* Buttons */}

          <div className="mt-14 flex flex-wrap justify-center gap-6">

            <Link
              href="/request-demo"
              className="
                inline-flex
                items-center
                gap-3

                rounded-full

                bg-[#C8102E]

                px-9
                py-4

                text-white
                font-semibold

                transition-all
                duration-300

                hover:bg-[#a60d27]
                hover:scale-105
              "
            >

              Request Personalized Demo

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
                border-white/20

                bg-white/5
                backdrop-blur-lg

                px-9
                py-4

                text-white
                font-semibold

                transition-all
                duration-300

                hover:bg-white/10
                hover:scale-105
              "
            >

              <PhoneCall size={18} />

              Talk to Our Experts

            </Link>

          </div>

          {/* Bottom Highlights */}

          <div className="mt-20 grid md:grid-cols-3 gap-8">

            <div>

              <div className="text-5xl font-black text-[#C8102E]">

                8+

              </div>

              <p className="mt-3 text-white/80">

                Industries Served

              </p>

            </div>

            <div>

              <div className="text-5xl font-black text-[#005F99]">

                9

              </div>

              <p className="mt-3 text-white/80">

                Intelligent Products

              </p>

            </div>

            <div>

              <div className="text-5xl font-black text-[#C8102E]">

                AI

              </div>

              <p className="mt-3 text-white/80">

                Powered Supply Chain Platform

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}