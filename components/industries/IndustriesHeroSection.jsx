"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Factory,
  Truck,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export default function IndustriesHeroSection() {

const cards = [
  {
    title: "Manufacturing",
    subtitle: "Production Excellence",
    icon: Factory,
    color: "blue",
  },
  {
    title: "Logistics",
    subtitle: "Connected Operations",
    icon: Truck,
    color: "red",
  },
  {
    title: "Retail",
    subtitle: "Omnichannel Commerce",
    icon: Building2,
    color: "blue",
  },
  {
    title: "AI Powered",
    subtitle: "Intelligent Decisions",
    icon: Sparkles,
    color: "red",
  },
];



  return (
   <section className="relative min-h-screen overflow-hidden flex items-center py-28">

      {/* =========================
          Background Image
      ========================== */}

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage:
            "url('/images/industries/industries-hero.png')",
        }}
      />

     
      {/* =========================
            Hero Content
      ========================== */}

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10">

        <div className="min-h-screen flex items-center">

          <div className="max-w-3xl">

            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-3

                px-5
                py-3

                rounded-full

                border
                border-white/15

                bg-white/10
                backdrop-blur-xl
              "
            >
              <Sparkles
                size={18}
                className="text-[#C8102E]"
              />

              <span className="uppercase tracking-[3px] text-white font-medium text-sm">
                Industry Solutions
              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-10 text-5xl md:text-7xl font-black leading-tight">

              <span className="text-white">
                Digital Supply Chain
              </span>

              <span className="block text-[#C8102E]">
                Solutions Built
              </span>

              <span className="block text-white">
                For Every Industry
              </span>

            </h1>

            {/* Divider */}

            <div className="mt-8 w-40 h-[4px] rounded-full bg-gradient-to-r from-[#005F99] via-white to-[#C8102E]" />

            {/* Description */}

            <p
              className="
                mt-10

                max-w-3xl

                text-xl
                md:text-2xl

                leading-relaxed

                text-white/90
              "
            >
              Fortuna empowers organizations to modernize procurement,
              inventory, warehousing, logistics and AI-driven decision
              making through an intelligent digital supply chain platform
              designed for today's dynamic business environment.
            </p>



          </div>

        </div>

      </div>

     {/* =========================
      Floating KPI Cards
========================= */}

<div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:block z-30">

  <div className="space-y-5">

    {cards.map((card) => {

      const Icon = card.icon;

      const isBlue = card.color === "blue";

      return (

        <div
          key={card.title}
          className="
            group

            w-72

            rounded-3xl

            border
            border-white/20

            bg-white/15

            backdrop-blur-3xl

            p-6

            shadow-[0_20px_60px_rgba(0,0,0,0.30)]

            hover:-translate-y-2
            hover:scale-[1.03]

            transition-all
            duration-500

            cursor-pointer
          "
        >

          <div className="flex items-center gap-4">

            <div
              className={`
                relative

                w-16
                h-16

                rounded-2xl

                flex
                items-center
                justify-center

                border

                transition-all
                duration-500

                group-hover:scale-110
                group-hover:rotate-6

                ${
                  isBlue
                    ? `
                      bg-[#005F99]/25
                      border-[#005F99]/40
                      shadow-[0_0_30px_rgba(0,95,153,0.45)]
                      group-hover:bg-[#005F99]
                    `
                    : `
                      bg-[#C8102E]/25
                      border-[#C8102E]/40
                      shadow-[0_0_30px_rgba(200,16,46,0.45)]
                      group-hover:bg-[#C8102E]
                    `
                }
              `}
            >

              <Icon
                size={30}
                className={`
                  transition-all
                  duration-500

                  ${
                    isBlue
                      ? "text-[#45B6FF] group-hover:text-white"
                      : "text-[#FF4D6D] group-hover:text-white"
                  }
                `}
              />

            </div>

            <div>

              <h3
                className={`
                  text-3xl
                  font-bold
                  text-white

                  transition-all
                  duration-500

                  ${
                    isBlue
                      ? "group-hover:text-[#45B6FF]"
                      : "group-hover:text-[#FF4D6D]"
                  }
                `}
              >
                {card.title}
              </h3>

              <p className="text-white/75 mt-1">
                {card.subtitle}
              </p>

            </div>

          </div>

        </div>

      );

    })}

  </div>

</div>
      {/* =========================
            Bottom Statistics
      ========================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0

          border-t
          border-white/10

          bg-black/30
          backdrop-blur-xl

          z-30
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto

            px-6
            py-8

            grid
            grid-cols-2
            md:grid-cols-4

            gap-8
          "
        >

          <div className="text-center">

            <div className="text-4xl font-black text-[#005F99]">
              Manufacturing
            </div>

            <div className="mt-2 text-white/70">
              Industry Solutions
            </div>

          </div>

          <div className="text-center">

            <div className="text-4xl font-black text-[#C8102E]">
              Logistics
            </div>

            <div className="mt-2 text-white/70">
              Distribution Network
            </div>

          </div>

          <div className="text-center">

            <div className="text-4xl font-black text-[#005F99]">
              Retail
            </div>

            <div className="mt-2 text-white/70">
              Consumer Operations
            </div>

          </div>

          <div className="text-center">

            <div className="text-4xl font-black text-[#C8102E]">
              Pharmaceuticals
            </div>

            <div className="mt-2 text-white/70">
              Compliance & Traceability
            </div>

          </div>

        </div>

      </div>

      {/* =========================
          Scroll Indicator
      ========================== */}

      <div
        className="
          absolute
          bottom-32
          left-1/2

          -translate-x-1/2

          hidden
          lg:flex

          flex-col
          items-center

          text-white/70

          animate-bounce

          z-40
        "
      >
<span className="text-sm tracking-[3px] uppercase font-semibold text-[#FFFFFF]">
  Explore Industries
</span>

        <ChevronDown
          size={28}
          className="mt-2"
        />

      </div>

    </section>
  );
}