"use client";
import {
  Factory,
  Truck,
  ShoppingCart,
  HeartPulse,
  Car,
  Warehouse,
  Package,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    title: "Manufacturing",
    description: "Discrete, Process & Industrial Manufacturing",
    image: "/images/industries/grid/manufacturing.png",
    href: "/industries/manufacturing",
    icon: Factory,
    color: "red",
  },
  {
    title: "Logistics & 3PL",
    description: "Transportation, Distribution & Ports",
    image: "/images/industries/grid/logistics.png",
    href: "/industries/logistics",
    icon: Truck,
    color: "blue",
  },
  {
    title: "Retail",
    description: "Omnichannel Commerce & Consumer Experience",
    image: "/images/industries/grid/Fashion&Retail.png",
    href: "/industries/retail",
    icon: ShoppingCart,
    color: "red",
  },
  {
    title: "Healthcare",
    description: "Pharmaceutical & Healthcare Operations",
    image: "/images/industries/grid/pharmahealthcare.png",
    href: "/industries/healthcare",
    icon: HeartPulse,
    color: "blue",
  },
  {
    title: "Automotive",
    description: "Vehicle Manufacturing & Supplier Network",
    image: "/images/industries/grid/automotive.png",
    href: "/industries/automotive",
    icon: Car,
    color: "red",
  },
  {
    title: "Warehousing",
    description: "Warehouse Automation & Inventory",
    image: "/images/industries/grid/warehousing.png",
    href: "/industries/warehousing",
    icon: Warehouse,
    color: "blue",
  },
  {
    title: "Consumer Goods",
    description: "Food & Beverages FMCG Products",
    image: "/images/industries/grid/Food Pocessing.png",
    href: "/industries/consumer-goods",
    icon: Package,
    color: "red",
  },
  {
    title: "Energy & Resources",
    description: "Natrual Energy Processing Industry Oil, Gas & Utilities",
    image: "/images/industries/grid/Energy and resource.png",
    href: "/industries/energy",
    icon: Zap,
    color: "blue",
  },
];

export default function IndustrySolutionsSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* Background Glow */}

      <div className="absolute -top-40 left-0 w-[450px] h-[450px] bg-[#005F99]/5 blur-[170px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#C8102E]/5 blur-[170px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[4px] text-[#C8102E] font-semibold">
            INDUSTRIES WE SERVE
          </span>

          <h2 className="mt-5 text-5xl md:text-6xl font-black leading-tight">
  <span className="text-[#C8102E]">
            Purpose-Built Solutions
            </span>
            <span className="block text-[#005F99]">
              Across Every Industry
            </span>
          </h2>

          <p className="mt-8 text-xl text-slate-600 leading-relaxed">
            Fortuna delivers intelligent supply chain solutions tailored for
            manufacturing, logistics, retail, healthcare and other
            industry-specific operations with AI-driven automation,
            visibility and operational excellence.
          </p>

        </div>

{/* =========================
        Industry Grid
========================= */}

<div className="mt-20 grid md:grid-cols-2 xl:grid-cols-4 gap-8">

  {industries.map((industry, index) => {

    const Icon = industry.icon;

    return (

      <Link
        href={industry.href}
        key={index}
        className="group"
      >

        <div
  className="
    relative
    overflow-visible
    rounded-[30px]
    bg-white

    border
    border-slate-200

    shadow-xl

    hover:-translate-y-4
    hover:shadow-[0_35px_70px_rgba(0,0,0,0.18)]

    transition-all
    duration-500
  "
>

          {/* =========================
                  Image
          ========================== */}

          <div className="relative h-72 overflow-visiable">

            <Image
              src={industry.image}
              alt={industry.title}
              fill
              className="
                object-cover

                transition-all
                duration-700

                group-hover:scale-110
              "
            />

            {/* Overlay */}

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black/80
                via-black/20
                to-transparent
              "
            />

            {/* Small Label */}

            <div
              className="
                absolute
                top-5
                left-5

                px-4
                py-2

                rounded-full

                bg-white/15
                backdrop-blur-xl

                border
                border-white/20

                text-xs
                font-semibold

                tracking-[2px]
                uppercase

                text-white
              "
            >
              Industry Solution
            </div>

            {/* Floating Icon */}

            <div
              className={`
                absolute

                left-6
                -bottom-9

                w-20
                h-20

                rounded-full

                flex
                items-center
                justify-center

                border-[5px]
                border-white

                shadow-[0_20px_40px_rgba(0,0,0,0.25)]

                transition-all
                duration-500

                group-hover:scale-110
                group-hover:rotate-6

                ${
                  industry.color === "red"
                    ? `
                      bg-[#C8102E]
                      group-hover:shadow-[0_0_35px_rgba(200,16,46,0.65)]
                    `
                    : `
                      bg-[#005F99]
                      group-hover:shadow-[0_0_35px_rgba(0,95,153,0.65)]
                    `
                }
              `}
            >

              <Icon
                size={34}
                className="text-white"
              />

            </div>

          </div>

          {/* =========================
                Content
          ========================== */}

          <div className="px-7 pt-14 pb-8">

            <h3
              className="
                text-2xl

                font-bold

                text-slate-900

                transition-all
                duration-500

                group-hover:text-[#C8102E]
              "
            >
              {industry.title}
            </h3>

            <p className="mt-4 text-slate-600 leading-7">

              {industry.description}

            </p>

            {/* Divider */}

            <div className="mt-6 w-16 h-[3px] rounded-full bg-gradient-to-r from-[#005F99] to-[#C8102E]" />

            {/* Button */}

            <div
              className="
                mt-7

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

              Explore Industry

              <ArrowRight
                size={18}
                className="
                  transition-all
                  duration-500

                  group-hover:translate-x-2
                "
              />

            </div>

          </div>

         
        </div>

      </Link>

    );

  })}

</div>

      </div>

    </section>
  );
}